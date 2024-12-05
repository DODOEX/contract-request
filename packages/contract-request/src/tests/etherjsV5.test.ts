import { StaticJsonRpcProvider } from '@ethersproject/providers';
import ContractRequests from '../ContractRequests';
import { multiCallAddressList, rpc } from './utils/constants';
import {
  getDecimals,
  getSymbol,
  mockCallDecimals,
  mockCallDecimalsAndSymbols,
  mockCallDecimalsAndSymbolsMulticall,
  toHaveCallDecimals,
  toHaveCallDecimalsAndSymbolMulticall,
  toHaveCallSymbol,
} from './utils/helper';

const callMock = jest.fn();
jest.mock('@ethersproject/providers', () => {
  const providerActual = jest.requireActual('@ethersproject/providers');
  class JsonRpcProviderMock extends providerActual.StaticJsonRpcProvider {
    send = callMock;
  }
  return {
    ...providerActual,
    StaticJsonRpcProvider: JsonRpcProviderMock,
  };
});

beforeEach(() => {
  callMock.mockClear();
});

describe('etherjsV5', () => {
  const contractRequests = new ContractRequests({
    getProvider: (chainId) => {
      const url = rpc[chainId];
      if (!url) {
        throw new Error(`ChainId: ${chainId} is not url`);
      }
      return new StaticJsonRpcProvider(url, chainId);
    },
  });
  it('single request', async () => {
    mockCallDecimals(callMock);
    const decimals = await getDecimals(contractRequests);
    expect(decimals).toBe(6n);
    expect(callMock).toHaveBeenCalledTimes(1);
    toHaveCallDecimals(callMock);
  });

  it('twice request', async () => {
    mockCallDecimalsAndSymbols(callMock);
    const [decimals, symbol] = await Promise.all([
      getDecimals(contractRequests),
      getSymbol(contractRequests),
    ]);
    expect(decimals).toBe(6n);
    expect(symbol).toBe('USDC');
    expect(callMock).toHaveBeenCalledTimes(2);
    toHaveCallDecimals(callMock);
    toHaveCallSymbol(callMock);
  });
});

describe('etherjsV5-multicall', () => {
  const contractRequests = new ContractRequests({
    rpc,
    multiCallAddressList: multiCallAddressList,
    getProvider: (chainId) => {
      const url = rpc[chainId];
      if (!url) {
        throw new Error(`ChainId: ${chainId} is not url`);
      }
      return new StaticJsonRpcProvider(url, chainId);
    },
  });
  it('twice request', async () => {
    mockCallDecimalsAndSymbolsMulticall(callMock);
    const [decimals, symbol] = await Promise.all([
      getDecimals(contractRequests),
      getSymbol(contractRequests),
    ]);
    expect(decimals).toBe(6n);
    expect(symbol).toBe('USDC');
    expect(callMock).toHaveBeenCalledTimes(1);
    toHaveCallDecimalsAndSymbolMulticall(callMock);
  });
});
