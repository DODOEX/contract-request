import { ethers } from 'ethers';
import ContractRequests from '../ContractRequests';
import { multiCallAddressList, rpc } from './utils/constants';
import { callMock } from './utils/setup';
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

beforeEach(() => {
  callMock.mockClear();
});

describe('rpc', () => {
  const contractRequests = new ContractRequests({
    rpc,
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

describe('rpc-multicall', () => {
  const contractRequests = new ContractRequests({
    rpc,
    multiCallAddressList,
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
