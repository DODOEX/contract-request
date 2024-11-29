import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDPPAdvancedAdmin_DODO_APPROVE_PROXY_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPAdvancedAdmin_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_DODO_APPROVE_PROXY_(chainId, __to);
    }
  }
}

/**
 * fetch _DPP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDPPAdvancedAdmin_DPP_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcaef11ad', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPAdvancedAdmin_DPP_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_DPP_(chainId, __to);
    }
  }
}

/**
 * fetch _FREEZE_TIMESTAMP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDPPAdvancedAdmin_FREEZE_TIMESTAMP_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x201f5084', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDPPAdvancedAdmin_FREEZE_TIMESTAMP_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_FREEZE_TIMESTAMP_(chainId, __to);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDPPAdvancedAdmin_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPAdvancedAdmin_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_NEW_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _OPERATOR_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDPPAdvancedAdmin_OPERATOR_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf54c7a6c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPAdvancedAdmin_OPERATOR_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_OPERATOR_(chainId, __to);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDPPAdvancedAdmin_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDPPAdvancedAdmin_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdmin_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch version
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchDPPAdvancedAdminVersion(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDPPAdvancedAdminVersionQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchDPPAdvancedAdminVersion(chainId, __to);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} dpp - address
 * @param {string} operator - address
 * @param {string} dodoApproveProxy - address
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminInit(owner: string, dpp: string, operator: string, dodoApproveProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [owner,dpp,operator,dodoApproveProxy]);
  return hexlify(concat(['0x06552ff3', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode reset
 * @param {string} operator - address
 * @param {string | number} newLpFeeRate - uint256
 * @param {string | number} newI - uint256
 * @param {string | number} newK - uint256
 * @param {string | number} baseOutAmount - uint256
 * @param {string | number} quoteOutAmount - uint256
 * @param {string | number} minBaseReserve - uint256
 * @param {string | number} minQuoteReserve - uint256
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminReset(operator: string, newLpFeeRate: string | number, newI: string | number, newK: string | number, baseOutAmount: string | number, quoteOutAmount: string | number, minBaseReserve: string | number, minQuoteReserve: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint256","uint256","uint256"], [operator,newLpFeeRate,newI,newK,baseOutAmount,quoteOutAmount,minBaseReserve,minQuoteReserve]);
  return hexlify(concat(['0x8ff3928c', __encodeData]));
}

/**
 * encode retrieve
 * @param {string} to - address
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminRetrieve(to: string, token: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [to,token,amount]);
  return hexlify(concat(['0x28c4e24c', __encodeData]));
}

/**
 * encode setFreezeTimestamp
 * @param {string | number} timestamp - uint256
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminSetFreezeTimestamp(timestamp: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [timestamp]);
  return hexlify(concat(['0x2bb42fb8', __encodeData]));
}

/**
 * encode setOperator
 * @param {string} newOperator - address
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminSetOperator(newOperator: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOperator]);
  return hexlify(concat(['0xb3ab15fb', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDPPAdvancedAdminTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}