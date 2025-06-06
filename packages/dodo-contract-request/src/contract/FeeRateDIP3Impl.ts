import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getFeeRateDIP3ImplContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","10":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","56":"0x04bfc975eb76ac870c1bce812992ab3767d809b6","137":"0x6292e8f7647b3b9dDf5795b1Fb77D0187e30E0F9","196":"0x1235FF08D583d8Ab05f2FD18250120CBb47f9F49","1030":"0x6D208e3dD3ba8dc7b0D23D6Bf15fef9324643984","2818":"0xf7A57DeadcFa3030Ddbf9E1ad371DB3148BC7cB6","5000":"0x6a9De0C6235bDD14B52eeA53F5a08Ff7D4183b3e","8453":"0x4aAe1d041C01078725dB016BA4D4F72455CaF931","10169":"0x4aAe1d041C01078725dB016BA4D4F72455CaF931","42161":"0x97bBF5BB1dcfC93A8c67e97E50Bea19DB3416A83","43114":"0xB2570F5381ee94dd75FbF303e6889F19199922AA","48900":"0x1235FF08D583d8Ab05f2FD18250120CBb47f9F49","59144":"0x65934e2f228Fde069A6255F46E6A15Bc9DE38545","80084":"0x717dd69514175be82266965851DC2EF550fbC809","167000":"0xf7A57DeadcFa3030Ddbf9E1ad371DB3148BC7cB6","200901":"0x4dA809758CC45F28eACeF6B538c599C0E9a42772","534352":"0x4aAe1d041C01078725dB016BA4D4F72455CaF931","543210":"0xa9CcAcf2EA9694882d948DEa138BF3cCA27EB83e","11155111":"0x89872650fA1A391f58B4E144222bB02e44db7e3B","1313161554":"0x16601C94Ad6E26904a519C08a7A1fCBC8e1F9D9c"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _LP_MT_RATIO_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchFeeRateDIP3Impl_LP_MT_RATIO_(chainId: number): Promise<bigint> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb1efb8f4', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchFeeRateDIP3Impl_LP_MT_RATIO_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3Impl_LP_MT_RATIO_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3Impl_LP_MT_RATIO_(chainId as number);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchFeeRateDIP3Impl_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateDIP3Impl_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3Impl_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3Impl_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchFeeRateDIP3Impl_OWNER_(chainId: number): Promise<string> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateDIP3Impl_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3Impl_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3Impl_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch cpPools
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {string} quoteToken - address
 * @returns {bigint} globalQuota - int256
 * @returns {string} feeAddr - address
 * @returns {string} quotaAddr - address
 */
export function fetchFeeRateDIP3ImplCpPools(chainId: number, __input1: string): Promise<{
    quoteToken: string;
    globalQuota: bigint;
    feeAddr: string;
    quotaAddr: string;
  }> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x68f0cb6f', __encodeData]));
  return contractRequests.batchCall<{
    quoteToken: string;
    globalQuota: bigint;
    feeAddr: string;
    quotaAddr: string;
  }>(chainId, __to, __data, [{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"int256","name":"globalQuota","type":"int256"},{"internalType":"address","name":"feeAddr","type":"address"},{"internalType":"address","name":"quotaAddr","type":"address"}])
}
export function getFetchFeeRateDIP3ImplCpPoolsQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplCpPools', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplCpPools(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch getCPInfoByUser
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} user - address
 * @returns {boolean} isHaveCap - bool
 * @returns {bigint} curQuota - int256
 * @returns {bigint} userFee - uint256
 */
export function fetchFeeRateDIP3ImplGetCPInfoByUser(chainId: number, pool: string, user: string): Promise<{
    isHaveCap: boolean;
    curQuota: bigint;
    userFee: bigint;
  }> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,user]);
  const __data = hexlify(concat(['0xfae783d8', __encodeData]));
  return contractRequests.batchCall<{
    isHaveCap: boolean;
    curQuota: bigint;
    userFee: bigint;
  }>(chainId, __to, __data, [{"internalType":"bool","name":"isHaveCap","type":"bool"},{"internalType":"int256","name":"curQuota","type":"int256"},{"internalType":"uint256","name":"userFee","type":"uint256"}])
}
export function getFetchFeeRateDIP3ImplGetCPInfoByUserQueryOptions(chainId: number | undefined, pool: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplGetCPInfoByUser', chainId, pool, user],
    enabled: chainId !== undefined && chainId !== null && pool !== undefined && pool !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplGetCPInfoByUser(chainId as number,pool as string,user as string);
    }
  }
}

/**
 * fetch getFeeRate
 * @param {number} chainId - number
 * @param {string} pool - address
 * @param {string} user - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchFeeRateDIP3ImplGetFeeRate(chainId: number, pool: string, user: string): Promise<bigint> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address"], [pool,user]);
  const __data = hexlify(concat(['0x848cc303', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchFeeRateDIP3ImplGetFeeRateQueryOptions(chainId: number | undefined, pool: string | undefined, user: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplGetFeeRate', chainId, pool, user],
    enabled: chainId !== undefined && chainId !== null && pool !== undefined && pool !== null && user !== undefined && user !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplGetFeeRate(chainId as number,pool as string,user as string);
    }
  }
}

/**
 * fetch isAdminListed
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchFeeRateDIP3ImplIsAdminListed(chainId: number, __input1: string): Promise<boolean> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x1822c0c0', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchFeeRateDIP3ImplIsAdminListedQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplIsAdminListed', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplIsAdminListed(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch poolHeartBeat
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchFeeRateDIP3ImplPoolHeartBeat(chainId: number): Promise<string> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8c343296', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchFeeRateDIP3ImplPoolHeartBeatQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplPoolHeartBeat', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplPoolHeartBeat(chainId as number);
    }
  }
}

/**
 * fetch specPoolList
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {bigint} __output0 - uint256
 */
export function fetchFeeRateDIP3ImplSpecPoolList(chainId: number, __input1: string): Promise<bigint> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x8614c552', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchFeeRateDIP3ImplSpecPoolListQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplSpecPoolList', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplSpecPoolList(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch version
 * @param {number} chainId - number
 * @returns {string} __output0 - string
 */
export function fetchFeeRateDIP3ImplVersion(chainId: number): Promise<string> {
  const __to = getFeeRateDIP3ImplContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x54fd4d50', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"","type":"string"}])
}
export function getFetchFeeRateDIP3ImplVersionQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchFeeRateDIP3ImplVersion', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchFeeRateDIP3ImplVersion(chainId as number);
    }
  }
}

/**
 * encode addAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplAddAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xae52aae7', __encodeData]));
}

/**
 * encode addCpPoolInfo
 * @param {string} cpPool - address
 * @param {string} quoteToken - address
 * @param {string | number} globalQuota - int256
 * @param {string} feeAddr - address
 * @param {string} quotaAddr - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplAddCpPoolInfo(cpPool: string, quoteToken: string, globalQuota: string | number, feeAddr: string, quotaAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","int256","address","address"], [cpPool,quoteToken,globalQuota,feeAddr,quotaAddr]);
  return hexlify(concat(['0x5454b842', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplClaimOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x4e71e0c8', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode removeAdminList
 * @param {string} userAddr - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplRemoveAdminList(userAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [userAddr]);
  return hexlify(concat(['0xfd8bd849', __encodeData]));
}

/**
 * encode setCpPoolInfo
 * @param {string} cpPool - address
 * @param {string} quoteToken - address
 * @param {string | number} globalQuota - int256
 * @param {string} feeAddr - address
 * @param {string} quotaAddr - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplSetCpPoolInfo(cpPool: string, quoteToken: string, globalQuota: string | number, feeAddr: string, quotaAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address","int256","address","address"], [cpPool,quoteToken,globalQuota,feeAddr,quotaAddr]);
  return hexlify(concat(['0x44c19402', __encodeData]));
}

/**
 * encode setCpPoolQuotaAddr
 * @param {string} cpPool - address
 * @param {string} quotaAddr - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplSetCpPoolQuotaAddr(cpPool: string, quotaAddr: string) {
  const __encodeData = defaultAbiCoder.encode(["address","address"], [cpPool,quotaAddr]);
  return hexlify(concat(['0xef6a5d79', __encodeData]));
}

/**
 * encode setLpMtRatio
 * @param {string | number} newLpMtRatio - uint256
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplSetLpMtRatio(newLpMtRatio: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [newLpMtRatio]);
  return hexlify(concat(['0xa1e281de', __encodeData]));
}

/**
 * encode setPoolHeartBeat
 * @param {string} newPoolHeartBeat - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplSetPoolHeartBeat(newPoolHeartBeat: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newPoolHeartBeat]);
  return hexlify(concat(['0xc30c6169', __encodeData]));
}

/**
 * encode setSpecPoolList
 * @param {string} poolAddr - address
 * @param {string | number} mtFeeRate - uint256
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplSetSpecPoolList(poolAddr: string, mtFeeRate: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [poolAddr,mtFeeRate]);
  return hexlify(concat(['0x01ea364b', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeFeeRateDIP3ImplTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}