import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchUniswapV2PairDOMAIN_SEPARATOR(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch MINIMUM_LIQUIDITY
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairMINIMUM_LIQUIDITY(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xba9a7a56', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchUniswapV2PairPERMIT_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairAllowance(chainId: number, __to: string, __input1: string, __input2: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [__input1,__input2]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairBalanceOf(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint8
 */
export function fetchUniswapV2PairDecimals(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}

/**
 * fetch factory
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2PairFactory(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc45a0155', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch feeRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairFeeRate(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x978bbdb9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getReserves
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} _reserve0 - uint112
 * @returns {bigint} _reserve1 - uint112
 * @returns {bigint} _blockTimestampLast - uint32
 */
export function fetchUniswapV2PairGetReserves(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0902f1ac', __encodeData]));
  return contractRequests.batchCall<{
    _reserve0: bigint;
    _reserve1: bigint;
    _blockTimestampLast: bigint;
  }>(chainId, __to, __data, ["uint112","uint112","uint32"])
}

/**
 * fetch kLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairKLast(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7464fc3d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch lpMtRatio
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairLpMtRatio(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9670a8cb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchUniswapV2PairName(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairNonces(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch price0CumulativeLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairPrice0CumulativeLast(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5909c0d5', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch price1CumulativeLast
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairPrice1CumulativeLast(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x5a3d5493', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - string
 */
export function fetchUniswapV2PairSymbol(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch token0
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2PairToken0(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0dfe1681', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch token1
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchUniswapV2PairToken1(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd21220a7', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} __output0 - uint256
 */
export function fetchUniswapV2PairTotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {string} value - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2PairApprove(spender: string, value: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,value]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeUniswapV2PairBurn(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x89afcb44', __encodeData]));
}

/**
 * encode initialize
 * @param {string} _token0 - address
 * @param {string} _token1 - address
 * @returns {string} encode data
 */
export function encodeUniswapV2PairInitialize(_token0: string, _token1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [_token0,_token1]);
  return hexlify(concat(['0x485cc955', __encodeData]));
}

/**
 * encode mint
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeUniswapV2PairMint(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x6a627842', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {string} value - uint256
 * @param {string} deadline - uint256
 * @param {string} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeUniswapV2PairPermit(owner: string, spender: string, value: string, deadline: string, v: string, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
  return hexlify(concat(['0xd505accf', __encodeData]));
}

/**
 * encode setFeeRate
 * @param {string} totalFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2PairSetFeeRate(totalFeeRate: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [totalFeeRate]);
  return hexlify(concat(['0x45596e2e', __encodeData]));
}

/**
 * encode setLpMtRatio
 * @param {string} ratio - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2PairSetLpMtRatio(ratio: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [ratio]);
  return hexlify(concat(['0xa1e281de', __encodeData]));
}

/**
 * encode skim
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeUniswapV2PairSkim(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xbc25cf77', __encodeData]));
}

/**
 * encode swap
 * @param {string} amount0Out - uint256
 * @param {string} amount1Out - uint256
 * @param {string} to - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeUniswapV2PairSwap(amount0Out: string, amount1Out: string, to: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address","bytes"], [amount0Out,amount1Out,to,data]);
  return hexlify(concat(['0x022c0d9f', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeUniswapV2PairSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {string} value - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2PairTransfer(to: string, value: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,value]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string} value - uint256
 * @returns {string} encode data
 */
export function encodeUniswapV2PairTransferFrom(from: string, to: string, value: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,value]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}