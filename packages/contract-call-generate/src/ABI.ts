/**
 * Powered by Etherscan.io APIs
 */

import type { JsonFragment } from '@dodoex/contract-request';
import { fetch } from './utils/fetch';

export const supportFetchABIChainIds = [1, 5, 11155111, 80084];

/**
 * Fetches contract ABI and bytecode from Etherscan.io
 */
export async function fetchABI(
  apikey: string,
  address: string,
  chainId: number,
): Promise<JsonFragment[]> {
  console.log('fetchABI begin', address, chainId);
  let apiUrl = 'https://api.etherscan.io/api';
  switch (chainId) {
    case 1:
      apiUrl = 'https://api.etherscan.io/api';
      break;
    case 5:
      apiUrl = 'https://api-goerli.etherscan.io/api';
      break;
    case 11155111:
      apiUrl = 'https://api-sepolia.etherscan.io/api';
      break;
    case 80084:
      apiUrl =
        'https://api.routescan.io/v2/network/testnet/evm/80084/etherscan/api';
      break;

    default:
      throw new Error(`Unsupported chainId: ${chainId}`);
  }

  const sourceCodeResponse = await fetch(
    `${apiUrl}?apikey=${apikey}&module=contract&action=getsourcecode&address=${address}`,
  );
  const sourceCodeData = (await sourceCodeResponse.json()) as {
    status: string;
    message: string;
    result: Array<{
      ABI: string;
      Proxy: string;
      Implementation: string;
      // ..
    }>;
  };
  let proxyContract = '';
  // get ABI
  if (sourceCodeData.status === '1') {
    const sourceCode = sourceCodeData.result?.[0];
    if (sourceCode.Proxy !== '1') {
      console.log('fetchABI end', address, chainId);
      console.log('-------------------------------------------------');
      try {
        const result = JSON.parse(sourceCode.ABI);
        return result;
      } catch (error) {
        console.log({
          chainId,
          address,
        });
        throw error;
      }
    }
    proxyContract = sourceCode.Implementation;
  } else {
    throw new Error(sourceCodeData.message);
  }

  // get proxy ABI
  if (!proxyContract) {
    throw new Error('No proxy contract found');
  }
  console.log('fetchABI proxy', address, chainId, proxyContract);
  const url = `${apiUrl}?apikey=${apikey}&module=contract&action=getabi&address=${proxyContract}`;
  const response = await fetch(url);
  const data = (await response.json()) as {
    status: string;
    message: string;
    result: string;
  };
  if (data.status === '1') {
    console.log('fetchABI end', address, chainId, proxyContract);
    console.log('-------------------------------------------------');
    return JSON.parse(data.result);
  } else {
    throw new Error(data.message);
  }
}
