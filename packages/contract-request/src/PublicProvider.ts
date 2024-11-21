import { TransactionRequest } from 'ethers';

export type PublicProvider = {
  send?: (method: string, params: any) => Promise<string>;
  request?: (args: {
    method: string;
    params?: any;
    jsonrpc?: string;
    id?: number;
  }) => Promise<string>;
  call: (_tx: TransactionRequest) => Promise<string>;
};

export function requestPublicProvider(
  provider: PublicProvider,
  request: {
    method: string;
    params: Array<any> | Record<string, any>;
    jsonrpc?: string;
    id?: number;
  },
) {
  if (provider.send) {
    return provider.send(request.method, request.params);
  } else if (provider.request) {
    return provider.request(request);
  } else {
    throw new Error('No provider found to send the request');
  }
}
