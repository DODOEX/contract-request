import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV2AdapterContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"177":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","1689":"0x1909B6842964030aF3897bdf8ba760bD91439463","2201":"0x0343C5757Fb98aD9eF39824e08B852aF61C71c64","2390":"0x8bCcE4CCEEf7e841A2A8A48F3250B9FB3b25B0C3","2818":"0x1909B6842964030aF3897bdf8ba760bD91439463","7000":"0x3212823a21f30fB1920473A1A82eDd6F40f3d8a2","7001":"0x00Fc0223442630e2AaDAB831d2Ee1FD27ee8A6B2","10143":"0x2915386Ddc7bdE7739A82Caa8094d0Fe7376225E","43111":"0x1909B6842964030aF3897bdf8ba760bD91439463","47763":"0x1909B6842964030aF3897bdf8ba760bD91439463","53456":"0x306ae919b99c187Fe5eCBdE980E24228ae888182","80084":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29","80094":"0x1909B6842964030aF3897bdf8ba760bD91439463","98864":"0x143bE32C854E4Ddce45aD48dAe3343821556D0c3","98866":"0x306ae919b99c187Fe5eCBdE980E24228ae888182","167000":"0x1909B6842964030aF3897bdf8ba760bD91439463","421614":"0xe929004f20D8875d1fBd2f52deE59B883ED943eC","543210":"0x3C179299E8CADEaeA1602f119D460729b3b4fDfC","688688":"0x71Ac7d3a6473ceBd3C0cCFDF62DE8f9A31B86931","688689":"0x143bE32C854E4Ddce45aD48dAe3343821556D0c3","11155931":"0x0f9053E174c123098C17e60A2B1FAb3b303f9e29"};
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