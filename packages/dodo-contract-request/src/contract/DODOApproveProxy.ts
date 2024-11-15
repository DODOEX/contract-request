import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOApproveProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x335aC99bb3E51BDbF22025f092Ebc1Cf2c5cC619","2818":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","80084":"0x8bCcE4CCEEf7e841A2A8A48F3250B9FB3b25B0C3","167000":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","543210":"0x37B121f370B57059C6fe486440C2ECded71C0eF7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_APPROVE_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOApproveProxy_DODO_APPROVE_(chainId: number) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46e74298', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _IS_ALLOWED_PROXY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchDODOApproveProxy_IS_ALLOWED_PROXY_(chainId: number, __input1: string) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x3b2f27bb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOApproveProxy_NEW_OWNER_(chainId: number) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOApproveProxy_OWNER_(chainId: number) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _PENDING_ADD_DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOApproveProxy_PENDING_ADD_DODO_PROXY_(chainId: number) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcc646ed4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _TIMELOCK_
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchDODOApproveProxy_TIMELOCK_(chainId: number) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb75dbf68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch isAllowedProxy
 * @param {number} chainId - number
 * @param {string} _proxy - address
 * @returns {boolean}  - bool
 */
export function fetchDODOApproveProxyIsAllowedProxy(chainId: number, _proxy: string) {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [_proxy]);
  const __data = hexlify(concat(['0x48a4f993', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode addDODOProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyAddDODOProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3e688589', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode claimTokens
 * @param {string} token - address
 * @param {string} who - address
 * @param {string} dest - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyClaimTokens(token: string, who: string, dest: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [token,who,dest,amount]);
  return hexlify(concat(['0x0a5ea466', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {Array<string>} proxies - address[]
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyInit(owner: string, proxies: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","address[]"], [owner,proxies]);
  return hexlify(concat(['0x3c5a3cea', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode lockAddProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyLockAddProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x556d65a8', __encodeData]));
}

/**
 * encode removeDODOProxy
 * @param {string} oldDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyRemoveDODOProxy(oldDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [oldDodoProxy]);
  return hexlify(concat(['0x2c419f2f', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unlockAddProxy
 * @param {string} newDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyUnlockAddProxy(newDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDodoProxy]);
  return hexlify(concat(['0x374445b2', __encodeData]));
}