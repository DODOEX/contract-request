import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch communityVault
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchAlgebraPoolCommunityVault(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x53e97868', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchAlgebraPoolCommunityVaultQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolCommunityVault(chainId as number,__to as string);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchAlgebraPoolFactory(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchAlgebraPoolFactoryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolFactory(chainId as number,__to as string);
    }
  }
}

/**
 * fetch fee
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} currentFee - uint16
 */
export function fetchAlgebraPoolFee(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xddca3f43', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint16","name":"currentFee","type":"uint16"}])
}
export function getFetchAlgebraPoolFeeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolFee(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getCommunityFeePending
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 * @returns {bigint} __output1 - uint128
 */
export function fetchAlgebraPoolGetCommunityFeePending(chainId: number, __to: string): Promise<{
    __output0: bigint;
    __output1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7bd78025', __encodeData]));
  return contractRequests.batchCall<{
    __output0: bigint;
    __output1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"},{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchAlgebraPoolGetCommunityFeePendingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolGetCommunityFeePending(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getPluginFeePending
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 * @returns {bigint} __output1 - uint128
 */
export function fetchAlgebraPoolGetPluginFeePending(chainId: number, __to: string): Promise<{
    __output0: bigint;
    __output1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa1eded87', __encodeData]));
  return contractRequests.batchCall<{
    __output0: bigint;
    __output1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"},{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchAlgebraPoolGetPluginFeePendingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolGetPluginFeePending(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getReserves
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 * @returns {bigint} __output1 - uint128
 */
export function fetchAlgebraPoolGetReserves(chainId: number, __to: string): Promise<{
    __output0: bigint;
    __output1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0902f1ac', __encodeData]));
  return contractRequests.batchCall<{
    __output0: bigint;
    __output1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"},{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchAlgebraPoolGetReservesQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolGetReserves(chainId as number,__to as string);
    }
  }
}

/**
 * fetch globalState
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} price - uint160
 * @returns {bigint} tick - int24
 * @returns {bigint} lastFee - uint16
 * @returns {bigint} pluginConfig - uint8
 * @returns {bigint} communityFee - uint16
 * @returns {boolean} unlocked - bool
 */
export function fetchAlgebraPoolGlobalState(chainId: number, __to: string): Promise<{
    price: bigint;
    tick: bigint;
    lastFee: bigint;
    pluginConfig: bigint;
    communityFee: bigint;
    unlocked: boolean;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe76c01e4', __encodeData]));
  return contractRequests.batchCall<{
    price: bigint;
    tick: bigint;
    lastFee: bigint;
    pluginConfig: bigint;
    communityFee: bigint;
    unlocked: boolean;
  }>(chainId, __to, __data, [{"internalType":"uint160","name":"price","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"lastFee","type":"uint16"},{"internalType":"uint8","name":"pluginConfig","type":"uint8"},{"internalType":"uint16","name":"communityFee","type":"uint16"},{"internalType":"bool","name":"unlocked","type":"bool"}])
}
export function getFetchAlgebraPoolGlobalStateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolGlobalState(chainId as number,__to as string);
    }
  }
}

/**
 * fetch isUnlocked
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} unlocked - bool
 */
export function fetchAlgebraPoolIsUnlocked(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8380edb7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"unlocked","type":"bool"}])
}
export function getFetchAlgebraPoolIsUnlockedQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolIsUnlocked(chainId as number,__to as string);
    }
  }
}

/**
 * fetch lastFeeTransferTimestamp
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchAlgebraPoolLastFeeTransferTimestamp(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x77f8c3a9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchAlgebraPoolLastFeeTransferTimestampQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolLastFeeTransferTimestamp(chainId as number,__to as string);
    }
  }
}

/**
 * fetch liquidity
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 */
export function fetchAlgebraPoolLiquidity(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1a686502', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchAlgebraPoolLiquidityQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolLiquidity(chainId as number,__to as string);
    }
  }
}

/**
 * fetch maxLiquidityPerTick
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 */
export function fetchAlgebraPoolMaxLiquidityPerTick(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x70cf754a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchAlgebraPoolMaxLiquidityPerTickQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolMaxLiquidityPerTick(chainId as number,__to as string);
    }
  }
}

/**
 * fetch nextTickGlobal
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchAlgebraPoolNextTickGlobal(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd5c35a7e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchAlgebraPoolNextTickGlobalQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolNextTickGlobal(chainId as number,__to as string);
    }
  }
}

/**
 * fetch plugin
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchAlgebraPoolPlugin(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xef01df4f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchAlgebraPoolPluginQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolPlugin(chainId as number,__to as string);
    }
  }
}

/**
 * fetch positions
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - bytes32
 * @returns {bigint} liquidity - uint256
 * @returns {bigint} innerFeeGrowth0Token - uint256
 * @returns {bigint} innerFeeGrowth1Token - uint256
 * @returns {bigint} fees0 - uint128
 * @returns {bigint} fees1 - uint128
 */
export function fetchAlgebraPoolPositions(chainId: number, __to: string, __input1: string): Promise<{
    liquidity: bigint;
    innerFeeGrowth0Token: bigint;
    innerFeeGrowth1Token: bigint;
    fees0: bigint;
    fees1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x514ea4bf', __encodeData]));
  return contractRequests.batchCall<{
    liquidity: bigint;
    innerFeeGrowth0Token: bigint;
    innerFeeGrowth1Token: bigint;
    fees0: bigint;
    fees1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"innerFeeGrowth0Token","type":"uint256"},{"internalType":"uint256","name":"innerFeeGrowth1Token","type":"uint256"},{"internalType":"uint128","name":"fees0","type":"uint128"},{"internalType":"uint128","name":"fees1","type":"uint128"}])
}
export function getFetchAlgebraPoolPositionsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchAlgebraPoolPositions(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch prevTickGlobal
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchAlgebraPoolPrevTickGlobal(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x050a4d21', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchAlgebraPoolPrevTickGlobalQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolPrevTickGlobal(chainId as number,__to as string);
    }
  }
}

/**
 * fetch safelyGetStateOfAMM
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} sqrtPrice - uint160
 * @returns {bigint} tick - int24
 * @returns {bigint} lastFee - uint16
 * @returns {bigint} pluginConfig - uint8
 * @returns {bigint} activeLiquidity - uint128
 * @returns {bigint} nextTick - int24
 * @returns {bigint} previousTick - int24
 */
export function fetchAlgebraPoolSafelyGetStateOfAMM(chainId: number, __to: string): Promise<{
    sqrtPrice: bigint;
    tick: bigint;
    lastFee: bigint;
    pluginConfig: bigint;
    activeLiquidity: bigint;
    nextTick: bigint;
    previousTick: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x97ce1c51', __encodeData]));
  return contractRequests.batchCall<{
    sqrtPrice: bigint;
    tick: bigint;
    lastFee: bigint;
    pluginConfig: bigint;
    activeLiquidity: bigint;
    nextTick: bigint;
    previousTick: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint160","name":"sqrtPrice","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"lastFee","type":"uint16"},{"internalType":"uint8","name":"pluginConfig","type":"uint8"},{"internalType":"uint128","name":"activeLiquidity","type":"uint128"},{"internalType":"int24","name":"nextTick","type":"int24"},{"internalType":"int24","name":"previousTick","type":"int24"}])
}
export function getFetchAlgebraPoolSafelyGetStateOfAMMQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolSafelyGetStateOfAMM(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickSpacing
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchAlgebraPoolTickSpacing(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd0c93a7c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchAlgebraPoolTickSpacingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTickSpacing(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickTable
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - int16
 * @returns {bigint} __output0 - uint256
 */
export function fetchAlgebraPoolTickTable(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["int16"], [__input1]);
  const __data = hexlify(concat(['0xc677e3e0', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchAlgebraPoolTickTableQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTickTable(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch tickTreeRoot
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchAlgebraPoolTickTreeRoot(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x578b9a36', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchAlgebraPoolTickTreeRootQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTickTreeRoot(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickTreeSecondLayer
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - int16
 * @returns {bigint} __output0 - uint256
 */
export function fetchAlgebraPoolTickTreeSecondLayer(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["int16"], [__input1]);
  const __data = hexlify(concat(['0xd8619037', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchAlgebraPoolTickTreeSecondLayerQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTickTreeSecondLayer(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch ticks
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - int24
 * @returns {bigint} liquidityTotal - uint256
 * @returns {bigint} liquidityDelta - int128
 * @returns {bigint} prevTick - int24
 * @returns {bigint} nextTick - int24
 * @returns {bigint} outerFeeGrowth0Token - uint256
 * @returns {bigint} outerFeeGrowth1Token - uint256
 */
export function fetchAlgebraPoolTicks(chainId: number, __to: string, __input1: number): Promise<{
    liquidityTotal: bigint;
    liquidityDelta: bigint;
    prevTick: bigint;
    nextTick: bigint;
    outerFeeGrowth0Token: bigint;
    outerFeeGrowth1Token: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["int24"], [__input1]);
  const __data = hexlify(concat(['0xf30dba93', __encodeData]));
  return contractRequests.batchCall<{
    liquidityTotal: bigint;
    liquidityDelta: bigint;
    prevTick: bigint;
    nextTick: bigint;
    outerFeeGrowth0Token: bigint;
    outerFeeGrowth1Token: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"liquidityTotal","type":"uint256"},{"internalType":"int128","name":"liquidityDelta","type":"int128"},{"internalType":"int24","name":"prevTick","type":"int24"},{"internalType":"int24","name":"nextTick","type":"int24"},{"internalType":"uint256","name":"outerFeeGrowth0Token","type":"uint256"},{"internalType":"uint256","name":"outerFeeGrowth1Token","type":"uint256"}])
}
export function getFetchAlgebraPoolTicksQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTicks(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchAlgebraPoolToken0(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchAlgebraPoolToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchAlgebraPoolToken1(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchAlgebraPoolToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolToken1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalFeeGrowth0Token
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchAlgebraPoolTotalFeeGrowth0Token(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6378ae44', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchAlgebraPoolTotalFeeGrowth0TokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTotalFeeGrowth0Token(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalFeeGrowth1Token
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchAlgebraPoolTotalFeeGrowth1Token(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xecdecf42', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchAlgebraPoolTotalFeeGrowth1TokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchAlgebraPoolTotalFeeGrowth1Token(chainId as number,__to as string);
    }
  }
}

/**
 * encode burn
 * @param {string | number} bottomTick - int24
 * @param {string | number} topTick - int24
 * @param {string | number} amount - uint128
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeAlgebraPoolBurn(bottomTick: string | number, topTick: string | number, amount: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["int24","int24","uint128","bytes"], [bottomTick,topTick,amount,data]);
  return hexlify(concat(['0x3b3bc70e', __encodeData]));
}

/**
 * encode collect
 * @param {string} recipient - address
 * @param {string | number} bottomTick - int24
 * @param {string | number} topTick - int24
 * @param {string | number} amount0Requested - uint128
 * @param {string | number} amount1Requested - uint128
 * @returns {string} encode data
 */
export function encodeAlgebraPoolCollect(recipient: string, bottomTick: string | number, topTick: string | number, amount0Requested: string | number, amount1Requested: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","int24","int24","uint128","uint128"], [recipient,bottomTick,topTick,amount0Requested,amount1Requested]);
  return hexlify(concat(['0x4f1eb3d8', __encodeData]));
}

/**
 * encode flash
 * @param {string} recipient - address
 * @param {string | number} amount0 - uint256
 * @param {string | number} amount1 - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeAlgebraPoolFlash(recipient: string, amount0: string | number, amount1: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","bytes"], [recipient,amount0,amount1,data]);
  return hexlify(concat(['0x490e6cbc', __encodeData]));
}

/**
 * encode initialize
 * @param {string | number} initialPrice - uint160
 * @returns {string} encode data
 */
export function encodeAlgebraPoolInitialize(initialPrice: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint160"], [initialPrice]);
  return hexlify(concat(['0xf637731d', __encodeData]));
}

/**
 * encode mint
 * @param {string} leftoversRecipient - address
 * @param {string} recipient - address
 * @param {string | number} bottomTick - int24
 * @param {string | number} topTick - int24
 * @param {string | number} liquidityDesired - uint128
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeAlgebraPoolMint(leftoversRecipient: string, recipient: string, bottomTick: string | number, topTick: string | number, liquidityDesired: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","int24","int24","uint128","bytes"], [leftoversRecipient,recipient,bottomTick,topTick,liquidityDesired,data]);
  return hexlify(concat(['0xaafe29c0', __encodeData]));
}

/**
 * encode setCommunityFee
 * @param {string | number} newCommunityFee - uint16
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetCommunityFee(newCommunityFee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint16"], [newCommunityFee]);
  return hexlify(concat(['0x240a875a', __encodeData]));
}

/**
 * encode setCommunityVault
 * @param {string} newCommunityVault - address
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetCommunityVault(newCommunityVault: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newCommunityVault]);
  return hexlify(concat(['0xd8544cf3', __encodeData]));
}

/**
 * encode setFee
 * @param {string | number} newFee - uint16
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetFee(newFee: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint16"], [newFee]);
  return hexlify(concat(['0x8e005553', __encodeData]));
}

/**
 * encode setPlugin
 * @param {string} newPluginAddress - address
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetPlugin(newPluginAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newPluginAddress]);
  return hexlify(concat(['0xcc1f97cf', __encodeData]));
}

/**
 * encode setPluginConfig
 * @param {string | number} newConfig - uint8
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetPluginConfig(newConfig: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint8"], [newConfig]);
  return hexlify(concat(['0xbca57f81', __encodeData]));
}

/**
 * encode setTickSpacing
 * @param {string | number} newTickSpacing - int24
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSetTickSpacing(newTickSpacing: string | number) {
  const __encodeData = defaultAbiCoder.encode(["int24"], [newTickSpacing]);
  return hexlify(concat(['0xf085a610', __encodeData]));
}

/**
 * encode skim

 * @returns {string} encode data
 */
export function encodeAlgebraPoolSkim() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x1dd19cb4', __encodeData]));
}

/**
 * encode swap
 * @param {string} recipient - address
 * @param {boolean} zeroToOne - bool
 * @param {string | number} amountRequired - int256
 * @param {string | number} limitSqrtPrice - uint160
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSwap(recipient: string, zeroToOne: boolean, amountRequired: string | number, limitSqrtPrice: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","int256","uint160","bytes"], [recipient,zeroToOne,amountRequired,limitSqrtPrice,data]);
  return hexlify(concat(['0x128acb08', __encodeData]));
}

/**
 * encode swapWithPaymentInAdvance
 * @param {string} leftoversRecipient - address
 * @param {string} recipient - address
 * @param {boolean} zeroToOne - bool
 * @param {string | number} amountToSell - int256
 * @param {string | number} limitSqrtPrice - uint160
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeAlgebraPoolSwapWithPaymentInAdvance(leftoversRecipient: string, recipient: string, zeroToOne: boolean, amountToSell: string | number, limitSqrtPrice: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bool","int256","uint160","bytes"], [leftoversRecipient,recipient,zeroToOne,amountToSell,limitSqrtPrice,data]);
  return hexlify(concat(['0x9e4e0227', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeAlgebraPoolSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}