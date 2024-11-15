import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDSPFactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x6fdDB76c93299D985f4d3FC7ac468F9A168577A4","2818":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","80084":"0x4c639e4d0bfeC3D0766AAA0500Ae7e91418505Bf","167000":"0xd0de7cA3298fff085E2cb82F8a861a0254256BA0","543210":"0x3D4c730FD4663f226E60dE899Ffed72a3762AfA7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_CLONE_FACTORY_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_DEFAULT_MAINTAINER_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DEFAULT_MT_FEE_RATE_MODEL_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_DEFAULT_MT_FEE_RATE_MODEL_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x6c5ccb9b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DSP_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_DSP_TEMPLATE_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x59358068', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_NEW_OWNER_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDSPFactory_OWNER_(chainId: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

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
 * @returns {string}  - address
 */
export function fetchDSPFactory_REGISTRY_(chainId: number, __input1: string, __input2: string, __input3: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [__input1,__input2,__input3]);
  const __data = hexlify(concat(['0xbdeb0a91', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _USER_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @param {number} __input2 - uint256
 * @returns {string}  - address
 */
export function fetchDSPFactory_USER_REGISTRY_(chainId: number, __input1: string, __input2: number) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

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
export function fetchDSPFactoryGetDODOPool(chainId: number, baseToken: string, quoteToken: string) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

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
export function fetchDSPFactoryGetDODOPoolBidirection(chainId: number, token0: string, token1: string) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

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
export function fetchDSPFactoryGetDODOPoolByUser(chainId: number, user: string) {
  const __to = getDSPFactoryContractAddressByChainId(chainId);

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
export function encodeDSPFactoryAddPoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x39d00ef9', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDSPFactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOStablePool
 * @param {string} baseToken - address
 * @param {string} quoteToken - address
 * @param {number} lpFeeRate - uint256
 * @param {number} i - uint256
 * @param {number} k - uint256
 * @param {boolean} isOpenTWAP - bool
 * @returns {string} encode data
 */
export function encodeDSPFactoryCreateDODOStablePool(baseToken: string, quoteToken: string, lpFeeRate: number, i: number, k: number, isOpenTWAP: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","uint256","bool"], [baseToken,quoteToken,lpFeeRate,i,k,isOpenTWAP]);
  return hexlify(concat(['0xcf5c2f10', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryInitOwner(newOwner: string) {
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
export function encodeDSPFactoryRemovePoolByAdmin(creator: string, baseToken: string, quoteToken: string, pool: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","address"], [creator,baseToken,quoteToken,pool]);
  return hexlify(concat(['0x43274b82', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDSPTemplate
 * @param {string} _newDSPTemplate - address
 * @returns {string} encode data
 */
export function encodeDSPFactoryUpdateDSPTemplate(_newDSPTemplate: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newDSPTemplate]);
  return hexlify(concat(['0x1cdd5094', __encodeData]));
}