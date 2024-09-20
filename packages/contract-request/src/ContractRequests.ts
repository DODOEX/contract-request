import { JsonRpcProvider, Network } from 'ethers';
import type { ParamType, Result } from 'ethers';
import { BatchProvider } from './BatchProvider';
import { defaultAbiCoder } from './utils';

export interface ContractRequestsConfig {
  debugProvider?: boolean;
  rpc?: {
    [chainId: number]: string;
  };
  /**
   * If the multiCallAddress of chainId is not specified, batchProvider will not be called
   */
  multiCallAddressList?: {
    [chainId: number]: string;
  };
  getProvider?: (chainId: number) => JsonRpcProvider | null;
}

export default class ContractRequests {
  private debugProvider?: boolean;
  private rpc?: ContractRequestsConfig['rpc'];
  private getConfigProvider?: ContractRequestsConfig['getProvider'];
  private staticJsonRpcProviderMap: Map<number, JsonRpcProvider>;
  private batchStaticJsonRpcProviderMap: Map<number, BatchProvider>;
  /** Used to maintain different batches of requests */
  private subContractRequestsList: Array<ContractRequests> = [];
  private multiCallAddressList?: ContractRequestsConfig['multiCallAddressList'];
  constructor(config?: ContractRequestsConfig) {
    this.debugProvider = config?.debugProvider;
    this.rpc = config?.rpc;
    this.multiCallAddressList = config?.multiCallAddressList;
    this.getConfigProvider = config?.getProvider;
    this.staticJsonRpcProviderMap = new Map();
    this.batchStaticJsonRpcProviderMap = new Map();
  }

  setRpc(rpc: ContractRequestsConfig['rpc']) {
    this.rpc = rpc;
    this.subContractRequestsList.forEach((son) => {
      son.setRpc(rpc);
    });
  }

  setGetConfigProvider(getProvider: ContractRequestsConfig['getProvider']) {
    this.getConfigProvider = getProvider;
    this.subContractRequestsList.forEach((son) => {
      son.setGetConfigProvider(getProvider);
    });
    // update cache
    for (const key in this.batchStaticJsonRpcProviderMap) {
      const chainId = Number(key);
      const provider = getProvider ? getProvider(chainId) : null;
      this.batchStaticJsonRpcProviderMap.get(chainId)?.setProvider(provider);
    }
  }

  getProvider(chainId: number) {
    const configProvider = this.getConfigProvider?.(chainId);
    if (configProvider) {
      return configProvider;
    }

    const rpcUrl = this.rpc?.[chainId];
    if (!rpcUrl) {
      throw new Error(`ChainId ${chainId} not found`);
    }
    if (this.staticJsonRpcProviderMap.has(chainId)) {
      return this.staticJsonRpcProviderMap.get(chainId) as JsonRpcProvider;
    }
    const result = new JsonRpcProvider(rpcUrl, chainId, {
      staticNetwork: new Network('', chainId),
    });
    if (this.debugProvider) {
      result.on('debug', console.log);
    }
    this.staticJsonRpcProviderMap.set(chainId, result);
    return result;
  }

  getBatchProvider(chainId: number) {
    const configProvider = this.getConfigProvider?.(chainId);
    const rpcUrl = this.rpc?.[chainId];
    if (!rpcUrl && !configProvider) {
      throw new Error(`ChainId ${chainId} not found`);
    }
    if (this.staticJsonRpcProviderMap.has(chainId)) {
      return this.staticJsonRpcProviderMap.get(chainId) as JsonRpcProvider;
    }
    const result = new BatchProvider(rpcUrl, chainId);
    const multiCallAddress = this.multiCallAddressList?.[chainId];
    if (!multiCallAddress) {
      return this.getProvider(chainId);
    }
    result.setMultiCallAddress(multiCallAddress);
    result.setProvider(configProvider || null);
    if (this.debugProvider) {
      result.on('debug', console.log);
    }
    this.staticJsonRpcProviderMap.set(chainId, result);
    return result;
  }

  /**
   * Create ContractRequests of the same configuration.
   * Updating the configuration of the current ContractRequests will also update the created ContractRequests.
   * Mainly used for different batches of requests
   */
  createContractRequests() {
    const result = new ContractRequests({
      rpc: this.rpc,
      getProvider: this.getConfigProvider,
      debugProvider: this.debugProvider,
    });
    this.subContractRequestsList.push(result);
    return result;
  }

  async call<T = Result>(
    chainId: number,
    to: string,
    data: string,
    outputTypes: ReadonlyArray<string | ParamType>,
  ) {
    const provider = this.getProvider(chainId);
    const callData = await provider.call({
      to,
      data,
    });
    const result = defaultAbiCoder.decode(outputTypes, callData);
    if (result?.length === 1) {
      return result[0] as T;
    }
    return result as T;
  }

  /**
   * Multiple requests within a short period of time will be packaged for batch processing.
   */
  async batchCall<T = Result>(
    chainId: number,
    to: string,
    data: string,
    outputTypes: ReadonlyArray<string | ParamType>,
  ) {
    const provider = await this.getBatchProvider(chainId);
    const callData = await provider.call({
      to,
      data,
    });
    const result = defaultAbiCoder.decode(outputTypes, callData);
    if (result?.length === 1) {
      return result[0] as T;
    }
    return result as T;
  }

  async getBlockNumber(chainId: number) {
    const provider = this.getBatchProvider(chainId);
    const blockNumber = await provider.getBlockNumber();
    provider.emit('blockNumberChanged', blockNumber);
    return blockNumber;
  }

  async getETHBalance(chainId: number, account: string) {
    const provider = this.getProvider(chainId);
    const balance = await provider.getBalance(account);
    return balance;
  }
}
