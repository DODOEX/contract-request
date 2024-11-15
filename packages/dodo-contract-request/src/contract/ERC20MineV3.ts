import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV3_NEW_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV3_OWNER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV3_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x92e3200b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3BalanceOf(chainId: number, __to: string, user: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getIdByRewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} rewardToken - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3GetIdByRewardToken(chainId: number, __to: string, rewardToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [rewardToken]);
  const __data = hexlify(concat(['0xa2a54bee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getPendingReward
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @param {number} i - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3GetPendingReward(chainId: number, __to: string, user: string, i: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [user,i]);
  const __data = hexlify(concat(['0x999ffd97', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getPendingRewardByToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @param {string} rewardToken - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3GetPendingRewardByToken(chainId: number, __to: string, user: string, rewardToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [user,rewardToken]);
  const __data = hexlify(concat(['0x00b68f08', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getRewardNum
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3GetRewardNum(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5ae9a549', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getRewardTokenById
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} i - uint256
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV3GetRewardTokenById(chainId: number, __to: string, i: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [i]);
  const __data = hexlify(concat(['0x697d86a2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getVaultByRewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} rewardToken - address
 * @returns {string} __output0 - address
 */
export function fetchERC20MineV3GetVaultByRewardToken(chainId: number, __to: string, rewardToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [rewardToken]);
  const __data = hexlify(concat(['0xe513eb15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getVaultDebtByRewardToken
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} rewardToken - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3GetVaultDebtByRewardToken(chainId: number, __to: string, rewardToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [rewardToken]);
  const __data = hexlify(concat(['0xbdbf2657', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
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
 * @returns {bigint} workThroughReward - uint256
 * @returns {bigint} lastFlagBlock - uint256
 */
export function fetchERC20MineV3RewardTokenInfos(chainId: number, __to: string, __input1: number) {
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
    workThroughReward: bigint;
    lastFlagBlock: bigint;
  }>(chainId, __to, __data, ["address","uint256","uint256","address","uint256","uint256","uint256","uint256","uint256"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchERC20MineV3TotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * encode addRewardToken
 * @param {string} rewardToken - address
 * @param {number} rewardPerBlock - uint256
 * @param {number} startBlock - uint256
 * @param {number} endBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3AddRewardToken(rewardToken: string, rewardPerBlock: number, startBlock: number, endBlock: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256"], [rewardToken,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0xa7c3e4e5', __encodeData]));
}

/**
 * encode claimAllRewards

 * @returns {string} encode data
 */
export function encodeERC20MineV3ClaimAllRewards() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x0b83a727', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeERC20MineV3ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode claimReward
 * @param {number} i - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3ClaimReward(i: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [i]);
  return hexlify(concat(['0xae169a50', __encodeData]));
}

/**
 * encode deposit
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3Deposit(amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xb6b55f25', __encodeData]));
}

/**
 * encode directTransferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20MineV3DirectTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xbdd37dc6', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeERC20MineV3Init(owner: string, token: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,token]);
  return hexlify(concat(['0xf09a4016', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20MineV3InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode setEndBlock
 * @param {number} i - uint256
 * @param {number} newEndBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3SetEndBlock(i: number, newEndBlock: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,newEndBlock]);
  return hexlify(concat(['0x1abbeb54', __encodeData]));
}

/**
 * encode setReward
 * @param {number} i - uint256
 * @param {number} newRewardPerBlock - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3SetReward(i: number, newRewardPerBlock: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,newRewardPerBlock]);
  return hexlify(concat(['0xa47bd496', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeERC20MineV3TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdraw
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3Withdraw(amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0x2e1a7d4d', __encodeData]));
}

/**
 * encode withdrawLeftOver
 * @param {number} i - uint256
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeERC20MineV3WithdrawLeftOver(i: number, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [i,amount]);
  return hexlify(concat(['0xd895fff1', __encodeData]));
}