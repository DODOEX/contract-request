import { ContractRequests } from '@dodoex/contract-request';
import { multiCallAddressList } from './config';

export let contractRequests = new ContractRequests({
  multiCallAddressList,
});

export function setContractRequests(contractRequestsProps: ContractRequests) {
  contractRequests = contractRequestsProps;
}
