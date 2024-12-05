import ContractRequests from '../../ContractRequests';

export function getDecimals(contractRequests: ContractRequests) {
  const getDecimalsData = '0x313ce567';
  return contractRequests.batchCall(
    1,
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    getDecimalsData,
    [{ name: '', type: 'uint8' }],
  );
}
export function getSymbol(contractRequests: ContractRequests) {
  const getSymbolData = '0x95d89b41';
  return contractRequests.batchCall(
    1,
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    getSymbolData,
    [{ name: '', type: 'string' }],
  );
}

/**
 * mock returns to get decimals
 */
export function mockCallDecimals(callMock: jest.Mock) {
  callMock.mockImplementationOnce(
    () => '0x0000000000000000000000000000000000000000000000000000000000000006',
  );
}
/**
 * mock returns to get decimals and symbols
 */
export function mockCallDecimalsAndSymbols(callMock: jest.Mock) {
  callMock.mockImplementationOnce(
    () => '0x0000000000000000000000000000000000000000000000000000000000000006',
  );
  callMock.mockImplementationOnce(
    () =>
      '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000045553444300000000000000000000000000000000000000000000000000000000',
  );
}
export function mockCallDecimalsAndSymbolsMulticall(callMock: jest.Mock) {
  callMock.mockImplementationOnce(
    () =>
      '0x00000000000000000000000000000000000000000000000000000000014554c000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000045553444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001',
  );
}
export function mockDecimalsAndSymbolBatch(mock: jest.Mock) {
  mock.mockImplementationOnce(() => [
    {
      jsonrpc: '2.0',
      id: 3,
      result:
        '0x0000000000000000000000000000000000000000000000000000000000000006',
    },
    {
      jsonrpc: '2.0',
      id: 4,
      result:
        '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000045553444300000000000000000000000000000000000000000000000000000000',
    },
  ]);
}
/**
 * test curl
 * curl --location --request POST 'https://rpc.mainnet.near.org' \
--header 'Content-Type: application/json' \
--data-raw '[
  {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_chainId",
    "id": 2
  }
]'
 */
export function mockDecimalsAndSymbolBatchError(mock: jest.Mock) {
  mock.mockImplementationOnce(() => ({
    jsonrpc: '2.0',
    error: {
      name: 'REQUEST_VALIDATION_ERROR',
      cause: {
        name: 'PARSE_ERROR',
        info: {
          error_message: 'JSON RPC Request format was expected',
        },
      },
      code: -32700,
      message: 'Parse error',
      data: 'JSON RPC Request format was expected',
    },
    id: null,
  }));
}

/**
 * expect params
 */

export const callDecimalsParams = {
  to: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  data: '0x313ce567',
};
export const callSymbolParams = {
  to: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  data: '0x95d89b41',
};
export const callDecimalsAndSymbolsMulticallParams = {
  to: '0x0Cd61B78fF75701eA23fCaec5a22D464F7E1Dc1e',
  data: '0x252dba4200000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004313ce56700000000000000000000000000000000000000000000000000000000000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000495d89b4100000000000000000000000000000000000000000000000000000000',
};
export const callDecimalsAndSymbolsBatchParams = [
  {
    method: 'eth_call',
    params: [callDecimalsParams, 'latest'],
    id: 3,
    jsonrpc: '2.0',
  },
  {
    method: 'eth_call',
    params: [callSymbolParams, 'latest'],
    id: 4,
    jsonrpc: '2.0',
  },
];
export function toHaveCallDecimals(callMock: jest.Mock) {
  expect(callMock).toHaveBeenCalledWith('eth_call', [
    callDecimalsParams,
    'latest',
  ]);
}
export function toHaveCallSymbol(callMock: jest.Mock) {
  expect(callMock).toHaveBeenCalledWith('eth_call', [
    callSymbolParams,
    'latest',
  ]);
}
export function toHaveCallDecimalsAndSymbolMulticall(callMock: jest.Mock) {
  expect(callMock).toHaveBeenCalledWith('eth_call', [
    callDecimalsAndSymbolsMulticallParams,
    'latest',
  ]);
}
