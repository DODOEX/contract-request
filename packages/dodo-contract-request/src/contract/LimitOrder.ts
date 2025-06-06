import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getLimitOrderContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x093b68BFe0859D3C857Fc3529952897C30dD17EB","56":"0xdc5E86654e768d21f7D298690687eA02db7b2a04","137":"0x5F43046eAD98012044CfC1C3427A1bcEf921d3f3","42161":"0x91FbD0C9dbA8C42B7Fa636CC60344c72E7D065c9"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch ORDER_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchLimitOrderORDER_TYPEHASH(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf973a209', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchLimitOrderORDER_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrderORDER_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrderORDER_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch RFQ_ORDER_TYPEHASH
 * @param {number} chainId - number
 * @returns {string} __output0 - bytes32
 */
export function fetchLimitOrderRFQ_ORDER_TYPEHASH(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3f45e230', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchLimitOrderRFQ_ORDER_TYPEHASHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrderRFQ_ORDER_TYPEHASH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrderRFQ_ORDER_TYPEHASH(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrder_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLimitOrder_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrder_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _FEE_RECEIVER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrder_FEE_RECEIVER_(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7161e0f2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLimitOrder_FEE_RECEIVER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_FEE_RECEIVER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrder_FEE_RECEIVER_(chainId as number);
    }
  }
}

/**
 * fetch _FILLED_TAKER_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __input1 - bytes32
 * @returns {bigint} __output0 - uint256
 */
export function fetchLimitOrder_FILLED_TAKER_AMOUNT_(chainId: number, __input1: string): Promise<bigint> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes32"], [__input1]);
  const __data = hexlify(concat(['0x1068705b', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLimitOrder_FILLED_TAKER_AMOUNT_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_FILLED_TAKER_AMOUNT_', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchLimitOrder_FILLED_TAKER_AMOUNT_(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrder_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLimitOrder_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrder_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchLimitOrder_OWNER_(chainId: number): Promise<string> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchLimitOrder_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchLimitOrder_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _RFQ_FILLED_TAKER_AMOUNT_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchLimitOrder_RFQ_FILLED_TAKER_AMOUNT_(chainId: number, __input1: string, __input2: number): Promise<bigint> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0x3b11fffa', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchLimitOrder_RFQ_FILLED_TAKER_AMOUNT_QueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrder_RFQ_FILLED_TAKER_AMOUNT_', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchLimitOrder_RFQ_FILLED_TAKER_AMOUNT_(chainId as number,__input1 as string,__input2 as number);
    }
  }
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchLimitOrderIsAdminListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchLimitOrderIsAdminListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrderIsAdminListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchLimitOrderIsAdminListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch isWhiteListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchLimitOrderIsWhiteListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getLimitOrderContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6f9170f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchLimitOrderIsWhiteListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchLimitOrderIsWhiteListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchLimitOrderIsWhiteListed(chainId as number,__input1 as string);
    }
  }
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
 * @param {{makerToken: string; takerToken: string; makerAmount: string | number; takerAmount: string | number; maker: string; taker: string; expiration: string | number; salt: string | number}} order - tuple
 * @param {string} signature - bytes
 * @param {string | number} takerFillAmount - uint256
 * @param {string | number} thresholdTakerAmount - uint256
 * @param {string} takerInteraction - bytes
 * @returns {string} encode data
 */
export function encodeLimitOrderFillLimitOrder(order: {makerToken: string; takerToken: string; makerAmount: string | number; takerAmount: string | number; maker: string; taker: string; expiration: string | number; salt: string | number}, signature: string, takerFillAmount: string | number, thresholdTakerAmount: string | number, takerInteraction: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, address, address, uint256, uint256)","bytes","uint256","uint256","bytes"], [Object.values(order),signature,takerFillAmount,thresholdTakerAmount,takerInteraction]);
  return hexlify(concat(['0xd9df05cf', __encodeData]));
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
 * @param {{makerToken: string; takerToken: string; makerAmount: string | number; takerAmount: string | number; makerTokenFeeAmount: string | number; takerFillAmount: string | number; maker: string; taker: string; expiration: string | number; slot: string | number}} order - tuple
 * @param {string} makerSignature - bytes
 * @param {string} takerSignature - bytes
 * @param {string | number} takerFillAmount - uint256
 * @param {string | number} thresholdMakerAmount - uint256
 * @param {string | number} makerTokenFeeAmount - uint256
 * @param {string} taker - address
 * @returns {string} encode data
 */
export function encodeLimitOrderMatchingRFQByPlatform(order: {makerToken: string; takerToken: string; makerAmount: string | number; takerAmount: string | number; makerTokenFeeAmount: string | number; takerFillAmount: string | number; maker: string; taker: string; expiration: string | number; slot: string | number}, makerSignature: string, takerSignature: string, takerFillAmount: string | number, thresholdMakerAmount: string | number, makerTokenFeeAmount: string | number, taker: string) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, uint256, uint256, address, address, uint256, uint256)","bytes","bytes","uint256","uint256","uint256","address"], [Object.values(order),makerSignature,takerSignature,takerFillAmount,thresholdMakerAmount,makerTokenFeeAmount,taker]);
  return hexlify(concat(['0xa4d31e2e', __encodeData]));
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