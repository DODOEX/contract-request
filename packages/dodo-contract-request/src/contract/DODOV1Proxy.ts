import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV1ProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x8dD0Fea5FA2f7df535F87f312641Cc15d8B151BA","56":"0x4Fc222194862081866FC636893DDeCB3E4341A10","137":"0x58E27C46c162F2a781d750BbE1119E1b2DfE82e0","42161":"0x49186E32fEd50fd6B5604A2618c7B0b03Cd41414"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    if (!result) throw new Error(`Not support ChainId: ${chainId}.`)
    return result
}

/**
 * fetch owner
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOV1ProxyOwner(chainId: number) {
  const __to = getDODOV1ProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8da5cb5b', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOV1ProxyOwnerQueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOV1ProxyOwner(chainId as number);
    }
  }
}

/**
 * encode renounceOwnership

 * @returns {string} encode data
 */
export function encodeDODOV1ProxyRenounceOwnership() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x715018a6', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode withdrawAllBase
 * @param {string} pool - address
 * @param {string | number} minReceive - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyWithdrawAllBase(pool: string, minReceive: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [pool,minReceive]);
  return hexlify(concat(['0x092b955d', __encodeData]));
}

/**
 * encode withdrawAllQuote
 * @param {string} pool - address
 * @param {string | number} minReceive - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyWithdrawAllQuote(pool: string, minReceive: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256"], [pool,minReceive]);
  return hexlify(concat(['0xf7cdbb10', __encodeData]));
}

/**
 * encode withdrawBase
 * @param {string} pool - address
 * @param {string | number} amount - uint256
 * @param {string | number} minReceive - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyWithdrawBase(pool: string, amount: string | number, minReceive: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [pool,amount,minReceive]);
  return hexlify(concat(['0xa77febfc', __encodeData]));
}

/**
 * encode withdrawLeftToken
 * @param {string} token - address
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyWithdrawLeftToken(token: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [token]);
  return hexlify(concat(['0x8202dada', __encodeData]));
}

/**
 * encode withdrawQuote
 * @param {string} pool - address
 * @param {string | number} amount - uint256
 * @param {string | number} minReceive - uint256
 * @returns {string} encode data
 */
export function encodeDODOV1ProxyWithdrawQuote(pool: string, amount: string | number, minReceive: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","uint256","uint256"], [pool,amount,minReceive]);
  return hexlify(concat(['0xde3a5a0b', __encodeData]));
}