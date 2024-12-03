import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x0d9685D4037580F68D9F77B08971f17E1000bBdc","10":"0xaEdbD08D92ECccaA9A93b1A8D66D1d356e470c78","137":"0x47a65e74dd6b6B5E3243dBb01EDEd9D55ba234Ad","42161":"0x9A74B169798bE874EF1C23b4092e5689969eF45E","43114":"0x5D6e6A0BFB2176AFCc4FB809822D8e009216b245","1313161554":"0x4775b1858f1e417C9609D455C3Ad8751ec01daC4"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_CLONE_FACTORY_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_CLONE_FACTORY_(chainId);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_DODO_APPROVE_PROXY_(chainId);
    }
  }
}

/**
 * fetch _DODO_MINEV3_REGISTRY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_DODO_MINEV3_REGISTRY_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3eab5388', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_DODO_MINEV3_REGISTRY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_DODO_MINEV3_REGISTRY_(chainId);
    }
  }
}

/**
 * fetch _MINEV3_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_MINEV3_TEMPLATE_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x67505083', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_MINEV3_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_MINEV3_TEMPLATE_(chainId);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_NEW_OWNER_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_NEW_OWNER_(chainId);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3ProxyWithoutPlatform_OWNER_(chainId: number) {
  const __to = getDODOMineV3ProxyWithoutPlatformContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3ProxyWithoutPlatform_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [chainId !== undefined && chainId !== null], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOMineV3ProxyWithoutPlatform_OWNER_(chainId);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOMineV3
 * @param {string} stakeToken - address
 * @param {boolean} isLpToken - bool
 * @param {Array<string>} rewardTokens - address[]
 * @param {Array<string | number>} rewardPerBlock - uint256[]
 * @param {Array<string | number>} startBlock - uint256[]
 * @param {Array<string | number>} endBlock - uint256[]
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformCreateDODOMineV3(stakeToken: string, isLpToken: boolean, rewardTokens: Array<string>, rewardPerBlock: Array<string | number>, startBlock: Array<string | number>, endBlock: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","address[]","uint256[]","uint256[]","uint256[]"], [stakeToken,isLpToken,rewardTokens,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0xb9b1135c', __encodeData]));
}

/**
 * encode depositRewardToMine
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformDepositRewardToMine(mineV3: string, rewardToken: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0xe17ff361', __encodeData]));
}

/**
 * encode depositRewardToVault
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformDepositRewardToVault(mineV3: string, rewardToken: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0x9cb297cd', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateMineV3Template
 * @param {string} _newMineV3Template - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyWithoutPlatformUpdateMineV3Template(_newMineV3Template: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMineV3Template]);
  return hexlify(concat(['0x59e1100b', __encodeData]));
}