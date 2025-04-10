import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2AdapterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"2818":"0x1909B6842964030aF3897bdf8ba760bD91439463","10143":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29","47763":"0x1909B6842964030aF3897bdf8ba760bD91439463","80084":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29","80094":"0x1909B6842964030aF3897bdf8ba760bD91439463","98866":"0x306ae919b99c187Fe5eCBdE980E24228ae888182","167000":"0x1909B6842964030aF3897bdf8ba760bD91439463","543210":"0x3C179299E8CADEaeA1602f119D460729b3b4fDfC","11155931":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * encode sellBase
 * @param {string} to - address
 * @param {string} pool - address
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOV2AdapterSellBase(to: string, pool: string, __input1: string) {
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
export function encodeDODOV2AdapterSellQuote(to: string, pool: string, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","bytes"], [to,pool,__input1]);
  return hexlify(concat(['0x6f7929f2', __encodeData]));
}