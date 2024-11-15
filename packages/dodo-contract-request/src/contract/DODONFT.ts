import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x945497d9A3e0C1600478e466E2a38Ff8E1623E55"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CUR_TOKENID_
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchDODONFT_CUR_TOKENID_(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8698dbd6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODONFT_NEW_OWNER_(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string}  - address
 */
export function fetchDODONFT_OWNER_(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint}  - uint256
 */
export function fetchDODONFTBalanceOf(chainId: number, owner: string) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string}  - address
 */
export function fetchDODONFTGetApproved(chainId: number, tokenId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch isApprovedForAll
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} operator - address
 * @returns {boolean}  - bool
 */
export function fetchDODONFTIsApprovedForAll(chainId: number, owner: string, operator: string) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string}  - string
 */
export function fetchDODONFTName(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string}  - address
 */
export function fetchDODONFTOwnerOf(chainId: number, tokenId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean}  - bool
 */
export function fetchDODONFTSupportsInterface(chainId: number, interfaceId: string) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string}  - string
 */
export function fetchDODONFTSymbol(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch tokenByIndex
 * @param {number} chainId - number
 * @param {number} index - uint256
 * @returns {bigint}  - uint256
 */
export function fetchDODONFTTokenByIndex(chainId: number, index: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x4f6ccce7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch tokenOfOwnerByIndex
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {number} index - uint256
 * @returns {bigint}  - uint256
 */
export function fetchDODONFTTokenOfOwnerByIndex(chainId: number, owner: string, index: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,index]);
  const __data = hexlify(concat(['0x2f745c59', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string}  - string
 */
export function fetchDODONFTTokenURI(chainId: number, tokenId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint}  - uint256
 */
export function fetchDODONFTTotalSupply(chainId: number) {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * encode approve
 * @param {string} to - address
 * @param {number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTApprove(to: string, tokenId: number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTBurn(tokenId: number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  return hexlify(concat(['0x42966c68', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFTClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} name - string
 * @param {string} symbol - string
 * @returns {string} encode data
 */
export function encodeDODONFTInit(owner: string, name: string, symbol: string) {
  const __encodeData = defaultAbiCoder.encode(["address","string","string"], [owner,name,symbol]);
  return hexlify(concat(['0xb2b45df5', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mint
 * @param {string} uri - string
 * @returns {string} encode data
 */
export function encodeDODONFTMint(uri: string) {
  const __encodeData = defaultAbiCoder.encode(["string"], [uri]);
  return hexlify(concat(['0xd85d3d27', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTSafeTransferFrom(from: string, to: string, tokenId: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x42842e0e', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} tokenId - uint256
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeDODONFTSafeTransferFrom2(from: string, to: string, tokenId: number, _data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","bytes"], [from,to,tokenId,_data]);
  return hexlify(concat(['0xb88d4fde', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} operator - address
 * @param {boolean} approved - bool
 * @returns {string} encode data
 */
export function encodeDODONFTSetApprovalForAll(operator: string, approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [operator,approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode transferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTTransferFrom(from: string, to: string, tokenId: number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x23b872dd', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFTTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}