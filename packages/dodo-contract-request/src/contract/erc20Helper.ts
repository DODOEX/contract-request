import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

function getContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","42161":"0x7C062B9C584fA6eC2504270790D38240A2c5fE72"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch bytes32ToString
 * @param {number} chainId - number
 * @param {string} _bytes - bytes32
 * @returns {string} _string - string
 */
export function fetchErc20HelperBytes32ToString(chainId: number, _bytes: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes32"], [_bytes]);
  const __data = hexlify(concat(['0x9201de55', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch isERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {boolean} isOk - bool
 * @returns {string} symbol - string
 * @returns {string} name - string
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchErc20HelperIsERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0xf1a16c31', __encodeData]));
  return contractRequests.batchCall<{
    isOk: boolean;
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, ["bool","string","string","uint256","uint256","uint256"])
}

/**
 * fetch judgeERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {string} symbol - string
 * @returns {string} name - string
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchErc20HelperJudgeERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0xef9361db', __encodeData]));
  return contractRequests.batchCall<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, ["string","string","uint256","uint256","uint256"])
}

/**
 * fetch judgeOldERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {string} symbol - bytes32
 * @returns {string} name - bytes32
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchErc20HelperJudgeOldERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0x76cd81e3', __encodeData]));
  return contractRequests.batchCall<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, ["bytes32","bytes32","uint256","uint256","uint256"])
}