import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODODppProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xfF7C8F518e6f1435957ed3d3E0692C94676dAE7a","10":"0x51A70a33655FE1c5fae3286890DcE3bE332E85dD","56":"0x624FC8368fE11BE00D8B2F3fE0B9D0053BEc21b9","137":"0xF6f1A1Ef2f5b56bb289993F75C12Eb41e4abC2f7","177":"0xcBF3378D432CB181aae32a6A80AA94CF8e00f534","196":"0x69a730Fb2724391F875c48CB8950519bc8Fb7b12","1030":"0x99d69565EdA438E3ebAA0627A407968ABD0f755b","2390":"0x6bbfD968509752518c1e9fBb0918A8AF8615879e","2818":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","5000":"0xa5fc92Ca57a21C87AA0477b1c8fE8B9Bbf69d6C2","8453":"0x0B1467f71c082D8d410aF4376C685D9A6893cF36","10143":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","10169":"0xCDA4a6cc5997002B87f28D46852F9F0aA0f3c897","42161":"0xE8C9A78725D0451FA19878D5f8A3dC0D55FECF25","43111":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","43114":"0xe44F14BFDe673B7339734a28152cCd6b821753C9","47763":"0xC937629279de99158087DCee18538628dBb74Aa6","48900":"0x69a730Fb2724391F875c48CB8950519bc8Fb7b12","59144":"0xCDA4a6cc5997002B87f28D46852F9F0aA0f3c897","80084":"0x819829e5CF6e19F9fED92F6b4CC1edF45a2cC4A2","80094":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","98864":"0x0976e26eE276DC0703d046DB46d0ca8A1EeC3bAe","98866":"0x22AdDF954Ea92a3A80403Fe353093f7bF58665EC","167000":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","200901":"0x7542c97254D9f8c7cE1b8D24bf8eB47C950E8b75","421614":"0xa6d371876F4d12968da14f6339688F5Ae93D7287","534352":"0x99d69565EdA438E3ebAA0627A407968ABD0f755b","543210":"0x6CcfA1b097Be85bB985fa7b49D0fc5B741896Ee8","11155111":"0x5e1251f4873248a030e1c92FFEB133AF1513277f","11155931":"0xE6cecb7460c9E52aA483cb1f0E87d78D7085686F","1313161554":"0x357c5E9cfA8B834EDcef7C7aAbD8F9Db09119d11","NaN":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODppProxy_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODODppProxy_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODppProxy_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DPP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_DPP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb730d150', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODppProxy_DPP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODODppProxy_DPP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODppProxy_DPP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODODppProxy_WETH_(chainId: number): Promise<string> {
  const __to = getDODODppProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODODppProxy_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODODppProxy_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODODppProxy_WETH_(chainId as number);
    }
  }
}

/**
 * encode createDODOPrivatePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {string | number} quoteInAmount - uint256
 * @param {string | number} lpFeeRate - uint256
 * @param {string | number} i - uint256
 * @param {string | number} k - uint256
 * @param {boolean} isOpenTwap - bool
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODppProxyCreateDODOPrivatePool(baseToken: string, quoteToken: string, baseInAmount: string | number, quoteInAmount: string | number, lpFeeRate: string | number, i: string | number, k: string | number, isOpenTwap: boolean, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","uint256","uint256","bool","uint256"], [baseToken,quoteToken,baseInAmount,quoteInAmount,lpFeeRate,i,k,isOpenTwap,deadLine]);
  return hexlify(concat(['0x0d9be500', __encodeData]));
}

/**
 * encode resetDODOPrivatePool
 * @param {string} dppAddress - address
 * @param {Array<string | number>} paramList - uint256[]
 * @param {Array<string | number>} amountList - uint256[]
 * @param {string | number} flag - uint8
 * @param {string | number} minBaseReserve - uint256
 * @param {string | number} minQuoteReserve - uint256
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODODppProxyResetDODOPrivatePool(dppAddress: string, paramList: Array<string | number>, amountList: Array<string | number>, flag: string | number, minBaseReserve: string | number, minQuoteReserve: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256[]","uint256[]","uint8","uint256","uint256","uint256"], [dppAddress,paramList,amountList,flag,minBaseReserve,minQuoteReserve,deadLine]);
  return hexlify(concat(['0x12ff148d', __encodeData]));
}