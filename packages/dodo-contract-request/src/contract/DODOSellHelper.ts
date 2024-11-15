import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOSellHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x533da777aedce766ceae696bf90f8541a4ba80eb","2818":"0xa672BeB656f3cEAF33222bc4805aac71142344FD","80084":"0x0376076C9D1c7DCb899DC5Db96Cec0492Bd375b7","167000":"0xa672BeB656f3cEAF33222bc4805aac71142344FD","543210":"0x02FB3aD33F6EdC357C4B631eb9aFE76E96B91Db7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch querySellBaseToken
 * @param {number} chainId - number
 * @param {string} dodo - address
 * @param {number} amount - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOSellHelperQuerySellBaseToken(chainId: number, dodo: string, amount: number) {
  const __to = getDODOSellHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [dodo,amount]);
  const __data = hexlify(concat(['0xef4a83f8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch querySellQuoteToken
 * @param {number} chainId - number
 * @param {string} dodo - address
 * @param {number} amount - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOSellHelperQuerySellQuoteToken(chainId: number, dodo: string, amount: number) {
  const __to = getDODOSellHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [dodo,amount]);
  const __data = hexlify(concat(['0xca19ebd9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}