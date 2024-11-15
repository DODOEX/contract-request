import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getLimitOrderContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x093b68BFe0859D3C857Fc3529952897C30dD17EB"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch ORDER_TYPEHASH
 * @param {number} chainId - number
 * @returns {string}  - bytes32
 */
export function fetchLimitOrderORDER_TYPEHASH(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf973a209', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch RFQ_ORDER_TYPEHASH
 * @param {number} chainId - number
 * @returns {string}  - bytes32
 */
export function fetchLimitOrderRFQ_ORDER_TYPEHASH(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3f45e230', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchLimitOrder_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _FEE_RECEIVER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchLimitOrder_FEE_RECEIVER_(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7161e0f2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _FILLED_TAKER_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __input1 - bytes32
 * @returns {bigint}  - uint256
 */
export function fetchLimitOrder_FILLED_TAKER_AMOUNT_(chainId: number, __input1: string) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x1068705b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchLimitOrder_NEW_OWNER_(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchLimitOrder_OWNER_(chainId: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _RFQ_FILLED_TAKER_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint}  - uint256
 */
export function fetchLimitOrder_RFQ_FILLED_TAKER_AMOUNT_(chainId: number, __input1: string, __input2: number) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x3b11fffa', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchLimitOrderIsAdminListed(chainId: number, __input1: string) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch isWhiteListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchLimitOrderIsWhiteListed(chainId: number, __input1: string) {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6f9170f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode addAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderAddAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode addWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderAddWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xe7cd4a04', __encodeData]));
}

/**
 * encode changeFeeReceiver
 * @param {string} newFeeReceiver - address
 * @returns {string} encode data
 */
export function encodeLimitOrderChangeFeeReceiver(newFeeReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFeeReceiver]);
  return hexlify(concat(['0x7c08b964', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeLimitOrderClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode fillLimitOrder
 * @param {{makerToken: string; takerToken: string; makerAmount: number; takerAmount: number; maker: string; taker: string; expiration: number; salt: number}} order - tuple
 * @param {string} signature - bytes
 * @param {number} takerFillAmount - uint256
 * @param {number} thresholdTakerAmount - uint256
 * @param {string} takerInteraction - bytes
 * @returns {string} encode data
 */
export function encodeLimitOrderFillLimitOrder(order: {makerToken: string; takerToken: string; makerAmount: number; takerAmount: number; maker: string; taker: string; expiration: number; salt: number}, signature: string, takerFillAmount: number, thresholdTakerAmount: number, takerInteraction: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, address, address, uint256, uint256)","bytes","uint256","uint256","bytes"], [order,signature,takerFillAmount,thresholdTakerAmount,takerInteraction]);
  return hexlify(concat(['0x1dd76cc3', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} dodoApproveProxy - address
 * @param {string} feeReciver - address
 * @returns {string} encode data
 */
export function encodeLimitOrderInit(owner: string, dodoApproveProxy: string, feeReciver: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [owner,dodoApproveProxy,feeReciver]);
  return hexlify(concat(['0x184b9559', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeLimitOrderInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode matchingRFQByPlatform
 * @param {{makerToken: string; takerToken: string; makerAmount: number; takerAmount: number; makerTokenFeeAmount: number; takerFillAmount: number; maker: string; taker: string; expiration: number; slot: number}} order - tuple
 * @param {string} makerSignature - bytes
 * @param {string} takerSignature - bytes
 * @param {number} takerFillAmount - uint256
 * @param {number} thresholdMakerAmount - uint256
 * @param {number} makerTokenFeeAmount - uint256
 * @param {string} taker - address
 * @returns {string} encode data
 */
export function encodeLimitOrderMatchingRFQByPlatform(order: {makerToken: string; takerToken: string; makerAmount: number; takerAmount: number; makerTokenFeeAmount: number; takerFillAmount: number; maker: string; taker: string; expiration: number; slot: number}, makerSignature: string, takerSignature: string, takerFillAmount: number, thresholdMakerAmount: number, makerTokenFeeAmount: number, taker: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, uint256, uint256, address, address, uint256, uint256)","bytes","bytes","uint256","uint256","uint256","address"], [order,makerSignature,takerSignature,takerFillAmount,thresholdMakerAmount,makerTokenFeeAmount,taker]);
  return hexlify(concat(['0x18c8f2ae', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderRemoveAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode removeWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeLimitOrderRemoveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2042e5c2', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeLimitOrderTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}