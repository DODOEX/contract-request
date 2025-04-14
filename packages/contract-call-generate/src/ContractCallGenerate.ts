import type { JsonFragment, ContractRequests } from '@dodoex/contract-request';
import { fetchABI, supportFetchABIChainIds } from './ABI';
import path from 'path';
import fs from 'fs';
import {
  ContractCode,
  ContractCodeConfig,
  ContractCodeParameters,
} from './ContractCode';
import fsExtra from 'fs-extra';

interface contractAddressDataValue {
  [name: string]: string;
}
export interface ContractCodeGenerateParameters {
  etherscanAPIkey: string;
  contractAddressData: {
    [chainId: number]: contractAddressDataValue;
  };
  dynamicContractAddressData: {
    [chainId: number]: contractAddressDataValue;
  };
  contractRequests: ContractRequests;
  /** default: .cache */
  cacheDirectory?: string;
  /** default: 5 */
  fetchSecondLimit?: number;
  codeConfig?: Partial<ContractCodeConfig>;
  needKeys?: Array<string>;
}

interface ContractInfo {
  key: string;
  isDynamic: boolean;
  fragments: JsonFragment[];
}

export class ContractCallGenerate {
  private etherscanAPIkey: string;
  private intervalMillisecond: number;
  /** Record the last request time to skip the api time limit */
  private lastFetchContractInfoTime = 0;
  private cacheDirectory: string;
  protected contractAddressData: ContractCodeGenerateParameters['contractAddressData'];
  protected dynamicContractAddressData: ContractCodeGenerateParameters['dynamicContractAddressData'];
  protected contractInfoMap: Map<string, ContractInfo> = new Map();
  protected contractRequests: ContractRequests;
  protected needKeys: Array<string>;
  codeConfig: ContractCodeGenerateParameters['codeConfig'];

  constructor(init: ContractCodeGenerateParameters) {
    this.etherscanAPIkey = init.etherscanAPIkey;
    this.contractAddressData = init.contractAddressData;
    this.dynamicContractAddressData = init.dynamicContractAddressData;
    this.contractRequests = init.contractRequests;
    this.intervalMillisecond = (60 / (init.fetchSecondLimit ?? 5) + 2) * 1000;
    this.cacheDirectory = init.cacheDirectory ?? './.cache';
    this.codeConfig = init.codeConfig;
    this.needKeys = init.needKeys ?? [];
  }

  async generate(
    directory: string,
    contractCodeParameters?: Partial<ContractCodeParameters>,
  ) {
    if (!this.contractInfoMap.size) {
      await this.getAllContractInfo();
    }
    for (const [key, contractInfo] of this.contractInfoMap.entries()) {
      const contractAddressObject = {} as NonNullable<
        ContractCodeParameters['contractAddressObject']
      >;
      for (const [chainId, item] of Object.entries(this.contractAddressData)) {
        const value = item[key];
        if (value) {
          contractAddressObject[Number(chainId)] = value;
        }
      }

      const name = key.charAt(0).toUpperCase() + key.slice(1);
      const contractCode = new ContractCode(key, contractInfo.fragments, {
        contractAddressObject: contractInfo.isDynamic
          ? undefined
          : contractAddressObject,
        format: {
          ts: true,
        },
        config: {
          readonlyFCNamePrefix: `fetch${name}`,
          encodeFCNamePrefix: `encode${name}`,
          ...this.codeConfig,
        },
        requestCodeDependCode: `import { contractRequests } from '../contractRequests';`,
        ...contractCodeParameters,
      });
      const codeStr = contractCode.getCode();
      fsExtra.outputFileSync(path.join(directory, `${key}.ts`), codeStr);
    }
  }

  async getAllContractInfo() {
    await this.getAllContractInfoByData(this.contractAddressData, false);
    await this.getAllContractInfoByData(this.dynamicContractAddressData, true);
  }

  async getAllContractInfoByData(
    contractAddressData: ContractCodeGenerateParameters['contractAddressData'],
    isDynamic: boolean,
  ) {
    if (!contractAddressData || !Object.keys(contractAddressData).length)
      return;
    let needChainId = 1;
    let needABIContractAddress = undefined as
      | contractAddressDataValue
      | undefined;
    supportFetchABIChainIds.some((chainId) => {
      const currentList = contractAddressData?.[chainId];
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
      await this.getContractInfo(needChainId, value, key, isDynamic);
    }
    const supportChainIdsLen = supportFetchABIChainIds.length;
    // await this.getContractInfo(
    //   53456,
    //   '0x79a0A160D3Ec0b8402f4F8d657B9a7e0a289663e',
    //   'DFTManager',
    //   true,
    // );
    for (let i = 0; i < supportChainIdsLen; i++) {
      const chainId = supportFetchABIChainIds[i];
      const currentList = contractAddressData?.[chainId];
      if (currentList) {
        for (const [key, value] of Object.entries(currentList)) {
          if (!needABIContractAddress[key]) {
            await this.getContractInfo(chainId, value, key, isDynamic);
          }
        }
      }
    }

    const needKeysLen = this.needKeys.length;
    for (let i = 0; i < needKeysLen; i++) {
      const key = this.needKeys[i];
      if (!needABIContractAddress?.[key]) {
        for (const [chainId, data] of Object.entries(contractAddressData)) {
          if (data[key]) {
            await this.getContractInfo(
              Number(chainId),
              data[key],
              key,
              isDynamic,
            );
          }
        }
      }
    }
  }

  async getContractInfo(
    chainId: number,
    address: string,
    key: string,
    isDynamic: boolean,
  ) {
    // get cache
    const cacheDirectory = path.join(path.resolve(), this.cacheDirectory);
    const cachePath = path.join(cacheDirectory, 'contract-info', `${key}.json`);
    try {
      const data = fs.readFileSync(cachePath, 'utf8');
      if (data) {
        const result = JSON.parse(data);
        this.contractInfoMap.set(key, {
          key,
          fragments: result,
          isDynamic,
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
            resolve(this.getContractInfo(chainId, address, key, isDynamic));
          }, needWaitMillisecond);
        });
      }
    }

    this.lastFetchContractInfoTime = currentTime;
    const result = await fetchABI(this.etherscanAPIkey, address, chainId);
    this.contractInfoMap.set(key, {
      key,
      fragments: result,
      isDynamic,
    });
    try {
      fsExtra.outputFileSync(cachePath, JSON.stringify(result));
    } catch (err: any) {
      console.error(err);
    }
    return result;
  }
}
