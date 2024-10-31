import { ContractRequests } from '@dodoex/contract-request';
import { CONTRACT_CONFIG as ETH_CONTRACT_CONFIG } from './contract-config/eth-config';
import { CONTRACT_CONFIG as ARB_CONTRACT_CONFIG } from './contract-config/arb-config';

export const contractRequests = new ContractRequests({
  rpc: {
    1: 'https://rpc.ankr.com/eth',
    42161: 'https://arb1.arbitrum.io/rpc',
  },
  multiCallAddressList: {
    1: ETH_CONTRACT_CONFIG.multiCall,
    42161: ARB_CONTRACT_CONFIG.multiCall,
  },
});
