import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOCpProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"56":"0x6990254C0Dcae91e2FD93C493D33570cDaBC3dC6","196":"0xe8bD8C45e8D0638d1Bfd39bC3B06534631DB3F13","1030":"0x7dd8c909e1f48a68ffef03492761af17b1496edc","2818":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","5000":"0x49186E32fEd50fd6B5604A2618c7B0b03Cd41414","8453":"0x6B9577b87666af89bd0e144b9b64e8Ed166E303d","10169":"0x2F66C5aAF006Bd9c51615D617589C16c0ed35fD3","47763":"0xcCCC9De5889ED1029B5DeB48a9936dfF38A23310","48900":"0xe8bD8C45e8D0638d1Bfd39bC3B06534631DB3F13","59144":"0x2F66C5aAF006Bd9c51615D617589C16c0ed35fD3","80084":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","98865":"0x38886EDE1Fc92886F9a11C37a1f5e75474858eaa","167000":"0x7386F6F2375a38FBD1F4dA1d3eb39cd8dD8d1b40","200901":"0x8667224C5a4c2954Edbb2abB72FCf2DfA18948D1","421614":"0x724785B1c36714D18A543e7cbeE05360bc5FFB43","534352":"0xc4A1a152812dE96b2B1861E433f42290CDD7f113","543210":"0x4197fd29f757C24627dF590779EE3123B16dbf4D","11155111":"0xA376762070F7fCE8f3646AAe90e6e375e6daF128"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CP_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_CP_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfaa980e4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxy_CP_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOCpProxy_CP_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOCpProxy_CP_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxy_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOCpProxy_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOCpProxy_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOCpProxy_WETH_(chainId: number): Promise<string> {
  const __to = getDODOCpProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOCpProxy_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOCpProxy_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOCpProxy_WETH_(chainId as number);
    }
  }
}

/**
 * encode bid
 * @param {string} cpAddress - address
 * @param {string | number} quoteAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyBid(cpAddress: string, quoteAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [cpAddress,quoteAmount,flag,deadLine]);
  return hexlify(concat(['0xdb70b5c7', __encodeData]));
}

/**
 * encode createCrowdPooling
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string | number} baseInAmount - uint256
 * @param {Array<string | number>} timeLine - uint256[]
 * @param {Array<string | number>} valueList - uint256[]
 * @param {Array<boolean>} switches - bool[]
 * @param {string | number} deadLine - uint256
 * @param {string | number} globalQuota - int256
 * @returns {string} encode data
 */
export function encodeDODOCpProxyCreateCrowdPooling(baseToken: string, quoteToken: string, baseInAmount: string | number, timeLine: Array<string | number>, valueList: Array<string | number>, switches: Array<boolean>, deadLine: string | number, globalQuota: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256[]","uint256[]","bool[]","uint256","int256"], [baseToken,quoteToken,baseInAmount,timeLine,valueList,switches,deadLine,globalQuota]);
  return hexlify(concat(['0x964e4c26', __encodeData]));
}