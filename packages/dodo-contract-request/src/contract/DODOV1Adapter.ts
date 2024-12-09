import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV1AdapterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x91E1c84BA8786B1FaE2570202F0126C0b88F6Ec7","10":"0xDd0951b69bc0CF9d39111E5037685FB573204c86","56":"0x8E4842d0570c85Ba3805A9508Dce7C6A458359d0","137":"0xDBFaF391C37339c903503495395Ad7D6B096E192","42161":"0xd5a7E197bacE1F3B26E2760321d6ce06Ad07281a","43114":"0x62F67e305850a2597c46cD5957BdFbe9d04F10Bd","1313161554":"0x02fCB21dc1cf221939C1d4277fB54016b5d32bC7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_SELL_HELPER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV1Adapter_DODO_SELL_HELPER_(chainId: number): Promise<string> {
  const __to = getDODOV1AdapterContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xaf1280b0', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1Adapter_DODO_SELL_HELPER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV1Adapter_DODO_SELL_HELPER_(chainId as number);
    }
  }
}

/**
 * encode sellBase
 * @param {string} to - address
 * @param {string} pool - address
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1AdapterSellBase(to: string, pool: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bytes"], [to,pool,__input1]);
  return hexlify(concat(['0x30e6ae31', __encodeData]));
}

/**
 * encode sellQuote
 * @param {string} to - address
 * @param {string} pool - address
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOV1AdapterSellQuote(to: string, pool: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bytes"], [to,pool,__input1]);
  return hexlify(concat(['0x6f7929f2', __encodeData]));
}