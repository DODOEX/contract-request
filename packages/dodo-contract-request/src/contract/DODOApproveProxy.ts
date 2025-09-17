import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOApproveProxyContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x335aC99bb3E51BDbF22025f092Ebc1Cf2c5cC619","10":"0x8989A6909fe5af076AaA3D7b18BDe53153DbC348","56":"0xB76de21f04F677f07D9881174a1D8E624276314C","137":"0x01FEEA29da5Ae41B0b5F6b10b93EE34752eF80d7","177":"0x6694eebf40924e04c952EA8F1626d19E7a656Bb7","196":"0xfbdEb92D8133cf35633eE2D40Be561476268DcFC","1030":"0xEfD2eC5F9fFe9899515C7032d86F925715eD9D05","1689":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","2390":"0x143bE32C854E4Ddce45aD48dAe3343821556D0c3","2818":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","5000":"0xb546Add98c71D97Bb65De60B91021617AcD1262C","8453":"0x6de4d882a84A98f4CCD5D33ea6b3C99A07BAbeB1","10143":"0x5977F12664b4E634dFbAAD0ad4a6a81057254dA8","10169":"0xa23137871C4A4ce8514f581EE82262CD1A49EEAE","42161":"0x311E670c3305a0BD55184c1C6580eBeA1FA611F0","43111":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","43114":"0x96a75d73b3de29c009863fA6329D96b2181D3Dc4","47763":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","48900":"0xcAcb29f0631612552eF50D4Fa02920910513b2B0","59144":"0xCb3dC90E800C961d4a206BeAAFd92A6d2E06495e","80084":"0x8bCcE4CCEEf7e841A2A8A48F3250B9FB3b25B0C3","80094":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","98864":"0x09da628Df009Ad300e8e299497eebD8694AfBe95","98866":"0x0343C5757Fb98aD9eF39824e08B852aF61C71c64","167000":"0x7fB45a8AcA7DD30a136569B5E3eb7E1F1f0235a0","200901":"0xaE38E18D764AdF135A2D8b32A29C603772A7846b","421614":"0xCe3159513fF92067612bfAb072038B90fAE6276A","534352":"0x0218E24dd47f9a1D05418eAa5B9cEDB13Ca48492","543210":"0x37B121f370B57059C6fe486440C2ECded71C0eF7","688688":"0x7c25C06777305e632218aDFF9763E3fC049Dd0Db","11155111":"0xE2004eE21f88a7D8e1A5EDc3c9617a0460CC7b99","11155931":"0xB95eD7E958E196688984951F41Ac2888F4B10aB9","1313161554":"0x6B4Fa0bc61Eddc928e0Df9c7f01e407BfcD3e5EF"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch _DODO_APPROVE_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveProxy_DODO_APPROVE_(chainId: number): Promise<string> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x46e74298', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApproveProxy_DODO_APPROVE_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_DODO_APPROVE_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_DODO_APPROVE_(chainId as number);
    }
  }
}

/**
 * fetch _IS_ALLOWED_PROXY_
 * @param {number} chainId - number
 * @param {string} __input1 - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOApproveProxy_IS_ALLOWED_PROXY_(chainId: number, __input1: string): Promise<boolean> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [__input1]);
  const __data = hexlify(concat(['0x3b2f27bb', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOApproveProxy_IS_ALLOWED_PROXY_QueryOptions(chainId: number | undefined, __input1: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_IS_ALLOWED_PROXY_', chainId, __input1],
    enabled: chainId !== undefined && chainId !== null && __input1 !== undefined && __input1 !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_IS_ALLOWED_PROXY_(chainId as number,__input1 as string);
    }
  }
}

/**
 * fetch _NEW_OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveProxy_NEW_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x8456db15', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApproveProxy_NEW_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_NEW_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_NEW_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _OWNER_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveProxy_OWNER_(chainId: number): Promise<string> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x16048bc4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApproveProxy_OWNER_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_OWNER_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_OWNER_(chainId as number);
    }
  }
}

/**
 * fetch _PENDING_ADD_DODO_PROXY_
 * @param {number} chainId - number
 * @returns {string} __output0 - address
 */
export function fetchDODOApproveProxy_PENDING_ADD_DODO_PROXY_(chainId: number): Promise<string> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xcc646ed4', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchDODOApproveProxy_PENDING_ADD_DODO_PROXY_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_PENDING_ADD_DODO_PROXY_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_PENDING_ADD_DODO_PROXY_(chainId as number);
    }
  }
}

/**
 * fetch _TIMELOCK_
 * @param {number} chainId - number
 * @returns {bigint} __output0 - uint256
 */
export function fetchDODOApproveProxy_TIMELOCK_(chainId: number): Promise<bigint> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xb75dbf68', __encodeData]));
  return contractRequests.batchCall<bigint>(chainId, __to, __data, [{"internalType":"uint256","name":"","type":"uint256"}])
}
export function getFetchDODOApproveProxy_TIMELOCK_QueryOptions(chainId: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxy_TIMELOCK_', chainId],
    enabled: chainId !== undefined && chainId !== null, 
    queryFn: () => {
        return fetchDODOApproveProxy_TIMELOCK_(chainId as number);
    }
  }
}

/**
 * fetch isAllowedProxy
 * @param {number} chainId - number
 * @param {string} _proxy - address
 * @returns {boolean} __output0 - bool
 */
export function fetchDODOApproveProxyIsAllowedProxy(chainId: number, _proxy: string): Promise<boolean> {
  const __to = getDODOApproveProxyContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [_proxy]);
  const __data = hexlify(concat(['0x48a4f993', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchDODOApproveProxyIsAllowedProxyQueryOptions(chainId: number | undefined, _proxy: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOApproveProxyIsAllowedProxy', chainId, _proxy],
    enabled: chainId !== undefined && chainId !== null && _proxy !== undefined && _proxy !== null, 
    queryFn: () => {
        return fetchDODOApproveProxyIsAllowedProxy(chainId as number,_proxy as string);
    }
  }
}

/**
 * encode addDODOProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyAddDODOProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x3e688589', __encodeData]));
}

/**
 * encode claimOwnership

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyClaimOwnership() {
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
export function encodeDODOApproveProxyClaimTokens(token: string, who: string, dest: string, amount: string | number) {
  const __encodeData = defaultAbiCoder.encode(["address","address","address","uint256"], [token,who,dest,amount]);
  return hexlify(concat(['0x0a5ea466', __encodeData]));
}

/**
 * encode init
 * @param {string} owner - address
 * @param {Array<string>} proxies - address[]
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyInit(owner: string, proxies: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["address","address[]"], [owner,proxies]);
  return hexlify(concat(['0x3c5a3cea', __encodeData]));
}

/**
 * encode initOwner
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyInitOwner(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0x0d009297', __encodeData]));
}

/**
 * encode lockAddProxy

 * @returns {string} encode data
 */
export function encodeDODOApproveProxyLockAddProxy() {
  const __encodeData = defaultAbiCoder.encode([], []);
  return hexlify(concat(['0x556d65a8', __encodeData]));
}

/**
 * encode removeDODOProxy
 * @param {string} oldDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyRemoveDODOProxy(oldDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [oldDodoProxy]);
  return hexlify(concat(['0x2c419f2f', __encodeData]));
}

/**
 * encode transferOwnership
 * @param {string} newOwner - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyTransferOwnership(newOwner: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newOwner]);
  return hexlify(concat(['0xf2fde38b', __encodeData]));
}

/**
 * encode unlockAddProxy
 * @param {string} newDodoProxy - address
 * @returns {string} encode data
 */
export function encodeDODOApproveProxyUnlockAddProxy(newDodoProxy: string) {
  const __encodeData = defaultAbiCoder.encode(["address"], [newDodoProxy]);
  return hexlify(concat(['0x374445b2', __encodeData]));
}