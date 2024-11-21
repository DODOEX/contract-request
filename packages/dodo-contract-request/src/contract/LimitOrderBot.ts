import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getLimitOrderBotContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xD9B825d16E09f28D0c715fe004364046E5524Dbb","56":"0x187da347dEbf4221B861EeAFC9808d8Cf89cF5fE","137":"0xA7263eb38b9A61B72397c884b5f9bFb5C34A7840","42161":"0x0F278Ee5FDd139f9aE8c6498Cca0f2c2208684a2"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_APPROVE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrderBot_DODO_APPROVE_(chainId: number) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46e74298', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}

/**
 * fetch _DODO_LIMIT_ORDER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrderBot_DODO_LIMIT_ORDER_(chainId: number) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb074a789', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrderBot_NEW_OWNER_(chainId: number) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrderBot_OWNER_(chainId: number) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}

/**
 * fetch _TOKEN_RECEIVER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrderBot_TOKEN_RECEIVER_(chainId: number) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3b66b615', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchLimitOrderBotIsAdminListed(chainId: number, __input1: string) {
  const __to = getLimitOrderBotContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}

/**
 * encode addAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotAddAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode changeTokenReceiver
 * @param {string} newTokenReceiver - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotChangeTokenReceiver(newTokenReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newTokenReceiver]);
  return hexlify(concat(['0xbc2790c8', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeLimitOrderBotClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode doLimitOrderSwap
 * @param {string | number} curTakerFillAmount - uint256
 * @param {string | number} curMakerFillAmount - uint256
 * @param {string} makerToken - address
 * @param {string} takerToken - address
 * @param {string} dodoRouteProxy - address
 * @param {string} dodoApiData - bytes
 * @returns {string} encode data
 */
export function encodeLimitOrderBotDoLimitOrderSwap(curTakerFillAmount: string | number, curMakerFillAmount: string | number, makerToken: string, takerToken: string, dodoRouteProxy: string, dodoApiData: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address","address","address","bytes"], [curTakerFillAmount,curMakerFillAmount,makerToken,takerToken,dodoRouteProxy,dodoApiData]);
  return hexlify(concat(['0x89143c25', __encodeData]));
}

/**
 * encode fillDODOLimitOrder
 * @param {string} callExternalData - bytes
 * @param {string} takerToken - address
 * @param {string | number} minTakerTokenAmount - uint256
 * @returns {string} encode data
 */
export function encodeLimitOrderBotFillDODOLimitOrder(callExternalData: string, takerToken: string, minTakerTokenAmount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["bytes","address","uint256"], [callExternalData,takerToken,minTakerTokenAmount]);
  return hexlify(concat(['0x272a16bd', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} dodoLimitOrder - address
 * @param {string} tokenReceiver - address
 * @param {string} dodoApprove - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotInit(owner: string, dodoLimitOrder: string, tokenReceiver: string, dodoApprove: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [owner,dodoLimitOrder,tokenReceiver,dodoApprove]);
  return hexlify(concat(['0x06552ff3', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotRemoveAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeLimitOrderBotTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}