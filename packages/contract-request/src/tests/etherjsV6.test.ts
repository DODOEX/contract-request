import { JsonRpcProvider, Network } from 'ethers';
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
import { callMock } from './utils/setup';

beforeEach(() => {
  callMock.mockClear();
});

const getProvider = (chainId: number) => {
  const url = rpc[chainId];
  if (!url) {
    throw new Error(`ChainId: ${chainId} is not url`);
  }
  return new JsonRpcProvider(url, chainId, {
    staticNetwork: new Network('', chainId),
  });
};

describe('etherjsV6', () => {
  const contractRequests = new ContractRequests({
    getProvider,
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

describe('etherjsV6-multicall', () => {
  const contractRequests = new ContractRequests({
    rpc,
    multiCallAddressList: multiCallAddressList,
    getProvider,
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
