import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV1PmmHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x6373ceB657C83C91088d328622573FB766064Ac4","2818":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","80084":"0x895B2caf85Ae70E8d1b77C8b30B25F07b461Dc45","167000":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","543210":"0xA32ccf8468a7a7a43E26052F118646A8eE8a2926"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch getPairDetail
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]} res - tuple[]
 */
export function fetchDODOV1PmmHelperGetPairDetail(chainId: number, pool: string) {
  const __to = getDODOV1PmmHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x2bd8c5ac', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, ["tuple[]"])
}