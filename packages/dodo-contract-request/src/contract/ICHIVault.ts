import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch PRECISION
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultPRECISION(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaaf5eb68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultPRECISIONQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultPRECISION', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultPRECISION(chainId as number,__to as string);
    }
  }
}

/**
 * fetch affiliate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultAffiliate(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x45e05f43', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultAffiliateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultAffiliate', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultAffiliate(chainId as number,__to as string);
    }
  }
}

/**
 * fetch allowToken0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchICHIVaultAllowToken0(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7f7a1eec', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"name":"","type":"bool","internalType":"bool"}])
}
export function getFetchICHIVaultAllowToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultAllowToken0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultAllowToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch allowToken1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchICHIVaultAllowToken1(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x37e41b40', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"name":"","type":"bool","internalType":"bool"}])
}
export function getFetchICHIVaultAllowToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultAllowToken1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultAllowToken1(chainId as number,__to as string);
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
export function fetchICHIVaultAllowance(chainId: number, __to: string, owner: string, spender: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultAllowanceQueryOptions(chainId: number | undefined, __to: string | undefined, owner: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultAllowance', chainId, __to, owner, spender],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && owner !== undefined && owner !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchICHIVaultAllowance(chainId as number,__to as string,owner as string,spender as string);
    }
  }
}

/**
 * fetch ammFeeRecipient
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultAmmFeeRecipient(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x897f078c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultAmmFeeRecipientQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultAmmFeeRecipient', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultAmmFeeRecipient(chainId as number,__to as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultBalanceOf(chainId: number, __to: string, account: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, account: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultBalanceOf', chainId, __to, account],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && account !== undefined && account !== null, 
    queryFn: () => {
        return fetchICHIVaultBalanceOf(chainId as number,__to as string,account as string);
    }
  }
}

/**
 * fetch baseLower
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchICHIVaultBaseLower(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfa082743', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultBaseLowerQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultBaseLower', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultBaseLower(chainId as number,__to as string);
    }
  }
}

/**
 * fetch baseUpper
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchICHIVaultBaseUpper(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x888a9134', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultBaseUpperQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultBaseUpper', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultBaseUpper(chainId as number,__to as string);
    }
  }
}

/**
 * fetch currentTick
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} tick - int24
 */
export function fetchICHIVaultCurrentTick(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x065e5360', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"tick","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultCurrentTickQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultCurrentTick', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultCurrentTick(chainId as number,__to as string);
    }
  }
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchICHIVaultDecimals(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint8","internalType":"uint8"}])
}
export function getFetchICHIVaultDecimalsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultDecimals', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultDecimals(chainId as number,__to as string);
    }
  }
}

/**
 * fetch deposit0Max
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultDeposit0Max(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x648cab85', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultDeposit0MaxQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultDeposit0Max', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultDeposit0Max(chainId as number,__to as string);
    }
  }
}

/**
 * fetch deposit1Max
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultDeposit1Max(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4d461fbb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultDeposit1MaxQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultDeposit1Max', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultDeposit1Max(chainId as number,__to as string);
    }
  }
}

/**
 * fetch fee
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} fee_ - uint24
 */
export function fetchICHIVaultFee(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xddca3f43', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"fee_","type":"uint24","internalType":"uint24"}])
}
export function getFetchICHIVaultFeeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultFee', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultFee(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getBasePosition
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} amount0 - uint256
 * @returns {bigint} amount1 - uint256
 */
export function fetchICHIVaultGetBasePosition(chainId: number, __to: string): Promise<{
    liquidity: bigint;
    amount0: bigint;
    amount1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd2eabcfc', __encodeData]));
  return contractRequests.batchCall<{
    liquidity: bigint;
    amount0: bigint;
    amount1: bigint;
  }>(chainId, __to, __data, [{"name":"liquidity","type":"uint128","internalType":"uint128"},{"name":"amount0","type":"uint256","internalType":"uint256"},{"name":"amount1","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultGetBasePositionQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultGetBasePosition', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultGetBasePosition(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getLimitPosition
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} amount0 - uint256
 * @returns {bigint} amount1 - uint256
 */
export function fetchICHIVaultGetLimitPosition(chainId: number, __to: string): Promise<{
    liquidity: bigint;
    amount0: bigint;
    amount1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa049de6b', __encodeData]));
  return contractRequests.batchCall<{
    liquidity: bigint;
    amount0: bigint;
    amount1: bigint;
  }>(chainId, __to, __data, [{"name":"liquidity","type":"uint128","internalType":"uint128"},{"name":"amount0","type":"uint256","internalType":"uint256"},{"name":"amount1","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultGetLimitPositionQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultGetLimitPosition', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultGetLimitPosition(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getTotalAmounts
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} total0 - uint256
 * @returns {bigint} total1 - uint256
 */
export function fetchICHIVaultGetTotalAmounts(chainId: number, __to: string): Promise<{
    total0: bigint;
    total1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc4a7761e', __encodeData]));
  return contractRequests.batchCall<{
    total0: bigint;
    total1: bigint;
  }>(chainId, __to, __data, [{"name":"total0","type":"uint256","internalType":"uint256"},{"name":"total1","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultGetTotalAmountsQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultGetTotalAmounts', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultGetTotalAmounts(chainId as number,__to as string);
    }
  }
}

/**
 * fetch hysteresis
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultHysteresis(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7aea5309', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultHysteresisQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultHysteresis', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultHysteresis(chainId as number,__to as string);
    }
  }
}

/**
 * fetch ichiVaultFactory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultIchiVaultFactory(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdd81fa63', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultIchiVaultFactoryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultIchiVaultFactory', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultIchiVaultFactory(chainId as number,__to as string);
    }
  }
}

/**
 * fetch limitLower
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchICHIVaultLimitLower(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x51e87af7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultLimitLowerQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultLimitLower', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultLimitLower(chainId as number,__to as string);
    }
  }
}

/**
 * fetch limitUpper
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchICHIVaultLimitUpper(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0f35bcac', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultLimitUpperQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultLimitUpper', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultLimitUpper(chainId as number,__to as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchICHIVaultName(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"string","internalType":"string"}])
}
export function getFetchICHIVaultNameQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultName', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultName(chainId as number,__to as string);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultOwner(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultOwnerQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultOwner', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultOwner(chainId as number,__to as string);
    }
  }
}

/**
 * fetch pool
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultPool(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16f0115b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultPoolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultPool', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultPool(chainId as number,__to as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchICHIVaultSymbol(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"string","internalType":"string"}])
}
export function getFetchICHIVaultSymbolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultSymbol', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultSymbol(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickSpacing
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchICHIVaultTickSpacing(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd0c93a7c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"int24","internalType":"int24"}])
}
export function getFetchICHIVaultTickSpacingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultTickSpacing', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultTickSpacing(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultToken0(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultToken0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchICHIVaultToken1(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"name":"","type":"address","internalType":"address"}])
}
export function getFetchICHIVaultToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultToken1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultToken1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchICHIVaultTotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint256","internalType":"uint256"}])
}
export function getFetchICHIVaultTotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultTotalSupply', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultTotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * fetch twapPeriod
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchICHIVaultTwapPeriod(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf6207326', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"name":"","type":"uint32","internalType":"uint32"}])
}
export function getFetchICHIVaultTwapPeriodQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchICHIVaultTwapPeriod', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchICHIVaultTwapPeriod(chainId as number,__to as string);
    }
  }
}

/**
 * encode algebraMintCallback
 * @param {string | number} amount0 - uint256
 * @param {string | number} amount1 - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeICHIVaultAlgebraMintCallback(amount0: string | number, amount1: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","bytes"], [amount0,amount1,data]);
  return hexlify(concat(['0x3dd657c5', __encodeData]));
}

/**
 * encode algebraSwapCallback
 * @param {string | number} amount0Delta - int256
 * @param {string | number} amount1Delta - int256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeICHIVaultAlgebraSwapCallback(amount0Delta: string | number, amount1Delta: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["int256","int256","bytes"], [amount0Delta,amount1Delta,data]);
  return hexlify(concat(['0x2c8958f6', __encodeData]));
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultApprove(spender: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode collectFees

 * @returns {string} encode data
 */
export function encodeICHIVaultCollectFees() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xc8796572', __encodeData]));
}

/**
 * encode decreaseAllowance
 * @param {string} spender - address
 * @param {string | number} subtractedValue - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultDecreaseAllowance(spender: string, subtractedValue: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,subtractedValue]);
  return hexlify(concat(['0xa457c2d7', __encodeData]));
}

/**
 * encode deposit
 * @param {string | number} deposit0 - uint256
 * @param {string | number} deposit1 - uint256
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeICHIVaultDeposit(deposit0: string | number, deposit1: string | number, to: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address"], [deposit0,deposit1,to]);
  return hexlify(concat(['0x8dbdbe6d', __encodeData]));
}

/**
 * encode increaseAllowance
 * @param {string} spender - address
 * @param {string | number} addedValue - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultIncreaseAllowance(spender: string, addedValue: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,addedValue]);
  return hexlify(concat(['0x39509351', __encodeData]));
}

/**
 * encode rebalance
 * @param {string | number} _baseLower - int24
 * @param {string | number} _baseUpper - int24
 * @param {string | number} _limitLower - int24
 * @param {string | number} _limitUpper - int24
 * @param {string | number} swapQuantity - int256
 * @returns {string} encode data
 */
export function encodeICHIVaultRebalance(_baseLower: string | number, _baseUpper: string | number, _limitLower: string | number, _limitUpper: string | number, swapQuantity: string | number) {
  const __encodeData = defaultAbiCoder.encode(["int24","int24","int24","int24","int256"], [_baseLower,_baseUpper,_limitLower,_limitUpper,swapQuantity]);
  return hexlify(concat(['0xd87346aa', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeICHIVaultRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode setAffiliate
 * @param {string} _affiliate - address
 * @returns {string} encode data
 */
export function encodeICHIVaultSetAffiliate(_affiliate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_affiliate]);
  return hexlify(concat(['0x2bbb56d9', __encodeData]));
}

/**
 * encode setAmmFeeRecipient
 * @param {string} _ammFeeRecipient - address
 * @returns {string} encode data
 */
export function encodeICHIVaultSetAmmFeeRecipient(_ammFeeRecipient: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_ammFeeRecipient]);
  return hexlify(concat(['0x81de128b', __encodeData]));
}

/**
 * encode setDepositMax
 * @param {string | number} _deposit0Max - uint256
 * @param {string | number} _deposit1Max - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultSetDepositMax(_deposit0Max: string | number, _deposit1Max: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [_deposit0Max,_deposit1Max]);
  return hexlify(concat(['0x3e091ee9', __encodeData]));
}

/**
 * encode setHysteresis
 * @param {string | number} _hysteresis - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultSetHysteresis(_hysteresis: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_hysteresis]);
  return hexlify(concat(['0x5ffc1ff7', __encodeData]));
}

/**
 * encode setTwapPeriod
 * @param {string | number} newTwapPeriod - uint32
 * @returns {string} encode data
 */
export function encodeICHIVaultSetTwapPeriod(newTwapPeriod: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint32"], [newTwapPeriod]);
  return hexlify(concat(['0xf9c95d46', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeICHIVaultTransfer(to: string, amount: string | number) {
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
export function encodeICHIVaultTransferFrom(from: string, to: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeICHIVaultTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} shares - uint256
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeICHIVaultWithdraw(shares: string | number, to: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [shares,to]);
  return hexlify(concat(['0x00f714ce', __encodeData]));
}