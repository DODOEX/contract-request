export const callMock = jest.fn();
jest.mock('ethers', () => {
  const ethersActual = jest.requireActual('ethers');

  class JsonRpcProviderMock extends ethersActual.JsonRpcProvider {
    send = async (method: string, params: any) => {
      if (this.batchSend) {
        return this.batchSend(method, params);
      }
      return callMock(method, params);
    };
    batchSendRequest = callMock;
  }
  return {
    ...ethersActual,
    JsonRpcProvider: JsonRpcProviderMock,
    // JsonRpcProvider: jest.fn().mockImplementation(() => ({
    //   ...new ethersActual.JsonRpcProvider(),
    //   call: callMock,
    // })),
  };
});
