import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _AVG_SETTLED_PRICE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_AVG_SETTLED_PRICE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc025aa33', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_AVG_SETTLED_PRICE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_AVG_SETTLED_PRICE_(chainId, __to);
    }
  }
}

/**
 * fetch _BASE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_BASE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4a248d2a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_BASE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_BASE_TOKEN_(chainId, __to);
    }
  }
}

/**
 * fetch _BIDDER_PERMISSION_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_BIDDER_PERMISSION_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x832d23ec', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_BIDDER_PERMISSION_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_BIDDER_PERMISSION_(chainId, __to);
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
export function fetchCP_CLAIMED_(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x68be20ad', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}
export function getFetchCP_CLAIMED_QueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: [!!chainId, !!__to, !!__input1], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_CLAIMED_(chainId, __to, __input1);
    }
  }
}

/**
 * fetch _CLIFF_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_CLIFF_RATE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x294dafc0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_CLIFF_RATE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_CLIFF_RATE_(chainId, __to);
    }
  }
}

/**
 * fetch _FREEZE_DURATION_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_FREEZE_DURATION_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xce90ea74', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_FREEZE_DURATION_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_FREEZE_DURATION_(chainId, __to);
    }
  }
}

/**
 * fetch _IS_OPEN_TWAP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchCP_IS_OPEN_TWAP_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2df6cb48', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}
export function getFetchCP_IS_OPEN_TWAP_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_IS_OPEN_TWAP_(chainId, __to);
    }
  }
}

/**
 * fetch _I_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_I_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf811d692', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_I_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_I_(chainId, __to);
    }
  }
}

/**
 * fetch _K_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_K_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xec2fd46d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_K_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_K_(chainId, __to);
    }
  }
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_MAINTAINER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_MAINTAINER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_MAINTAINER_(chainId, __to);
    }
  }
}

/**
 * fetch _MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_MT_FEE_RATE_MODEL_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf6b06e70', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_MT_FEE_RATE_MODEL_(chainId, __to);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_NEW_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_OWNER_(chainId, __to);
    }
  }
}

/**
 * fetch _PHASE_BID_ENDTIME_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_PHASE_BID_ENDTIME_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe4e327db', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_PHASE_BID_ENDTIME_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_PHASE_BID_ENDTIME_(chainId, __to);
    }
  }
}

/**
 * fetch _PHASE_BID_STARTTIME_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_PHASE_BID_STARTTIME_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7327a885', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_PHASE_BID_STARTTIME_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_PHASE_BID_STARTTIME_(chainId, __to);
    }
  }
}

/**
 * fetch _PHASE_CALM_ENDTIME_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_PHASE_CALM_ENDTIME_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcd912946', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_PHASE_CALM_ENDTIME_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_PHASE_CALM_ENDTIME_(chainId, __to);
    }
  }
}

/**
 * fetch _POOL_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_POOL_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2098c75b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_POOL_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_POOL_(chainId, __to);
    }
  }
}

/**
 * fetch _POOL_FACTORY_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_POOL_FACTORY_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9e104a21', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_POOL_FACTORY_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_POOL_FACTORY_(chainId, __to);
    }
  }
}

/**
 * fetch _POOL_QUOTE_CAP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_POOL_QUOTE_CAP_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x61ce802e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_POOL_QUOTE_CAP_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_POOL_QUOTE_CAP_(chainId, __to);
    }
  }
}

/**
 * fetch _QUOTE_RESERVE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_QUOTE_RESERVE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbbf5ce78', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_QUOTE_RESERVE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_QUOTE_RESERVE_(chainId, __to);
    }
  }
}

/**
 * fetch _QUOTE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchCP_QUOTE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd4b97046', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}
export function getFetchCP_QUOTE_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_QUOTE_TOKEN_(chainId, __to);
    }
  }
}

/**
 * fetch _SETTLED_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchCP_SETTLED_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb3c2b08', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}
export function getFetchCP_SETTLED_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_SETTLED_(chainId, __to);
    }
  }
}

/**
 * fetch _SETTLED_TIME_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_SETTLED_TIME_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4afc0d7b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_SETTLED_TIME_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_SETTLED_TIME_(chainId, __to);
    }
  }
}

/**
 * fetch _TOTAL_BASE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_TOTAL_BASE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4ed90a64', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_TOTAL_BASE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_TOTAL_BASE_(chainId, __to);
    }
  }
}

/**
 * fetch _TOTAL_LP_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_TOTAL_LP_AMOUNT_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa6570618', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_TOTAL_LP_AMOUNT_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_TOTAL_LP_AMOUNT_(chainId, __to);
    }
  }
}

/**
 * fetch _TOTAL_SHARES_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_TOTAL_SHARES_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbea586a2', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_TOTAL_SHARES_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_TOTAL_SHARES_(chainId, __to);
    }
  }
}

/**
 * fetch _UNUSED_BASE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_UNUSED_BASE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x44b20ee9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_UNUSED_BASE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_UNUSED_BASE_(chainId, __to);
    }
  }
}

/**
 * fetch _UNUSED_QUOTE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_UNUSED_QUOTE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1aae38e8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_UNUSED_QUOTE_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_UNUSED_QUOTE_(chainId, __to);
    }
  }
}

/**
 * fetch _VESTING_DURATION_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCP_VESTING_DURATION_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2f655da7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCP_VESTING_DURATION_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCP_VESTING_DURATION_(chainId, __to);
    }
  }
}

/**
 * fetch getClaimableLPToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCPGetClaimableLPToken(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6a7ba71e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCPGetClaimableLPTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCPGetClaimableLPToken(chainId, __to);
    }
  }
}

/**
 * fetch getExpectedAvgPrice
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchCPGetExpectedAvgPrice(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x486c5971', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCPGetExpectedAvgPriceQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCPGetExpectedAvgPrice(chainId, __to);
    }
  }
}

/**
 * fetch getRemainingLPRatio
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchCPGetRemainingLPRatio(chainId: number, __to: string, timestamp: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [timestamp]);
  const __data = hexlify(concat(['0x3f253e38', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCPGetRemainingLPRatioQueryOptions(chainId: number | undefined, __to: string | undefined, timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, timestamp],
    enabled: [!!chainId, !!__to, !!timestamp], 
    queryFn: () => {
        // @ts-ignore
        return fetchCPGetRemainingLPRatio(chainId, __to, timestamp);
    }
  }
}

/**
 * fetch getSettleResult
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} poolBase - uint256
 * @returns {bigint} poolQuote - uint256
 * @returns {bigint} poolI - uint256
 * @returns {bigint} unUsedBase - uint256
 * @returns {bigint} unUsedQuote - uint256
 */
export function fetchCPGetSettleResult(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x12911e49', __encodeData]));
  return contractRequests.batchCall<{
    poolBase: bigint;
    poolQuote: bigint;
    poolI: bigint;
    unUsedBase: bigint;
    unUsedQuote: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint256","uint256","uint256"])
}
export function getFetchCPGetSettleResultQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: [!!chainId, !!__to], 
    queryFn: () => {
        // @ts-ignore
        return fetchCPGetSettleResult(chainId, __to);
    }
  }
}

/**
 * fetch getShares
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchCPGetShares(chainId: number, __to: string, user: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xf04da65b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}
export function getFetchCPGetSharesQueryOptions(chainId: number | undefined, __to: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, user],
    enabled: [!!chainId, !!__to, !!user], 
    queryFn: () => {
        // @ts-ignore
        return fetchCPGetShares(chainId, __to, user);
    }
  }
}

/**
 * encode bid
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeCPBid(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x9cf5453d', __encodeData]));
}

/**
 * encode bidderClaim
 * @param {string} to - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeCPBidderClaim(to: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bytes"], [to,data]);
  return hexlify(concat(['0x95ca26fd', __encodeData]));
}

/**
 * encode cancel
 * @param {string} to - address
 * @param {number} amount - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeCPCancel(to: string, amount: number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [to,amount,data]);
  return hexlify(concat(['0xe44f82db', __encodeData]));
}

/**
 * encode claimLPToken

 * @returns {string} encode data
 */
export function encodeCPClaimLPToken() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x0bc3b1c0', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeCPClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode emergencySettle

 * @returns {string} encode data
 */
export function encodeCPEmergencySettle() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x06fe8766', __encodeData]));
}

/**
 * encode init
 * @param {Array<string>} addressList - address[]
 * @param {Array<number>} timeLine - uint256[]
 * @param {Array<number>} valueList - uint256[]
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeCPInit(addressList: Array<string>, timeLine: Array<number>, valueList: Array<number>, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address[]","uint256[]","uint256[]","bool"], [addressList,timeLine,valueList,isOpenTWAP]);
  return hexlify(concat(['0x83ba7866', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCPInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode settle

 * @returns {string} encode data
 */
export function encodeCPSettle() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x11da60b4', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeCPTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}