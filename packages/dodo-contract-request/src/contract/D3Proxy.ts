import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getD3ProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x411ec324598EF53b1E8663e335e9094464523e6B"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _D3_VAULT_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchD3Proxy_D3_VAULT_(chainId: number) {
  const __to = getD3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x811a5b9e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchD3Proxy_DODO_APPROVE_PROXY_(chainId: number) {
  const __to = getD3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _ETH_ADDRESS_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchD3Proxy_ETH_ADDRESS_(chainId: number) {
  const __to = getD3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xbd2ec319', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchD3Proxy_WETH_(chainId: number) {
  const __to = getD3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode buyTokens
 * @param {string} pool - address
 * @param {string} to - address
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {number} quoteAmount - uint256
 * @param {number} maxPayAmount - uint256
 * @param {string} data - bytes
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxyBuyTokens(pool: string, to: string, fromToken: string, toToken: string, quoteAmount: number, maxPayAmount: number, data: string, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","bytes","uint256"], [pool,to,fromToken,toToken,quoteAmount,maxPayAmount,data,deadLine]);
  return hexlify(concat(['0xbe223e53', __encodeData]));
}

/**
 * encode d3MMSwapCallBack
 * @param {string} token - address
 * @param {number} value - uint256
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeD3ProxyD3MMSwapCallBack(token: string, value: number, _data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [token,value,_data]);
  return hexlify(concat(['0x3e88c8ab', __encodeData]));
}

/**
 * encode makerDeposit
 * @param {string} pool - address
 * @param {string} token - address
 * @param {number} amount - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxyMakerDeposit(pool: string, token: string, amount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [pool,token,amount]);
  return hexlify(concat(['0x1f03c7c3', __encodeData]));
}

/**
 * encode multicall
 * @param {Array<string>} data - bytes[]
 * @returns {string} encode data
 */
export function encodeD3ProxyMulticall(data: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["bytes[]"], [data]);
  return hexlify(concat(['0xac9650d8', __encodeData]));
}

/**
 * encode refundETH

 * @returns {string} encode data
 */
export function encodeD3ProxyRefundETH() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x12210e8a', __encodeData]));
}

/**
 * encode sellTokens
 * @param {string} pool - address
 * @param {string} to - address
 * @param {string} fromToken - address
 * @param {string} toToken - address
 * @param {number} fromAmount - uint256
 * @param {number} minReceiveAmount - uint256
 * @param {string} data - bytes
 * @param {number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxySellTokens(pool: string, to: string, fromToken: string, toToken: string, fromAmount: number, minReceiveAmount: number, data: string, deadLine: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address","uint256","uint256","bytes","uint256"], [pool,to,fromToken,toToken,fromAmount,minReceiveAmount,data,deadLine]);
  return hexlify(concat(['0x1d16bc3e', __encodeData]));
}

/**
 * encode userDeposit
 * @param {string} user - address
 * @param {string} token - address
 * @param {number} amount - uint256
 * @param {number} minDtokenAmount - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxyUserDeposit(user: string, token: string, amount: number, minDtokenAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256"], [user,token,amount,minDtokenAmount]);
  return hexlify(concat(['0xf2f01e47', __encodeData]));
}

/**
 * encode userWithdraw
 * @param {string} to - address
 * @param {string} token - address
 * @param {number} dTokenAmount - uint256
 * @param {number} minReceiveAmount - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxyUserWithdraw(to: string, token: string, dTokenAmount: number, minReceiveAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256"], [to,token,dTokenAmount,minReceiveAmount]);
  return hexlify(concat(['0x5fff4847', __encodeData]));
}

/**
 * encode withdrawWETH
 * @param {string} to - address
 * @param {number} minAmount - uint256
 * @returns {string} encode data
 */
export function encodeD3ProxyWithdrawWETH(to: string, minAmount: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,minAmount]);
  return hexlify(concat(['0x93113b5c', __encodeData]));
}