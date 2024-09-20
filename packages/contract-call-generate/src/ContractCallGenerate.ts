import { ContractRequests } from '@dodoex/contract-request';
import type { JsonFragment } from '@dodoex/contract-request';
import { fetchABI, supportFetchABIChainIds } from './ABI';
import path from 'path';
import fs from 'fs';
import { ContractCode, ContractCodeParameters } from './ContractCode';
import fsExtra from 'fs-extra';

interface contractAddressDataValue {
  [name: string]: string;
}
export interface ContractCodeGenerateParameters {
  etherscanAPIkey: string;
  contractAddressData: {
    [chainId: number]: contractAddressDataValue;
  };
  contractRequests: ContractRequests;
  /** default: .cache */
  cacheDirectory?: string;
  /** default: 5 */
  fetchSecondLimit?: number;
}

interface ContractInfo {
  key: string;
  address: string;
  fragments: JsonFragment[];
}

export class ContractCallGenerate {
  private etherscanAPIkey: string;
  private intervalMillisecond: number;
  /** Record the last request time to skip the api time limit */
  private lastFetchContractInfoTime = 0;
  private cacheDirectory: string;
  protected contractAddressData: ContractCodeGenerateParameters['contractAddressData'];
  protected contractInfoMap: Map<string, ContractInfo> = new Map();
  protected contractRequests: ContractRequests;

  constructor(init: ContractCodeGenerateParameters) {
    this.etherscanAPIkey = init.etherscanAPIkey;
    this.contractAddressData = init.contractAddressData;
    this.contractRequests = init.contractRequests;
    this.intervalMillisecond = (60 / (init.fetchSecondLimit ?? 5) + 2) * 1000;
    this.cacheDirectory = init.cacheDirectory ?? './.cache';
  }

  async generate(
    directory: string,
    contractCodeParameters?: Partial<ContractCodeParameters>,
  ) {
    if (!this.contractInfoMap.size) {
      await this.getAllContractInfo();
    }
    for (const [key, contractInfo] of this.contractInfoMap.entries()) {
      const contractAddressObject =
        {} as ContractCodeParameters['contractAddressObject'];
      for (const [chainId, item] of Object.entries(this.contractAddressData)) {
        const value = item[key];
        if (value) {
          contractAddressObject[Number(chainId)] = value;
        }
      }

      const name = key.charAt(0).toUpperCase() + key.slice(1);
      const contractCode = new ContractCode(contractInfo.fragments, {
        contractAddressObject,
        format: {
          ts: true,
          readonlyFCNamePrefix: `fetch${name}`,
          encodeFCNamePrefix: `encode${name}`,
        },
        requestCodeDependCode: `import { contractRequests } from '../contractRequests';`,
        ...contractCodeParameters,
      });
      const codeStr = contractCode.getCode();
      fsExtra.outputFileSync(path.join(directory, `${key}.ts`), codeStr);
    }
  }

  async getAllContractInfo() {
    let needChainId = 1;
    let needABIContractAddress = undefined as
      | contractAddressDataValue
      | undefined;
    supportFetchABIChainIds.some((chainId) => {
      const currentList = this.contractAddressData[chainId];
      if (currentList) {
        needChainId = chainId;
        needABIContractAddress = currentList;
        return true;
      }
      return false;
    });
    if (!needABIContractAddress) {
      throw new Error(
        `Requires contract data whose chainId is one of ${supportFetchABIChainIds.join(', ')}`,
      );
    }
    for (const [key, value] of Object.entries(needABIContractAddress)) {
      await this.getContractInfo(needChainId, value, key);
    }
  }

  async getContractInfo(chainId: number, address: string, key: string) {
    // get cache
    const cacheDirectory = path.join(path.resolve(), this.cacheDirectory);
    const cachePath = path.join(cacheDirectory, 'contract-info', `${key}.json`);
    try {
      const data = fs.readFileSync(cachePath, 'utf8');
      if (data) {
        const result = JSON.parse(data);
        this.contractInfoMap.set(key, {
          key,
          address,
          fragments: result,
        });
        return result;
      }
    } catch (err: any) {
      if (err.code === 'ENOENT') {
      } else {
        console.error(err);
      }
    }

    const currentTime = Date.now();
    if (this.lastFetchContractInfoTime) {
      const needWaitMillisecond =
        this.lastFetchContractInfoTime + this.intervalMillisecond - currentTime;
      if (needWaitMillisecond > 0) {
        return new Promise((resolve) => {
          console.log(`Wait ${needWaitMillisecond / 1000} seconds...`);
          setTimeout(() => {
            resolve(this.getContractInfo(chainId, address, key));
          }, needWaitMillisecond);
        });
      }
    }

    this.lastFetchContractInfoTime = currentTime;
    const result = await fetchABI(this.etherscanAPIkey, address, chainId);
    this.contractInfoMap.set(key, {
      key,
      address,
      fragments: result,
    });
    try {
      fsExtra.outputFileSync(cachePath, JSON.stringify(result));
    } catch (err: any) {
      console.error(err);
    }
    return result;
  }
}
