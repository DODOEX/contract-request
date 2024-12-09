import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV2FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x37f4fd6791B3Fe18FAba2c9e5916bCa4Df5D68F3","10":"0xA36b345d087C14161D0B3fE1b96fD1CC551CE0C9","196":"0xb770C37F3A9eC6f25b791D9c791aDE09B0fb1AB8","1030":"0xc7d7CC1e9f5E823887980c9C51F9c418ee3A3e28","2818":"0x5e8807fd1C80F7A43362CeBEFcB2Becedfc731Dc","5000":"0x6B9577b87666af89bd0e144b9b64e8Ed166E303d","8453":"0xFD2b7994f91c08aAa5e013E899334A2DBb500DF1","10169":"0x46AF6b152F2cb02a3cFcc74014C2617BC4F6cD5C","42161":"0x5a2E2278A0fACcf224cEd1ce809eC4e4b1708759","47763":"0xB4c33737794E46c62f76Bf7eBe79DcDC8319C11C","48900":"0x03cd2F7D623b1B9c461bf93eBB3CEc47c2124985","59144":"0xFD2b7994f91c08aAa5e013E899334A2DBb500DF1","80084":"0x680829027709E2ef95D079aC97DDF5feAb82D248","98865":"0x3Cdf6B62D042179FAa21745b074a688BB4979FB7","167000":"0x5e8807fd1C80F7A43362CeBEFcB2Becedfc731Dc","200901":"0x69a730Fb2724391F875c48CB8950519bc8Fb7b12","534352":"0xAE1E7e4c5743321d2a8ceeD179264998a56CF1d9","543210":"0x556f9b7C69Ca2d596EFCEf766d892e88F3E10108","11155111":"0x49186E32fEd50fd6B5604A2618c7B0b03Cd41414"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _MINEV2_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_MINEV2_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x121a5431', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_MINEV2_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_MINEV2_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _MINE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_MINE_REGISTRY_(chainId: number, __input1: string): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x468c8d23', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_MINE_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_MINE_REGISTRY_(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _STAKE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_STAKE_REGISTRY_(chainId: number, __input1: string): Promise<string> {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x283e4275', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV2Factory_STAKE_REGISTRY_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOMineV2Factory_STAKE_REGISTRY_(chainId as number,__input1 as string);
    }
  }
}

/**
 * encode addByAdmin
 * @param {string} mine - address
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryAddByAdmin(mine: string, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [mine,stakeToken]);
  return hexlify(concat(['0xe9b1660b', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOMineV2
 * @param {string} stakeToken - address
 * @param {Array<string>} rewardTokens - address[]
 * @param {Array<string | number>} rewardPerBlock - uint256[]
 * @param {Array<string | number>} startBlock - uint256[]
 * @param {Array<string | number>} endBlock - uint256[]
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryCreateDODOMineV2(stakeToken: string, rewardTokens: Array<string>, rewardPerBlock: Array<string | number>, startBlock: Array<string | number>, endBlock: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["address","address[]","uint256[]","uint256[]","uint256[]"], [stakeToken,rewardTokens,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0x61175cd2', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeByAdmin
 * @param {string} mine - address
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryRemoveByAdmin(mine: string, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [mine,stakeToken]);
  return hexlify(concat(['0x6defeb31', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDefaultMaintainer
 * @param {string} _newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryUpdateDefaultMaintainer(_newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMaintainer]);
  return hexlify(concat(['0x9e988ee3', __encodeData]));
}

/**
 * encode updateMineV2Template
 * @param {string} _newMineV2Template - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryUpdateMineV2Template(_newMineV2Template: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMineV2Template]);
  return hexlify(concat(['0x30c1cad8', __encodeData]));
}