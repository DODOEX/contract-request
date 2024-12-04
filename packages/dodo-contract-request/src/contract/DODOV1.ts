import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _BASE_BALANCE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_BASE_BALANCE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeab5d20e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_BASE_BALANCE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_BASE_BALANCE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_CAPITAL_RECEIVE_QUOTE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_BASE_CAPITAL_RECEIVE_QUOTE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc6b73cf9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_BASE_CAPITAL_RECEIVE_QUOTE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_BASE_CAPITAL_RECEIVE_QUOTE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_CAPITAL_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_BASE_CAPITAL_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd689107c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_BASE_CAPITAL_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_BASE_CAPITAL_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _BASE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_BASE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4a248d2a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_BASE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_BASE_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _CLAIMED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV1_CLAIMED_(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x68be20ad', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV1_CLAIMED_QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOV1_CLAIMED_(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch _CLOSED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV1_CLOSED_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6ec6a58d', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV1_CLOSED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_CLOSED_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _DEPOSIT_BASE_ALLOWED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV1_DEPOSIT_BASE_ALLOWED_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa598aca7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV1_DEPOSIT_BASE_ALLOWED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_DEPOSIT_BASE_ALLOWED_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _DEPOSIT_QUOTE_ALLOWED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV1_DEPOSIT_QUOTE_ALLOWED_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc5bbffe8', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV1_DEPOSIT_QUOTE_ALLOWED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_DEPOSIT_QUOTE_ALLOWED_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _GAS_PRICE_LIMIT_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_GAS_PRICE_LIMIT_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4de4527e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_GAS_PRICE_LIMIT_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_GAS_PRICE_LIMIT_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _K_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_K_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xec2fd46d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_K_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_K_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _LP_FEE_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_LP_FEE_RATE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xab44a7a3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_LP_FEE_RATE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_LP_FEE_RATE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_MAINTAINER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_MAINTAINER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_MAINTAINER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _MT_FEE_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_MT_FEE_RATE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc0ffa178', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_MT_FEE_RATE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_MT_FEE_RATE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_NEW_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _ORACLE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_ORACLE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x73a2ab7c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_ORACLE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_ORACLE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_BALANCE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_QUOTE_BALANCE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7c9b8e89', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_QUOTE_BALANCE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_QUOTE_BALANCE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_CAPITAL_RECEIVE_BASE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_QUOTE_CAPITAL_RECEIVE_BASE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0e6518e9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_QUOTE_CAPITAL_RECEIVE_BASE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_QUOTE_CAPITAL_RECEIVE_BASE_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_CAPITAL_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_QUOTE_CAPITAL_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xac1fbc98', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_QUOTE_CAPITAL_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_QUOTE_CAPITAL_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _QUOTE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_QUOTE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd4b97046', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_QUOTE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_QUOTE_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _R_STATUS_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchDODOV1_R_STATUS_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x17be952e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"enum Types.RStatus","name":"","type":"uint8"}])
}
export function getFetchDODOV1_R_STATUS_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_R_STATUS_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _SUPERVISOR_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchDODOV1_SUPERVISOR_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3960f142', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1_SUPERVISOR_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_SUPERVISOR_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _TARGET_BASE_TOKEN_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_TARGET_BASE_TOKEN_AMOUNT_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb2094fd3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_TARGET_BASE_TOKEN_AMOUNT_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_TARGET_BASE_TOKEN_AMOUNT_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _TARGET_QUOTE_TOKEN_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1_TARGET_QUOTE_TOKEN_AMOUNT_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x245c9685', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1_TARGET_QUOTE_TOKEN_AMOUNT_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_TARGET_QUOTE_TOKEN_AMOUNT_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _TRADE_ALLOWED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOV1_TRADE_ALLOWED_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdd58b41c', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOV1_TRADE_ALLOWED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1_TRADE_ALLOWED_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getBaseCapitalBalanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} lp - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1GetBaseCapitalBalanceOf(chainId: number, __to: string, lp: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lp]);
  const __data = hexlify(concat(['0x7aed942d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1GetBaseCapitalBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, lp: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, lp],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && lp !== undefined && lp !== null, 
    queryFn: () => {
        return fetchDODOV1GetBaseCapitalBalanceOf(chainId as number,__to as string,lp as string);
    }
  }
}

/**
 * fetch getExpectedTarget
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} baseTarget - uint256
 * @returns {bigint} quoteTarget - uint256
 */
export function fetchDODOV1GetExpectedTarget(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xffa64225', __encodeData]));
  return contractRequests.batchCall<{
    baseTarget: bigint;
    quoteTarget: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"baseTarget","type":"uint256"},{"internalType":"uint256","name":"quoteTarget","type":"uint256"}])
}
export function getFetchDODOV1GetExpectedTargetQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1GetExpectedTarget(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getLpBaseBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} lp - address
 * @returns {bigint} lpBalance - uint256
 */
export function fetchDODOV1GetLpBaseBalance(chainId: number, __to: string, lp: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lp]);
  const __data = hexlify(concat(['0x95faa5f6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"lpBalance","type":"uint256"}])
}
export function getFetchDODOV1GetLpBaseBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, lp: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, lp],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && lp !== undefined && lp !== null, 
    queryFn: () => {
        return fetchDODOV1GetLpBaseBalance(chainId as number,__to as string,lp as string);
    }
  }
}

/**
 * fetch getLpQuoteBalance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} lp - address
 * @returns {bigint} lpBalance - uint256
 */
export function fetchDODOV1GetLpQuoteBalance(chainId: number, __to: string, lp: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lp]);
  const __data = hexlify(concat(['0x36a53bbb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"lpBalance","type":"uint256"}])
}
export function getFetchDODOV1GetLpQuoteBalanceQueryOptions(chainId: number | undefined, __to: string | undefined, lp: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, lp],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && lp !== undefined && lp !== null, 
    queryFn: () => {
        return fetchDODOV1GetLpQuoteBalance(chainId as number,__to as string,lp as string);
    }
  }
}

/**
 * fetch getMidPrice
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} midPrice - uint256
 */
export function fetchDODOV1GetMidPrice(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xee27c689', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"midPrice","type":"uint256"}])
}
export function getFetchDODOV1GetMidPriceQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1GetMidPrice(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getOraclePrice
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1GetOraclePrice(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x796da7af', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1GetOraclePriceQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1GetOraclePrice(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getQuoteCapitalBalanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} lp - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1GetQuoteCapitalBalanceOf(chainId: number, __to: string, lp: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [lp]);
  const __data = hexlify(concat(['0xf67ed448', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1GetQuoteCapitalBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, lp: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, lp],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && lp !== undefined && lp !== null, 
    queryFn: () => {
        return fetchDODOV1GetQuoteCapitalBalanceOf(chainId as number,__to as string,lp as string);
    }
  }
}

/**
 * fetch getTotalBaseCapital
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1GetTotalBaseCapital(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0cd1667d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1GetTotalBaseCapitalQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1GetTotalBaseCapital(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getTotalQuoteCapital
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1GetTotalQuoteCapital(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2aa82c65', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1GetTotalQuoteCapitalQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1GetTotalQuoteCapital(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getWithdrawBasePenalty
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} amount - uint256
 * @returns {bigint} penalty - uint256
 */
export function fetchDODOV1GetWithdrawBasePenalty(chainId: number, __to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  const __data = hexlify(concat(['0xee5150b3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"penalty","type":"uint256"}])
}
export function getFetchDODOV1GetWithdrawBasePenaltyQueryOptions(chainId: number | undefined, __to: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, amount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOV1GetWithdrawBasePenalty(chainId as number,__to as string,amount as number);
    }
  }
}

/**
 * fetch getWithdrawQuotePenalty
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} amount - uint256
 * @returns {bigint} penalty - uint256
 */
export function fetchDODOV1GetWithdrawQuotePenalty(chainId: number, __to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  const __data = hexlify(concat(['0x0c9f7bd0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"penalty","type":"uint256"}])
}
export function getFetchDODOV1GetWithdrawQuotePenaltyQueryOptions(chainId: number | undefined, __to: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, amount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOV1GetWithdrawQuotePenalty(chainId as number,__to as string,amount as number);
    }
  }
}

/**
 * fetch queryBuyBaseToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} amount - uint256
 * @returns {bigint} payQuote - uint256
 */
export function fetchDODOV1QueryBuyBaseToken(chainId: number, __to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  const __data = hexlify(concat(['0x18c0bbe4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"payQuote","type":"uint256"}])
}
export function getFetchDODOV1QueryBuyBaseTokenQueryOptions(chainId: number | undefined, __to: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, amount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOV1QueryBuyBaseToken(chainId as number,__to as string,amount as number);
    }
  }
}

/**
 * fetch querySellBaseToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} amount - uint256
 * @returns {bigint} receiveQuote - uint256
 */
export function fetchDODOV1QuerySellBaseToken(chainId: number, __to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  const __data = hexlify(concat(['0xa2801e16', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"receiveQuote","type":"uint256"}])
}
export function getFetchDODOV1QuerySellBaseTokenQueryOptions(chainId: number | undefined, __to: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, amount],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOV1QuerySellBaseToken(chainId as number,__to as string,amount as number);
    }
  }
}

/**
 * fetch version
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOV1Version(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOV1VersionQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchDODOV1Version(chainId as number,__to as string);
    }
  }
}

/**
 * encode buyBaseToken
 * @param {string | number} amount - uint256
 * @param {string | number} maxPayQuote - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1BuyBaseToken(amount: string | number, maxPayQuote: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount,maxPayQuote,data]);
  return hexlify(concat(['0xe67ce706', __encodeData]));
}

/**
 * encode claimAssets

 * @returns {string} encode data
 */
export function encodeDODOV1ClaimAssets() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x1f3c156e', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOV1ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode depositBase
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DepositBase(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0x27bed8ee', __encodeData]));
}

/**
 * encode depositBaseTo
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DepositBaseTo(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0xaa06ce9b', __encodeData]));
}

/**
 * encode depositQuote
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DepositQuote(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xf3ae6c5f', __encodeData]));
}

/**
 * encode depositQuoteTo
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DepositQuoteTo(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0x5f179f64', __encodeData]));
}

/**
 * encode disableBaseDeposit

 * @returns {string} encode data
 */
export function encodeDODOV1DisableBaseDeposit() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x13c57624', __encodeData]));
}

/**
 * encode disableQuoteDeposit

 * @returns {string} encode data
 */
export function encodeDODOV1DisableQuoteDeposit() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xbc7d679d', __encodeData]));
}

/**
 * encode disableTrading

 * @returns {string} encode data
 */
export function encodeDODOV1DisableTrading() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x17700f01', __encodeData]));
}

/**
 * encode donateBaseToken
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DonateBaseToken(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xed0aa428', __encodeData]));
}

/**
 * encode donateQuoteToken
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1DonateQuoteToken(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0x387b0c11', __encodeData]));
}

/**
 * encode enableBaseDeposit

 * @returns {string} encode data
 */
export function encodeDODOV1EnableBaseDeposit() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x1184d8be', __encodeData]));
}

/**
 * encode enableQuoteDeposit

 * @returns {string} encode data
 */
export function encodeDODOV1EnableQuoteDeposit() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x36ac41a8', __encodeData]));
}

/**
 * encode enableTrading

 * @returns {string} encode data
 */
export function encodeDODOV1EnableTrading() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x8a8c523c', __encodeData]));
}

/**
 * encode finalSettlement

 * @returns {string} encode data
 */
export function encodeDODOV1FinalSettlement() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x648a4fac', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} supervisor - address
 * @param {string} maintainer - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} oracle - address
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} mtFeeRate - uint256
 * @param {string | number} k - uint256
 * @param {string | number} gasPriceLimit - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1Init(owner: string, supervisor: string, maintainer: string, baseToken: string, quoteToken: string, oracle: string, lpFeeRate: string | number, mtFeeRate: string | number, k: string | number, gasPriceLimit: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","address","address","uint256","uint256","uint256","uint256"], [owner,supervisor,maintainer,baseToken,quoteToken,oracle,lpFeeRate,mtFeeRate,k,gasPriceLimit]);
  return hexlify(concat(['0xf00f9a09', __encodeData]));
}

/**
 * encode retrieve
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1Retrieve(token: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0xc3a2a665', __encodeData]));
}

/**
 * encode sellBaseToken
 * @param {string | number} amount - uint256
 * @param {string | number} minReceiveQuote - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1SellBaseToken(amount: string | number, minReceiveQuote: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount,minReceiveQuote,data]);
  return hexlify(concat(['0x8dae7333', __encodeData]));
}

/**
 * encode setGasPriceLimit
 * @param {string | number} newGasPriceLimit - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1SetGasPriceLimit(newGasPriceLimit: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newGasPriceLimit]);
  return hexlify(concat(['0x09231602', __encodeData]));
}

/**
 * encode setK
 * @param {string | number} newK - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1SetK(newK: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newK]);
  return hexlify(concat(['0x67de8be9', __encodeData]));
}

/**
 * encode setLiquidityProviderFeeRate
 * @param {string | number} newLiquidityPorviderFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1SetLiquidityProviderFeeRate(newLiquidityPorviderFeeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newLiquidityPorviderFeeRate]);
  return hexlify(concat(['0x5bb7552a', __encodeData]));
}

/**
 * encode setMaintainer
 * @param {string} newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDODOV1SetMaintainer(newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newMaintainer]);
  return hexlify(concat(['0x13ea5d29', __encodeData]));
}

/**
 * encode setMaintainerFeeRate
 * @param {string | number} newMaintainerFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1SetMaintainerFeeRate(newMaintainerFeeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newMaintainerFeeRate]);
  return hexlify(concat(['0xf2220416', __encodeData]));
}

/**
 * encode setOracle
 * @param {string} newOracle - address
 * @returns {string} encode data
 */
export function encodeDODOV1SetOracle(newOracle: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOracle]);
  return hexlify(concat(['0x7adbf973', __encodeData]));
}

/**
 * encode setSupervisor
 * @param {string} newSupervisor - address
 * @returns {string} encode data
 */
export function encodeDODOV1SetSupervisor(newSupervisor: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newSupervisor]);
  return hexlify(concat(['0x9299eb30', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV1TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdrawAllBase

 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawAllBase() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xd47eaa37', __encodeData]));
}

/**
 * encode withdrawAllBaseTo
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawAllBaseTo(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x1e34b9cc', __encodeData]));
}

/**
 * encode withdrawAllQuote

 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawAllQuote() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xc59203af', __encodeData]));
}

/**
 * encode withdrawAllQuoteTo
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawAllQuoteTo(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x04512dc4', __encodeData]));
}

/**
 * encode withdrawBase
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawBase(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xf98bea15', __encodeData]));
}

/**
 * encode withdrawBaseTo
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawBaseTo(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0x947cf92b', __encodeData]));
}

/**
 * encode withdrawQuote
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawQuote(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xc0a5f6ff', __encodeData]));
}

/**
 * encode withdrawQuoteTo
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1WithdrawQuoteTo(to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0x108db744', __encodeData]));
}