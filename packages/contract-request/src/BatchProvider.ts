import { deepCopy } from '@ethersproject/properties';
import { fetchJson } from '@ethersproject/web';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { defaultAbiCoder } from '@ethersproject/abi';

type Params = [
  {
    to: string;
    data: string;
  },
  string,
];

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

  const encoded = defaultAbiCoder.encode(['tuple[]'], [calls]);
  return [
    {
      to: multiCallAddress,
      data: encoded,
    },
    secondaryParam,
  ];
}

const time = 10;
const maxCallCount = 800;

export class BatchProvider extends StaticJsonRpcProvider {
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
  _provider: StaticJsonRpcProvider | null = null;
  multiCallAddress: string = '';

  setProvider(provider: StaticJsonRpcProvider | null) {
    this._provider = provider;
  }

  setMultiCallAddress(address: string) {
    this.multiCallAddress = address;
  }

  // https://github.com/ethers-io/ethers.js/blob/v5/packages/providers/src.ts/json-rpc-batch-provider.ts
  async send(method: string, params: Params): Promise<any> {
    if (
      method !== 'eth_call' ||
      params.length !== 2 ||
      typeof params[0] !== 'object' ||
      !params[0].to ||
      !params[0].data ||
      typeof params[1] !== 'string'
    ) {
      if (this._provider) {
        return this._provider.send(method, params);
      }
      return super.send(method, params);
    }

    const request = {
      method: method,
      params: params,
      // id: this._nextId++,
      // jsonrpc: '2.0',
    };

    const inflightRequest: any = { request, resolve: null, reject: null };

    const promise = new Promise((resolve, reject) => {
      inflightRequest.resolve = resolve;
      inflightRequest.reject = reject;
    });

    if (!this._pendingBatch) {
      this._pendingBatch = [];
    }

    this._pendingBatch.push(inflightRequest);

    const batchProcess = async () => {
      // Get teh current batch and clear it, so new requests
      // go into the next batch
      const batch = this._pendingBatch || [];
      this._pendingBatch = null;
      this._pendingBatchAggregator = null;

      if (!this.multiCallAddress) {
        throw new Error('multiCallAddress is required');
      }
      const multiParams = await generateMultiCallDataByParams(
        this.multiCallAddress,
        batch.map((inflight) => inflight.request.params),
      );

      const request = {
        method: method,
        params: multiParams,
        id: this._nextId++,
        jsonrpc: '2.0',
      };

      this.emit('debug', {
        action: 'requestBatch',
        request: deepCopy(batch.map((inflight) => inflight.request)),
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
          const [blkNum, decodeList] = defaultAbiCoder.decode(
            ['uint256', 'bytes[]'],
            response.result,
          );
          const blockNumber = blkNum.toNumber();
          this._setFastBlockNumber(blockNumber);
          this.emit('blockNumberChanged', blockNumber);
          if (batch.length !== decodeList.length) {
            inflightRequest.reject('Unexpected length mismatch');
            return;
          }
          batch.forEach((inflightRequest, index) => {
            const payload = decodeList[index];
            inflightRequest.resolve(payload);
          });
          this.emit('debug', {
            action: 'responseBatch',
            request: request,
            response: response,
            provider: this,
            decodeList,
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

      if (this._provider) {
        try {
          const result = await this._provider.send(
            request.method,
            request.params,
          );
          batchCallSuccessProcess({
            id: request.id,
            jsonrpc: request.jsonrpc,
            result: result,
          });
        } catch (error) {
          batchCallFailedProcess(error);
        }
        return;
      }

      console.log(this.connection);
      return fetchJson(this.connection, JSON.stringify(request)).then(
        batchCallSuccessProcess,
        batchCallFailedProcess,
      );
    };

    if (!this._pendingBatchAggregator) {
      // Schedule batch for next event loop + short duration
      this._pendingBatchAggregator = setTimeout(batchProcess, time);
    } else if (this._pendingBatch.length > maxCallCount) {
      // Too many, execute immediately
      clearTimeout(Number(this._pendingBatchAggregator));
      batchProcess();
    }

    return promise;
  }
}
