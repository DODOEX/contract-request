import { defaultAbiCoder, concat, hexlify } from '@dodoex/contract-request';

import { contractRequests } from '../contractRequests';



/**
 * fetch isClaimed
 * @param {number} chainId - number
 * @param {string} __to - string
 * @param {number} index - uint256
 * @returns {boolean} __output0 - bool
 */
export function fetchMerkleDistributorIsClaimed(chainId: number, __to: string, index: number): Promise<boolean> {
  const __encodeData = defaultAbiCoder.encode(["uint256"], [index]);
  const __data = hexlify(concat(['0x9e34070f', __encodeData]));
  return contractRequests.batchCall<boolean>(chainId, __to, __data, [{"internalType":"bool","name":"","type":"bool"}])
}
export function getFetchMerkleDistributorIsClaimedQueryOptions(chainId: number | undefined, __to: string | undefined, index: number | undefined) {
  return {
    queryKey: ['contract-request', 'fetchMerkleDistributorIsClaimed', chainId, __to, index],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null && index !== undefined && index !== null, 
    queryFn: () => {
        return fetchMerkleDistributorIsClaimed(chainId as number,__to as string,index as number);
    }
  }
}

/**
 * fetch merkleRoot
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - bytes32
 */
export function fetchMerkleDistributorMerkleRoot(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0x2eb4a7ab', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"bytes32","name":"","type":"bytes32"}])
}
export function getFetchMerkleDistributorMerkleRootQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchMerkleDistributorMerkleRoot', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchMerkleDistributorMerkleRoot(chainId as number,__to as string);
    }
  }
}

/**
 * fetch token
 * @param {number} chainId - number
 * @param {string} __to - string
 * @returns {string} __output0 - address
 */
export function fetchMerkleDistributorToken(chainId: number, __to: string): Promise<string> {
  const __encodeData = defaultAbiCoder.encode([], []);
  const __data = hexlify(concat(['0xfc0c546a', __encodeData]));
  return contractRequests.batchCall<string>(chainId, __to, __data, [{"internalType":"address","name":"","type":"address"}])
}
export function getFetchMerkleDistributorTokenQueryOptions(chainId: number | undefined, __to: string | undefined) {
  return {
    queryKey: ['contract-request', 'fetchMerkleDistributorToken', chainId, __to],
    enabled: chainId !== undefined && chainId !== null && __to !== undefined && __to !== null, 
    queryFn: () => {
        return fetchMerkleDistributorToken(chainId as number,__to as string);
    }
  }
}

/**
 * encode claim
 * @param {string | number} index - uint256
 * @param {string} account - address
 * @param {string | number} amount - uint256
 * @param {Array<string>} merkleProof - bytes32[]
 * @returns {string} encode data
 */
export function encodeMerkleDistributorClaim(index: string | number, account: string, amount: string | number, merkleProof: Array<string>) {
  const __encodeData = defaultAbiCoder.encode(["uint256","address","uint256","bytes32[]"], [index,account,amount,merkleProof]);
  return hexlify(concat(['0x2e7ba6ef', __encodeData]));
}