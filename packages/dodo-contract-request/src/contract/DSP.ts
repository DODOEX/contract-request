import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchDSPDOMAIN_SEPARATOR(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchDSPDOMAIN_SEPARATORQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPDOMAIN_SEPARATOR(chainId as number,__to as string);
    }
  }
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchDSPPERMIT_TYPEHASH(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchDSPPERMIT_TYPEHASHQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPPERMIT_TYPEHASH(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_PRICE_CUMULATIVE_LAST_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSP_BASE_PRICE_CUMULATIVE_LAST_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfe24cb7f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSP_BASE_PRICE_CUMULATIVE_LAST_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_BASE_PRICE_CUMULATIVE_LAST_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_RESERVE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint112
 */
export function fetchDSP_BASE_RESERVE_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7d721504', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDSP_BASE_RESERVE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_BASE_RESERVE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_TARGET_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint112
 */
export function fetchDSP_BASE_TARGET_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe539ef49', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDSP_BASE_TARGET_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_BASE_TARGET_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDSP_BASE_TOKEN_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4a248d2a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IERC20","name":"","type":"address"}])
}
export function getFetchDSP_BASE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_BASE_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BLOCK_TIMESTAMP_LAST_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchDSP_BLOCK_TIMESTAMP_LAST_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x880a4d87', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchDSP_BLOCK_TIMESTAMP_LAST_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_BLOCK_TIMESTAMP_LAST_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _IS_OPEN_TWAP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDSP_IS_OPEN_TWAP_(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2df6cb48', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDSP_IS_OPEN_TWAP_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_IS_OPEN_TWAP_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _I_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSP_I_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf811d692', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSP_I_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_I_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _K_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSP_K_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xec2fd46d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSP_K_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_K_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _LP_FEE_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSP_LP_FEE_RATE_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xab44a7a3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSP_LP_FEE_RATE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_LP_FEE_RATE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDSP_MAINTAINER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDSP_MAINTAINER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_MAINTAINER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDSP_MT_FEE_RATE_MODEL_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf6b06e70', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IFeeRateModel","name":"","type":"address"}])
}
export function getFetchDSP_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_MT_FEE_RATE_MODEL_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_RESERVE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint112
 */
export function fetchDSP_QUOTE_RESERVE_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbbf5ce78', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDSP_QUOTE_RESERVE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_QUOTE_RESERVE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_TARGET_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint112
 */
export function fetchDSP_QUOTE_TARGET_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x77f58657', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint112","name":"","type":"uint112"}])
}
export function getFetchDSP_QUOTE_TARGET_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_QUOTE_TARGET_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDSP_QUOTE_TOKEN_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd4b97046', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IERC20","name":"","type":"address"}])
}
export function getFetchDSP_QUOTE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_QUOTE_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _RState_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchDSP_RState_(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbf357dae', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchDSP_RState_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSP_RState_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch addressToShortString
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} _addr - address
 * @returns {string} __output0 - string
 */
export function fetchDSPAddressToShortString(chainId: number, __to: string, _addr: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["address"], [_addr]);
  const __data = hexlify(concat(['0x17101940', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDSPAddressToShortStringQueryOptions(chainId: number | undefined, __to: string | undefined, _addr: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, _addr],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && _addr !== undefined && _addr !== null, 
    queryFn: () => {
        return fetchDSPAddressToShortString(chainId as number,__to as string,_addr as string);
    }
  }
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSPAllowance(chainId: number, __to: string, owner: string, spender: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSPAllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, owner, spender],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchDSPAllowance(chainId as number,__to as string,owner as string,spender as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint} balance - uint256
 */
export function fetchDSPBalanceOf(chainId: number, __to: string, owner: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"balance","type":"uint256"}])
}
export function getFetchDSPBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, owner],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchDSPBalanceOf(chainId as number,__to as string,owner as string);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchDSPDecimals(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchDSPDecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPDecimals(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getBaseInput
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} input - uint256
 */
export function fetchDSPGetBaseInput(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x65f6fcbb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"input","type":"uint256"}])
}
export function getFetchDSPGetBaseInputQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetBaseInput(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getMidPrice
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} midPrice - uint256
 */
export function fetchDSPGetMidPrice(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xee27c689', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"midPrice","type":"uint256"}])
}
export function getFetchDSPGetMidPriceQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetMidPrice(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getPMMState
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {{i: bigint; K: bigint; B: bigint; Q: bigint; B0: bigint; Q0: bigint; R: bigint}} state - tuple
 */
export function fetchDSPGetPMMState(chainId: number, __to: string): Promise<{i: bigint; K: bigint; B: bigint; Q: bigint; B0: bigint; Q0: bigint; R: bigint}> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa382d1b9', __encodeData]));
  return contractRequests.batchCall<{i: bigint; K: bigint; B: bigint; Q: bigint; B0: bigint; Q0: bigint; R: bigint}>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"K","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"},{"internalType":"uint256","name":"Q","type":"uint256"},{"internalType":"uint256","name":"B0","type":"uint256"},{"internalType":"uint256","name":"Q0","type":"uint256"},{"internalType":"enum PMMPricing.RState","name":"R","type":"uint8"}],"internalType":"struct PMMPricing.PMMState","name":"state","type":"tuple"}])
}
export function getFetchDSPGetPMMStateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetPMMState(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getPMMStateForCall
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} i - uint256
 * @returns {bigint} K - uint256
 * @returns {bigint} B - uint256
 * @returns {bigint} Q - uint256
 * @returns {bigint} B0 - uint256
 * @returns {bigint} Q0 - uint256
 * @returns {bigint} R - uint256
 */
export function fetchDSPGetPMMStateForCall(chainId: number, __to: string): Promise<{
    i: bigint;
    K: bigint;
    B: bigint;
    Q: bigint;
    B0: bigint;
    Q0: bigint;
    R: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfd1ed7e9', __encodeData]));
  return contractRequests.batchCall<{
    i: bigint;
    K: bigint;
    B: bigint;
    Q: bigint;
    B0: bigint;
    Q0: bigint;
    R: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"K","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"},{"internalType":"uint256","name":"Q","type":"uint256"},{"internalType":"uint256","name":"B0","type":"uint256"},{"internalType":"uint256","name":"Q0","type":"uint256"},{"internalType":"uint256","name":"R","type":"uint256"}])
}
export function getFetchDSPGetPMMStateForCallQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetPMMStateForCall(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getQuoteInput
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} input - uint256
 */
export function fetchDSPGetQuoteInput(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x71f9100c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"input","type":"uint256"}])
}
export function getFetchDSPGetQuoteInputQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetQuoteInput(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getUserFeeRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @returns {bigint} lpFeeRate - uint256
 * @returns {bigint} mtFeeRate - uint256
 */
export function fetchDSPGetUserFeeRate(chainId: number, __to: string, user: string): Promise<{
    lpFeeRate: bigint;
    mtFeeRate: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0x44096609', __encodeData]));
  return contractRequests.batchCall<{
    lpFeeRate: bigint;
    mtFeeRate: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"lpFeeRate","type":"uint256"},{"internalType":"uint256","name":"mtFeeRate","type":"uint256"}])
}
export function getFetchDSPGetUserFeeRateQueryOptions(chainId: number | undefined, __to: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, user],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchDSPGetUserFeeRate(chainId as number,__to as string,user as string);
    }
  }
}

/**
 * fetch getVaultReserve
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} baseReserve - uint256
 * @returns {bigint} quoteReserve - uint256
 */
export function fetchDSPGetVaultReserve(chainId: number, __to: string): Promise<{
    baseReserve: bigint;
    quoteReserve: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x36223ce9', __encodeData]));
  return contractRequests.batchCall<{
    baseReserve: bigint;
    quoteReserve: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"baseReserve","type":"uint256"},{"internalType":"uint256","name":"quoteReserve","type":"uint256"}])
}
export function getFetchDSPGetVaultReserveQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPGetVaultReserve(chainId as number,__to as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchDSPName(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDSPNameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPName(chainId as number,__to as string);
    }
  }
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSPNonces(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSPNoncesQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDSPNonces(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch querySellBase
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} trader - address
 * @param {number} payBaseAmount - uint256
 * @returns {bigint} receiveQuoteAmount - uint256
 * @returns {bigint} mtFee - uint256
 * @returns {bigint} newRState - uint8
 * @returns {bigint} newBaseTarget - uint256
 */
export function fetchDSPQuerySellBase(chainId: number, __to: string, trader: string, payBaseAmount: number): Promise<{
    receiveQuoteAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newBaseTarget: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [trader,payBaseAmount]);
  const __data = hexlify(concat(['0x79a04876', __encodeData]));
  return contractRequests.batchCall<{
    receiveQuoteAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newBaseTarget: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"receiveQuoteAmount","type":"uint256"},{"internalType":"uint256","name":"mtFee","type":"uint256"},{"internalType":"enum PMMPricing.RState","name":"newRState","type":"uint8"},{"internalType":"uint256","name":"newBaseTarget","type":"uint256"}])
}
export function getFetchDSPQuerySellBaseQueryOptions(chainId: number | undefined, __to: string | undefined, trader: string | undefined, payBaseAmount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, trader, payBaseAmount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && trader !== undefined && trader !== null && payBaseAmount !== undefined && payBaseAmount !== null, 
    queryFn: () => {
        return fetchDSPQuerySellBase(chainId as number,__to as string,trader as string,payBaseAmount as number);
    }
  }
}

/**
 * fetch querySellQuote
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} trader - address
 * @param {number} payQuoteAmount - uint256
 * @returns {bigint} receiveBaseAmount - uint256
 * @returns {bigint} mtFee - uint256
 * @returns {bigint} newRState - uint8
 * @returns {bigint} newQuoteTarget - uint256
 */
export function fetchDSPQuerySellQuote(chainId: number, __to: string, trader: string, payQuoteAmount: number): Promise<{
    receiveBaseAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newQuoteTarget: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [trader,payQuoteAmount]);
  const __data = hexlify(concat(['0x66410a21', __encodeData]));
  return contractRequests.batchCall<{
    receiveBaseAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newQuoteTarget: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"receiveBaseAmount","type":"uint256"},{"internalType":"uint256","name":"mtFee","type":"uint256"},{"internalType":"enum PMMPricing.RState","name":"newRState","type":"uint8"},{"internalType":"uint256","name":"newQuoteTarget","type":"uint256"}])
}
export function getFetchDSPQuerySellQuoteQueryOptions(chainId: number | undefined, __to: string | undefined, trader: string | undefined, payQuoteAmount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, trader, payQuoteAmount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && trader !== undefined && trader !== null && payQuoteAmount !== undefined && payQuoteAmount !== null, 
    queryFn: () => {
        return fetchDSPQuerySellQuote(chainId as number,__to as string,trader as string,payQuoteAmount as number);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchDSPSymbol(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDSPSymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPSymbol(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDSPTotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDSPTotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPTotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * fetch version
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchDSPVersion(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDSPVersionQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDSPVersion(chainId as number,__to as string);
    }
  }
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPApprove(spender: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode buyShares
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPBuyShares(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x4c85b425', __encodeData]));
}

/**
 * encode flashLoan
 * @param {string | number} baseAmount - uint256
 * @param {string | number} quoteAmount - uint256
 * @param {string} assetTo - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDSPFlashLoan(baseAmount: string | number, quoteAmount: string | number, assetTo: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address","bytes"], [baseAmount,quoteAmount,assetTo,data]);
  return hexlify(concat(['0xd0a494e4', __encodeData]));
}

/**
 * encode init
 * @param {string} maintainer - address
 * @param {string} baseTokenAddress - address
 * @param {string} quoteTokenAddress - address
 * @param {string | number} lpFeeRate - uint256
 * @param {string} mtFeeRateModel - address
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeDSPInit(maintainer: string, baseTokenAddress: string, quoteTokenAddress: string, lpFeeRate: string | number, mtFeeRateModel: string, i: string | number, k: string | number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","address","uint256","uint256","bool"], [maintainer,baseTokenAddress,quoteTokenAddress,lpFeeRate,mtFeeRateModel,i,k,isOpenTWAP]);
  return hexlify(concat(['0x5039972a', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {string | number} value - uint256
 * @param {string | number} deadline - uint256
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeDSPPermit(owner: string, spender: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
  return hexlify(concat(['0xd505accf', __encodeData]));
}

/**
 * encode sellBase
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPSellBase(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xbd6015b4', __encodeData]));
}

/**
 * encode sellQuote
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPSellQuote(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xdd93f59a', __encodeData]));
}

/**
 * encode sellShares
 * @param {string | number} shareAmount - uint256
 * @param {string} to - address
 * @param {string | number} baseMinAmount - uint256
 * @param {string | number} quoteMinAmount - uint256
 * @param {string} data - bytes
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeDSPSellShares(shareAmount: string | number, to: string, baseMinAmount: string | number, quoteMinAmount: string | number, data: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","uint256","uint256","bytes","uint256"], [shareAmount,to,baseMinAmount,quoteMinAmount,data,deadline]);
  return hexlify(concat(['0xb56ceaa6', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeDSPSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPTransfer(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPTransferFrom(from: string, to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}