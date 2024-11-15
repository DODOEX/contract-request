import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOMineV2FactoryContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x37f4fd6791B3Fe18FAba2c9e5916bCa4Df5D68F3","2818":"0x5e8807fd1C80F7A43362CeBEFcB2Becedfc731Dc","80084":"0x680829027709E2ef95D079aC97DDF5feAb82D248","167000":"0x5e8807fd1C80F7A43362CeBEFcB2Becedfc731Dc","543210":"0x556f9b7C69Ca2d596EFCEf766d892e88F3E10108"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CLONE_FACTORY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_CLONE_FACTORY_(chainId: number) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xeb774d05', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _DEFAULT_MAINTAINER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_DEFAULT_MAINTAINER_(chainId: number) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x81ab4d0a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MINEV2_TEMPLATE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_MINEV2_TEMPLATE_(chainId: number) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x121a5431', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _MINE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_MINE_REGISTRY_(chainId: number, __input1: string) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x468c8d23', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_NEW_OWNER_(chainId: number) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_OWNER_(chainId: number) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _STAKE_REGISTRY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} __output0 - address
 */
export function fetchDODOMineV2Factory_STAKE_REGISTRY_(chainId: number, __input1: string) {
  const __to = getDODOMineV2FactoryContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x283e4275', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * encode addByAdmin
 * @param {string} mine - address
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryAddByAdmin(mine: string, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [mine,stakeToken]);
  return hexlify(concat(['0xe9b1660b', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode createDODOMineV2
 * @param {string} stakeToken - address
 * @param {Array<string>} rewardTokens - address[]
 * @param {Array<number>} rewardPerBlock - uint256[]
 * @param {Array<number>} startBlock - uint256[]
 * @param {Array<number>} endBlock - uint256[]
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryCreateDODOMineV2(stakeToken: string, rewardTokens: Array<string>, rewardPerBlock: Array<number>, startBlock: Array<number>, endBlock: Array<number>) {
  const __encodeData = defaultAbiCoder.encode(["address","address[]","uint256[]","uint256[]","uint256[]"], [stakeToken,rewardTokens,rewardPerBlock,startBlock,endBlock]);
  return hexlify(concat(['0x61175cd2', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeByAdmin
 * @param {string} mine - address
 * @param {string} stakeToken - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryRemoveByAdmin(mine: string, stakeToken: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [mine,stakeToken]);
  return hexlify(concat(['0x6defeb31', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode updateDefaultMaintainer
 * @param {string} _newMaintainer - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryUpdateDefaultMaintainer(_newMaintainer: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMaintainer]);
  return hexlify(concat(['0x9e988ee3', __encodeData]));
}

/**
 * encode updateMineV2Template
 * @param {string} _newMineV2Template - address
 * @returns {string} encode data
 */
export function encodeDODOMineV2FactoryUpdateMineV2Template(_newMineV2Template: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_newMineV2Template]);
  return hexlify(concat(['0x30c1cad8', __encodeData]));
}