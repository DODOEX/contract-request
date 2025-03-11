import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';

export function getDODOV1PmmHelperContractAddressByChainId(chainId: number) {
    const contractAddressObject = {"1":"0x6373ceB657C83C91088d328622573FB766064Ac4","10":"0x6373ceB657C83C91088d328622573FB766064Ac4","56":"0x2BBD66fC4898242BDBD2583BBe1d76E8b8f71445","137":"0x18DFdE99F578A0735410797e949E8D3e2AFCB9D2","196":"0xd5cf3f9DFCfC1c3F8b476D881f2F7e79142E319B","1030":"0xAC716E87b0853C0712674e8E3a8435a489F276b4","2390":"0x895B2caf85Ae70E8d1b77C8b30B25F07b461Dc45","2818":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","5000":"0xa1609A1fa7DC16c025feA194c02b2822441b8c10","8453":"0x17644d3B366273faC75A07996E2F90A99A2946a7","10143":"0xf66b68728dc83fa09ec163d6ee0eDa163ae6a4ad","10169":"0x17644d3B366273faC75A07996E2F90A99A2946a7","42161":"0x4EE6398898F7FC3e648b3f6bA458310ac29cD352","43114":"0x790B4A80Fb1094589A3c0eFC8740aA9b0C1733fB","47763":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","48900":"0xd5cf3f9DFCfC1c3F8b476D881f2F7e79142E319B","53456":"0x3A7Bc5F9E41356728f037f17D88c642EE46d1Aaa","59144":"0x44023441f2Bad375b6b5C6354B03c3E9AD01E269","80084":"0x895B2caf85Ae70E8d1b77C8b30B25F07b461Dc45","80094":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","98864":"0x842b59E74Ca9851fF0C35741C5f0923c63825BA8","98865":"0xC60Ac5B8bDd9DBD1830E3f43252B7b0d50DFEea3","167000":"0x187210CE04F5B3179F0e483FCf292c34BA7568Dd","200901":"0x6CE6892b402D7D39A618e7D169fB8f0f449068d4","534352":"0x17644d3B366273faC75A07996E2F90A99A2946a7","543210":"0xA32ccf8468a7a7a43E26052F118646A8eE8a2926","11155111":"0x3dD629473A2eD7f3C6299FFD9F3e0C283d073f11","1313161554":"0xbAb9F4ff4A19a0e8EEBC56b06750253228ffAc6E"};
    const result = contractAddressObject[String(chainId) as keyof typeof contractAddressObject];
    return result
}

/**
 * fetch getPairDetail
 * @param {number} chainId - number
 * @param {string} pool - address
 * @returns {[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]} res - tuple[]
 */
export function fetchDODOV1PmmHelperGetPairDetail(chainId: number, pool: string): Promise<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]> {
  const __to = getDODOV1PmmHelperContractAddressByChainId(chainId);

  const __encodeData = defaultAbiCoder.encode(["address"], [pool]);
  const __data = hexlify(concat(['0x2bd8c5ac', __encodeData]));
  return contractRequests.batchCall<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint, string, string, string, bigint]>(chainId, __to, __data, [{"components":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"K","type":"uint256"},{"internalType":"uint256","name":"B","type":"uint256"},{"internalType":"uint256","name":"Q","type":"uint256"},{"internalType":"uint256","name":"B0","type":"uint256"},{"internalType":"uint256","name":"Q0","type":"uint256"},{"internalType":"uint256","name":"R","type":"uint256"},{"internalType":"uint256","name":"lpFeeRate","type":"uint256"},{"internalType":"uint256","name":"mtFeeRate","type":"uint256"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"curPair","type":"address"},{"internalType":"uint256","name":"pairVersion","type":"uint256"}],"internalType":"struct DODOV1PmmHelper.PairDetail[]","name":"res","type":"tuple[]"}])
}
export function getFetchDODOV1PmmHelperGetPairDetailQueryOptions(chainId: number | undefined, pool: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchDODOV1PmmHelperGetPairDetail', chainId, pool],
    enabled: chainId !== undefined && chainId !== null && pool !== undefined && pool !== null, 
    queryFn: () => {
        return fetchDODOV1PmmHelperGetPairDetail(chainId as number,pool as string);
    }
  }
}