import { ContractRequests } from '@dodoex/contract-request';
import { StaticJsonRpcProvider } from '@ethersproject/providers';

export const contractRequests = new ContractRequests({
  // rpc: {
  //   1: 'https://rpc.ankr.com/eth',
  //   42161: 'https://arb1.arbitrum.io/rpc',
  // },
  getProvider: () => {
    return new StaticJsonRpcProvider('https://arb1.arbitrum.io/rpc');
  },
});
