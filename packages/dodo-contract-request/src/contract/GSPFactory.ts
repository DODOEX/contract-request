import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getGSPFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x710409D2121B7C8EA4aCAdd6803FDE2D85DF6473","2818":"0x2235bB894b7600F1a370fc595Ee5477999A30441","80084":"0x9Ac82EAD1945dF394867df6A053f7375634710fb","167000":"0x2235bB894b7600F1a370fc595Ee5477999A30441","543210":"0x1E080d9c6133e98A955F6020711AFAf73265A7F6"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_CLONE_FACTORY_(chainId: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_DEFAULT_MAINTAINER_(chainId: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _GSP_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_GSP_TEMPLATE_(chainId: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8483a1c9', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_NEW_OWNER_(chainId: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_OWNER_(chainId: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {string} __input2 - address
 * @param {number} __input3 - uint256
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string} __output0 - address
 */
export function fetchGSPFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [__input1,__input2]);
  const __data = hexlify(concat(['0xa58888db', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch getDODOPool
 * @param {number} chainId - number
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @returns {Array<string>} machines - address[]
 */
export function fetchGSPFactoryGetDODOPool(chainId: number, baseToken: string, quoteToken: string) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [baseToken,quoteToken]);
  const __data = hexlify(concat(['0x57a281dc', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, ["address[]"])
}

/**
 * fetch getDODOPoolBidirection
 * @param {number} chainId - number
 * @param {string} token0 - address
 * @param {string} token1 - address
 * @returns {Array<string>} baseToken0Machines - address[]
 * @returns {Array<string>} baseToken1Machines - address[]
 */
export function fetchGSPFactoryGetDODOPoolBidirection(chainId: number, token0: string, token1: string) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [token0,token1]);
  const __data = hexlify(concat(['0x794e5538', __encodeData]));
  return contractRequests.batchCall<{
    baseToken0Machines: Array<string>;
    baseToken1Machines: Array<string>;
  }>(chainId, __to, __data, ["address[]","address[]"])
}

/**
 * fetch getDODOPoolByUser
 * @param {number} chainId - number
 * @param {string} user - address
 * @returns {Array<string>} machines - address[]
 */
export function fetchGSPFactoryGetDODOPoolByUser(chainId: number, user: string) {
  const __to = getGSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [user]);
  const __data = hexlify(concat(['0xe65f7029', __encodeData]));
  return contractRequests.batchCall<Array<string>>(chainId, __to, __data, ["address[]"])
}

/**
 * encode addPoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryAddPoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x39d00ef9', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeGSPFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOGasSavingPool
 * @param {string} admin - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} lpFeeRate - uint256
 * @param {number} mtFeeRate - uint256
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {number} priceLimit - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeGSPFactoryCreateDODOGasSavingPool(admin: string, baseToken: string, quoteToken: string, lpFeeRate: number, mtFeeRate: number, i: number, k: number, priceLimit: number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256","uint256","uint256","uint256","uint256","bool"], [admin,baseToken,quoteToken,lpFeeRate,mtFeeRate,i,k,priceLimit,isOpenTWAP]);
  return hexlify(concat(['0x9f575593', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removePoolByAdmin
 * @param {string} creator - address
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {string} pool - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryRemovePoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x43274b82', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDefaultMaintainer
 * @param {string} _newMaintainer - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryUpdateDefaultMaintainer(_newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMaintainer]);
  return hexlify(concat(['0x9e988ee3', __encodeData]));
}

/**
 * encode updateGSPTemplate
 * @param {string} _newGSPTemplate - address
 * @returns {string} encode data
 */
export function encodeGSPFactoryUpdateGSPTemplate(_newGSPTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newGSPTemplate]);
  return hexlify(concat(['0xe56b6a9b', __encodeData]));
}