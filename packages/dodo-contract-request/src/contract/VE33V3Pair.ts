import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch factory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairFactory(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairFactoryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairFactory', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairFactory(chainId as number,__to as string);
    }
  }
}

/**
 * fetch factoryRegistry
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairFactoryRegistry(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3bf0c9fb', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairFactoryRegistryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairFactoryRegistry', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairFactoryRegistry(chainId as number,__to as string);
    }
  }
}

/**
 * fetch fee
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint24
 */
export function fetchVE33V3PairFee(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xddca3f43', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint24","name":"","type":"uint24"}])
}
export function getFetchVE33V3PairFeeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairFee', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairFee(chainId as number,__to as string);
    }
  }
}

/**
 * fetch feeGrowthGlobal0X128
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairFeeGrowthGlobal0X128(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf3058399', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairFeeGrowthGlobal0X128QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairFeeGrowthGlobal0X128', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairFeeGrowthGlobal0X128(chainId as number,__to as string);
    }
  }
}

/**
 * fetch feeGrowthGlobal1X128
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairFeeGrowthGlobal1X128(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46141319', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairFeeGrowthGlobal1X128QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairFeeGrowthGlobal1X128', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairFeeGrowthGlobal1X128(chainId as number,__to as string);
    }
  }
}

/**
 * fetch gauge
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairGauge(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa6f19c84', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairGaugeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairGauge', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairGauge(chainId as number,__to as string);
    }
  }
}

/**
 * fetch gaugeFees
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} token0 - uint128
 * @returns {bigint} token1 - uint128
 */
export function fetchVE33V3PairGaugeFees(chainId: number, __to: string): Promise<{
    token0: bigint;
    token1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x293833ba', __encodeData]));
  return contractRequests.batchCall<{
    token0: bigint;
    token1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}])
}
export function getFetchVE33V3PairGaugeFeesQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairGaugeFees', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairGaugeFees(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getRewardGrowthInside
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} tickLower - int24
 * @param {number} tickUpper - int24
 * @param {number} _rewardGrowthGlobalX128 - uint256
 * @returns {bigint} rewardGrowthInside - uint256
 */
export function fetchVE33V3PairGetRewardGrowthInside(chainId: number, __to: string, tickLower: number, tickUpper: number, _rewardGrowthGlobalX128: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["int24","int24","uint256"], [tickLower,tickUpper,_rewardGrowthGlobalX128]);
  const __data = hexlify(concat(['0xa16368c9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"rewardGrowthInside","type":"uint256"}])
}
export function getFetchVE33V3PairGetRewardGrowthInsideQueryOptions(chainId: number | undefined, __to: string | undefined, tickLower: number | undefined, tickUpper: number | undefined, _rewardGrowthGlobalX128: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairGetRewardGrowthInside', chainId, __to, tickLower, tickUpper, _rewardGrowthGlobalX128],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && tickLower !== undefined && tickLower !== null && tickUpper !== undefined && tickUpper !== null && _rewardGrowthGlobalX128 !== undefined && _rewardGrowthGlobalX128 !== null, 
    queryFn: () => {
        return fetchVE33V3PairGetRewardGrowthInside(chainId as number,__to as string,tickLower as number,tickUpper as number,_rewardGrowthGlobalX128 as number);
    }
  }
}

/**
 * fetch lastUpdated
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint32
 */
export function fetchVE33V3PairLastUpdated(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd0b06f5d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint32","name":"","type":"uint32"}])
}
export function getFetchVE33V3PairLastUpdatedQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairLastUpdated', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairLastUpdated(chainId as number,__to as string);
    }
  }
}

/**
 * fetch liquidity
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 */
export function fetchVE33V3PairLiquidity(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1a686502', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchVE33V3PairLiquidityQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairLiquidity', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairLiquidity(chainId as number,__to as string);
    }
  }
}

/**
 * fetch maxLiquidityPerTick
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 */
export function fetchVE33V3PairMaxLiquidityPerTick(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x70cf754a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchVE33V3PairMaxLiquidityPerTickQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairMaxLiquidityPerTick', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairMaxLiquidityPerTick(chainId as number,__to as string);
    }
  }
}

/**
 * fetch nft
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairNft(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x47ccca02', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairNftQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairNft', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairNft(chainId as number,__to as string);
    }
  }
}

/**
 * fetch observations
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} blockTimestamp - uint32
 * @returns {bigint} tickCumulative - int56
 * @returns {bigint} secondsPerLiquidityCumulativeX128 - uint160
 * @returns {boolean} initialized - bool
 */
export function fetchVE33V3PairObservations(chainId: number, __to: string, __input1: number): Promise<{
    blockTimestamp: bigint;
    tickCumulative: bigint;
    secondsPerLiquidityCumulativeX128: bigint;
    initialized: boolean;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x252c09d7', __encodeData]));
  return contractRequests.batchCall<{
    blockTimestamp: bigint;
    tickCumulative: bigint;
    secondsPerLiquidityCumulativeX128: bigint;
    initialized: boolean;
  }>(chainId, __to, __data, [{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}])
}
export function getFetchVE33V3PairObservationsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairObservations', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3PairObservations(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch observe
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {Array<number>} secondsAgos - uint32[]
 * @returns {Array<bigint>} tickCumulatives - int56[]
 * @returns {Array<bigint>} secondsPerLiquidityCumulativeX128s - uint160[]
 */
export function fetchVE33V3PairObserve(chainId: number, __to: string, secondsAgos: Array<number>): Promise<{
    tickCumulatives: Array<bigint>;
    secondsPerLiquidityCumulativeX128s: Array<bigint>;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint32[]"], [secondsAgos]);
  const __data = hexlify(concat(['0x883bdbfd', __encodeData]));
  return contractRequests.batchCall<{
    tickCumulatives: Array<bigint>;
    secondsPerLiquidityCumulativeX128s: Array<bigint>;
  }>(chainId, __to, __data, [{"internalType":"int56[]","name":"tickCumulatives","type":"int56[]"},{"internalType":"uint160[]","name":"secondsPerLiquidityCumulativeX128s","type":"uint160[]"}])
}
export function getFetchVE33V3PairObserveQueryOptions(chainId: number | undefined, __to: string | undefined, secondsAgos: Array<number> | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairObserve', chainId, __to, secondsAgos],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && secondsAgos !== undefined && secondsAgos !== null, 
    queryFn: () => {
        return fetchVE33V3PairObserve(chainId as number,__to as string,secondsAgos as Array<number>);
    }
  }
}

/**
 * fetch periodFinish
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairPeriodFinish(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xebe2b12b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairPeriodFinishQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairPeriodFinish', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairPeriodFinish(chainId as number,__to as string);
    }
  }
}

/**
 * fetch positions
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - bytes32
 * @returns {bigint} liquidity - uint128
 * @returns {bigint} feeGrowthInside0LastX128 - uint256
 * @returns {bigint} feeGrowthInside1LastX128 - uint256
 * @returns {bigint} tokensOwed0 - uint128
 * @returns {bigint} tokensOwed1 - uint128
 */
export function fetchVE33V3PairPositions(chainId: number, __to: string, __input1: string): Promise<{
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x514ea4bf', __encodeData]));
  return contractRequests.batchCall<{
    liquidity: bigint;
    feeGrowthInside0LastX128: bigint;
    feeGrowthInside1LastX128: bigint;
    tokensOwed0: bigint;
    tokensOwed1: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}])
}
export function getFetchVE33V3PairPositionsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairPositions', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3PairPositions(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch rewardGrowthGlobalX128
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairRewardGrowthGlobalX128(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x57806ada', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairRewardGrowthGlobalX128QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairRewardGrowthGlobalX128', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairRewardGrowthGlobalX128(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairRewardRate(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7b0a47ee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairRewardRateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairRewardRate', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairRewardRate(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardReserve
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairRewardReserve(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcab64bcd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairRewardReserveQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairRewardReserve', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairRewardReserve(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rollover
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairRollover(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb056b49a', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairRolloverQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairRollover', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairRollover(chainId as number,__to as string);
    }
  }
}

/**
 * fetch slot0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} sqrtPriceX96 - uint160
 * @returns {bigint} tick - int24
 * @returns {bigint} observationIndex - uint16
 * @returns {bigint} observationCardinality - uint16
 * @returns {bigint} observationCardinalityNext - uint16
 * @returns {boolean} unlocked - bool
 */
export function fetchVE33V3PairSlot0(chainId: number, __to: string): Promise<{
    sqrtPriceX96: bigint;
    tick: bigint;
    observationIndex: bigint;
    observationCardinality: bigint;
    observationCardinalityNext: bigint;
    unlocked: boolean;
  }> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3850c7bd', __encodeData]));
  return contractRequests.batchCall<{
    sqrtPriceX96: bigint;
    tick: bigint;
    observationIndex: bigint;
    observationCardinality: bigint;
    observationCardinalityNext: bigint;
    unlocked: boolean;
  }>(chainId, __to, __data, [{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"bool","name":"unlocked","type":"bool"}])
}
export function getFetchVE33V3PairSlot0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairSlot0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairSlot0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch snapshotCumulativesInside
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} tickLower - int24
 * @param {number} tickUpper - int24
 * @returns {bigint} tickCumulativeInside - int56
 * @returns {bigint} secondsPerLiquidityInsideX128 - uint160
 * @returns {bigint} secondsInside - uint32
 */
export function fetchVE33V3PairSnapshotCumulativesInside(chainId: number, __to: string, tickLower: number, tickUpper: number): Promise<{
    tickCumulativeInside: bigint;
    secondsPerLiquidityInsideX128: bigint;
    secondsInside: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["int24","int24"], [tickLower,tickUpper]);
  const __data = hexlify(concat(['0xa38807f2', __encodeData]));
  return contractRequests.batchCall<{
    tickCumulativeInside: bigint;
    secondsPerLiquidityInsideX128: bigint;
    secondsInside: bigint;
  }>(chainId, __to, __data, [{"internalType":"int56","name":"tickCumulativeInside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityInsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsInside","type":"uint32"}])
}
export function getFetchVE33V3PairSnapshotCumulativesInsideQueryOptions(chainId: number | undefined, __to: string | undefined, tickLower: number | undefined, tickUpper: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairSnapshotCumulativesInside', chainId, __to, tickLower, tickUpper],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && tickLower !== undefined && tickLower !== null && tickUpper !== undefined && tickUpper !== null, 
    queryFn: () => {
        return fetchVE33V3PairSnapshotCumulativesInside(chainId as number,__to as string,tickLower as number,tickUpper as number);
    }
  }
}

/**
 * fetch stakedLiquidity
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint128
 */
export function fetchVE33V3PairStakedLiquidity(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3ab04b20', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint128","name":"","type":"uint128"}])
}
export function getFetchVE33V3PairStakedLiquidityQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairStakedLiquidity', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairStakedLiquidity(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickBitmap
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - int16
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3PairTickBitmap(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["int16"], [__input1]);
  const __data = hexlify(concat(['0x5339c296', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3PairTickBitmapQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairTickBitmap', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3PairTickBitmap(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch tickSpacing
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchVE33V3PairTickSpacing(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd0c93a7c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchVE33V3PairTickSpacingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairTickSpacing', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairTickSpacing(chainId as number,__to as string);
    }
  }
}

/**
 * fetch ticks
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - int24
 * @returns {bigint} liquidityGross - uint128
 * @returns {bigint} liquidityNet - int128
 * @returns {bigint} stakedLiquidityNet - int128
 * @returns {bigint} feeGrowthOutside0X128 - uint256
 * @returns {bigint} feeGrowthOutside1X128 - uint256
 * @returns {bigint} rewardGrowthOutsideX128 - uint256
 * @returns {bigint} tickCumulativeOutside - int56
 * @returns {bigint} secondsPerLiquidityOutsideX128 - uint160
 * @returns {bigint} secondsOutside - uint32
 * @returns {boolean} initialized - bool
 */
export function fetchVE33V3PairTicks(chainId: number, __to: string, __input1: number): Promise<{
    liquidityGross: bigint;
    liquidityNet: bigint;
    stakedLiquidityNet: bigint;
    feeGrowthOutside0X128: bigint;
    feeGrowthOutside1X128: bigint;
    rewardGrowthOutsideX128: bigint;
    tickCumulativeOutside: bigint;
    secondsPerLiquidityOutsideX128: bigint;
    secondsOutside: bigint;
    initialized: boolean;
  }> {
  const __encodeData = defaultAbiCoder.encode(["int24"], [__input1]);
  const __data = hexlify(concat(['0xf30dba93', __encodeData]));
  return contractRequests.batchCall<{
    liquidityGross: bigint;
    liquidityNet: bigint;
    stakedLiquidityNet: bigint;
    feeGrowthOutside0X128: bigint;
    feeGrowthOutside1X128: bigint;
    rewardGrowthOutsideX128: bigint;
    tickCumulativeOutside: bigint;
    secondsPerLiquidityOutsideX128: bigint;
    secondsOutside: bigint;
    initialized: boolean;
  }>(chainId, __to, __data, [{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"int128","name":"stakedLiquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"uint256","name":"rewardGrowthOutsideX128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}])
}
export function getFetchVE33V3PairTicksQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairTicks', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3PairTicks(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairToken0(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairToken0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3PairToken1(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3PairToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairToken1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairToken1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch unstakedFee
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint24
 */
export function fetchVE33V3PairUnstakedFee(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb64cc67b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint24","name":"","type":"uint24"}])
}
export function getFetchVE33V3PairUnstakedFeeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3PairUnstakedFee', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3PairUnstakedFee(chainId as number,__to as string);
    }
  }
}

/**
 * encode burn
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {string | number} amount - uint128
 * @param {string} owner - address
 * @returns {string} encode data
 */
export function encodeVE33V3PairBurn(tickLower: string | number, tickUpper: string | number, amount: string | number, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["int24","int24","uint128","address"], [tickLower,tickUpper,amount,owner]);
  return hexlify(concat(['0x6f89244c', __encodeData]));
}

/**
 * encode burn
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {string | number} amount - uint128
 * @returns {string} encode data
 */
export function encodeVE33V3PairBurn2(tickLower: string | number, tickUpper: string | number, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["int24","int24","uint128"], [tickLower,tickUpper,amount]);
  return hexlify(concat(['0xa34123a7', __encodeData]));
}

/**
 * encode collect
 * @param {string} recipient - address
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {string | number} amount0Requested - uint128
 * @param {string | number} amount1Requested - uint128
 * @param {string} owner - address
 * @returns {string} encode data
 */
export function encodeVE33V3PairCollect(recipient: string, tickLower: string | number, tickUpper: string | number, amount0Requested: string | number, amount1Requested: string | number, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address","int24","int24","uint128","uint128","address"], [recipient,tickLower,tickUpper,amount0Requested,amount1Requested,owner]);
  return hexlify(concat(['0x31338374', __encodeData]));
}

/**
 * encode collect
 * @param {string} recipient - address
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {string | number} amount0Requested - uint128
 * @param {string | number} amount1Requested - uint128
 * @returns {string} encode data
 */
export function encodeVE33V3PairCollect2(recipient: string, tickLower: string | number, tickUpper: string | number, amount0Requested: string | number, amount1Requested: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","int24","int24","uint128","uint128"], [recipient,tickLower,tickUpper,amount0Requested,amount1Requested]);
  return hexlify(concat(['0x4f1eb3d8', __encodeData]));
}

/**
 * encode collectFees

 * @returns {string} encode data
 */
export function encodeVE33V3PairCollectFees() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xc8796572', __encodeData]));
}

/**
 * encode flash
 * @param {string} recipient - address
 * @param {string | number} amount0 - uint256
 * @param {string | number} amount1 - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeVE33V3PairFlash(recipient: string, amount0: string | number, amount1: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","bytes"], [recipient,amount0,amount1,data]);
  return hexlify(concat(['0x490e6cbc', __encodeData]));
}

/**
 * encode increaseObservationCardinalityNext
 * @param {string | number} observationCardinalityNext - uint16
 * @returns {string} encode data
 */
export function encodeVE33V3PairIncreaseObservationCardinalityNext(observationCardinalityNext: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint16"], [observationCardinalityNext]);
  return hexlify(concat(['0x32148f67', __encodeData]));
}

/**
 * encode initialize
 * @param {string} _factory - address
 * @param {string} _token0 - address
 * @param {string} _token1 - address
 * @param {string | number} _tickSpacing - int24
 * @param {string} _factoryRegistry - address
 * @param {string | number} _sqrtPriceX96 - uint160
 * @returns {string} encode data
 */
export function encodeVE33V3PairInitialize(_factory: string, _token0: string, _token1: string, _tickSpacing: string | number, _factoryRegistry: string, _sqrtPriceX96: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","int24","address","uint160"], [_factory,_token0,_token1,_tickSpacing,_factoryRegistry,_sqrtPriceX96]);
  return hexlify(concat(['0x2071d884', __encodeData]));
}

/**
 * encode mint
 * @param {string} recipient - address
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {string | number} amount - uint128
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeVE33V3PairMint(recipient: string, tickLower: string | number, tickUpper: string | number, amount: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","int24","int24","uint128","bytes"], [recipient,tickLower,tickUpper,amount,data]);
  return hexlify(concat(['0x3c8a7d8d', __encodeData]));
}

/**
 * encode setGaugeAndPositionManager
 * @param {string} _gauge - address
 * @param {string} _nft - address
 * @returns {string} encode data
 */
export function encodeVE33V3PairSetGaugeAndPositionManager(_gauge: string, _nft: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [_gauge,_nft]);
  return hexlify(concat(['0x1f7c3568', __encodeData]));
}

/**
 * encode stake
 * @param {string | number} stakedLiquidityDelta - int128
 * @param {string | number} tickLower - int24
 * @param {string | number} tickUpper - int24
 * @param {boolean} positionUpdate - bool
 * @returns {string} encode data
 */
export function encodeVE33V3PairStake(stakedLiquidityDelta: string | number, tickLower: string | number, tickUpper: string | number, positionUpdate: boolean) {
  const __encodeData = defaultAbiCoder.encode(["int128","int24","int24","bool"], [stakedLiquidityDelta,tickLower,tickUpper,positionUpdate]);
  return hexlify(concat(['0x4ed6210f', __encodeData]));
}

/**
 * encode swap
 * @param {string} recipient - address
 * @param {boolean} zeroForOne - bool
 * @param {string | number} amountSpecified - int256
 * @param {string | number} sqrtPriceLimitX96 - uint160
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeVE33V3PairSwap(recipient: string, zeroForOne: boolean, amountSpecified: string | number, sqrtPriceLimitX96: string | number, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","int256","uint160","bytes"], [recipient,zeroForOne,amountSpecified,sqrtPriceLimitX96,data]);
  return hexlify(concat(['0x128acb08', __encodeData]));
}

/**
 * encode syncReward
 * @param {string | number} _rewardRate - uint256
 * @param {string | number} _rewardReserve - uint256
 * @param {string | number} _periodFinish - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3PairSyncReward(_rewardRate: string | number, _rewardReserve: string | number, _periodFinish: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [_rewardRate,_rewardReserve,_periodFinish]);
  return hexlify(concat(['0x60a73f9b', __encodeData]));
}

/**
 * encode updateRewardsGrowthGlobal

 * @returns {string} encode data
 */
export function encodeVE33V3PairUpdateRewardsGrowthGlobal() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x1b410960', __encodeData]));
}