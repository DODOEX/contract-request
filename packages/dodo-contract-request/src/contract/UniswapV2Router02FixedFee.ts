import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2Router02FixedFeeContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"98864":"0x82B26eb18382f7532015248078AB1f6030413396","98865":"0x8b87D4B384517d2E1AFC61b3292d6e6C411ea303","11155111":"0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch WETH
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02FixedFeeWETH(chainId: number): Promise<string> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xad5c4648', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2Router02FixedFeeWETHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeWETH(chainId as number);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02FixedFeeFactory(chainId: number): Promise<string> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2Router02FixedFeeFactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeFactory(chainId as number);
    }
  }
}

/**
 * fetch getAmountIn
 * @param {number} chainId - number
 * @param {number} amountOut - uint256
 * @param {number} reserveIn - uint256
 * @param {number} reserveOut - uint256
 * @returns {bigint} amountIn - uint256
 */
export function fetchUniswapV2Router02FixedFeeGetAmountIn(chainId: number, amountOut: number, reserveIn: number, reserveOut: number): Promise<bigint> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [amountOut,reserveIn,reserveOut]);
  const __data = hexlify(concat(['0x85f8c259', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountIn","type":"uint256"}])
}
export function getFetchUniswapV2Router02FixedFeeGetAmountInQueryOptions(chainId: number | undefined, amountOut: number | undefined, reserveIn: number | undefined, reserveOut: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, amountOut, reserveIn, reserveOut],
    enabled: chainId !== undefined && chainId !== null && amountOut !== undefined && amountOut !== null && reserveIn !== undefined && reserveIn !== null && reserveOut !== undefined && reserveOut !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeGetAmountIn(chainId as number,amountOut as number,reserveIn as number,reserveOut as number);
    }
  }
}

/**
 * fetch getAmountOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {number} reserveIn - uint256
 * @param {number} reserveOut - uint256
 * @returns {bigint} amountOut - uint256
 */
export function fetchUniswapV2Router02FixedFeeGetAmountOut(chainId: number, amountIn: number, reserveIn: number, reserveOut: number): Promise<bigint> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [amountIn,reserveIn,reserveOut]);
  const __data = hexlify(concat(['0x054d50d4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountOut","type":"uint256"}])
}
export function getFetchUniswapV2Router02FixedFeeGetAmountOutQueryOptions(chainId: number | undefined, amountIn: number | undefined, reserveIn: number | undefined, reserveOut: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, amountIn, reserveIn, reserveOut],
    enabled: chainId !== undefined && chainId !== null && amountIn !== undefined && amountIn !== null && reserveIn !== undefined && reserveIn !== null && reserveOut !== undefined && reserveOut !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeGetAmountOut(chainId as number,amountIn as number,reserveIn as number,reserveOut as number);
    }
  }
}

/**
 * fetch getAmountsIn
 * @param {number} chainId - number
 * @param {number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02FixedFeeGetAmountsIn(chainId: number, amountOut: number, path: Array<string>): Promise<Array<bigint>> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]"], [amountOut,path]);
  const __data = hexlify(concat(['0x1f00ca74', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}])
}
export function getFetchUniswapV2Router02FixedFeeGetAmountsInQueryOptions(chainId: number | undefined, amountOut: number | undefined, path: Array<string> | undefined) {
  return {
    queryKey: ['contract-request', chainId, amountOut, path],
    enabled: chainId !== undefined && chainId !== null && amountOut !== undefined && amountOut !== null && path !== undefined && path !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeGetAmountsIn(chainId as number,amountOut as number,path as Array<string>);
    }
  }
}

/**
 * fetch getAmountsOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {Array<string>} path - address[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02FixedFeeGetAmountsOut(chainId: number, amountIn: number, path: Array<string>): Promise<Array<bigint>> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]"], [amountIn,path]);
  const __data = hexlify(concat(['0xd06ca61f', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}])
}
export function getFetchUniswapV2Router02FixedFeeGetAmountsOutQueryOptions(chainId: number | undefined, amountIn: number | undefined, path: Array<string> | undefined) {
  return {
    queryKey: ['contract-request', chainId, amountIn, path],
    enabled: chainId !== undefined && chainId !== null && amountIn !== undefined && amountIn !== null && path !== undefined && path !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeGetAmountsOut(chainId as number,amountIn as number,path as Array<string>);
    }
  }
}

/**
 * fetch quote
 * @param {number} chainId - number
 * @param {number} amountA - uint256
 * @param {number} reserveA - uint256
 * @param {number} reserveB - uint256
 * @returns {bigint} amountB - uint256
 */
export function fetchUniswapV2Router02FixedFeeQuote(chainId: number, amountA: number, reserveA: number, reserveB: number): Promise<bigint> {
  const __to = getUniswapV2Router02FixedFeeContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [amountA,reserveA,reserveB]);
  const __data = hexlify(concat(['0xad615dec', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountB","type":"uint256"}])
}
export function getFetchUniswapV2Router02FixedFeeQuoteQueryOptions(chainId: number | undefined, amountA: number | undefined, reserveA: number | undefined, reserveB: number | undefined) {
  return {
    queryKey: ['contract-request', chainId, amountA, reserveA, reserveB],
    enabled: chainId !== undefined && chainId !== null && amountA !== undefined && amountA !== null && reserveA !== undefined && reserveA !== null && reserveB !== undefined && reserveB !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02FixedFeeQuote(chainId as number,amountA as number,reserveA as number,reserveB as number);
    }
  }
}

/**
 * encode addLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} amountADesired - uint256
 * @param {string | number} amountBDesired - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeAddLiquidity(tokenA: string, tokenB: string, amountADesired: string | number, amountBDesired: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0xe8e33700', __encodeData]));
}

/**
 * encode addLiquidityETH
 * @param {string} token - address
 * @param {string | number} amountTokenDesired - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeAddLiquidityETH(token: string, amountTokenDesired: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","address","uint256"], [token,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xf305d719', __encodeData]));
}

/**
 * encode removeLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidity(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0xbaa2abde', __encodeData]));
}

/**
 * encode removeLiquidityETH
 * @param {string} token - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidityETH(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","address","uint256"], [token,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0x02751cec', __encodeData]));
}

/**
 * encode removeLiquidityETHSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","address","uint256"], [token,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xaf2979eb', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermit
 * @param {string} token - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @param {boolean} approveMax - bool
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidityETHWithPermit(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","address","uint256","bool","uint8","bytes32","bytes32"], [token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s]);
  return hexlify(concat(['0xded9382a', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @param {boolean} approveMax - bool
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","address","uint256","bool","uint8","bytes32","bytes32"], [token,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s]);
  return hexlify(concat(['0x5b0d5984', __encodeData]));
}

/**
 * encode removeLiquidityWithPermit
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @param {boolean} approveMax - bool
 * @param {string | number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeRemoveLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","address","uint256","bool","uint8","bytes32","bytes32"], [tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline,approveMax,v,r,s]);
  return hexlify(concat(['0x2195995c', __encodeData]));
}

/**
 * encode swapETHForExactTokens
 * @param {string | number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapETHForExactTokens(amountOut: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","address","uint256"], [amountOut,path,to,deadline]);
  return hexlify(concat(['0xfb3bdb41', __encodeData]));
}

/**
 * encode swapExactETHForTokens
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactETHForTokens(amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","address","uint256"], [amountOutMin,path,to,deadline]);
  return hexlify(concat(['0x7ff36ab5', __encodeData]));
}

/**
 * encode swapExactETHForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","address","uint256"], [amountOutMin,path,to,deadline]);
  return hexlify(concat(['0xb6f9de95', __encodeData]));
}

/**
 * encode swapExactTokensForETH
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactTokensForETH(amountIn: string | number, amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountIn,amountOutMin,path,to,deadline]);
  return hexlify(concat(['0x18cbafe5', __encodeData]));
}

/**
 * encode swapExactTokensForETHSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountIn,amountOutMin,path,to,deadline]);
  return hexlify(concat(['0x791ac947', __encodeData]));
}

/**
 * encode swapExactTokensForTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactTokensForTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountIn,amountOutMin,path,to,deadline]);
  return hexlify(concat(['0x38ed1739', __encodeData]));
}

/**
 * encode swapExactTokensForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountIn,amountOutMin,path,to,deadline]);
  return hexlify(concat(['0x5c11d795', __encodeData]));
}

/**
 * encode swapTokensForExactETH
 * @param {string | number} amountOut - uint256
 * @param {string | number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapTokensForExactETH(amountOut: string | number, amountInMax: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountOut,amountInMax,path,to,deadline]);
  return hexlify(concat(['0x4a25d94a', __encodeData]));
}

/**
 * encode swapTokensForExactTokens
 * @param {string | number} amountOut - uint256
 * @param {string | number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02FixedFeeSwapTokensForExactTokens(amountOut: string | number, amountInMax: string | number, path: Array<string>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","address","uint256"], [amountOut,amountInMax,path,to,deadline]);
  return hexlify(concat(['0x8803dbee', __encodeData]));
}