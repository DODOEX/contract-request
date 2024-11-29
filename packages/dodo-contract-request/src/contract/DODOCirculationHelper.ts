import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCirculationHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x357c5e9cfa8b834edcef7c7aabd8f9db09119d11"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _MAX_PENALTY_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOCirculationHelper_MAX_PENALTY_RATIO_(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x48afb913', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOCirculationHelper_MAX_PENALTY_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelper_MAX_PENALTY_RATIO_(chainId);
    }
  }
}

/**
 * fetch _MIN_PENALTY_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOCirculationHelper_MIN_PENALTY_RATIO_(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd549e74e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOCirculationHelper_MIN_PENALTY_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelper_MIN_PENALTY_RATIO_(chainId);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCirculationHelper_NEW_OWNER_(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCirculationHelper_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelper_NEW_OWNER_(chainId);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCirculationHelper_OWNER_(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCirculationHelper_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelper_OWNER_(chainId);
    }
  }
}

/**
 * fetch geRatioValue
 * @param {number} chainId - number
 * @param {number} input - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOCirculationHelperGeRatioValue(chainId: number, input: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [input]);
  const __data = hexlify(concat(['0x2358dbc0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOCirculationHelperGeRatioValueQueryOptions(chainId: number | undefined, input: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, input],
    enabled: [!!chainId, !!input], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelperGeRatioValue(chainId, input);
    }
  }
}

/**
 * fetch getCirculation
 * @param {number} chainId - number
 * @returns {bigint} circulation - uint256
 */
export function fetchDODOCirculationHelperGetCirculation(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbf151cb8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"circulation","type":"uint256"}])
}
export function getFetchDODOCirculationHelperGetCirculationQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelperGetCirculation(chainId);
    }
  }
}

/**
 * fetch getDodoWithdrawFeeRatio
 * @param {number} chainId - number
 * @returns {bigint} ratio - uint256
 */
export function fetchDODOCirculationHelperGetDodoWithdrawFeeRatio(chainId: number) {
  const __to = getDODOCirculationHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdef0d15d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"ratio","type":"uint256"}])
}
export function getFetchDODOCirculationHelperGetDodoWithdrawFeeRatioQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: [!!chainId], 
    queryFn: () => {
        // @ts-ignore
        return fetchDODOCirculationHelperGetDodoWithdrawFeeRatio(chainId);
    }
  }
}

/**
 * encode addLockedContractAddress
 * @param {string} lockedContract - address
 * @returns {string} encode data
 */
export function encodeDODOCirculationHelperAddLockedContractAddress(lockedContract: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lockedContract]);
  return hexlify(concat(['0xa82d6930', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOCirculationHelperClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOCirculationHelperInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeLockedContractAddress
 * @param {string} lockedContract - address
 * @returns {string} encode data
 */
export function encodeDODOCirculationHelperRemoveLockedContractAddress(lockedContract: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lockedContract]);
  return hexlify(concat(['0x188f4012', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOCirculationHelperTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}