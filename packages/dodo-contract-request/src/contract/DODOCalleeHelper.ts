import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCalleeHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x45a7E2E9D780613E047f7e78a9d3902ff854B522","10":"0x45a7E2E9D780613E047f7e78a9d3902ff854B522","56":"0x2673E5333620bb22BD1bFB3af9Fc7012008E3b4B","137":"0x261F6cF4dF0e5c1432739cDAFD9299150FEd3dFc","196":"0xD54BE1b50b51BA83e88239024e85EF16Dd973B3B","1030":"0x5B2fd46E6E3Ff1E479d651ec0b210882Aa9871dF","2818":"0x94B66F3156353a12A6004d098A16F2fCfF9E8348","5000":"0x4aAe1d041C01078725dB016BA4D4F72455CaF931","8453":"0x44023441f2Bad375b6b5C6354B03c3E9AD01E269","10143":"0x895B2caf85Ae70E8d1b77C8b30B25F07b461Dc45","10169":"0x44023441f2Bad375b6b5C6354B03c3E9AD01E269","42161":"0xe3B40F8D8346d428EAB28d9Fd672b784d921cfBD","43114":"0x4EfF1D851366b8cc51d553a87e2d12dA8Da46F2a","47763":"0x94B66F3156353a12A6004d098A16F2fCfF9E8348","48900":"0xD54BE1b50b51BA83e88239024e85EF16Dd973B3B","59144":"0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780","80084":"0x842b59E74Ca9851fF0C35741C5f0923c63825BA8","98866":"0x2Da0855f04919D402Af88D0D04AbB38177FE47fa","167000":"0x94B66F3156353a12A6004d098A16F2fCfF9E8348","200901":"0xf2668090476D10445dfd4Bd6aDd1f3294F48029d","534352":"0x44023441f2Bad375b6b5C6354B03c3E9AD01E269","543210":"0x094867f0713ac77786E0b9c2d74216bE934470F4","11155111":"0xCD536b4DECFD2fa0443666B6becD145F8aDe2E48","11155931":"0x895B2caf85Ae70E8d1b77C8b30B25F07b461Dc45","1313161554":"0x738Ebf387A0CE0eb46b0eF8Fa5DEa2EaE6B1Df51"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCalleeHelper_WETH_(chainId: number): Promise<string> {
  const __to = getDODOCalleeHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address payable","name":"","type":"address"}])
}
export function getFetchDODOCalleeHelper_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOCalleeHelper_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOCalleeHelper_WETH_(chainId as number);
    }
  }
}

/**
 * encode CPCancelCall
 * @param {string} assetTo - address
 * @param {string | number} amount - uint256
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperCPCancelCall(assetTo: string, amount: string | number, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [assetTo,amount,__input1]);
  return hexlify(concat(['0x6430f110', __encodeData]));
}

/**
 * encode CPClaimBidCall
 * @param {string} assetTo - address
 * @param {string | number} baseAmount - uint256
 * @param {string | number} quoteAmount - uint256
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperCPClaimBidCall(assetTo: string, baseAmount: string | number, quoteAmount: string | number, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","bytes"], [assetTo,baseAmount,quoteAmount,__input1]);
  return hexlify(concat(['0x7ceef916', __encodeData]));
}

/**
 * encode DVMSellShareCall
 * @param {string} assetTo - address
 * @param {string | number} __input1 - uint256
 * @param {string | number} baseAmount - uint256
 * @param {string | number} quoteAmount - uint256
 * @param {string} __input2 - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperDVMSellShareCall(assetTo: string, __input1: string | number, baseAmount: string | number, quoteAmount: string | number, __input2: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256","uint256","bytes"], [assetTo,__input1,baseAmount,quoteAmount,__input2]);
  return hexlify(concat(['0x2411d338', __encodeData]));
}

/**
 * encode NFTRedeemCall
 * @param {string} assetTo - address
 * @param {string | number} quoteAmount - uint256
 * @param {string} __input1 - bytes
 * @returns {string} encode data
 */
export function encodeDODOCalleeHelperNFTRedeemCall(assetTo: string, quoteAmount: string | number, __input1: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","bytes"], [assetTo,quoteAmount,__input1]);
  return hexlify(concat(['0x53c06360', __encodeData]));
}