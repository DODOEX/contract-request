import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2Proxy02ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xa356867fDCEa8e71AEaF87805808803806231FdC","2818":"0xfcd8EF54A4dA96dE6B2DDF67C6265C7405a3A9c6","80084":"0x0976e26eE276DC0703d046DB46d0ca8A1EeC3bAe","167000":"0xfcd8EF54A4dA96dE6B2DDF67C6265C7405a3A9c6","543210":"0x016B4cD52EC7A49Ad33140252Ba55C5B24079Ad6"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CHI_TOKEN_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_CHI_TOKEN_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x056fc2ee', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _CP_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_CP_FACTORY_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfaa980e4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_INCENTIVE_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_DODO_INCENTIVE_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x41cf7160', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_SELL_HELPER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_DODO_SELL_HELPER_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaf1280b0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_DPP_FACTORY_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DVM_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_DVM_FACTORY_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69e4e417', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _GAS_DODO_MAX_RETURN_
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchDODOV2Proxy02_GAS_DODO_MAX_RETURN_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9f687322', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _GAS_EXTERNAL_RETURN_
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchDODOV2Proxy02_GAS_EXTERNAL_RETURN_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69dba8ee', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_NEW_OWNER_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_OWNER_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2Proxy02_WETH_(chainId: number) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch isWhiteListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean}  - bool
 */
export function fetchDODOV2Proxy02IsWhiteListed(chainId: number, __input1: string) {
  const __to = getDODOV2Proxy02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6f9170f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode addDVMLiquidity
 * @param {string} dvmAddress - address
 * @param {number} baseInAmount - uint256
 * @param {number} quoteInAmount - uint256
 * @param {number} baseMinAmount - uint256
 * @param {number} quoteMinAmount - uint256
 * @param {number} flag - uint8
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddDVMLiquidity(dvmAddress: string, baseInAmount: number, quoteInAmount: number, baseMinAmount: number, quoteMinAmount: number, flag: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [dvmAddress,baseInAmount,quoteInAmount,baseMinAmount,quoteMinAmount,flag,deadLine]);
  return hexlify(concat(['0x674d9422', __encodeData]));
}

/**
 * encode addLiquidityToV1
 * @param {string} pair - address
 * @param {number} baseAmount - uint256
 * @param {number} quoteAmount - uint256
 * @param {number} baseMinShares - uint256
 * @param {number} quoteMinShares - uint256
 * @param {number} flag - uint8
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddLiquidityToV1(pair: string, baseAmount: number, quoteAmount: number, baseMinShares: number, quoteMinShares: number, flag: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","uint8","uint256"], [pair,baseAmount,quoteAmount,baseMinShares,quoteMinShares,flag,deadLine]);
  return hexlify(concat(['0x99882c8f', __encodeData]));
}

/**
 * encode addWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02AddWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0xe7cd4a04', __encodeData]));
}

/**
 * encode bid
 * @param {string} cpAddress - address
 * @param {number} quoteAmount - uint256
 * @param {number} flag - uint8
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02Bid(cpAddress: string, quoteAmount: number, flag: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [cpAddress,quoteAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createCrowdPooling
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} baseInAmount - uint256
 * @param {Array<number>} timeLine - uint256[]
 * @param {Array<number>} valueList - uint256[]
 * @param {boolean} isOpenTWAP - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateCrowdPooling(baseToken: string, quoteToken: string, baseInAmount: number, timeLine: Array<number>, valueList: Array<number>, isOpenTWAP: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256[]","uint256[]","bool","uint256"], [baseToken,quoteToken,baseInAmount,timeLine,valueList,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x018c9fda', __encodeData]));
}

/**
 * encode createDODOPrivatePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} baseInAmount - uint256
 * @param {number} quoteInAmount - uint256
 * @param {number} lpFeeRate - uint256
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {boolean} isOpenTwap - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateDODOPrivatePool(baseToken: string, quoteToken: string, baseInAmount: number, quoteInAmount: number, lpFeeRate: number, i: number, k: number, isOpenTwap: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTwap,deadLine]);
  return hexlify(concat(['0x0d9be500', __encodeData]));
}

/**
 * encode createDODOVendingMachine
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} baseInAmount - uint256
 * @param {number} quoteInAmount - uint256
 * @param {number} lpFeeRate - uint256
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02CreateDODOVendingMachine(baseToken: string, quoteToken: string, baseInAmount: number, quoteInAmount: number, lpFeeRate: number, i: number, k: number, isOpenTWAP: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTWAP,deadLine]);
  return hexlify(concat(['0x8b3bb089', __encodeData]));
}

/**
 * encode dodoSwapV1
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {number} fromTokenAmount - uint256
 * @param {number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV1(fromToken: string, toToken: string, fromTokenAmount: number, minReturnAmount: number, dodoPairs: Array<string>, directions: number, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x0dd4ebd9', __encodeData]));
}

/**
 * encode dodoSwapV2ETHToToken
 * @param {string} toToken - address
 * @param {number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2ETHToToken(toToken: string, minReturnAmount: number, dodoPairs: Array<string>, directions: number, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","address[]","uint256","bool","uint256"], [toToken,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x5028bb95', __encodeData]));
}

/**
 * encode dodoSwapV2TokenToETH
 * @param {string} fromToken - address
 * @param {number} fromTokenAmount - uint256
 * @param {number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2TokenToETH(fromToken: string, fromTokenAmount: number, minReturnAmount: number, dodoPairs: Array<string>, directions: number, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x1e6d24c2', __encodeData]));
}

/**
 * encode dodoSwapV2TokenToToken
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {number} fromTokenAmount - uint256
 * @param {number} minReturnAmount - uint256
 * @param {Array<string>} dodoPairs - address[]
 * @param {number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02DodoSwapV2TokenToToken(fromToken: string, toToken: string, fromTokenAmount: number, minReturnAmount: number, dodoPairs: Array<string>, directions: number, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,dodoPairs,directions,isIncentive,deadLine]);
  return hexlify(concat(['0xf87dc1b7', __encodeData]));
}

/**
 * encode externalSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {string} approveTarget - address
 * @param {string} swapTarget - address
 * @param {number} fromTokenAmount - uint256
 * @param {number} minReturnAmount - uint256
 * @param {string} callDataConcat - bytes
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ExternalSwap(fromToken: string, toToken: string, approveTarget: string, swapTarget: string, fromTokenAmount: number, minReturnAmount: number, callDataConcat: string, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","bytes","bool","uint256"], [fromToken,toToken,approveTarget,swapTarget,fromTokenAmount,minReturnAmount,callDataConcat,isIncentive,deadLine]);
  return hexlify(concat(['0x54bacd13', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mixSwap
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {number} fromTokenAmount - uint256
 * @param {number} minReturnAmount - uint256
 * @param {Array<string>} mixAdapters - address[]
 * @param {Array<string>} mixPairs - address[]
 * @param {Array<string>} assetTo - address[]
 * @param {number} directions - uint256
 * @param {boolean} isIncentive - bool
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02MixSwap(fromToken: string, toToken: string, fromTokenAmount: number, minReturnAmount: number, mixAdapters: Array<string>, mixPairs: Array<string>, assetTo: Array<string>, directions: number, isIncentive: boolean, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","address[]","address[]","address[]","uint256","bool","uint256"], [fromToken,toToken,fromTokenAmount,minReturnAmount,mixAdapters,mixPairs,assetTo,directions,isIncentive,deadLine]);
  return hexlify(concat(['0x23c38fa3', __encodeData]));
}

/**
 * encode removeWhiteList
 * @param {string} contractAddr - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02RemoveWhiteList(contractAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [contractAddr]);
  return hexlify(concat(['0x2042e5c2', __encodeData]));
}

/**
 * encode resetDODOPrivatePool
 * @param {string} dppAddress - address
 * @param {Array<number>} paramList - uint256[]
 * @param {Array<number>} amountList - uint256[]
 * @param {number} flag - uint8
 * @param {number} minBaseReserve - uint256
 * @param {number} minQuoteReserve - uint256
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02ResetDODOPrivatePool(dppAddress: string, paramList: Array<number>, amountList: Array<number>, flag: number, minBaseReserve: number, minQuoteReserve: number, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256[]","uint256[]","uint8","uint256","uint256","uint256"], [dppAddress,paramList,amountList,flag,minBaseReserve,minQuoteReserve,deadLine]);
  return hexlify(concat(['0x12ff148d', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateGasReturn
 * @param {number} newDodoGasReturn - uint256
 * @param {number} newExternalGasReturn - uint256
 * @returns {string} encode data
 */
export function encodeDODOV2Proxy02UpdateGasReturn(newDodoGasReturn: number, newExternalGasReturn: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [newDodoGasReturn,newExternalGasReturn]);
  return hexlify(concat(['0xd6354c3e', __encodeData]));
}