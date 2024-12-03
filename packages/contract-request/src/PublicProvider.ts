import { TransactionRequest } from 'ethers';

export type PublicProvider = {
  send?: (method: string, params: any) => Promise<string>;
  request?: (args: {
    method: string;
    params?: any;
    jsonrpc?: string;
    id?: number;
  }) => Promise<string>;
  call: (_tx: TransactionRequest | any) => Promise<string>;
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
  } else if (
    request.method === 'eth_call' &&
    Array.isArray(request.params) &&
    request.params?.[0]?.to
  ) {
    const [param] = request.params;
    return provider.call({
      to: param.to,
      data: param.data,
    });
  } else {
    console.log(request);
    throw new Error('No provider found to send the request');
  }
}
