import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV3ProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"56":"0x8f3fB1f9148dC473453163bF31de1d830Eb5c590","177":"0xE59d098c36916397Cc14AB42Bb0F00093BDA9f04","196":"0x62e2EC354E15ddA6A1E43586c86e745A59b4B81e","1030":"0x14F7B8Fb0c1447DdE7bcf92a8d9BB058c8A5FE64","1689":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","2201":"0x22AdDF954Ea92a3A80403Fe353093f7bF58665EC","2390":"0x80465a300299e90132DFa2c7c3Fc3a12424599bB","2818":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","5000":"0x6D3bd005A8a75d6522C9cFE7d309BB1Cf9650e03","7000":"0x88d12e75EaF01e8f274D067309C145D2Aad6dc74","7001":"0xafE1D3EE4513530B8D302e812FB07Df1d9e090c4","8453":"0x2F66C5aAF006Bd9c51615D617589C16c0ed35fD3","10143":"0x9b1F69bfaCF13B8f8fE2aC093C7bae93b08a9C83","10169":"0xA6d0066328Edbcf3220cf8F61e8527e589DD9719","43111":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","47763":"0x1f5D57046e01e2ADa8aFE8600F3A1F77eAdF9F0C","48900":"0x62e2EC354E15ddA6A1E43586c86e745A59b4B81e","53456":"0xDA89314035264Ade23313f971AaE5393068Ea6F7","59144":"0xA6d0066328Edbcf3220cf8F61e8527e589DD9719","80084":"0x026eea5c10f526153e7578E5257801f8610D1142","80094":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","98864":"0x6bbfD968509752518c1e9fBb0918A8AF8615879e","98866":"0x9ef37fD4791eb28e46c3D50Ed83F2a10B3082784","167000":"0x1dFd36964e21a2eb633991f0B95b4241c20e1db3","200901":"0x8A89153f246EA1501dec23db0Ba001F239aE1067","534352":"0x14F7B8Fb0c1447DdE7bcf92a8d9BB058c8A5FE64","543210":"0xdf6bbE9C88aAc64d724D0a95613ed0dBBDb16f23","688688":"0x6657Af4fB4bF62aD822d51D0de2527EF61A8aC41","688689":"0x6bbfD968509752518c1e9fBb0918A8AF8615879e","11155111":"0xBbD59b9316eE65526DbBdEc2A748Cc05A285d54C","11155931":"0x2Ba2696c63fA8b67b395de6D12F849b17C3515F9"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_MINEV3_REGISTRY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_DODO_MINEV3_REGISTRY_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x3eab5388', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_DODO_MINEV3_REGISTRY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_DODO_MINEV3_REGISTRY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_DODO_MINEV3_REGISTRY_(chainId as number);
    }
  }
}

/**
 * fetch _MINEV3_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_MINEV3_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x67505083', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_MINEV3_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_MINEV3_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_MINEV3_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV3Proxy_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOMineV3ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOMineV3Proxy_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOMineV3Proxy_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOMineV3Proxy_OWNER_(chainId as number);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOMineV3
 * @param {string} stakeToken - address
 * @param {boolean} isLpToken - bool
 * @param {string | number} platform - uint256
 * @param {Array<string>} rewardTokens - address[]
 * @param {Array<string | number>} rewardPerBlock - uint256[]
 * @param {Array<string | number>} startBlock - uint256[]
 * @param {Array<string | number>} endBlock - uint256[]
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyCreateDODOMineV3(stakeToken: string, isLpToken: boolean, platform: string | number, rewardTokens: Array<string>, rewardPerBlock: Array<string | number>, startBlock: Array<string | number>, endBlock: Array<string | number>) {
  const __encodeData = defaultAbiCoder.encode(["address","bool","uint256","address[]","uint256[]","uint256[]","uint256[]"], [stakeToken,isLpToken,platform,rewardTokens,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0x94852c61', __encodeData]));
}

/**
 * encode depositRewardToMine
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyDepositRewardToMine(mineV3: string, rewardToken: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0xe17ff361', __encodeData]));
}

/**
 * encode depositRewardToVault
 * @param {string} mineV3 - address
 * @param {string} rewardToken - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyDepositRewardToVault(mineV3: string, rewardToken: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [mineV3,rewardToken,amount]);
  return hexlify(concat(['0x9cb297cd', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateMineV3Template
 * @param {string} _newMineV3Template - address
 * @returns {string} encode data
 */
export function encodeDODOMineV3ProxyUpdateMineV3Template(_newMineV3Template: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMineV3Template]);
  return hexlify(concat(['0x59e1100b', __encodeData]));
}