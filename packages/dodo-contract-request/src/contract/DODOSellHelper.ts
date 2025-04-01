import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOSellHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x533da777aedce766ceae696bf90f8541a4ba80eb","56":"0x0F859706AeE7FcF61D5A8939E8CB9dBB6c1EDA33","137":"0xDfaf9584F5d229A9DBE5978523317820A8897C5A","196":"0xE903ec5B1703abbe4FFCCCA10e2f86105eb33B8e","2818":"0xa672BeB656f3cEAF33222bc4805aac71142344FD","10169":"0x8eA40e8Da3ae64Bad5E77a5f7DB346499F543baC","42161":"0xA5F36E822540eFD11FcD77ec46626b916B217c3e","43114":"0xF7c5311B618E6dFBBc34210c92D2C9675D7EdDCA","47763":"0xa672BeB656f3cEAF33222bc4805aac71142344FD","48900":"0xE903ec5B1703abbe4FFCCCA10e2f86105eb33B8e","59144":"0xf5Ec1a19e1570bDf0A3AaA6585274f27027270b1","80084":"0x0376076C9D1c7DCb899DC5Db96Cec0492Bd375b7","98865":"0x814473c0F2A32c57b98585157B78EA02A41f70Fb","167000":"0xa672BeB656f3cEAF33222bc4805aac71142344FD","200901":"0x4c39197bFa2B754bfA8B147552Ff13BA2493A2e2","534352":"0x8eA40e8Da3ae64Bad5E77a5f7DB346499F543baC","543210":"0x02FB3aD33F6EdC357C4B631eb9aFE76E96B91Db7","11155111":"0xa1609A1fa7DC16c025feA194c02b2822441b8c10","11155931":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","1313161554":"0x72d220cE168C4f361dD4deE5D826a01AD8598f6C"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch querySellBaseToken
 * @param {number} chainId - number
 * @param {string} dodo - address
 * @param {number} amount - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOSellHelperQuerySellBaseToken(chainId: number, dodo: string, amount: number): Promise<bigint> {
  const __to = getDODOSellHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [dodo,amount]);
  const __data = hexlify(concat(['0xef4a83f8', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOSellHelperQuerySellBaseTokenQueryOptions(chainId: number | undefined, dodo: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOSellHelperQuerySellBaseToken', chainId, dodo, amount],
    enabled: chainId !== undefined && chainId !== null && dodo !== undefined && dodo !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOSellHelperQuerySellBaseToken(chainId as number,dodo as string,amount as number);
    }
  }
}

/**
 * fetch querySellQuoteToken
 * @param {number} chainId - number
 * @param {string} dodo - address
 * @param {number} amount - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOSellHelperQuerySellQuoteToken(chainId: number, dodo: string, amount: number): Promise<bigint> {
  const __to = getDODOSellHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [dodo,amount]);
  const __data = hexlify(concat(['0xca19ebd9', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOSellHelperQuerySellQuoteTokenQueryOptions(chainId: number | undefined, dodo: string | undefined, amount: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOSellHelperQuerySellQuoteToken', chainId, dodo, amount],
    enabled: chainId !== undefined && chainId !== null && dodo !== undefined && dodo !== null && amount !== undefined && amount !== null, 
    queryFn: () => {
        return fetchDODOSellHelperQuerySellQuoteToken(chainId as number,dodo as string,amount as number);
    }
  }
}