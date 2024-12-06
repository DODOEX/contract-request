import { JsonRpcProvider, FetchRequest, Network } from 'ethers';
import type {
  Networkish,
  JsonRpcApiProviderOptions,
  JsonRpcPayload,
} from 'ethers';
import { defaultAbiCoder, concat } from './utils';
import { PublicProvider, requestPublicProvider } from './PublicProvider';

type Params = [
  {
    to: string;
    data: string;
  },
  string,
];

function notSupportMultiCallRequest({
  method,
  params,
}: {
  method: string;
  params: any;
}) {
  return (
    method !== 'eth_call' ||
    params.length !== 2 ||
    typeof params[0] !== 'object' ||
    !params[0].to ||
    !params[0].data ||
    typeof params[1] !== 'string'
  );
}

async function generateMultiCallDataByParams(
  multiCallAddress: string,
  params: Params[],
) {
  let secondaryParam = '';
  const calls = params.map((item) => {
    const [param] = item;
    secondaryParam = item[1];
    return [param.to, param.data];
  });

  const encodedParams = defaultAbiCoder.encode(
    ['tuple(address, bytes)[]'],
    [calls],
  );
  const encoded = concat(['0x252dba42', encodedParams]);
  return [
    {
      to: multiCallAddress,
      data: encoded,
    },
    secondaryParam,
  ];
}

export class BatchProvider extends JsonRpcProvider {
  _nextId: number;
  _pendingBatchAggregator: NodeJS.Timer | null = null;
  _pendingBatch: Array<{
    request: {
      method: string;
      params: Params;
      id: number;
      jsonrpc: '2.0';
    };
    resolve: (result: any) => void;
    reject: (error: Error) => void;
  }> | null = null;
  _provider: PublicProvider | null = null;
  private _batchRpcErrorCount = 0;
  multiCallAddress: string = '';
  isBatchProvider = true;
  isSupportBatchRpc: boolean | undefined;

  constructor(
    url?: string | FetchRequest,
    network?: Networkish,
    options?: JsonRpcApiProviderOptions,
  ) {
    if (url == null) {
      url = 'http://localhost:8545';
    }
    const chainId = typeof network === 'object' ? network.chainId : network;
    let staticNetwork: Network | true = true;
    if (chainId) {
      if (!chainId) throw new Error('chainId is required');
      staticNetwork = new Network(
        typeof network === 'object' ? (network.name ?? '') : '',
        chainId,
      );
    }
    super(url, network, {
      staticNetwork,
      ...options,
    });

    this._nextId = 1;
  }

  setProvider(provider: PublicProvider | null) {
    this.isSupportBatchRpc = undefined;
    this._provider = provider;
  }

  setMultiCallAddress(address: string) {
    this.multiCallAddress = address;
  }

  async send(method: string, params: Params): Promise<any> {
    return this.batchSend(method, params);
  }

  // https://github.com/ethers-io/ethers.js/blob/v5/packages/providers/src.ts/json-rpc-batch-provider.ts
  async batchSend(method: string, params: Params): Promise<any> {
    const request = {
      method: method,
      params: params,
      id: this._nextId++,
      jsonrpc: '2.0',
    };

    const inflightRequest: any = { request, resolve: null, reject: null };

    const promise = new Promise((resolve, reject) => {
      inflightRequest.resolve = resolve;
      inflightRequest.reject = reject;
    });

    if (!this._pendingBatch) {
      this._pendingBatch = [];
    }

    if (!this.isSupportBatchRpc && notSupportMultiCallRequest(request)) {
      if (this._provider) {
        return requestPublicProvider(this._provider, request);
      }
      return super.send(method, params);
    }

    this._pendingBatch.push(inflightRequest);

    const batchProcess = async () => {
      // Get teh current batch and clear it, so new requests
      // go into the next batch
      const batch = this._pendingBatch || [];
      this._pendingBatch = null;
      this._pendingBatchAggregator = null;

      if (this._provider && !this._provider.batchRequest) {
        this.isSupportBatchRpc = false;
      }
      if (this.isSupportBatchRpc !== false) {
        try {
          await this.batchSendRpc(batch);
          this.isSupportBatchRpc = true;
        } catch (error) {
          await this.batchSendMultiCall(batch);
        }
      } else {
        await this.batchSendMultiCall(batch);
      }
    };

    const maxCallCount = this._getOption('batchMaxCount') ?? 800;
    if (!this._pendingBatchAggregator) {
      // Schedule batch for next event loop + short duration
      const stallTime =
        maxCallCount === 1 ? 0 : this._getOption('batchStallTime');
      this._pendingBatchAggregator = setTimeout(batchProcess, stallTime ?? 10);
    } else if (this._pendingBatch.length > maxCallCount) {
      // Too many, execute immediately
      clearTimeout(Number(this._pendingBatchAggregator));
      batchProcess();
    }

    return promise;
  }
  async batchSendMultiCall(
    batchAll: NonNullable<typeof this._pendingBatch>,
  ): Promise<any> {
    if (!this.multiCallAddress) {
      throw new Error('multiCallAddress is required');
    }

    const notSupportBatch = [] as typeof batchAll;
    const batch = batchAll.filter((inflight) => {
      if (notSupportMultiCallRequest(inflight.request)) {
        notSupportBatch.push(inflight);
      } else {
        return true;
      }
    });
    if (notSupportBatch.length) {
      await Promise.all(
        notSupportBatch.map(async (inflight) => {
          try {
            if (this._provider) {
              const result = await requestPublicProvider(
                this._provider,
                request,
              );
              inflight.resolve(result);
            }
            const result = await super.send(
              inflight.request.method,
              inflight.request.params,
            );
            inflight.resolve(result);
          } catch (error) {
            inflight.reject(error as Error);
          }
        }),
      );
    }

    const multiParams = await generateMultiCallDataByParams(
      this.multiCallAddress,
      batch.map((inflight) => inflight.request.params),
    );

    const request = {
      method: 'eth_call',
      params: multiParams,
      id: this._nextId++,
      jsonrpc: '2.0',
    };

    this.emit('debug', {
      action: 'requestBatch',
      request: [...batch.map((inflight) => inflight.request)],
      provider: this,
      id: request.id,
    });

    const batchCallSuccessProcess = (response: {
      id: number;
      jsonrpc: string;
      result?: string;
      error?: any;
    }) => {
      if (response.error || !response.result) {
        batch.forEach((inflightRequest) => {
          try {
            const error = new Error(response.error.message);
            (<any>error).code = response.error.code;
            (<any>error).data = response.error.data;
            inflightRequest.reject(error);
          } catch (error) {
            inflightRequest.reject(response.error);
          }
        });
        this.emit('debug', {
          action: 'responseBatch.error',
          request: request,
          response: response,
          provider: this,
          id: request.id,
        });
      } else {
        const [blkNum, decodeList, dataValid] = defaultAbiCoder.decode(
          ['uint256', 'bytes[]', 'bool[]'],
          response.result,
        );
        const blockNumber = parseInt(blkNum);
        this.emit('block', blockNumber);
        if (batch.length !== decodeList.length) {
          batch.forEach((inflightRequest) => {
            inflightRequest.reject(new Error('Unexpected length mismatch'));
          });
          return;
        }
        batch.forEach((inflightRequest, index) => {
          const payload = decodeList[index];
          const valid = dataValid[index];
          if (valid === false) {
            inflightRequest.reject(
              new Error('batchSend error, dataValid is false'),
            );
            return;
          }
          inflightRequest.resolve(payload);
        });
        this.emit('debug', {
          action: 'responseBatch',
          request: request,
          response: response,
          provider: this,
          decodeList,
          dataValid,
          id: request.id,
        });
      }
    };

    const batchCallFailedProcess = (error: any) => {
      this.emit('debug', {
        action: 'responseBatch.error',
        error: error,
        request: request,
        provider: this,
        id: request.id,
      });

      batch.forEach((inflightRequest) => {
        inflightRequest.reject(error);
      });
    };

    try {
      if (this._provider) {
        const providerResult = await requestPublicProvider(
          this._provider,
          request,
        );
        batchCallSuccessProcess({
          id: request.id,
          jsonrpc: request.jsonrpc,
          result: providerResult,
        });
        return;
      }
      const result = await this.batchSendRequest(
        request.method,
        request.params,
      );
      batchCallSuccessProcess({
        id: request.id,
        jsonrpc: request.jsonrpc,
        result: result,
      });
      return;
    } catch (error) {
      batchCallFailedProcess(error);
    }
  }
  async batchSendRpc(
    batch: NonNullable<typeof this._pendingBatch>,
  ): Promise<any> {
    if (!this.multiCallAddress) {
      throw new Error('multiCallAddress is required');
    }
    const requests = batch.map((inflight) => ({
      method: inflight.request.method,
      params: inflight.request.params,
      id: this._nextId++,
      jsonrpc: '2.0' as const,
    }));

    this.emit('debug', {
      action: 'requestBatch',
      requests,
      provider: this,
    });

    const batchCallSuccessProcess = (
      response:
        | Array<{
            id?: number;
            jsonrpc?: string;
            result?: string;
            error?: any;
          }>
        | {
            id?: null;
            jsonrpc?: '2.0';
            error?: any;
          },
    ) => {
      this.emit('debug', {
        action: 'responseBatch',
        requests,
        response,
        provider: this,
      });
      if (!Array.isArray(response)) {
        this._batchRpcErrorCount++;
        if (this._batchRpcErrorCount > 4) {
          this.isSupportBatchRpc = false;
        }
        if (response.error) {
          const error = new Error(response.error.message);
          (<any>error).code = response.error.code;
          (<any>error).data = response.error.data;
          throw error;
        }
        throw new Error('response is not valid.');
      }
      batch.forEach((inflightRequest, index) => {
        const payload = response[index];
        if (payload.error) {
          const error = new Error(payload.error.message);
          (<any>error).code = payload.error.code;
          (<any>error).data = payload.error.data;
          inflightRequest.reject(error);
        } else {
          this._batchRpcErrorCount = 0;
          inflightRequest.resolve(payload.result);
        }
      });
    };

    try {
      if (this._provider?.batchRequest) {
        const providerResult = await this._provider.batchRequest(requests);
        batchCallSuccessProcess(providerResult);
        return;
      }
      const result = await this.connectionSendRequest(requests);
      batchCallSuccessProcess(result);
      return;
    } catch (error) {
      this.emit('debug', {
        action: 'responseBatch.error',
        error: error,
        requests,
        provider: this,
      });
      throw error;
    }
  }

  async batchSendRequest(method: string, params: any): Promise<string> {
    const request = {
      method,
      params,
      id: this._nextId,
      jsonrpc: '2.0',
    };

    const req = this._getConnection();
    req.body = request;
    const resp = await req.send();
    const data = resp.bodyJson;
    if (data.error) {
      throw new Error(data.error);
    }
    return data.result;
  }

  async connectionSendRequest(payload: JsonRpcPayload | Array<JsonRpcPayload>) {
    const request = this._getConnection();
    request.body = JSON.stringify(payload);
    request.setHeader('content-type', 'application/json');
    const response = await request.send();
    response.assertOk();

    const resp = response.bodyJson;
    return resp;
  }
}
