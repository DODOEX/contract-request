import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV2_NEW_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20MineV2_NEW_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2_NEW_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchERC20MineV2_NEW_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV2_OWNER_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20MineV2_OWNER_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2_OWNER_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchERC20MineV2_OWNER_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch _TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV2_TOKEN_(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x92e3200b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20MineV2_TOKEN_QueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2_TOKEN_', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchERC20MineV2_TOKEN_(chainId as number,__to as string);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2BalanceOf(chainId: number, __to: string, user: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2BalanceOfQueryOptions(chainId: number | undefined, __to: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2BalanceOf', chainId, __to, user],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchERC20MineV2BalanceOf(chainId as number,__to as string,user as string);
    }
  }
}

/**
 * fetch getIdByRewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} rewardToken - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2GetIdByRewardToken(chainId: number, __to: string, rewardToken: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address"], [rewardToken]);
  const __data = hexlify(concat(['0xa2a54bee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2GetIdByRewardTokenQueryOptions(chainId: number | undefined, __to: string | undefined, rewardToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2GetIdByRewardToken', chainId, __to, rewardToken],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && rewardToken !== undefined && rewardToken !== null, 
    queryFn: () => {
        return fetchERC20MineV2GetIdByRewardToken(chainId as number,__to as string,rewardToken as string);
    }
  }
}

/**
 * fetch getPendingReward
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @param {number} i - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2GetPendingReward(chainId: number, __to: string, user: string, i: number): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [user,i]);
  const __data = hexlify(concat(['0x999ffd97', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2GetPendingRewardQueryOptions(chainId: number | undefined, __to: string | undefined, user: string | undefined, i: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2GetPendingReward', chainId, __to, user, i],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && user !== undefined && user !== null && i !== undefined && i !== null, 
    queryFn: () => {
        return fetchERC20MineV2GetPendingReward(chainId as number,__to as string,user as string,i as number);
    }
  }
}

/**
 * fetch getPendingRewardByToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @param {string} rewardToken - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2GetPendingRewardByToken(chainId: number, __to: string, user: string, rewardToken: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [user,rewardToken]);
  const __data = hexlify(concat(['0x00b68f08', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2GetPendingRewardByTokenQueryOptions(chainId: number | undefined, __to: string | undefined, user: string | undefined, rewardToken: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2GetPendingRewardByToken', chainId, __to, user, rewardToken],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && user !== undefined && user !== null && rewardToken !== undefined && rewardToken !== null, 
    queryFn: () => {
        return fetchERC20MineV2GetPendingRewardByToken(chainId as number,__to as string,user as string,rewardToken as string);
    }
  }
}

/**
 * fetch getRewardNum
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2GetRewardNum(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5ae9a549', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2GetRewardNumQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2GetRewardNum', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchERC20MineV2GetRewardNum(chainId as number,__to as string);
    }
  }
}

/**
 * fetch getRewardTokenById
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} i - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV2GetRewardTokenById(chainId: number, __to: string, i: number): Promise<string> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [i]);
  const __data = hexlify(concat(['0x697d86a2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchERC20MineV2GetRewardTokenByIdQueryOptions(chainId: number | undefined, __to: string | undefined, i: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2GetRewardTokenById', chainId, __to, i],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && i !== undefined && i !== null, 
    queryFn: () => {
        return fetchERC20MineV2GetRewardTokenById(chainId as number,__to as string,i as number);
    }
  }
}

/**
 * fetch rewardTokenInfos
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} __input1 - uint256
 * @returns {string} rewardToken - address
 * @returns {bigint} startBlock - uint256
 * @returns {bigint} endBlock - uint256
 * @returns {string} rewardVault - address
 * @returns {bigint} rewardPerBlock - uint256
 * @returns {bigint} accRewardPerShare - uint256
 * @returns {bigint} lastRewardBlock - uint256
 */
export function fetchERC20MineV2RewardTokenInfos(chainId: number, __to: string, __input1: number): Promise<{
    rewardToken: string;
    startBlock: bigint;
    endBlock: bigint;
    rewardVault: string;
    rewardPerBlock: bigint;
    accRewardPerShare: bigint;
    lastRewardBlock: bigint;
  }> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x1c00a0de', __encodeData]));
  return contractRequests.batchCall<{
    rewardToken: string;
    startBlock: bigint;
    endBlock: bigint;
    rewardVault: string;
    rewardPerBlock: bigint;
    accRewardPerShare: bigint;
    lastRewardBlock: bigint;
  }>(chainId, __to, __data, [{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"address","name":"rewardVault","type":"address"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"}])
}
export function getFetchERC20MineV2RewardTokenInfosQueryOptions(chainId: number | undefined, __to: string | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2RewardTokenInfos', chainId, __to, __input1],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchERC20MineV2RewardTokenInfos(chainId as number,__to as string,__input1 as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV2TotalSupply(chainId: number, __to: string): Promise<bigint> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchERC20MineV2TotalSupplyQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20MineV2TotalSupply', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchERC20MineV2TotalSupply(chainId as number,__to as string);
    }
  }
}

/**
 * encode addRewardToken
 * @param {string} rewardToken - address
 * @param {string | number} rewardPerBlock - uint256
 * @param {string | number} startBlock - uint256
 * @param {string | number} endBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2AddRewardToken(rewardToken: string, rewardPerBlock: string | number, startBlock: string | number, endBlock: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256"], [rewardToken,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0xa7c3e4e5', __encodeData]));
}

/**
 * encode claimAllRewards

 * @returns {string} encode data
 */
export function encodeERC20MineV2ClaimAllRewards() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x0b83a727', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeERC20MineV2ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode claimReward
 * @param {string | number} i - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2ClaimReward(i: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [i]);
  return hexlify(concat(['0xae169a50', __encodeData]));
}

/**
 * encode deposit
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2Deposit(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xb6b55f25', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeERC20MineV2Init(owner: string, token: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,token]);
  return hexlify(concat(['0xf09a4016', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20MineV2InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeRewardToken
 * @param {string} rewardToken - address
 * @returns {string} encode data
 */
export function encodeERC20MineV2RemoveRewardToken(rewardToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [rewardToken]);
  return hexlify(concat(['0x3d509c97', __encodeData]));
}

/**
 * encode setEndBlock
 * @param {string | number} i - uint256
 * @param {string | number} newEndBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2SetEndBlock(i: string | number, newEndBlock: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,newEndBlock]);
  return hexlify(concat(['0x1abbeb54', __encodeData]));
}

/**
 * encode setReward
 * @param {string | number} i - uint256
 * @param {string | number} newRewardPerBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2SetReward(i: string | number, newRewardPerBlock: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,newRewardPerBlock]);
  return hexlify(concat(['0xa47bd496', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20MineV2TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdraw
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2Withdraw(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}

/**
 * encode withdrawLeftOver
 * @param {string | number} i - uint256
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV2WithdrawLeftOver(i: string | number, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,amount]);
  return hexlify(concat(['0xd895fff1', __encodeData]));
}