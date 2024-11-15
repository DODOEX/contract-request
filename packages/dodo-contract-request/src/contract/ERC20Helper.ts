import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getERC20HelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","2818":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","80084":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510","167000":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","543210":"0xc70C53dB891d5bdd2da5ECb7A0D4240A76a47934"};
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
export function fetchERC20HelperBytes32ToString(chainId: number, _bytes: string) {
  const __to = getERC20HelperContractAddressByChainId(chainId);

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
export function fetchERC20HelperIsERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getERC20HelperContractAddressByChainId(chainId);

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
export function fetchERC20HelperJudgeERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getERC20HelperContractAddressByChainId(chainId);

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
export function fetchERC20HelperJudgeOldERC20(chainId: number, token: string, user: string, spender: string) {
  const __to = getERC20HelperContractAddressByChainId(chainId);

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