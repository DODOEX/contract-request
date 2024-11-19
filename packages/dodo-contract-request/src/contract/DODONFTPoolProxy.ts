import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTPoolProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x9D4c342298Ba0C77E75CfD379a27F1420B3Ce45D","56":"0x509D3775F684fA4d19C9C99B961202e309B5B965","137":"0x533AF8ad419fB3082df9C80BE2ad903912a817FB","42161":"0xE55154D09265b18aC7CDAC6E646672A5460389a1"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_CLONE_FACTORY_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _CONTROLLER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_CONTROLLER_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x70917604', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_APPROVE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_DODO_APPROVE_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46e74298', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DODO_NFT_APPROVE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_DODO_NFT_APPROVE_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x9910a26b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _FILTER_ADMIN_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_FILTER_ADMIN_TEMPLATE_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe4e90c37', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _FILTER_TEMPLATES_
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_FILTER_TEMPLATES_(chainId: number, __input1: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x11b2582f', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_MAINTAINER_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x4322ec83', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_NEW_OWNER_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFTPoolProxy_OWNER_(chainId: number) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch isWhiteListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTPoolProxyIsWhiteListed(chainId: number, __input1: string) {
  const __to = getDODONFTPoolProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x6f9170f6', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * encode changeController
 * @param {string} newController - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyChangeController(newController: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newController]);
  return hexlify(concat(['0x3cebb823', __encodeData]));
}

/**
 * encode changeFilterAdminTemplate
 * @param {string} newFilterAdminTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyChangeFilterAdminTemplate(newFilterAdminTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newFilterAdminTemplate]);
  return hexlify(concat(['0x000b5b65', __encodeData]));
}

/**
 * encode changeMaintainer
 * @param {string} newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyChangeMaintainer(newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newMaintainer]);
  return hexlify(concat(['0xa12ee7ba', __encodeData]));
}

/**
 * encode changeWhiteList
 * @param {string} contractAddr - address
 * @param {boolean} isAllowed - bool
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyChangeWhiteList(contractAddr: string, isAllowed: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [contractAddr,isAllowed]);
  return hexlify(concat(['0x39b417b7', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createFilterV1
 * @param {string} key - uint256
 * @param {string} filterAdmin - address
 * @param {string} nftCollection - address
 * @param {Array<boolean>} toggles - bool[]
 * @param {string} filterName - string
 * @param {Array<string>} numParams - uint256[]
 * @param {Array<string>} priceRules - uint256[]
 * @param {Array<string>} spreadIds - uint256[]
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyCreateFilterV1(key: string, filterAdmin: string, nftCollection: string, toggles: Array<boolean>, filterName: string, numParams: Array<string>, priceRules: Array<string>, spreadIds: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","address","bool[]","string","uint256[]","uint256[]","uint256[]"], [key,filterAdmin,nftCollection,toggles,filterName,numParams,priceRules,spreadIds]);
  return hexlify(concat(['0xb13e0cfc', __encodeData]));
}

/**
 * encode createLiteNFTPool
 * @param {string} filterAdminOwner - address
 * @param {Array<string>} infos - string[]
 * @param {Array<string>} numParams - uint256[]
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyCreateLiteNFTPool(filterAdminOwner: string, infos: Array<string>, numParams: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","string[]","uint256[]"], [filterAdminOwner,infos,numParams]);
  return hexlify(concat(['0x6388b541', __encodeData]));
}

/**
 * encode createNewNFTPoolV1
 * @param {string} filterAdminOwner - address
 * @param {string} nftCollection - address
 * @param {string} filterKey - uint256
 * @param {Array<string>} infos - string[]
 * @param {Array<string>} numParams - uint256[]
 * @param {Array<boolean>} toggles - bool[]
 * @param {Array<string>} filterNumParams - uint256[]
 * @param {Array<string>} priceRules - uint256[]
 * @param {Array<string>} spreadIds - uint256[]
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyCreateNewNFTPoolV1(filterAdminOwner: string, nftCollection: string, filterKey: string, infos: Array<string>, numParams: Array<string>, toggles: Array<boolean>, filterNumParams: Array<string>, priceRules: Array<string>, spreadIds: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","string[]","uint256[]","bool[]","uint256[]","uint256[]","uint256[]"], [filterAdminOwner,nftCollection,filterKey,infos,numParams,toggles,filterNumParams,priceRules,spreadIds]);
  return hexlify(concat(['0x74fc6e25', __encodeData]));
}

/**
 * encode erc1155In
 * @param {string} filter - address
 * @param {string} nftCollection - address
 * @param {Array<string>} tokenIds - uint256[]
 * @param {Array<string>} amounts - uint256[]
 * @param {string} to - address
 * @param {string} minMintAmount - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyErc1155In(filter: string, nftCollection: string, tokenIds: Array<string>, amounts: Array<string>, to: string, minMintAmount: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256[]","uint256[]","address","uint256"], [filter,nftCollection,tokenIds,amounts,to,minMintAmount]);
  return hexlify(concat(['0x8ec0766a', __encodeData]));
}

/**
 * encode erc721In
 * @param {string} filter - address
 * @param {string} nftCollection - address
 * @param {Array<string>} tokenIds - uint256[]
 * @param {string} to - address
 * @param {string} minMintAmount - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyErc721In(filter: string, nftCollection: string, tokenIds: Array<string>, to: string, minMintAmount: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256[]","address","uint256"], [filter,nftCollection,tokenIds,to,minMintAmount]);
  return hexlify(concat(['0x9aeb2db2', __encodeData]));
}

/**
 * encode erc721ToErc20
 * @param {string} filterAdmin - address
 * @param {string} filter - address
 * @param {string} nftContract - address
 * @param {string} tokenId - uint256
 * @param {string} toToken - address
 * @param {string} dodoProxy - address
 * @param {string} dodoSwapData - bytes
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyErc721ToErc20(filterAdmin: string, filter: string, nftContract: string, tokenId: string, toToken: string, dodoProxy: string, dodoSwapData: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","address","address","bytes"], [filterAdmin,filter,nftContract,tokenId,toToken,dodoProxy,dodoSwapData]);
  return hexlify(concat(['0xb32f2d92', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode setFilterTemplate
 * @param {string} idx - uint256
 * @param {string} newFilterTemplate - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxySetFilterTemplate(idx: string, newFilterTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address"], [idx,newFilterTemplate]);
  return hexlify(concat(['0x9b2721c6', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTPoolProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}