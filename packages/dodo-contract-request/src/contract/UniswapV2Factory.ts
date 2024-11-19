import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"11155111":"0xAc0626654db0F41Db02af7e21624866771686FdC"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch allPairs
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryAllPairs(chainId: number, __input1: number) {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x1e3dd18b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch allPairsLength
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2FactoryAllPairsLength(chainId: number) {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x574f2ba3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch feeTo
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFeeTo(chainId: number) {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x017e7e58', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch feeToSetter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFeeToSetter(chainId: number) {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x094b7415', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getPair
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {number} __input3 - uint256
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryGetPair(chainId: number, __input1: string, __input2: string, __input3: number) {
  const __to = getUniswapV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0x5eced480', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode createPair
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string} feeRate - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2FactoryCreatePair(tokenA: string, tokenB: string, feeRate: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [tokenA,tokenB,feeRate]);
  return hexlify(concat(['0x6b600d1c', __encodeData]));
}

/**
 * encode setFeeTo
 * @param {string} _feeTo - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetFeeTo(_feeTo: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeTo]);
  return hexlify(concat(['0xf46901ed', __encodeData]));
}

/**
 * encode setFeeToSetter
 * @param {string} _feeToSetter - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetFeeToSetter(_feeToSetter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeToSetter]);
  return hexlify(concat(['0xa2e74af6', __encodeData]));
}

/**
 * encode setLpMtRatio
 * @param {string} pool - address
 * @param {string} ratio - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2FactorySetLpMtRatio(pool: string, ratio: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [pool,ratio]);
  return hexlify(concat(['0x4a4f2ace', __encodeData]));
}