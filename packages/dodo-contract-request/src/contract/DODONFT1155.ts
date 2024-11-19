import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFT1155ContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x3Ab9b8bcC97DB111BF14b04eBd4c08dce94CFD5b","56":"0xdC9224cbc4B1826Bb74fF383FF1CE94DE1F56119","137":"0xFEb1fBcdAAF4475c1AFfeED66395D274e520fD57","42161":"0x3Ec5a174DAfF0A91DCD0935866ED9E6514441Ba8"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _CUR_TOKENID_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFT1155_CUR_TOKENID_(chainId: number) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8698dbd6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFT1155_NEW_OWNER_(chainId: number) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFT1155_OWNER_(chainId: number) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["address"])
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} account - address
 * @param {number} id - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFT1155BalanceOf(chainId: number, account: string, id: number) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [account,id]);
  const __data = hexlify(concat(['0x00fdd58e', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, ["uint256"])
}

/**
 * fetch balanceOfBatch
 * @param {number} chainId - number
 * @param {Array<string>} accounts - address[]
 * @param {Array<number>} ids - uint256[]
 * @returns {Array<bigint>} __output0 - uint256[]
 */
export function fetchDODONFT1155BalanceOfBatch(chainId: number, accounts: Array<string>, ids: Array<number>) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address[]","uint256[]"], [accounts,ids]);
  const __data = hexlify(concat(['0x4e1273f4', __encodeData]));
  return contractRequests.batchCall<Array<bigint>>(chainId, __to, __data, ["uint256[]"])
}

/**
 * fetch isApprovedForAll
 * @param {number} chainId - number
 * @param {string} account - address
 * @param {string} operator - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFT1155IsApprovedForAll(chainId: number, account: string, operator: string) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [account,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFT1155SupportsInterface(chainId: number, interfaceId: string) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, ["bool"])
}

/**
 * fetch uri
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchDODONFT1155Uri(chainId: number, tokenId: number) {
  const __to = getDODONFT1155ContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x0e89341c', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, ["string"])
}

/**
 * encode burn
 * @param {string} account - address
 * @param {string} tokenId - uint256
 * @param {string} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODONFT1155Burn(account: string, tokenId: string, amount: string) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [account,tokenId,amount]);
  return hexlify(concat(['0xf5298aca', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODONFT1155ClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFT1155InitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode mint
 * @param {string} uri - string
 * @param {string} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODONFT1155Mint(uri: string, amount: string) {
  const __encodeData = defaultAbiCoder.encode(["string","uint256"], [uri,amount]);
  return hexlify(concat(['0x056b01ce', __encodeData]));
}

/**
 * encode safeBatchTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {Array<string>} ids - uint256[]
 * @param {Array<string>} amounts - uint256[]
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDODONFT1155SafeBatchTransferFrom(from: string, to: string, ids: Array<string>, amounts: Array<string>, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256[]","uint256[]","bytes"], [from,to,ids,amounts,data]);
  return hexlify(concat(['0x2eb2c2d6', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string} id - uint256
 * @param {string} amount - uint256
 * @param {string} data - bytes
 * @returns {string} encode data
 */
export function encodeDODONFT1155SafeTransferFrom(from: string, to: string, id: string, amount: string, data: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256","uint256","bytes"], [from,to,id,amount,data]);
  return hexlify(concat(['0xf242432a', __encodeData]));
}

/**
 * encode setApprovalForAll
 * @param {string} operator - address
 * @param {boolean} approved - bool
 * @returns {string} encode data
 */
export function encodeDODONFT1155SetApprovalForAll(operator: string, approved: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [operator,approved]);
  return hexlify(concat(['0xa22cb465', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODONFT1155TransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}