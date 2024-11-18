import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV3ProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x0d9685D4037580F68D9F77B08971f17E1000bBdc","2818":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","80084":"0x026eea5c10f526153e7578E5257801f8610D1142","167000":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","543210":"0xdf6bbE9C88aAc64d724D0a95613ed0dBBDb16f23"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_CLONE_FACTORY_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_MINEV3_REGISTRY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_DODO_MINEV3_REGISTRY_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3eab5388', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MINEV3_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_MINEV3_TEMPLATE_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x67505083', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_NEW_OWNER_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_OWNER_(chainId: number) {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOMineV3
 * @param {string} stakeToken - address
 * @param {boolean} isLpToken - bool
 * @param {Array<string>} rewardTokens - address[]
 * @param {Array<number>} rewardPerBlock - uint256[]
 * @param {Array<number>} startBlock - uint256[]
 * @param {Array<number>} endBlock - uint256[]
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyCreateDODOMineV3(stakeToken: string, isLpToken: boolean, rewardTokens: Array<string>, rewardPerBlock: Array<number>, startBlock: Array<number>, endBlock: Array<number>) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","address[]","uint256[]","uint256[]","uint256[]"], [stakeToken,isLpToken,rewardTokens,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0xb9b1135c', __encodeData]));
}

/**
 * encode depositRewardToMine
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyDepositRewardToMine(mineV3: string, rewardToken: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0xe17ff361', __encodeData]));
}

/**
 * encode depositRewardToVault
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyDepositRewardToVault(mineV3: string, rewardToken: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0x9cb297cd', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateMineV3Template
 * @param {string} _newMineV3Template - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyUpdateMineV3Template(_newMineV3Template: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMineV3Template]);
  return hexlify(concat(['0x59e1100b', __encodeData]));
}