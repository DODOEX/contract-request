import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTApproveContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xf740253BDF035620E12f55D61C092aa294E2E5F3","56":"0x8f697865Fb43236683a174feE87fD84dB64C7A6c","137":"0x91E1c84BA8786B1FaE2570202F0126C0b88F6Ec7","42161":"0xaeB5CF31b97dce6134e416129845e01106fFB177"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _IS_ALLOWED_PROXY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTApprove_IS_ALLOWED_PROXY_(chainId: number, __input1: string) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x3b2f27bb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTApprove_NEW_OWNER_(chainId: number) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTApprove_OWNER_(chainId: number) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _PENDING_ADD_DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTApprove_PENDING_ADD_DODO_PROXY_(chainId: number) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcc646ed4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _TIMELOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFTApprove_TIMELOCK_(chainId: number) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb75dbf68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch isAllowedProxy
 * @param {number} chainId - number
 * @param {string} _proxy - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTApproveIsAllowedProxy(chainId: number, _proxy: string) {
  const __to = getDODONFTApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [_proxy]);
  const __data = hexlify(concat(['0x48a4f993', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode addDODOProxy

 * @returns {string} encode data
 */
export function encodeDODONFTApproveAddDODOProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3e688589', __encodeData]));
}

/**
 * encode claimERC1155
 * @param {string} nftContract - address
 * @param {string} who - address
 * @param {string} dest - address
 * @param {string} tokenId - uint256
 * @param {string} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTApproveClaimERC1155(nftContract: string, who: string, dest: string, tokenId: string, amount: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","uint256"], [nftContract,who,dest,tokenId,amount]);
  return hexlify(concat(['0x3a86185c', __encodeData]));
}

/**
 * encode claimERC1155Batch
 * @param {string} nftContract - address
 * @param {string} who - address
 * @param {string} dest - address
 * @param {Array<string>} tokenIds - uint256[]
 * @param {Array<string>} amounts - uint256[]
 * @returns {string} encode data
 */
export function encodeDODONFTApproveClaimERC1155Batch(nftContract: string, who: string, dest: string, tokenIds: Array<string>, amounts: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256[]","uint256[]"], [nftContract,who,dest,tokenIds,amounts]);
  return hexlify(concat(['0xc87dadb6', __encodeData]));
}

/**
 * encode claimERC721
 * @param {string} nftContract - address
 * @param {string} who - address
 * @param {string} dest - address
 * @param {string} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTApproveClaimERC721(nftContract: string, who: string, dest: string, tokenId: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [nftContract,who,dest,tokenId]);
  return hexlify(concat(['0x45467cf8', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFTApproveClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {Array<string>} proxies - address[]
 * @returns {string} encode data
 */
export function encodeDODONFTApproveInit(owner: string, proxies: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","address[]"], [owner,proxies]);
  return hexlify(concat(['0x3c5a3cea', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTApproveInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode lockAddProxy

 * @returns {string} encode data
 */
export function encodeDODONFTApproveLockAddProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x556d65a8', __encodeData]));
}

/**
 * encode removeDODOProxy
 * @param {string} oldDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODONFTApproveRemoveDODOProxy(oldDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [oldDodoProxy]);
  return hexlify(concat(['0x2c419f2f', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTApproveTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unlockAddProxy
 * @param {string} newDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODONFTApproveUnlockAddProxy(newDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDodoProxy]);
  return hexlify(concat(['0x374445b2', __encodeData]));
}