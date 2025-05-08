import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getERC20HelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","10":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","56":"0x5B9E4c3056227C316a3da3296031DdC7a8d6a867","137":"0xfd24312Ec7871A6D1a31e454D5AbB16c6c25a9b3","196":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","1030":"0x24549FC74B3076A962624A26370ed556c467F74C","2390":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510","2818":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","5000":"0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780","8453":"0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780","10143":"0x842b59E74Ca9851fF0C35741C5f0923c63825BA8","10169":"0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780","42161":"0x7C062B9C584fA6eC2504270790D38240A2c5fE72","43114":"0xC3528D128CC227fd60793007b5e3FdF7c2945282","47763":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","48900":"0x4F99cba8aAEad26fc970dc6CC4ea435779Fa9016","59144":"0xbcd2FDC3B884Cf0dfD932f55Ec2Fe1fB7e8c62Da","80084":"0xCA22c3165082c3223Bc350DE4e8880C01Cd80510","80094":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","98864":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","98866":"0x8b09DB11ea380d6454D2592D334FFC319ce6EF3E","167000":"0x0c76F95a2952DC171B26b152f2b30cA8968e79D5","200901":"0x1235FF08D583d8Ab05f2FD18250120CBb47f9F49","421614":"0x4c64A1E6Eb3bA74A58EB24C76e8262AA2CCD2D92","534352":"0xB5c7BA1EAde74800cD6cf5F56b1c4562De373780","543210":"0xc70C53dB891d5bdd2da5ECb7A0D4240A76a47934","688688":"0x39eA8d4dA68f6da17E5b50946ebcEAd6d01ED2D2","11155111":"0x297da061D1dE0132D241Fafed224288B34d81005","11155931":"0x842b59E74Ca9851fF0C35741C5f0923c63825BA8","1313161554":"0xE8C9A78725D0451FA19878D5f8A3dC0D55FECF25"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch bytes32ToString
 * @param {number} chainId - number
 * @param {string} _bytes - bytes32
 * @returns {string} _string - string
 */
export function fetchERC20HelperBytes32ToString(chainId: number, _bytes: string): Promise<string> {
  const __to = getERC20HelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["bytes32"], [_bytes]);
  const __data = hexlify(concat(['0x9201de55', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"string","name":"_string","type":"string"}])
}
export function getFetchERC20HelperBytes32ToStringQueryOptions(chainId: number | undefined, _bytes: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20HelperBytes32ToString', chainId, _bytes],
    enabled: chainId !== undefined && chainId !== null && _bytes !== undefined && _bytes !== null, 
    queryFn: () => {
        return fetchERC20HelperBytes32ToString(chainId as number,_bytes as string);
    }
  }
}

/**
 * fetch isERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {boolean} isOk - bool
 * @returns {string} symbol - string
 * @returns {string} name - string
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchERC20HelperIsERC20(chainId: number, token: string, user: string, spender: string): Promise<{
    isOk: boolean;
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }> {
  const __to = getERC20HelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0xf1a16c31', __encodeData]));
  return contractRequests.batchCall<{
    isOk: boolean;
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, [{"internalType":"bool","name":"isOk","type":"bool"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"allownance","type":"uint256"}])
}
export function getFetchERC20HelperIsERC20QueryOptions(chainId: number | undefined, token: string | undefined, user: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20HelperIsERC20', chainId, token, user, spender],
    enabled: chainId !== undefined && chainId !== null && token !== undefined && token !== null && user !== undefined && user !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchERC20HelperIsERC20(chainId as number,token as string,user as string,spender as string);
    }
  }
}

/**
 * fetch judgeERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {string} symbol - string
 * @returns {string} name - string
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchERC20HelperJudgeERC20(chainId: number, token: string, user: string, spender: string): Promise<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }> {
  const __to = getERC20HelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0xef9361db', __encodeData]));
  return contractRequests.batchCall<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, [{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"allownance","type":"uint256"}])
}
export function getFetchERC20HelperJudgeERC20QueryOptions(chainId: number | undefined, token: string | undefined, user: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20HelperJudgeERC20', chainId, token, user, spender],
    enabled: chainId !== undefined && chainId !== null && token !== undefined && token !== null && user !== undefined && user !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchERC20HelperJudgeERC20(chainId as number,token as string,user as string,spender as string);
    }
  }
}

/**
 * fetch judgeOldERC20
 * @param {number} chainId - number
 * @param {string} token - address
 * @param {string} user - address
 * @param {string} spender - address
 * @returns {string} symbol - bytes32
 * @returns {string} name - bytes32
 * @returns {bigint} decimals - uint256
 * @returns {bigint} balance - uint256
 * @returns {bigint} allownance - uint256
 */
export function fetchERC20HelperJudgeOldERC20(chainId: number, token: string, user: string, spender: string): Promise<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }> {
  const __to = getERC20HelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address","address","address"], [token,user,spender]);
  const __data = hexlify(concat(['0x76cd81e3', __encodeData]));
  return contractRequests.batchCall<{
    symbol: string;
    name: string;
    decimals: bigint;
    balance: bigint;
    allownance: bigint;
  }>(chainId, __to, __data, [{"internalType":"bytes32","name":"symbol","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"allownance","type":"uint256"}])
}
export function getFetchERC20HelperJudgeOldERC20QueryOptions(chainId: number | undefined, token: string | undefined, user: string | undefined, spender: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchERC20HelperJudgeOldERC20', chainId, token, user, spender],
    enabled: chainId !== undefined && chainId !== null && token !== undefined && token !== null && user !== undefined && user !== null && spender !== undefined && spender !== null, 
    queryFn: () => {
        return fetchERC20HelperJudgeOldERC20(chainId as number,token as string,user as string,spender as string);
    }
  }
}