import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOApproveContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149","2818":"0x2629E610dB4AC081c108cCDf8b19ED39D702df43","80084":"0x09da628Df009Ad300e8e299497eebD8694AfBe95","167000":"0x2629E610dB4AC081c108cCDf8b19ED39D702df43","543210":"0x00600dde05d74Fd8C7E7208aBcfE08426FA09e85"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_DODO_PROXY_(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe54c8033', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_NEW_OWNER_(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_OWNER_(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _PENDING_DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_PENDING_DODO_PROXY_(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x93773aec', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _TIMELOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOApprove_TIMELOCK_(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb75dbf68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getDODOProxy
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveGetDODOProxy(chainId: number) {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x31fa1319', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOApproveClaimOwnership() {
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
export function encodeDODOApproveClaimTokens(token: string, who: string, dest: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [token,who,dest,amount]);
  return hexlify(concat(['0x0a5ea466', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} initProxyAddress - address
 * @returns {string} encode data
 */
export function encodeDODOApproveInit(owner: string, initProxyAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,initProxyAddress]);
  return hexlify(concat(['0xf09a4016', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode lockSetProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveLockSetProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4f3cef84', __encodeData]));
}

/**
 * encode setDODOProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveSetDODOProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x8cdb6574', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unlockSetProxy
 * @param {string} newDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveUnlockSetProxy(newDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDodoProxy]);
  return hexlify(concat(['0x41c256c1', __encodeData]));
}