import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchFeeRateModel_NEW_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateModel_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateModel_NEW_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchFeeRateModel_NEW_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchFeeRateModel_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateModel_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateModel_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchFeeRateModel_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch feeRateImpl
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchFeeRateModelFeeRateImpl(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x39b96500', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateModelFeeRateImplQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateModelFeeRateImpl', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchFeeRateModelFeeRateImpl(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getFeeRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} trader - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchFeeRateModelGetFeeRate(chainId: number, __to: string, trader: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [trader]);
  const __data = hexlify(concat(['0x8198edbf', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchFeeRateModelGetFeeRateQueryOptions(chainId: number | undefined, __to: string | undefined, trader: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateModelGetFeeRate', chainId, __to, trader],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && trader !== undefined && trader !== null, 
    queryFn: () => {
        return fetchFeeRateModelGetFeeRate(chainId as number,__to as string,trader as string);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeFeeRateModelClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeFeeRateModelInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode setFeeProxy
 * @param {string} _feeRateImpl - address
 * @returns {string} encode data
 */
export function encodeFeeRateModelSetFeeProxy(_feeRateImpl: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeRateImpl]);
  return hexlify(concat(['0x25be0be1', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeFeeRateModelTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}