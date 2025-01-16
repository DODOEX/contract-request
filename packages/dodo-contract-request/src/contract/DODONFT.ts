import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODONFTContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x945497d9A3e0C1600478e466E2a38Ff8E1623E55","56":"0x5eD972C0a7f8D0C4dEDf6a37848A297B67489888","137":"0xA1FfE96Ee3e72a9Ec7523E5a289695843D3fd0f4","42161":"0x4ec636C32195DD4E4Be1D37c0838DB1a8E3E4E30"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _CUR_TOKENID_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFT_CUR_TOKENID_(chainId: number): Promise<bigint> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8698dbd6', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODONFT_CUR_TOKENID_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFT_CUR_TOKENID_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFT_CUR_TOKENID_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFT_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFT_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFT_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFT_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODONFT_OWNER_(chainId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFT_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFT_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFT_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch balanceOf
 * @param {number} chainId - number
 * @param {string} owner - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFTBalanceOf(chainId: number, owner: string): Promise<bigint> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [owner]);
  const __data = hexlify(concat(['0x70a08231', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODONFTBalanceOfQueryOptions(chainId: number | undefined, owner: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTBalanceOf', chainId, owner],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null, 
    queryFn: () => {
        return fetchDODONFTBalanceOf(chainId as number,owner as string);
    }
  }
}

/**
 * fetch getApproved
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODONFTGetApproved(chainId: number, tokenId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x081812fc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTGetApprovedQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTGetApproved', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchDODONFTGetApproved(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch isApprovedForAll
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {string} operator - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTIsApprovedForAll(chainId: number, owner: string, operator: string): Promise<boolean> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,operator]);
  const __data = hexlify(concat(['0xe985e9c5', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODONFTIsApprovedForAllQueryOptions(chainId: number | undefined, owner: string | undefined, operator: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTIsApprovedForAll', chainId, owner, operator],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && operator !== undefined && operator !== null, 
    queryFn: () => {
        return fetchDODONFTIsApprovedForAll(chainId as number,owner as string,operator as string);
    }
  }
}

/**
 * fetch name
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchDODONFTName(chainId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x06fdde03', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDODONFTNameQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTName', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTName(chainId as number);
    }
  }
}

/**
 * fetch ownerOf
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - address
 */
export function fetchDODONFTOwnerOf(chainId: number, tokenId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0x6352211e', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODONFTOwnerOfQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTOwnerOf', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchDODONFTOwnerOf(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch supportsInterface
 * @param {number} chainId - number
 * @param {string} interfaceId - bytes4
 * @returns {boolean} __output0 - bool
 */
export function fetchDODONFTSupportsInterface(chainId: number, interfaceId: string): Promise<boolean> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes4"], [interfaceId]);
  const __data = hexlify(concat(['0x01ffc9a7', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODONFTSupportsInterfaceQueryOptions(chainId: number | undefined, interfaceId: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTSupportsInterface', chainId, interfaceId],
    enabled: chainId !== undefined && chainId !== null && interfaceId !== undefined && interfaceId !== null, 
    queryFn: () => {
        return fetchDODONFTSupportsInterface(chainId as number,interfaceId as string);
    }
  }
}

/**
 * fetch symbol
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchDODONFTSymbol(chainId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x95d89b41', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDODONFTSymbolQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTSymbol', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTSymbol(chainId as number);
    }
  }
}

/**
 * fetch tokenByIndex
 * @param {number} chainId - number
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFTTokenByIndex(chainId: number, index: number): Promise<bigint> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x4f6ccce7', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODONFTTokenByIndexQueryOptions(chainId: number | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTTokenByIndex', chainId, index],
    enabled: chainId !== undefined && chainId !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchDODONFTTokenByIndex(chainId as number,index as number);
    }
  }
}

/**
 * fetch tokenOfOwnerByIndex
 * @param {number} chainId - number
 * @param {string} owner - address
 * @param {number} index - uint256
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFTTokenOfOwnerByIndex(chainId: number, owner: string, index: number): Promise<bigint> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [owner,index]);
  const __data = hexlify(concat(['0x2f745c59', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODONFTTokenOfOwnerByIndexQueryOptions(chainId: number | undefined, owner: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTTokenOfOwnerByIndex', chainId, owner, index],
    enabled: chainId !== undefined && chainId !== null && owner !== undefined && owner !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchDODONFTTokenOfOwnerByIndex(chainId as number,owner as string,index as number);
    }
  }
}

/**
 * fetch tokenURI
 * @param {number} chainId - number
 * @param {number} tokenId - uint256
 * @returns {string} __output0 - string
 */
export function fetchDODONFTTokenURI(chainId: number, tokenId: number): Promise<string> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [tokenId]);
  const __data = hexlify(concat(['0xc87b56dd', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchDODONFTTokenURIQueryOptions(chainId: number | undefined, tokenId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTTokenURI', chainId, tokenId],
    enabled: chainId !== undefined && chainId !== null && tokenId !== undefined && tokenId !== null, 
    queryFn: () => {
        return fetchDODONFTTokenURI(chainId as number,tokenId as number);
    }
  }
}

/**
 * fetch totalSupply
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODONFTTotalSupply(chainId: number): Promise<bigint> {
  const __to = getDODONFTContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x18160ddd', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODONFTTotalSupplyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODONFTTotalSupply', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODONFTTotalSupply(chainId as number);
    }
  }
}

/**
 * encode approve
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTApprove(to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [to,tokenId]);
  return hexlify(concat(['0x095ea7b3', __encodeData]));
}

/**
 * encode burn
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTBurn(tokenId: string | number) {
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
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTSafeTransferFrom(from: string, to: string, tokenId: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","uint256"], [from,to,tokenId]);
  return hexlify(concat(['0x42842e0e', __encodeData]));
}

/**
 * encode safeTransferFrom
 * @param {string} from - address
 * @param {string} to - address
 * @param {string | number} tokenId - uint256
 * @param {string} _data - bytes
 * @returns {string} encode data
 */
export function encodeDODONFTSafeTransferFrom2(from: string, to: string, tokenId: string | number, _data: string) {
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
 * @param {string | number} tokenId - uint256
 * @returns {string} encode data
 */
export function encodeDODONFTTransferFrom(from: string, to: string, tokenId: string | number) {
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