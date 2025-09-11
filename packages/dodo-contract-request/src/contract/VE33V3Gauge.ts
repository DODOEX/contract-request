import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch WETH9
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeWETH9(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4aa4a4fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeWETH9QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeWETH9', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeWETH9(chainId as number,__to as string);
    }
  }
}

/**
 * fetch earned
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} account - address
 * @param {number} tokenId - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeEarned(chainId: number, __to: string, account: string, tokenId: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,tokenId]);
  const __data = hexlify(concat(['0x3e491d47', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeEarnedQueryOptions(chainId: number | undefined, __to: string | undefined, account: string | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeEarned', chainId, __to, account, tokenId],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && account !== undefined && account !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeEarned(chainId as number,__to as string,account as string,tokenId as number);
    }
  }
}

/**
 * fetch fees0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeFees0(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x93f1c442', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeFees0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeFees0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeFees0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch fees1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeFees1(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4c02a21c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeFees1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeFees1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeFees1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch feesVotingReward
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeFeesVotingReward(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0fe2f711', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeFeesVotingRewardQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeFeesVotingReward', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeFeesVotingReward(chainId as number,__to as string);
    }
  }
}

/**
 * fetch gaugeFactory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeGaugeFactory(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d52333c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract ICLGaugeFactory","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeGaugeFactoryQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeGaugeFactory', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeGaugeFactory(chainId as number,__to as string);
    }
  }
}

/**
 * fetch isPool
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3GaugeIsPool(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe2e1c6db', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3GaugeIsPoolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeIsPool', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeIsPool(chainId as number,__to as string);
    }
  }
}

/**
 * fetch lastUpdateTime
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeLastUpdateTime(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x4bcddb1f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeLastUpdateTimeQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeLastUpdateTime', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeLastUpdateTime(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch left
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeLeft(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16e64048', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeLeftQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeLeft', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeLeft(chainId as number,__to as string);
    }
  }
}

/**
 * fetch nft
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeNft(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x47ccca02', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract INonfungiblePositionManager","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeNftQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeNft', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeNft(chainId as number,__to as string);
    }
  }
}

/**
 * fetch periodFinish
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugePeriodFinish(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xebe2b12b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugePeriodFinishQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugePeriodFinish', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugePeriodFinish(chainId as number,__to as string);
    }
  }
}

/**
 * fetch pool
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugePool(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16f0115b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract ICLPool","name":"","type":"address"}])
}
export function getFetchVE33V3GaugePoolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugePool', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugePool(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardGrowthInside
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeRewardGrowthInside(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xac789c08', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeRewardGrowthInsideQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeRewardGrowthInside', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeRewardGrowthInside(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch rewardRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeRewardRate(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7b0a47ee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeRewardRateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeRewardRate', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeRewardRate(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardRateByEpoch
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeRewardRateByEpoch(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x94af5b63', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeRewardRateByEpochQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeRewardRateByEpoch', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeRewardRateByEpoch(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch rewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeRewardToken(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf7c618c1', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeRewardTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeRewardToken', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeRewardToken(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewards
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeRewards(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf301af42', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeRewardsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeRewards', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeRewards(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch stakedByIndex
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} depositor - address
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeStakedByIndex(chainId: number, __to: string, depositor: string, index: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [depositor,index]);
  const __data = hexlify(concat(['0x38463937', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeStakedByIndexQueryOptions(chainId: number | undefined, __to: string | undefined, depositor: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeStakedByIndex', chainId, __to, depositor, index],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && depositor !== undefined && depositor !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeStakedByIndex(chainId as number,__to as string,depositor as string,index as number);
    }
  }
}

/**
 * fetch stakedContains
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} depositor - address
 * @param {number} tokenId - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3GaugeStakedContains(chainId: number, __to: string, depositor: string, tokenId: number): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [depositor,tokenId]);
  const __data = hexlify(concat(['0xc69deec5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3GaugeStakedContainsQueryOptions(chainId: number | undefined, __to: string | undefined, depositor: string | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeStakedContains', chainId, __to, depositor, tokenId],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && depositor !== undefined && depositor !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeStakedContains(chainId as number,__to as string,depositor as string,tokenId as number);
    }
  }
}

/**
 * fetch stakedLength
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} depositor - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3GaugeStakedLength(chainId: number, __to: string, depositor: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [depositor]);
  const __data = hexlify(concat(['0xae775c32', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3GaugeStakedLengthQueryOptions(chainId: number | undefined, __to: string | undefined, depositor: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeStakedLength', chainId, __to, depositor],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && depositor !== undefined && depositor !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeStakedLength(chainId as number,__to as string,depositor as string);
    }
  }
}

/**
 * fetch stakedValues
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} depositor - address
 * @returns {Array<bigint>} staked - uint256[]
 */
export function fetchVE33V3GaugeStakedValues(chainId: number, __to: string, depositor: string): Promise<Array<bigint>> {
  const __encodeData = defaultAbiCoder.encode(["address"], [depositor]);
  const __data = hexlify(concat(['0x4b937763', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"staked","type":"uint256[]"}])
}
export function getFetchVE33V3GaugeStakedValuesQueryOptions(chainId: number | undefined, __to: string | undefined, depositor: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeStakedValues', chainId, __to, depositor],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && depositor !== undefined && depositor !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeStakedValues(chainId as number,__to as string,depositor as string);
    }
  }
}

/**
 * fetch supportsPayable
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3GaugeSupportsPayable(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x55b29a0e', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3GaugeSupportsPayableQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeSupportsPayable', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeSupportsPayable(chainId as number,__to as string);
    }
  }
}

/**
 * fetch tickSpacing
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - int24
 */
export function fetchVE33V3GaugeTickSpacing(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd0c93a7c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"int24","name":"","type":"int24"}])
}
export function getFetchVE33V3GaugeTickSpacingQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeTickSpacing', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeTickSpacing(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeToken0(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeToken0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeToken0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeToken0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeToken1(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeToken1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeToken1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeToken1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V3GaugeVoter(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract IVoter","name":"","type":"address"}])
}
export function getFetchVE33V3GaugeVoterQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3GaugeVoter', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V3GaugeVoter(chainId as number,__to as string);
    }
  }
}

/**
 * encode deposit
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeDeposit(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0xb6b55f25', __encodeData]));
}

/**
 * encode getReward
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeGetReward(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x1c4b774b', __encodeData]));
}

/**
 * encode getReward
 * @param {string} account - address
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeGetReward2(account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [account]);
  return hexlify(concat(['0xc00007b0', __encodeData]));
}

/**
 * encode initialize
 * @param {string} _pool - address
 * @param {string} _feesVotingReward - address
 * @param {string} _rewardToken - address
 * @param {string} _voter - address
 * @param {string} _nft - address
 * @param {string} _token0 - address
 * @param {string} _token1 - address
 * @param {string | number} _tickSpacing - int24
 * @param {boolean} _isPool - bool
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeInitialize(_pool: string, _feesVotingReward: string, _rewardToken: string, _voter: string, _nft: string, _token0: string, _token1: string, _tickSpacing: string | number, _isPool: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","address","address","address","int24","bool"], [_pool,_feesVotingReward,_rewardToken,_voter,_nft,_token0,_token1,_tickSpacing,_isPool]);
  return hexlify(concat(['0x391ffff8', __encodeData]));
}

/**
 * encode notifyRewardAmount
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeNotifyRewardAmount(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0x3c6b16ab', __encodeData]));
}

/**
 * encode notifyRewardWithoutClaim
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeNotifyRewardWithoutClaim(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0xdcdc18dc', __encodeData]));
}

/**
 * encode onERC721Received
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {string | number} __input3 - uint256
 * @param {string} __input4 - bytes
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeOnERC721Received(__input1: string, __input2: string, __input3: string | number, __input4: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes"], [__input1,__input2,__input3,__input4]);
  return hexlify(concat(['0x150b7a02', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3GaugeWithdraw(tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}