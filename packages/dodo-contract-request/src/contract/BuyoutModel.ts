import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getBuyoutModelContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x102739e36Bc412CF79ff62f3e1efABA9F8296426","56":"0xfEA1AcAD77F64bf6E933635eD078e63d22484197","137":"0x5cE3aA21432F77945328c4847eC0a0C164336045","42161":"0x23B06D1557e8cAe3f03f71DCbB3123E071693af7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _BUYOUT_FEE_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - int256
 */
export function fetchBuyoutModel_BUYOUT_FEE_(chainId: number): Promise<bigint> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x079c088b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int256","name":"","type":"int256"}])
}
export function getFetchBuyoutModel_BUYOUT_FEE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModel_BUYOUT_FEE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchBuyoutModel_BUYOUT_FEE_(chainId as number);
    }
  }
}

/**
 * fetch _MAX_FRAG_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchBuyoutModel_MAX_FRAG_(chainId: number): Promise<bigint> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3cb4b809', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchBuyoutModel_MAX_FRAG_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModel_MAX_FRAG_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchBuyoutModel_MAX_FRAG_(chainId as number);
    }
  }
}

/**
 * fetch _MIN_FRAG_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchBuyoutModel_MIN_FRAG_(chainId: number): Promise<bigint> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x202ef05e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchBuyoutModel_MIN_FRAG_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModel_MIN_FRAG_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchBuyoutModel_MIN_FRAG_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchBuyoutModel_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchBuyoutModel_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModel_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchBuyoutModel_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchBuyoutModel_OWNER_(chainId: number): Promise<string> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchBuyoutModel_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModel_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchBuyoutModel_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch getBuyoutStatus
 * @param {number} chainId - number
 * @param {string} fragAddr - address
 * @param {string} user - address
 * @returns {bigint} __output0 - int256
 */
export function fetchBuyoutModelGetBuyoutStatus(chainId: number, fragAddr: string, user: string): Promise<bigint> {
  const __to = getBuyoutModelContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [fragAddr,user]);
  const __data = hexlify(concat(['0x0a5daf0a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int256","name":"","type":"int256"}])
}
export function getFetchBuyoutModelGetBuyoutStatusQueryOptions(chainId: number | undefined, fragAddr: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchBuyoutModelGetBuyoutStatus', chainId, fragAddr, user],
    enabled: chainId !== undefined && chainId !== null && fragAddr !== undefined && fragAddr !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchBuyoutModelGetBuyoutStatus(chainId as number,fragAddr as string,user as string);
    }
  }
}

/**
 * encode addFragInfo
 * @param {string} fragAddr - address
 * @param {string | number} minFrag - uint256
 * @param {string | number} maxFrag - uint256
 * @param {string} buyoutAddr - address
 * @returns {string} encode data
 */
export function encodeBuyoutModelAddFragInfo(fragAddr: string, minFrag: string | number, maxFrag: string | number, buyoutAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","address"], [fragAddr,minFrag,maxFrag,buyoutAddr]);
  return hexlify(concat(['0x26b7abf3', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeBuyoutModelClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeBuyoutModelInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode setFragInfo
 * @param {string} fragAddr - address
 * @param {string | number} minFrag - uint256
 * @param {string | number} maxFrag - uint256
 * @param {string} buyoutAddr - address
 * @returns {string} encode data
 */
export function encodeBuyoutModelSetFragInfo(fragAddr: string, minFrag: string | number, maxFrag: string | number, buyoutAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","address"], [fragAddr,minFrag,maxFrag,buyoutAddr]);
  return hexlify(concat(['0x5a1d590f', __encodeData]));
}

/**
 * encode setGlobalParam
 * @param {string | number} minFrag - uint256
 * @param {string | number} maxFrag - uint256
 * @param {string | number} buyoutFee - uint256
 * @returns {string} encode data
 */
export function encodeBuyoutModelSetGlobalParam(minFrag: string | number, maxFrag: string | number, buyoutFee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [minFrag,maxFrag,buyoutFee]);
  return hexlify(concat(['0xe8335232', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeBuyoutModelTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}