import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOApproveContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149","10":"0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149","56":"0xa128Ba44B2738A558A1fdC06d6303d52D3Cef8c1","137":"0x6D310348d5c12009854DFCf72e0DF9027e8cb4f4","196":"0x7Fca409caEb9662751b2D843201033cB1ce4f205","1030":"0x5BaF16d57620Cb361F622232F3cb4090e35F3da2","2818":"0x2629E610dB4AC081c108cCDf8b19ED39D702df43","5000":"0xa71415675F68f29259ddD63215E5518d2735bf0a","8453":"0x89872650fA1A391f58B4E144222bB02e44db7e3B","10169":"0x0226fCE8c969604C3A0AD19c37d1FAFac73e13c2","42161":"0xA867241cDC8d3b0C07C85cC06F25a0cD3b5474d8","43114":"0xCFea63e3DE31De53D68780Dd65675F169439e470","48900":"0x775B68337A5768d1D5cda0A1A598d5dCb92fA8D6","59144":"0x6de4d882a84A98f4CCD5D33ea6b3C99A07BAbeB1","80084":"0x09da628Df009Ad300e8e299497eebD8694AfBe95","167000":"0x2629E610dB4AC081c108cCDf8b19ED39D702df43","200901":"0x4c0f6C7AA981099CB7D74E8f08D85832c7FA5640","534352":"0x20E77aD760eC9E922Fd2dA8847ABFbB2471B92CD","543210":"0x00600dde05d74Fd8C7E7208aBcfE08426FA09e85","11155111":"0x66c45FF040e86DC613F239123A5E21FFdC3A3fEC","1313161554":"0x335aC99bb3E51BDbF22025f092Ebc1Cf2c5cC619"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch _DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_DODO_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xe54c8033', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApprove_DODO_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApprove_DODO_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApprove_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApprove_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApprove_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApprove_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _PENDING_DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApprove_PENDING_DODO_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x93773aec', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApprove_PENDING_DODO_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApprove_PENDING_DODO_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _TIMELOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOApprove_TIMELOCK_(chainId: number): Promise<bigint> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb75dbf68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOApprove_TIMELOCK_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApprove_TIMELOCK_(chainId as number);
    }
  }
}

/**
 * fetch getDODOProxy
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveGetDODOProxy(chainId: number): Promise<string> {
  const __to = getDODOApproveContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x31fa1319', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApproveGetDODOProxyQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveGetDODOProxy(chainId as number);
    }
  }
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOApproveClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode claimTokens
 * @param {string} token - address
 * @param {string} who - address
 * @param {string} dest - address
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeDODOApproveClaimTokens(token: string, who: string, dest: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [token,who,dest,amount]);
  return hexlify(concat(['0x0a5ea466', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {string} initProxyAddress - address
 * @returns {string} encode data
 */
export function encodeDODOApproveInit(owner: string, initProxyAddress: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [owner,initProxyAddress]);
  return hexlify(concat(['0xf09a4016', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode lockSetProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveLockSetProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4f3cef84', __encodeData]));
}

/**
 * encode setDODOProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveSetDODOProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x8cdb6574', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unlockSetProxy
 * @param {string} newDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveUnlockSetProxy(newDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDodoProxy]);
  return hexlify(concat(['0x41c256c1', __encodeData]));
}