import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2Router02ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","56":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","137":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","8453":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7","10143":"0x1c430d84DD6185b1Ea2d4693e0033799d193542f","42161":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","47763":"0x2Da0855f04919D402Af88D0D04AbB38177FE47fa","167000":"0x19E10fb5875C4901D9650aFc001197285dBBC060","421614":"0x6bbfD968509752518c1e9fBb0918A8AF8615879e","11155111":"0x78F661c4a883064018c6FA2F2815c0c8b1d35327","11155931":"0xB460A66f7147717c7982dA5b03523a34BEe88cC4"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch WETH
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02WETH(chainId: number): Promise<string> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xad5c4648', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2Router02WETHQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02WETH', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02WETH(chainId as number);
    }
  }
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02Factory(chainId: number): Promise<string> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchUniswapV2Router02FactoryQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02Factory', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02Factory(chainId as number);
    }
  }
}

/**
 * fetch getAmountIn
 * @param {number} chainId - number
 * @param {number} amountOut - uint256
 * @param {number} reserveIn - uint256
 * @param {number} reserveOut - uint256
 * @param {number} fee - uint256
 * @returns {bigint} amountIn - uint256
 */
export function fetchUniswapV2Router02GetAmountIn(chainId: number, amountOut: number, reserveIn: number, reserveOut: number, fee: number): Promise<bigint> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256"], [amountOut,reserveIn,reserveOut,fee]);
  const __data = hexlify(concat(['0x571fd012', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountIn","type":"uint256"}])
}
export function getFetchUniswapV2Router02GetAmountInQueryOptions(chainId: number | undefined, amountOut: number | undefined, reserveIn: number | undefined, reserveOut: number | undefined, fee: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02GetAmountIn', chainId, amountOut, reserveIn, reserveOut, fee],
    enabled: chainId !== undefined && chainId !== null && amountOut !== undefined && amountOut !== null && reserveIn !== undefined && reserveIn !== null && reserveOut !== undefined && reserveOut !== null && fee !== undefined && fee !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02GetAmountIn(chainId as number,amountOut as number,reserveIn as number,reserveOut as number,fee as number);
    }
  }
}

/**
 * fetch getAmountOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {number} reserveIn - uint256
 * @param {number} reserveOut - uint256
 * @param {number} fee - uint256
 * @returns {bigint} amountOut - uint256
 */
export function fetchUniswapV2Router02GetAmountOut(chainId: number, amountIn: number, reserveIn: number, reserveOut: number, fee: number): Promise<bigint> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256"], [amountIn,reserveIn,reserveOut,fee]);
  const __data = hexlify(concat(['0x52707d8c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountOut","type":"uint256"}])
}
export function getFetchUniswapV2Router02GetAmountOutQueryOptions(chainId: number | undefined, amountIn: number | undefined, reserveIn: number | undefined, reserveOut: number | undefined, fee: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02GetAmountOut', chainId, amountIn, reserveIn, reserveOut, fee],
    enabled: chainId !== undefined && chainId !== null && amountIn !== undefined && amountIn !== null && reserveIn !== undefined && reserveIn !== null && reserveOut !== undefined && reserveOut !== null && fee !== undefined && fee !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02GetAmountOut(chainId as number,amountIn as number,reserveIn as number,reserveOut as number,fee as number);
    }
  }
}

/**
 * fetch getAmountsIn
 * @param {number} chainId - number
 * @param {number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02GetAmountsIn(chainId: number, amountOut: number, path: Array<string>, fees: Array<number>): Promise<Array<bigint>> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]"], [amountOut,path,fees]);
  const __data = hexlify(concat(['0x56191a59', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}])
}
export function getFetchUniswapV2Router02GetAmountsInQueryOptions(chainId: number | undefined, amountOut: number | undefined, path: Array<string> | undefined, fees: Array<number> | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02GetAmountsIn', chainId, amountOut, path, fees],
    enabled: chainId !== undefined && chainId !== null && amountOut !== undefined && amountOut !== null && path !== undefined && path !== null && fees !== undefined && fees !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02GetAmountsIn(chainId as number,amountOut as number,path as Array<string>,fees as Array<number>);
    }
  }
}

/**
 * fetch getAmountsOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02GetAmountsOut(chainId: number, amountIn: number, path: Array<string>, fees: Array<number>): Promise<Array<bigint>> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]"], [amountIn,path,fees]);
  const __data = hexlify(concat(['0xb677fd5c', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}])
}
export function getFetchUniswapV2Router02GetAmountsOutQueryOptions(chainId: number | undefined, amountIn: number | undefined, path: Array<string> | undefined, fees: Array<number> | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02GetAmountsOut', chainId, amountIn, path, fees],
    enabled: chainId !== undefined && chainId !== null && amountIn !== undefined && amountIn !== null && path !== undefined && path !== null && fees !== undefined && fees !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02GetAmountsOut(chainId as number,amountIn as number,path as Array<string>,fees as Array<number>);
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
export function fetchUniswapV2Router02Quote(chainId: number, amountA: number, reserveA: number, reserveB: number): Promise<bigint> {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [amountA,reserveA,reserveB]);
  const __data = hexlify(concat(['0xad615dec', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"amountB","type":"uint256"}])
}
export function getFetchUniswapV2Router02QuoteQueryOptions(chainId: number | undefined, amountA: number | undefined, reserveA: number | undefined, reserveB: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchUniswapV2Router02Quote', chainId, amountA, reserveA, reserveB],
    enabled: chainId !== undefined && chainId !== null && amountA !== undefined && amountA !== null && reserveA !== undefined && reserveA !== null && reserveB !== undefined && reserveB !== null, 
    queryFn: () => {
        return fetchUniswapV2Router02Quote(chainId as number,amountA as number,reserveA as number,reserveB as number);
    }
  }
}

/**
 * encode addLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} fee - uint256
 * @param {string | number} amountADesired - uint256
 * @param {string | number} amountBDesired - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02AddLiquidity(tokenA: string, tokenB: string, fee: string | number, amountADesired: string | number, amountBDesired: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,fee,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x426e40b1', __encodeData]));
}

/**
 * encode addLiquidityETH
 * @param {string} token - address
 * @param {string | number} fee - uint256
 * @param {string | number} amountTokenDesired - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02AddLiquidityETH(token: string, fee: string | number, amountTokenDesired: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0x8d2468e4', __encodeData]));
}

/**
 * encode removeLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {string | number} fee - uint256
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountAMin - uint256
 * @param {string | number} amountBMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidity(tokenA: string, tokenB: string, fee: string | number, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,fee,liquidity,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x96adb337', __encodeData]));
}

/**
 * encode removeLiquidityETH
 * @param {string} token - address
 * @param {string | number} fee - uint256
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETH(token: string, fee: string | number, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xba3690cb', __encodeData]));
}

/**
 * encode removeLiquidityETHSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {string | number} fee - uint256
 * @param {string | number} liquidity - uint256
 * @param {string | number} amountTokenMin - uint256
 * @param {string | number} amountETHMin - uint256
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETHSupportingFeeOnTransferTokens(token: string, fee: string | number, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xc194f861', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermit
 * @param {{token: string; fee: string | number; liquidity: string | number; amountTokenMin: string | number; amountETHMin: string | number; to: string; deadline: string | number; approveMax: boolean; v: string | number; r: string; s: string}} params - tuple
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETHWithPermit(params: {token: string; fee: string | number; liquidity: string | number; amountTokenMin: string | number; amountETHMin: string | number; to: string; deadline: string | number; approveMax: boolean; v: string | number; r: string; s: string}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, uint256, uint256, uint256, uint256, address, uint256, bool, uint8, bytes32, bytes32)"], [Object.values(params)]);
  return hexlify(concat(['0x83c54d52', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {string | number} fee - uint256
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
export function encodeUniswapV2Router02RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, fee: string | number, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256","bool","uint8","bytes32","bytes32"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s]);
  return hexlify(concat(['0x3cd9979d', __encodeData]));
}

/**
 * encode removeLiquidityWithPermit
 * @param {{tokenA: string; tokenB: string; fee: string | number; liquidity: string | number; amountAMin: string | number; amountBMin: string | number; to: string; deadline: string | number; approveMax: boolean; v: string | number; r: string; s: string}} params - tuple
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityWithPermit(params: {tokenA: string; tokenB: string; fee: string | number; liquidity: string | number; amountAMin: string | number; amountBMin: string | number; to: string; deadline: string | number; approveMax: boolean; v: string | number; r: string; s: string}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, uint256, uint256, address, uint256, bool, uint8, bytes32, bytes32)"], [Object.values(params)]);
  return hexlify(concat(['0xffa5d80b', __encodeData]));
}

/**
 * encode swapETHForExactTokens
 * @param {string | number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapETHForExactTokens(amountOut: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOut,path,fees,to,deadline]);
  return hexlify(concat(['0x8c005948', __encodeData]));
}

/**
 * encode swapExactETHForTokens
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactETHForTokens(amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0xe36dc876', __encodeData]));
}

/**
 * encode swapExactETHForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x6fee0fa9', __encodeData]));
}

/**
 * encode swapExactTokensForETH
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForETH(amountIn: string | number, amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x851d14f5', __encodeData]));
}

/**
 * encode swapExactTokensForETHSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x27ec1eff', __encodeData]));
}

/**
 * encode swapExactTokensForTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0xe26997dc', __encodeData]));
}

/**
 * encode swapExactTokensForTokensSupportingFeeOnTransferTokens
 * @param {string | number} amountIn - uint256
 * @param {string | number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x27c1169b', __encodeData]));
}

/**
 * encode swapTokensForExactETH
 * @param {string | number} amountOut - uint256
 * @param {string | number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapTokensForExactETH(amountOut: string | number, amountInMax: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountOut,amountInMax,path,fees,to,deadline]);
  return hexlify(concat(['0xedb2af1f', __encodeData]));
}

/**
 * encode swapTokensForExactTokens
 * @param {string | number} amountOut - uint256
 * @param {string | number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<string | number>} fees - uint256[]
 * @param {string} to - address
 * @param {string | number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapTokensForExactTokens(amountOut: string | number, amountInMax: string | number, path: Array<string>, fees: Array<string | number>, to: string, deadline: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountOut,amountInMax,path,fees,to,deadline]);
  return hexlify(concat(['0x55a7cf78', __encodeData]));
}