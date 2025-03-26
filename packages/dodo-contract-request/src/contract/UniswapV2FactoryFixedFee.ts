import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"98864":"0x701Ac6fAD7850956f966a85655348ac1B7c93368","98866":"0xd2b80519a88937A412415bAF1b7Fb1855189EA36","11155111":"0xF62c03E08ada871A0bEb309762E260a7a6a880E6"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch allPairs
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFixedFeeAllPairs(chainId: number, __input1: number): Promise<string> {
  const __to = getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x1e3dd18b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFixedFeeAllPairsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFixedFeeAllPairs', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFixedFeeAllPairs(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch allPairsLength
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2FactoryFixedFeeAllPairsLength(chainId: number): Promise<bigint> {
  const __to = getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x574f2ba3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchUniswapV2FactoryFixedFeeAllPairsLengthQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFixedFeeAllPairsLength', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFixedFeeAllPairsLength(chainId as number);
    }
  }
}

/**
 * fetch feeTo
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFixedFeeFeeTo(chainId: number): Promise<string> {
  const __to = getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x017e7e58', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFixedFeeFeeToQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFixedFeeFeeTo', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFixedFeeFeeTo(chainId as number);
    }
  }
}

/**
 * fetch feeToSetter
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFixedFeeFeeToSetter(chainId: number): Promise<string> {
  const __to = getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x094b7415', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFixedFeeFeeToSetterQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFixedFeeFeeToSetter', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFixedFeeFeeToSetter(chainId as number);
    }
  }
}

/**
 * fetch getPair
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2FactoryFixedFeeGetPair(chainId: number, __input1: string, __input2: string): Promise<string> {
  const __to = getUniswapV2FactoryFixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xe6a43905', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2FactoryFixedFeeGetPairQueryOptions(chainId: number | undefined, __input1: string | undefined, __input2: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2FactoryFixedFeeGetPair', chainId, __input1, __input2],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null && __input2 !== undefined && __input2 !== null, 
    queryFn: () => {
        return fetchUniswapV2FactoryFixedFeeGetPair(chainId as number,__input1 as string,__input2 as string);
    }
  }
}

/**
 * encode createPair
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactoryFixedFeeCreatePair(tokenA: string, tokenB: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [tokenA,tokenB]);
  return hexlify(concat(['0xc9c65396', __encodeData]));
}

/**
 * encode setFeeTo
 * @param {string} _feeTo - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactoryFixedFeeSetFeeTo(_feeTo: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeTo]);
  return hexlify(concat(['0xf46901ed', __encodeData]));
}

/**
 * encode setFeeToSetter
 * @param {string} _feeToSetter - address
 * @returns {string} encode data
 */
export function encodeUniswapV2FactoryFixedFeeSetFeeToSetter(_feeToSetter: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeToSetter]);
  return hexlify(concat(['0xa2e74af6', __encodeData]));
}