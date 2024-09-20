import { ContractRequests } from '@dodoex/contract-request';
import { ContractCallGenerate } from '@dodoex/contract-call-generate';
import * as ethConfig from '../contract-config/eth-config';
import * as arbConfig from '../contract-config/arb-config';
import path from 'path';

async function main() {
  const contractCallGenerate = new ContractCallGenerate({
    etherscanAPIkey: 'X434ZYE346F839P6Q4Q57BMC2V3FYME8K3',
    contractAddressData: {
      1: ethConfig.CONTRACT_CONFIG,
      42161: arbConfig.CONTRACT_CONFIG,
    },
    contractRequests: new ContractRequests(),
    fetchSecondLimit: 5,
  });
  contractCallGenerate.generate(path.join(path.resolve(), 'src/contract'));
}

main();
