import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOIncentiveContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x989DcAA95801C527C5B73AA65d3962dF9aCe1b0C","56":"0x4EE6398898F7FC3e648b3f6bA458310ac29cD352"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOIncentive_DODO_PROXY_(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe54c8033', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOIncentive_DODO_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentive_DODO_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_TOKEN_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOIncentive_DODO_TOKEN_(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x34cf1332', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOIncentive_DODO_TOKEN_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentive_DODO_TOKEN_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOIncentive_NEW_OWNER_(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOIncentive_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentive_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOIncentive_OWNER_(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOIncentive_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentive_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch boosts
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOIncentiveBoosts(chainId: number, __input1: string) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xfdabc986', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOIncentiveBoostsQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOIncentiveBoosts(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch defaultRate
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOIncentiveDefaultRate(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2616501d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOIncentiveDefaultRateQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentiveDefaultRate(chainId as number);
    }
  }
}

/**
 * fetch dodoPerBlock
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOIncentiveDodoPerBlock(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8af70336', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOIncentiveDodoPerBlockQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentiveDodoPerBlock(chainId as number);
    }
  }
}

/**
 * fetch incentiveStatus
 * @param {number} chainId - number
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @returns {bigint} reward - uint256
 * @returns {bigint} baseRate - uint256
 * @returns {bigint} totalRate - uint256
 * @returns {bigint} curTotalReward - uint256
 * @returns {bigint} perBlockReward - uint256
 */
export function fetchDODOIncentiveIncentiveStatus(chainId: number, fromToken: string, toToken: string) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [fromToken,toToken]);
  const __data = hexlify(concat(['0x2ced893b', __encodeData]));
  return contractRequests.batchCall<{
    reward: bigint;
    baseRate: bigint;
    totalRate: bigint;
    curTotalReward: bigint;
    perBlockReward: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"baseRate","type":"uint256"},{"internalType":"uint256","name":"totalRate","type":"uint256"},{"internalType":"uint256","name":"curTotalReward","type":"uint256"},{"internalType":"uint256","name":"perBlockReward","type":"uint256"}])
}
export function getFetchDODOIncentiveIncentiveStatusQueryOptions(chainId: number | undefined, fromToken: string | undefined, toToken: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, fromToken, toToken],
    enabled: chainId !== undefined && chainId !== null && fromToken !== undefined && fromToken !== null && toToken !== undefined && toToken !== null, 
    queryFn: () => {
        return fetchDODOIncentiveIncentiveStatus(chainId as number,fromToken as string,toToken as string);
    }
  }
}

/**
 * fetch lastRewardBlock
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint32
 */
export function fetchDODOIncentiveLastRewardBlock(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa9f8d181', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchDODOIncentiveLastRewardBlockQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentiveLastRewardBlock(chainId as number);
    }
  }
}

/**
 * fetch totalDistribution
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint112
 */
export function fetchDODOIncentiveTotalDistribution(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe75e454e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDODOIncentiveTotalDistributionQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentiveTotalDistribution(chainId as number);
    }
  }
}

/**
 * fetch totalReward
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint112
 */
export function fetchDODOIncentiveTotalReward(chainId: number) {
  const __to = getDODOIncentiveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x750142e6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDODOIncentiveTotalRewardQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOIncentiveTotalReward(chainId as number);
    }
  }
}

/**
 * encode changeBoost
 * @param {string} _token - address
 * @param {string | number} _boostRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOIncentiveChangeBoost(_token: string, _boostRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [_token,_boostRate]);
  return hexlify(concat(['0x46748bc9', __encodeData]));
}

/**
 * encode changeDODOProxy
 * @param {string} _dodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOIncentiveChangeDODOProxy(_dodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_dodoProxy]);
  return hexlify(concat(['0xb56afe75', __encodeData]));
}

/**
 * encode changeDefaultRate
 * @param {string | number} _defaultRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOIncentiveChangeDefaultRate(_defaultRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_defaultRate]);
  return hexlify(concat(['0x106b8e8b', __encodeData]));
}

/**
 * encode changePerReward
 * @param {string | number} _dodoPerBlock - uint256
 * @returns {string} encode data
 */
export function encodeDODOIncentiveChangePerReward(_dodoPerBlock: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_dodoPerBlock]);
  return hexlify(concat(['0x300773cd', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOIncentiveClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode emptyReward
 * @param {string} assetTo - address
 * @returns {string} encode data
 */
export function encodeDODOIncentiveEmptyReward(assetTo: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [assetTo]);
  return hexlify(concat(['0xf54651de', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOIncentiveInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOIncentiveTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode triggerIncentive
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string} assetTo - address
 * @returns {string} encode data
 */
export function encodeDODOIncentiveTriggerIncentive(fromToken: string, toToken: string, assetTo: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [fromToken,toToken,assetTo]);
  return hexlify(concat(['0x188aa964', __encodeData]));
}