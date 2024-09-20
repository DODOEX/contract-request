import { fetchErc20BalanceOf } from './contract/erc20';

async function test() {
  const balance = await fetchErc20BalanceOf(
    42161,
    '0x54393f2288b4F3da2ac247A48d48eFF3Ac52F6d6',
  );
  console.log(balance);
}

test();

export * from './contract/erc20';
export * from './contract/multiCall';
export * from './contract/erc20Helper';
