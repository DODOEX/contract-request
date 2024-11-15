import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch DOMAIN_SEPARATOR
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchDSPDOMAIN_SEPARATOR(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3644e515', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch PERMIT_TYPEHASH
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - bytes32
 */
export function fetchDSPPERMIT_TYPEHASH(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x30adf81f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["bytes32"])
}

/**
 * fetch _BASE_PRICE_CUMULATIVE_LAST_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchDSP_BASE_PRICE_CUMULATIVE_LAST_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfe24cb7f', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _BASE_RESERVE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint112
 */
export function fetchDSP_BASE_RESERVE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x7d721504', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}

/**
 * fetch _BASE_TARGET_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint112
 */
export function fetchDSP_BASE_TARGET_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe539ef49', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}

/**
 * fetch _BASE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchDSP_BASE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4a248d2a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _BLOCK_TIMESTAMP_LAST_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint32
 */
export function fetchDSP_BLOCK_TIMESTAMP_LAST_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x880a4d87', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint32"])
}

/**
 * fetch _IS_OPEN_TWAP_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {boolean}  - bool
 */
export function fetchDSP_IS_OPEN_TWAP_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2df6cb48', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch _I_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchDSP_I_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf811d692', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _K_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchDSP_K_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xec2fd46d', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _LP_FEE_RATE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchDSP_LP_FEE_RATE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xab44a7a3', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchDSP_MAINTAINER_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchDSP_MT_FEE_RATE_MODEL_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf6b06e70', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _QUOTE_RESERVE_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint112
 */
export function fetchDSP_QUOTE_RESERVE_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbbf5ce78', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}

/**
 * fetch _QUOTE_TARGET_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint112
 */
export function fetchDSP_QUOTE_TARGET_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x77f58657', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint112"])
}

/**
 * fetch _QUOTE_TOKEN_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - address
 */
export function fetchDSP_QUOTE_TOKEN_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xd4b97046', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _RState_
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint32
 */
export function fetchDSP_RState_(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbf357dae', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint32"])
}

/**
 * fetch addressToShortString
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} _addr - address
 * @returns {string}  - string
 */
export function fetchDSPAddressToShortString(chainId: number, __to: string, _addr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_addr]);
  const __data = hexlify(concat(['0x17101940', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch allowance
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @param {string} spender - address
 * @returns {bigint}  - uint256
 */
export function fetchDSPAllowance(chainId: number, __to: string, owner: string, spender: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,spender]);
  const __data = hexlify(concat(['0xdd62ed3e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} owner - address
 * @returns {bigint} balance - uint256
 */
export function fetchDSPBalanceOf(chainId: number, __to: string, owner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch decimals
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint8
 */
export function fetchDSPDecimals(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x313ce567', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint8"])
}

/**
 * fetch getBaseInput
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} input - uint256
 */
export function fetchDSPGetBaseInput(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x65f6fcbb', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getMidPrice
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} midPrice - uint256
 */
export function fetchDSPGetMidPrice(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xee27c689', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getPMMState
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {{i: bigint; K: bigint; B: bigint; Q: bigint; B0: bigint; Q0: bigint; R: bigint}} state - tuple
 */
export function fetchDSPGetPMMState(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa382d1b9', __encodeData]));
  return contractRequests.batchCall<{i: bigint; K: bigint; B: bigint; Q: bigint; B0: bigint; Q0: bigint; R: bigint}>(chainId, __to, __data, ["tuple"])
}

/**
 * fetch getPMMStateForCall
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} i - uint256
 * @returns {bigint} K - uint256
 * @returns {bigint} B - uint256
 * @returns {bigint} Q - uint256
 * @returns {bigint} B0 - uint256
 * @returns {bigint} Q0 - uint256
 * @returns {bigint} R - uint256
 */
export function fetchDSPGetPMMStateForCall(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfd1ed7e9', __encodeData]));
  return contractRequests.batchCall<{
    i: bigint;
    K: bigint;
    B: bigint;
    Q: bigint;
    B0: bigint;
    Q0: bigint;
    R: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint256","uint256","uint256","uint256","uint256"])
}

/**
 * fetch getQuoteInput
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} input - uint256
 */
export function fetchDSPGetQuoteInput(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x71f9100c', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getUserFeeRate
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} user - address
 * @returns {bigint} lpFeeRate - uint256
 * @returns {bigint} mtFeeRate - uint256
 */
export function fetchDSPGetUserFeeRate(chainId: number, __to: string, user: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0x44096609', __encodeData]));
  return contractRequests.batchCall<{
    lpFeeRate: bigint;
    mtFeeRate: bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}

/**
 * fetch getVaultReserve
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint} baseReserve - uint256
 * @returns {bigint} quoteReserve - uint256
 */
export function fetchDSPGetVaultReserve(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x36223ce9', __encodeData]));
  return contractRequests.batchCall<{
    baseReserve: bigint;
    quoteReserve: bigint;
  }>(chainId, __to, __data, ["uint256","uint256"])
}

/**
 * fetch name
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchDSPName(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch nonces
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} __input1 - address
 * @returns {bigint}  - uint256
 */
export function fetchDSPNonces(chainId: number, __to: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x7ecebe00', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch querySellBase
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} trader - address
 * @param {number} payBaseAmount - uint256
 * @returns {bigint} receiveQuoteAmount - uint256
 * @returns {bigint} mtFee - uint256
 * @returns {bigint} newRState - uint8
 * @returns {bigint} newBaseTarget - uint256
 */
export function fetchDSPQuerySellBase(chainId: number, __to: string, trader: string, payBaseAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [trader,payBaseAmount]);
  const __data = hexlify(concat(['0x79a04876', __encodeData]));
  return contractRequests.batchCall<{
    receiveQuoteAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newBaseTarget: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint8","uint256"])
}

/**
 * fetch querySellQuote
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {string} trader - address
 * @param {number} payQuoteAmount - uint256
 * @returns {bigint} receiveBaseAmount - uint256
 * @returns {bigint} mtFee - uint256
 * @returns {bigint} newRState - uint8
 * @returns {bigint} newQuoteTarget - uint256
 */
export function fetchDSPQuerySellQuote(chainId: number, __to: string, trader: string, payQuoteAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [trader,payQuoteAmount]);
  const __data = hexlify(concat(['0x66410a21', __encodeData]));
  return contractRequests.batchCall<{
    receiveBaseAmount: bigint;
    mtFee: bigint;
    newRState: bigint;
    newQuoteTarget: bigint;
  }>(chainId, __to, __data, ["uint256","uint256","uint8","uint256"])
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchDSPSymbol(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {bigint}  - uint256
 */
export function fetchDSPTotalSupply(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch version
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string}  - string
 */
export function fetchDSPVersion(chainId: number, __to: string) {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * encode approve
 * @param {string} spender - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPApprove(spender: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [spender,amount]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode buyShares
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPBuyShares(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0x4c85b425', __encodeData]));
}

/**
 * encode flashLoan
 * @param {number} baseAmount - uint256
 * @param {number} quoteAmount - uint256
 * @param {string} assetTo - address
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDSPFlashLoan(baseAmount: number, quoteAmount: number, assetTo: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","address","bytes"], [baseAmount,quoteAmount,assetTo,data]);
  return hexlify(concat(['0xd0a494e4', __encodeData]));
}

/**
 * encode init
 * @param {string} maintainer - address
 * @param {string} baseTokenAddress - address
 * @param {string} quoteTokenAddress - address
 * @param {number} lpFeeRate - uint256
 * @param {string} mtFeeRateModel - address
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeDSPInit(maintainer: string, baseTokenAddress: string, quoteTokenAddress: string, lpFeeRate: number, mtFeeRateModel: string, i: number, k: number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","address","uint256","uint256","bool"], [maintainer,baseTokenAddress,quoteTokenAddress,lpFeeRate,mtFeeRateModel,i,k,isOpenTWAP]);
  return hexlify(concat(['0x5039972a', __encodeData]));
}

/**
 * encode permit
 * @param {string} owner - address
 * @param {string} spender - address
 * @param {number} value - uint256
 * @param {number} deadline - uint256
 * @param {number} v - uint8
 * @param {string} r - bytes32
 * @param {string} s - bytes32
 * @returns {string} encode data
 */
export function encodeDSPPermit(owner: string, spender: string, value: number, deadline: number, v: number, r: string, s: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint8","bytes32","bytes32"], [owner,spender,value,deadline,v,r,s]);
  return hexlify(concat(['0xd505accf', __encodeData]));
}

/**
 * encode sellBase
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPSellBase(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xbd6015b4', __encodeData]));
}

/**
 * encode sellQuote
 * @param {string} to - address
 * @returns {string} encode data
 */
export function encodeDSPSellQuote(to: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [to]);
  return hexlify(concat(['0xdd93f59a', __encodeData]));
}

/**
 * encode sellShares
 * @param {number} shareAmount - uint256
 * @param {string} to - address
 * @param {number} baseMinAmount - uint256
 * @param {number} quoteMinAmount - uint256
 * @param {string} data - bytes
 * @param {number} deadline - uint256
 * @returns {string} encode data
 */
export function encodeDSPSellShares(shareAmount: number, to: string, baseMinAmount: number, quoteMinAmount: number, data: string, deadline: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","uint256","uint256","bytes","uint256"], [shareAmount,to,baseMinAmount,quoteMinAmount,data,deadline]);
  return hexlify(concat(['0xb56ceaa6', __encodeData]));
}

/**
 * encode sync

 * @returns {string} encode data
 */
export function encodeDSPSync() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0xfff6cae9', __encodeData]));
}

/**
 * encode transfer
 * @param {string} to - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPTransfer(to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,amount]);
  return hexlify(concat(['0xa9059cbb', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDSPTransferFrom(from: string, to: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,amount]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}