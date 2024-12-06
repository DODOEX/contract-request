import { CallParameters, createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import ContractRequests from '../ContractRequests';
import { multiCallAddressList, rpc } from './utils/constants';
import {
  callDecimalsAndSymbolsMulticallParams,
  callDecimalsParams,
  callSymbolParams,
  getDecimals,
  getSymbol,
  mockCallDecimals,
  mockCallDecimalsAndSymbols,
  mockCallDecimalsAndSymbolsMulticall,
} from './utils/helper';
import { Transaction } from 'ethers';

const callMock = jest.fn();
jest.mock('viem', () => {
  const viemActual = jest.requireActual('viem');
  const createPublicClient = jest.fn(() => ({
    call: callMock,
  }));
  return {
    ...viemActual,
    createPublicClient,
  };
});
const getProvider = () => {
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  return {
    call: async (tx: Transaction) => {
      const result = await publicClient.call({
        to: tx.to,
        data: tx.data,
        account: tx.from || undefined,
      } as CallParameters);
      if ((publicClient.call as any)._isMockFunction) {
        return result as unknown as string;
      }
      return result.data ?? '';
    },
  };
};

beforeEach(() => {
  callMock.mockClear();
});
describe('viem', () => {
  const contractRequests = new ContractRequests({
    getProvider,
  });
  it('single request', async () => {
    mockCallDecimals(callMock);
    const decimals = await getDecimals(contractRequests);
    expect(decimals).toBe(6n);
    expect(callMock).toHaveBeenCalledTimes(1);
    expect(callMock).toHaveBeenCalledWith({
      ...callDecimalsParams,
      to: getAddress(callDecimalsParams.to),
      account: undefined,
    });
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
    expect(callMock).toHaveBeenCalledWith({
      ...callDecimalsParams,
      to: getAddress(callDecimalsParams.to),
      account: undefined,
    });
    expect(callMock).toHaveBeenCalledWith({
      ...callSymbolParams,
      to: getAddress(callSymbolParams.to),
      account: undefined,
    });
  });
});

describe('viem-multicall', () => {
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
    expect(callMock).toHaveBeenCalledWith({
      ...callDecimalsAndSymbolsMulticallParams,
      account: undefined,
    });
  });
});
