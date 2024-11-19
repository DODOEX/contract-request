import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getUniswapV2Router02ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"11155111":"0xdbA86A0800382CcB647A180A83257973CacfD1e5"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch WETH
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02WETH(chainId: number) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xad5c4648', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2Router02Factory(chainId: number) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
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
export function fetchUniswapV2Router02GetAmountIn(chainId: number, amountOut: number, reserveIn: number, reserveOut: number, fee: number) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256"], [amountOut,reserveIn,reserveOut,fee]);
  const __data = hexlify(concat(['0x571fd012', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
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
export function fetchUniswapV2Router02GetAmountOut(chainId: number, amountIn: number, reserveIn: number, reserveOut: number, fee: number) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256"], [amountIn,reserveIn,reserveOut,fee]);
  const __data = hexlify(concat(['0x52707d8c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getAmountsIn
 * @param {number} chainId - number
 * @param {number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02GetAmountsIn(chainId: number, amountOut: number, path: Array<string>, fees: Array<number>) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]"], [amountOut,path,fees]);
  const __data = hexlify(concat(['0x56191a59', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, ["uint256[]"])
}

/**
 * fetch getAmountsOut
 * @param {number} chainId - number
 * @param {number} amountIn - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @returns {Array<bigint>} amounts - uint256[]
 */
export function fetchUniswapV2Router02GetAmountsOut(chainId: number, amountIn: number, path: Array<string>, fees: Array<number>) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]"], [amountIn,path,fees]);
  const __data = hexlify(concat(['0xb677fd5c', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, ["uint256[]"])
}

/**
 * fetch quote
 * @param {number} chainId - number
 * @param {number} amountA - uint256
 * @param {number} reserveA - uint256
 * @param {number} reserveB - uint256
 * @returns {bigint} amountB - uint256
 */
export function fetchUniswapV2Router02Quote(chainId: number, amountA: number, reserveA: number, reserveB: number) {
  const __to = getUniswapV2Router02ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256"], [amountA,reserveA,reserveB]);
  const __data = hexlify(concat(['0xad615dec', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * encode addLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {number} fee - uint256
 * @param {number} amountADesired - uint256
 * @param {number} amountBDesired - uint256
 * @param {number} amountAMin - uint256
 * @param {number} amountBMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02AddLiquidity(tokenA: string, tokenB: string, fee: number, amountADesired: number, amountBDesired: number, amountAMin: number, amountBMin: number, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,fee,amountADesired,amountBDesired,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x426e40b1', __encodeData]));
}

/**
 * encode addLiquidityETH
 * @param {string} token - address
 * @param {number} fee - uint256
 * @param {number} amountTokenDesired - uint256
 * @param {number} amountTokenMin - uint256
 * @param {number} amountETHMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02AddLiquidityETH(token: string, fee: number, amountTokenDesired: number, amountTokenMin: number, amountETHMin: number, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,amountTokenDesired,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0x8d2468e4', __encodeData]));
}

/**
 * encode removeLiquidity
 * @param {string} tokenA - address
 * @param {string} tokenB - address
 * @param {number} fee - uint256
 * @param {number} liquidity - uint256
 * @param {number} amountAMin - uint256
 * @param {number} amountBMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidity(tokenA: string, tokenB: string, fee: number, liquidity: number, amountAMin: number, amountBMin: number, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","address","uint256"], [tokenA,tokenB,fee,liquidity,amountAMin,amountBMin,to,deadline]);
  return hexlify(concat(['0x96adb337', __encodeData]));
}

/**
 * encode removeLiquidityETH
 * @param {string} token - address
 * @param {number} fee - uint256
 * @param {number} liquidity - uint256
 * @param {number} amountTokenMin - uint256
 * @param {number} amountETHMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETH(token: string, fee: number, liquidity: number, amountTokenMin: number, amountETHMin: number, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xba3690cb', __encodeData]));
}

/**
 * encode removeLiquidityETHSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {number} fee - uint256
 * @param {number} liquidity - uint256
 * @param {number} amountTokenMin - uint256
 * @param {number} amountETHMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETHSupportingFeeOnTransferTokens(token: string, fee: number, liquidity: number, amountTokenMin: number, amountETHMin: number, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline]);
  return hexlify(concat(['0xc194f861', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermit
 * @param {{token: string; fee: number; liquidity: number; amountTokenMin: number; amountETHMin: number; to: string; deadline: number; approveMax: boolean; v: number; r: string; s: string}} params - tuple
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETHWithPermit(params: {token: string; fee: number; liquidity: number; amountTokenMin: number; amountETHMin: number; to: string; deadline: number; approveMax: boolean; v: number; r: string; s: string}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, uint256, uint256, uint256, uint256, address, uint256, bool, uint8, bytes32, bytes32)"], [params]);
  return hexlify(concat(['0x99230406', __encodeData]));
}

/**
 * encode removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
 * @param {string} token - address
 * @param {number} fee - uint256
 * @param {number} liquidity - uint256
 * @param {number} amountTokenMin - uint256
 * @param {number} amountETHMin - uint256
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @param {boolean} approveMax - bool
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, fee: number, liquidity: number, amountTokenMin: number, amountETHMin: number, to: string, deadline: number, approveMax: boolean, v: number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","uint256","address","uint256","bool","uint8","bytes32","bytes32"], [token,fee,liquidity,amountTokenMin,amountETHMin,to,deadline,approveMax,v,r,s]);
  return hexlify(concat(['0x3cd9979d', __encodeData]));
}

/**
 * encode removeLiquidityWithPermit
 * @param {{tokenA: string; tokenB: string; fee: number; liquidity: number; amountAMin: number; amountBMin: number; to: string; deadline: number; approveMax: boolean; v: number; r: string; s: string}} params - tuple
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02RemoveLiquidityWithPermit(params: {tokenA: string; tokenB: string; fee: number; liquidity: number; amountAMin: number; amountBMin: number; to: string; deadline: number; approveMax: boolean; v: number; r: string; s: string}) {
  const __encodeData = defaultAbiCoder.encode(["tuple(address, address, uint256, uint256, uint256, uint256, address, uint256, bool, uint8, bytes32, bytes32)"], [params]);
  return hexlify(concat(['0xe38e161a', __encodeData]));
}

/**
 * encode swapETHForExactTokens
 * @param {number} amountOut - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapETHForExactTokens(amountOut: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOut,path,fees,to,deadline]);
  return hexlify(concat(['0x8c005948', __encodeData]));
}

/**
 * encode swapExactETHForTokens
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactETHForTokens(amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0xe36dc876', __encodeData]));
}

/**
 * encode swapExactETHForTokensSupportingFeeOnTransferTokens
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address[]","uint256[]","address","uint256"], [amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x6fee0fa9', __encodeData]));
}

/**
 * encode swapExactTokensForETH
 * @param {number} amountIn - uint256
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForETH(amountIn: number, amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x851d14f5', __encodeData]));
}

/**
 * encode swapExactTokensForETHSupportingFeeOnTransferTokens
 * @param {number} amountIn - uint256
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: number, amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x27ec1eff', __encodeData]));
}

/**
 * encode swapExactTokensForTokens
 * @param {number} amountIn - uint256
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForTokens(amountIn: number, amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0xe26997dc', __encodeData]));
}

/**
 * encode swapExactTokensForTokensSupportingFeeOnTransferTokens
 * @param {number} amountIn - uint256
 * @param {number} amountOutMin - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: number, amountOutMin: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountIn,amountOutMin,path,fees,to,deadline]);
  return hexlify(concat(['0x27c1169b', __encodeData]));
}

/**
 * encode swapTokensForExactETH
 * @param {number} amountOut - uint256
 * @param {number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapTokensForExactETH(amountOut: number, amountInMax: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountOut,amountInMax,path,fees,to,deadline]);
  return hexlify(concat(['0xedb2af1f', __encodeData]));
}

/**
 * encode swapTokensForExactTokens
 * @param {number} amountOut - uint256
 * @param {number} amountInMax - uint256
 * @param {Array<string>} path - address[]
 * @param {Array<number>} fees - uint256[]
 * @param {string} to - address
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2Router02SwapTokensForExactTokens(amountOut: number, amountInMax: number, path: Array<string>, fees: Array<number>, to: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address[]","uint256[]","address","uint256"], [amountOut,amountInMax,path,fees,to,deadline]);
  return hexlify(concat(['0x55a7cf78', __encodeData]));
}