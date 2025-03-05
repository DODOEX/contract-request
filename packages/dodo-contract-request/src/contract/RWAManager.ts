import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getRWAManagerContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"11155111":"0x51df1eee18cC6280B43C628eF014eAad2f2162c7"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch RWA_TOKEN
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerRWA_TOKEN(chainId: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xa5629da4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract RWAToken","name":"","type":"address"}])
}
export function getFetchRWAManagerRWA_TOKENQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerRWA_TOKEN', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWAManagerRWA_TOKEN(chainId as number);
    }
  }
}

/**
 * fetch USDC
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerUSDC(chainId: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x89a30271', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"contract ERC20","name":"","type":"address"}])
}
export function getFetchRWAManagerUSDCQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerUSDC', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWAManagerUSDC(chainId as number);
    }
  }
}

/**
 * fetch USDC_DECIMALS
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint8
 */
export function fetchRWAManagerUSDC_DECIMALS(chainId: number): Promise<bigint> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xc1419def', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint8","name":"","type":"uint8"}])
}
export function getFetchRWAManagerUSDC_DECIMALSQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerUSDC_DECIMALS', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWAManagerUSDC_DECIMALS(chainId as number);
    }
  }
}

/**
 * fetch blacklistedAddresses
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchRWAManagerBlacklistedAddresses(chainId: number, __input1: string): Promise<boolean> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0xd5749d42', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchRWAManagerBlacklistedAddressesQueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerBlacklistedAddresses', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchRWAManagerBlacklistedAddresses(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch feeReceiver
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerFeeReceiver(chainId: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb3f00674', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWAManagerFeeReceiverQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerFeeReceiver', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWAManagerFeeReceiver(chainId as number);
    }
  }
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerOwner(chainId: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWAManagerOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerOwner', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchRWAManagerOwner(chainId as number);
    }
  }
}

/**
 * fetch redemptionContracts
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerRedemptionContracts(chainId: number, __input1: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x44bcab09', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWAManagerRedemptionContractsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerRedemptionContracts', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchRWAManagerRedemptionContracts(chainId as number,__input1 as number);
    }
  }
}

/**
 * fetch subscriptionContracts
 * @param {number} chainId - number
 * @param {number} __input1 - uint256
 * @returns {string} __output0 - address
 */
export function fetchRWAManagerSubscriptionContracts(chainId: number, __input1: number): Promise<string> {
  const __to = getRWAManagerContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["uint256"], [__input1]);
  const __data = hexlify(concat(['0x718846dc', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchRWAManagerSubscriptionContractsQueryOptions(chainId: number | undefined, __input1: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchRWAManagerSubscriptionContracts', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchRWAManagerSubscriptionContracts(chainId as number,__input1 as number);
    }
  }
}

/**
 * encode cancelRedeem
 * @param {string | number} period - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerCancelRedeem(period: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [period]);
  return hexlify(concat(['0x539ffb77', __encodeData]));
}

/**
 * encode cancelSubscription
 * @param {string | number} period - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerCancelSubscription(period: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [period]);
  return hexlify(concat(['0x21235083', __encodeData]));
}

/**
 * encode claimRWAToken
 * @param {string | number} period - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerClaimRWAToken(period: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [period]);
  return hexlify(concat(['0x077e6d6a', __encodeData]));
}

/**
 * encode claimReserveRWAToken
 * @param {string | number} period - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerClaimReserveRWAToken(period: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [period]);
  return hexlify(concat(['0xd70fddef', __encodeData]));
}

/**
 * encode claimUSDC
 * @param {string | number} period - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerClaimUSDC(period: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [period]);
  return hexlify(concat(['0x6e5f4a89', __encodeData]));
}

/**
 * encode createRedemptionContract
 * @param {string | number} period - uint256
 * @param {string | number} startTime - uint256
 * @param {string | number} endTime - uint256
 * @param {string | number} totalCap - uint256
 * @param {string | number} userCap - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerCreateRedemptionContract(period: string | number, startTime: string | number, endTime: string | number, totalCap: string | number, userCap: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint256"], [period,startTime,endTime,totalCap,userCap]);
  return hexlify(concat(['0x4a84564e', __encodeData]));
}

/**
 * encode createSubscriptionContract
 * @param {string | number} period - uint256
 * @param {string | number} startTime - uint256
 * @param {string | number} endTime - uint256
 * @param {string | number} totalCap - uint256
 * @param {string | number} userCap - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerCreateSubscriptionContract(period: string | number, startTime: string | number, endTime: string | number, totalCap: string | number, userCap: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256","uint256","uint256","uint256"], [period,startTime,endTime,totalCap,userCap]);
  return hexlify(concat(['0x0147eda7', __encodeData]));
}

/**
 * encode redeem
 * @param {string | number} period - uint256
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerRedeem(period: string | number, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [period,amount]);
  return hexlify(concat(['0x7cbc2373', __encodeData]));
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeRWAManagerRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode setBlacklist
 * @param {string} account - address
 * @param {boolean} flag - bool
 * @returns {string} encode data
 */
export function encodeRWAManagerSetBlacklist(account: string, flag: boolean) {
  const __encodeData = defaultAbiCoder.encode(["address","bool"], [account,flag]);
  return hexlify(concat(['0x153b0d1e', __encodeData]));
}

/**
 * encode setFeeReceiver
 * @param {string} _feeReceiver - address
 * @returns {string} encode data
 */
export function encodeRWAManagerSetFeeReceiver(_feeReceiver: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [_feeReceiver]);
  return hexlify(concat(['0xefdcd974', __encodeData]));
}

/**
 * encode subscribe
 * @param {string | number} period - uint256
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerSubscribe(period: string | number, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256","uint256"], [period,amount]);
  return hexlify(concat(['0x84370813', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeRWAManagerTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdrawUSDC
 * @param {string | number} amount - uint256
 * @returns {string} encode data
 */
export function encodeRWAManagerWithdrawUSDC(amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [amount]);
  return hexlify(concat(['0xdb81f99b', __encodeData]));
}