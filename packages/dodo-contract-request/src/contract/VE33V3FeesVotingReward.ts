import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33V3FeesVotingRewardContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0x87BA1438fa2d2Fd6aD66162B7c1afAAB25b7CE83"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch DURATION
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardDURATION(chainId: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1be05289', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardDURATIONQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardDURATION', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardDURATION(chainId as number);
    }
  }
}

/**
 * fetch authorized
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3FeesVotingRewardAuthorized(chainId: number): Promise<string> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x456cb7c6', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3FeesVotingRewardAuthorizedQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardAuthorized', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardAuthorized(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardBalanceOf(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x9cc7f708', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardBalanceOfQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardBalanceOf', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardBalanceOf(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch checkpoints
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @param {number} __input2 - uint256
 * @returns {bigint} timestamp - uint256
 * @returns {bigint} balanceOf - uint256
 */
export function fetchVE33V3FeesVotingRewardCheckpoints(chainId: number, __input1: number, __input2: number): Promise<{
    timestamp: bigint;
    balanceOf: bigint;
  }> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x49dcc204', __encodeData]));
  return contractRequests.batchCall<{
    timestamp: bigint;
    balanceOf: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardCheckpoints', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardCheckpoints(chainId as number,__input1 as number,__input2 as number);
    }
  }
}

/**
 * fetch earned
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {number} tokenId - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardEarned(chainId: number, token: string, tokenId: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,tokenId]);
  const __data = hexlify(concat(['0x3e491d47', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardEarnedQueryOptions(chainId: number | undefined, token: string | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardEarned', chainId, token, tokenId],
    enabled: chainId !== undefined && chainId !== null && token !== undefined && token !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardEarned(chainId as number,token as string,tokenId as number);
    }
  }
}

/**
 * fetch getPriorBalanceIndex
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @param {number} timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardGetPriorBalanceIndex(chainId: number, tokenId: number, timestamp: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [tokenId,timestamp]);
  const __data = hexlify(concat(['0xa28d4c9c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardGetPriorBalanceIndexQueryOptions(chainId: number | undefined, tokenId: number | undefined, timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardGetPriorBalanceIndex', chainId, tokenId, timestamp],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null && timestamp !== undefined && timestamp !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardGetPriorBalanceIndex(chainId as number,tokenId as number,timestamp as number);
    }
  }
}

/**
 * fetch getPriorSupplyIndex
 * @param {number} chainId - number
 * @param {number} timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardGetPriorSupplyIndex(chainId: number, timestamp: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [timestamp]);
  const __data = hexlify(concat(['0x76f4be36', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardGetPriorSupplyIndexQueryOptions(chainId: number | undefined, timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardGetPriorSupplyIndex', chainId, timestamp],
    enabled: chainId !== undefined && chainId !== null && timestamp !== undefined && timestamp !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardGetPriorSupplyIndex(chainId as number,timestamp as number);
    }
  }
}

/**
 * fetch isReward
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3FeesVotingRewardIsReward(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x4d5ce038', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3FeesVotingRewardIsRewardQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardIsReward', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardIsReward(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3FeesVotingRewardIsTrustedForwarder(chainId: number, forwarder: string): Promise<boolean> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3FeesVotingRewardIsTrustedForwarderQueryOptions(chainId: number | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardIsTrustedForwarder', chainId, forwarder],
    enabled: chainId !== undefined && chainId !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardIsTrustedForwarder(chainId as number,forwarder as string);
    }
  }
}

/**
 * fetch lastEarn
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardLastEarn(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xf25e55a5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardLastEarnQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardLastEarn', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardLastEarn(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch numCheckpoints
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardNumCheckpoints(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x50589793', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardNumCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardNumCheckpoints', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardNumCheckpoints(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch rewards
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33V3FeesVotingRewardRewards(chainId: number, __input1: number): Promise<string> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf301af42', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3FeesVotingRewardRewardsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardRewards', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardRewards(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch rewardsListLength
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardRewardsListLength(chainId: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe6886396', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardRewardsListLengthQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardRewardsListLength', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardRewardsListLength(chainId as number);
    }
  }
}

/**
 * fetch supplyCheckpoints
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} timestamp - uint256
 * @returns {bigint} supply - uint256
 */
export function fetchVE33V3FeesVotingRewardSupplyCheckpoints(chainId: number, __input1: number): Promise<{
    timestamp: bigint;
    supply: bigint;
  }> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf7412baf', __encodeData]));
  return contractRequests.batchCall<{
    timestamp: bigint;
    supply: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"supply","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardSupplyCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardSupplyCheckpoints', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardSupplyCheckpoints(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch supplyNumCheckpoints
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardSupplyNumCheckpoints(chainId: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe8111a12', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardSupplyNumCheckpointsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardSupplyNumCheckpoints', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardSupplyNumCheckpoints(chainId as number);
    }
  }
}

/**
 * fetch tokenRewardsPerEpoch
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardTokenRewardsPerEpoch(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x92777b29', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardTokenRewardsPerEpochQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardTokenRewardsPerEpoch', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardTokenRewardsPerEpoch(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3FeesVotingRewardTotalSupply(chainId: number): Promise<bigint> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3FeesVotingRewardTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardTotalSupply(chainId as number);
    }
  }
}

/**
 * fetch ve
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3FeesVotingRewardVe(chainId: number): Promise<string> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f850716', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3FeesVotingRewardVeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardVe', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardVe(chainId as number);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3FeesVotingRewardVoter(chainId: number): Promise<string> {
  const __to = getVE33V3FeesVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3FeesVotingRewardVoterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3FeesVotingRewardVoter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3FeesVotingRewardVoter(chainId as number);
    }
  }
}

/**
 * encode _deposit
 * @param {string | number} amount - uint256
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3FeesVotingReward_deposit(amount: string | number, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [amount,tokenId]);
  return hexlify(concat(['0xf3207723', __encodeData]));
}

/**
 * encode _withdraw
 * @param {string | number} amount - uint256
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3FeesVotingReward_withdraw(amount: string | number, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [amount,tokenId]);
  return hexlify(concat(['0x9e2bf22c', __encodeData]));
}

/**
 * encode getReward
 * @param {string | number} tokenId - uint256
 * @param {Array<string>} tokens - address[]
 * @returns {string} encode data
 */
export function encodeVE33V3FeesVotingRewardGetReward(tokenId: string | number, tokens: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]"], [tokenId,tokens]);
  return hexlify(concat(['0xf5f8d365', __encodeData]));
}

/**
 * encode notifyRewardAmount
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3FeesVotingRewardNotifyRewardAmount(token: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0xb66503cf', __encodeData]));
}