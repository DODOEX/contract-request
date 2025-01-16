import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x987e2a3A65A526C66ac66B6F8c84120055363625","56":"0x0D224A4a6Da3Cfb360B9879965b1f78865798C71","137":"0xCb0A88A465Da7aB09C09B418F27bFf159A0FE09b","42161":"0x6A51C8A1139B9233C31331D2Cf442E0652329f23"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _BUYOUT_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_BUYOUT_MODEL_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf08e8552', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_BUYOUT_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_BUYOUT_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_BUYOUT_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_CLONE_FACTORY_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_CLONE_FACTORY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_CLONE_FACTORY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_CLONE_FACTORY_(chainId as number);
    }
  }
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_DEFAULT_MAINTAINER_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_DEFAULT_MAINTAINER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_DEFAULT_MAINTAINER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_DEFAULT_MAINTAINER_(chainId as number);
    }
  }
}

/**
 * fetch _DODO_APPROVE_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_DODO_APPROVE_PROXY_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb99be12', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_DODO_APPROVE_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_DODO_APPROVE_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_DODO_APPROVE_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _DVM_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_DVM_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xccf0c059', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_DVM_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_DVM_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_DVM_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _FRAG_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_FRAG_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x43b23bbc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_FRAG_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_FRAG_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_FRAG_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_MT_FEE_RATE_MODEL_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xf6b06e70', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_MT_FEE_RATE_MODEL_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_MT_FEE_RATE_MODEL_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_MT_FEE_RATE_MODEL_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _NFT_REGISTY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_NFT_REGISTY_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6a1292c2', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_NFT_REGISTY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_NFT_REGISTY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_NFT_REGISTY_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _VAULT_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_VAULT_TEMPLATE_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x79b79813', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_VAULT_TEMPLATE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_VAULT_TEMPLATE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_VAULT_TEMPLATE_(chainId as number);
    }
  }
}

/**
 * fetch _WETH_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTProxy_WETH_(chainId: number): Promise<string> {
  const __to = getDODONFTProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x0d4eec8f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTProxy_WETH_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTProxy_WETH_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTProxy_WETH_(chainId as number);
    }
  }
}

/**
 * encode buyout
 * @param {string} fragment - address
 * @param {string | number} quoteMaxAmount - uint256
 * @param {string | number} flag - uint8
 * @param {string | number} deadLine - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTProxyBuyout(fragment: string, quoteMaxAmount: string | number, flag: string | number, deadLine: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint8","uint256"], [fragment,quoteMaxAmount,flag,deadLine]);
  return hexlify(concat(['0x8c8f1970', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFTProxyClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createFragment
 * @param {Array<string>} addrList - address[]
 * @param {Array<string | number>} params - uint256[]
 * @param {boolean} isOpenTwap - bool
 * @param {string} fragSymbol - string
 * @returns {string} encode data
 */
export function encodeDODONFTProxyCreateFragment(addrList: Array<string>, params: Array<string | number>, isOpenTwap: boolean, fragSymbol: string) {
  const __encodeData = defaultAbiCoder.encode(["address[]","uint256[]","bool","string"], [addrList,params,isOpenTwap,fragSymbol]);
  return hexlify(concat(['0x1925bb8d', __encodeData]));
}

/**
 * encode createNFTCollateralVault
 * @param {string} name - string
 * @param {string} baseURI - string
 * @returns {string} encode data
 */
export function encodeDODONFTProxyCreateNFTCollateralVault(name: string, baseURI: string) {
  const __encodeData = defaultAbiCoder.encode(["string","string"], [name,baseURI]);
  return hexlify(concat(['0xe628433f', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateBuyoutModel
 * @param {string} newBuyoutModel - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateBuyoutModel(newBuyoutModel: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newBuyoutModel]);
  return hexlify(concat(['0x700dab30', __encodeData]));
}

/**
 * encode updateDvmTemplate
 * @param {string} newDvmTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateDvmTemplate(newDvmTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDvmTemplate]);
  return hexlify(concat(['0xd99b8ad4', __encodeData]));
}

/**
 * encode updateFragTemplate
 * @param {string} newFragTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateFragTemplate(newFragTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFragTemplate]);
  return hexlify(concat(['0xd6c2a0ee', __encodeData]));
}

/**
 * encode updateMaintainer
 * @param {string} newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateMaintainer(newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newMaintainer]);
  return hexlify(concat(['0xc6e628e3', __encodeData]));
}

/**
 * encode updateMtFeeRateTemplate
 * @param {string} newMtFeeRateTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateMtFeeRateTemplate(newMtFeeRateTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newMtFeeRateTemplate]);
  return hexlify(concat(['0xd1320611', __encodeData]));
}

/**
 * encode updateVaultTemplate
 * @param {string} newVaultTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTProxyUpdateVaultTemplate(newVaultTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newVaultTemplate]);
  return hexlify(concat(['0x64f580b7', __encodeData]));
}