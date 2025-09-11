import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeBalanceOf(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeBalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeBalanceOf', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeBalanceOf(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch earned
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} _account - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeEarned(chainId: number, __to: string, _account: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  const __data = hexlify(concat(['0x008cc262', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeEarnedQueryOptions(chainId: number | undefined, __to: string | undefined, _account: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeEarned', chainId, __to, _account],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && _account !== undefined && _account !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeEarned(chainId as number,__to as string,_account as string);
    }
  }
}

/**
 * fetch fees0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeFees0(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x93f1c442', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeFees0QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeFees0', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeFees0(chainId as number,__to as string);
    }
  }
}

/**
 * fetch fees1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeFees1(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4c02a21c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeFees1QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeFees1', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeFees1(chainId as number,__to as string);
    }
  }
}

/**
 * fetch feesVotingReward
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2GaugeFeesVotingReward(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0fe2f711', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2GaugeFeesVotingRewardQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeFeesVotingReward', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeFeesVotingReward(chainId as number,__to as string);
    }
  }
}

/**
 * fetch isPool
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V2GaugeIsPool(chainId: number, __to: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe2e1c6db', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V2GaugeIsPoolQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeIsPool', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeIsPool(chainId as number,__to as string);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V2GaugeIsTrustedForwarder(chainId: number, __to: string, forwarder: string): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V2GaugeIsTrustedForwarderQueryOptions(chainId: number | undefined, __to: string | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeIsTrustedForwarder', chainId, __to, forwarder],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeIsTrustedForwarder(chainId as number,__to as string,forwarder as string);
    }
  }
}

/**
 * fetch lastTimeRewardApplicable
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeLastTimeRewardApplicable(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x80faa57d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeLastTimeRewardApplicableQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeLastTimeRewardApplicable', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeLastTimeRewardApplicable(chainId as number,__to as string);
    }
  }
}

/**
 * fetch lastUpdateTime
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeLastUpdateTime(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc8f33c91', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeLastUpdateTimeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeLastUpdateTime', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeLastUpdateTime(chainId as number,__to as string);
    }
  }
}

/**
 * fetch left
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeLeft(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16e64048', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeLeftQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeLeft', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeLeft(chainId as number,__to as string);
    }
  }
}

/**
 * fetch periodFinish
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugePeriodFinish(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xebe2b12b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugePeriodFinishQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugePeriodFinish', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugePeriodFinish(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardPerToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeRewardPerToken(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcd3daf9d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeRewardPerTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewardPerToken', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewardPerToken(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardPerTokenStored
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeRewardPerTokenStored(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xdf136d65', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeRewardPerTokenStoredQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewardPerTokenStored', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewardPerTokenStored(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewardRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeRewardRate(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7b0a47ee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeRewardRateQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewardRate', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewardRate(chainId as number,__to as string);
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
export function fetchVE33V2GaugeRewardRateByEpoch(chainId: number, __to: string, __input1: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x94af5b63', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeRewardRateByEpochQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewardRateByEpoch', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewardRateByEpoch(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch rewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2GaugeRewardToken(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf7c618c1', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2GaugeRewardTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewardToken', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewardToken(chainId as number,__to as string);
    }
  }
}

/**
 * fetch rewards
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeRewards(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x0700037d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeRewardsQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeRewards', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeRewards(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch stakingToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2GaugeStakingToken(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x72f702f3', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2GaugeStakingTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeStakingToken', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeStakingToken(chainId as number,__to as string);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeTotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeTotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeTotalSupply', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeTotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * fetch userRewardPerTokenPaid
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V2GaugeUserRewardPerTokenPaid(chainId: number, __to: string, __input1: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x8b876347', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V2GaugeUserRewardPerTokenPaidQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeUserRewardPerTokenPaid', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeUserRewardPerTokenPaid(chainId as number,__to as string,__input1 as string);
    }
  }
}

/**
 * fetch ve
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2GaugeVe(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f850716', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2GaugeVeQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeVe', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeVe(chainId as number,__to as string);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchVE33V2GaugeVoter(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V2GaugeVoterQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V2GaugeVoter', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchVE33V2GaugeVoter(chainId as number,__to as string);
    }
  }
}

/**
 * encode deposit
 * @param {string | number} _amount - uint256
 * @param {string} _recipient - address
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeDeposit(_amount: string | number, _recipient: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [_amount,_recipient]);
  return hexlify(concat(['0x6e553f65', __encodeData]));
}

/**
 * encode deposit
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeDeposit2(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0xb6b55f25', __encodeData]));
}

/**
 * encode getReward
 * @param {string} _account - address
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeGetReward(_account: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_account]);
  return hexlify(concat(['0xc00007b0', __encodeData]));
}

/**
 * encode notifyRewardAmount
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeNotifyRewardAmount(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0x3c6b16ab', __encodeData]));
}

/**
 * encode notifyRewardWithoutClaim
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeNotifyRewardWithoutClaim(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0xdcdc18dc', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} _amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V2GaugeWithdraw(_amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [_amount]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}