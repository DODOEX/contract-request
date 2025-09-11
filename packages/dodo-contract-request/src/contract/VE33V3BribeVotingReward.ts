import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getVE33V3BribeVotingRewardContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2810":"0xA7a1790B8Cd1737278b464c295517408f38b4726"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch DURATION
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardDURATION(chainId: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1be05289', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardDURATIONQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardDURATION', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardDURATION(chainId as number);
    }
  }
}

/**
 * fetch authorized
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3BribeVotingRewardAuthorized(chainId: number): Promise<string> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x456cb7c6', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3BribeVotingRewardAuthorizedQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardAuthorized', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardAuthorized(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardBalanceOf(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x9cc7f708', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardBalanceOfQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardBalanceOf', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardBalanceOf(chainId as number,__input1 as number);
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
export function fetchVE33V3BribeVotingRewardCheckpoints(chainId: number, __input1: number, __input2: number): Promise<{
    timestamp: bigint;
    balanceOf: bigint;
  }> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x49dcc204', __encodeData]));
  return contractRequests.batchCall<{
    timestamp: bigint;
    balanceOf: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"balanceOf","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardCheckpoints', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardCheckpoints(chainId as number,__input1 as number,__input2 as number);
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
export function fetchVE33V3BribeVotingRewardEarned(chainId: number, token: string, tokenId: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,tokenId]);
  const __data = hexlify(concat(['0x3e491d47', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardEarnedQueryOptions(chainId: number | undefined, token: string | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardEarned', chainId, token, tokenId],
    enabled: chainId !== undefined && chainId !== null && token !== undefined && token !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardEarned(chainId as number,token as string,tokenId as number);
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
export function fetchVE33V3BribeVotingRewardGetPriorBalanceIndex(chainId: number, tokenId: number, timestamp: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [tokenId,timestamp]);
  const __data = hexlify(concat(['0xa28d4c9c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardGetPriorBalanceIndexQueryOptions(chainId: number | undefined, tokenId: number | undefined, timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardGetPriorBalanceIndex', chainId, tokenId, timestamp],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null && timestamp !== undefined && timestamp !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardGetPriorBalanceIndex(chainId as number,tokenId as number,timestamp as number);
    }
  }
}

/**
 * fetch getPriorSupplyIndex
 * @param {number} chainId - number
 * @param {number} timestamp - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardGetPriorSupplyIndex(chainId: number, timestamp: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [timestamp]);
  const __data = hexlify(concat(['0x76f4be36', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardGetPriorSupplyIndexQueryOptions(chainId: number | undefined, timestamp: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardGetPriorSupplyIndex', chainId, timestamp],
    enabled: chainId !== undefined && chainId !== null && timestamp !== undefined && timestamp !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardGetPriorSupplyIndex(chainId as number,timestamp as number);
    }
  }
}

/**
 * fetch isReward
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3BribeVotingRewardIsReward(chainId: number, __input1: string): Promise<boolean> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x4d5ce038', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3BribeVotingRewardIsRewardQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardIsReward', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardIsReward(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isTrustedForwarder
 * @param {number} chainId - number
 * @param {string} forwarder - address
 * @returns {boolean} __output0 - bool
 */
export function fetchVE33V3BribeVotingRewardIsTrustedForwarder(chainId: number, forwarder: string): Promise<boolean> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [forwarder]);
  const __data = hexlify(concat(['0x572b6c05', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchVE33V3BribeVotingRewardIsTrustedForwarderQueryOptions(chainId: number | undefined, forwarder: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardIsTrustedForwarder', chainId, forwarder],
    enabled: chainId !== undefined && chainId !== null && forwarder !== undefined && forwarder !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardIsTrustedForwarder(chainId as number,forwarder as string);
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
export function fetchVE33V3BribeVotingRewardLastEarn(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xf25e55a5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardLastEarnQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardLastEarn', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardLastEarn(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch numCheckpoints
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardNumCheckpoints(chainId: number, __input1: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x50589793', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardNumCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardNumCheckpoints', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardNumCheckpoints(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch rewards
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchVE33V3BribeVotingRewardRewards(chainId: number, __input1: number): Promise<string> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf301af42', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3BribeVotingRewardRewardsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardRewards', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardRewards(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch rewardsListLength
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardRewardsListLength(chainId: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe6886396', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardRewardsListLengthQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardRewardsListLength', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardRewardsListLength(chainId as number);
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
export function fetchVE33V3BribeVotingRewardSupplyCheckpoints(chainId: number, __input1: number): Promise<{
    timestamp: bigint;
    supply: bigint;
  }> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0xf7412baf', __encodeData]));
  return contractRequests.batchCall<{
    timestamp: bigint;
    supply: bigint;
  }>(chainId, __to, __data, [{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"supply","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardSupplyCheckpointsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardSupplyCheckpoints', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardSupplyCheckpoints(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch supplyNumCheckpoints
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardSupplyNumCheckpoints(chainId: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe8111a12', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardSupplyNumCheckpointsQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardSupplyNumCheckpoints', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardSupplyNumCheckpoints(chainId as number);
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
export function fetchVE33V3BribeVotingRewardTokenRewardsPerEpoch(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x92777b29', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardTokenRewardsPerEpochQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardTokenRewardsPerEpoch', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardTokenRewardsPerEpoch(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchVE33V3BribeVotingRewardTotalSupply(chainId: number): Promise<bigint> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchVE33V3BribeVotingRewardTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardTotalSupply(chainId as number);
    }
  }
}

/**
 * fetch ve
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3BribeVotingRewardVe(chainId: number): Promise<string> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x1f850716', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3BribeVotingRewardVeQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardVe', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardVe(chainId as number);
    }
  }
}

/**
 * fetch voter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchVE33V3BribeVotingRewardVoter(chainId: number): Promise<string> {
  const __to = getVE33V3BribeVotingRewardContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46c96aac', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchVE33V3BribeVotingRewardVoterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchVE33V3BribeVotingRewardVoter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchVE33V3BribeVotingRewardVoter(chainId as number);
    }
  }
}

/**
 * encode _deposit
 * @param {string | number} amount - uint256
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3BribeVotingReward_deposit(amount: string | number, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [amount,tokenId]);
  return hexlify(concat(['0xf3207723', __encodeData]));
}

/**
 * encode _withdraw
 * @param {string | number} amount - uint256
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3BribeVotingReward_withdraw(amount: string | number, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [amount,tokenId]);
  return hexlify(concat(['0x9e2bf22c', __encodeData]));
}

/**
 * encode getReward
 * @param {string | number} tokenId - uint256
 * @param {Array<string>} tokens - address[]
 * @returns {string} encode data
 */
export function encodeVE33V3BribeVotingRewardGetReward(tokenId: string | number, tokens: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]"], [tokenId,tokens]);
  return hexlify(concat(['0xf5f8d365', __encodeData]));
}

/**
 * encode notifyRewardAmount
 * @param {string} token - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeVE33V3BribeVotingRewardNotifyRewardAmount(token: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [token,amount]);
  return hexlify(concat(['0xb66503cf', __encodeData]));
}