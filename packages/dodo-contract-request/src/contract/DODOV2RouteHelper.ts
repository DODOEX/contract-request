import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2RouteHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x9337cA090c390667984869193e10c3D4f9a17da8","2818":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","80084":"0x119115D4119a504AD0CccD566904ea055C377dE5","167000":"0xC7EaBEc77Be175432DC20c0056Cce4c2C78B84F3","543210":"0xd04fd58c50eAde267Fe5648f21d3738FCaE797e3"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2RouteHelper_DPP_FACTORY_(chainId: number) {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DSP_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2RouteHelper_DSP_FACTORY_(chainId: number) {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc382437', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DVM_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODOV2RouteHelper_DVM_FACTORY_(chainId: number) {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x69e4e417', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getPairDetail
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @param {string} userAddr - address
 * @returns {[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]} res - tuple[]
 */
export function fetchDODOV2RouteHelperGetPairDetail(chainId: number, token0: string, token1: string, userAddr: string) {
  const __to = getDODOV2RouteHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token0,token1,userAddr]);
  const __data = hexlify(concat(['0x9d15e3ae', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, ["tuple[]"])
}