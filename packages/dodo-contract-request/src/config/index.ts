import { default as arbitrum } from './arbitrum'
import { default as arbsepolia } from './arbsepolia'
import { default as aurora } from './aurora'
import { default as avalanche } from './avalanche'
import { default as base } from './base'
import { default as berachainTestnet } from './berachain-testnet'
import { default as berachain } from './berachain'
import { default as birdlayer } from './birdlayer'
import { default as bitlayer } from './bitlayer'
import { default as bsc } from './bsc'
import { default as conflux } from './conflux'
import { default as ethereum } from './ethereum'
import { default as linea } from './linea'
import { default as manta } from './manta'
import { default as mantle } from './mantle'
import { default as monadTestnet } from './monad-testnet'
import { default as morph } from './morph'
import { default as neox } from './neox'
import { default as optimism } from './optimism'
import { default as plumeTestnet } from './plume-testnet'
import { default as plume } from './plume'
import { default as polygon } from './polygon'
import { default as riseTestnet } from './rise-testnet'
import { default as scroll } from './scroll'
import { default as sepolia } from './sepolia'
import { default as tacTestnet } from './tac-testnet'
import { default as taiko } from './taiko'
import { default as xLayer } from './x-layer'
import { default as zeroMainnet } from './zero-mainnet'
import { default as zircuitMainnet } from './zircuit-mainnet'

export function getConfig(chainId: number) {
    switch (chainId) {
      case 1:
          return ethereum;
        case 10:
          return optimism;
        case 56:
          return bsc;
        case 137:
          return polygon;
        case 196:
          return xLayer;
        case 1030:
          return conflux;
        case 2390:
          return tacTestnet;
        case 2818:
          return morph;
        case 5000:
          return mantle;
        case 8453:
          return base;
        case 10143:
          return monadTestnet;
        case 10169:
          return manta;
        case 42161:
          return arbitrum;
        case 43114:
          return avalanche;
        case 47763:
          return neox;
        case 48900:
          return zircuitMainnet;
        case 53456:
          return birdlayer;
        case 59144:
          return linea;
        case 80084:
          return berachainTestnet;
        case 80094:
          return berachain;
        case 98864:
          return plumeTestnet;
        case 98866:
          return plume;
        case 167000:
          return taiko;
        case 200901:
          return bitlayer;
        case 421614:
          return arbsepolia;
        case 534352:
          return scroll;
        case 543210:
          return zeroMainnet;
        case 11155111:
          return sepolia;
        case 11155931:
          return riseTestnet;
        case 1313161554:
          return aurora;
        
      default:
        return null;
    }
}

export { default as arbitrum } from './arbitrum'
export { default as arbsepolia } from './arbsepolia'
export { default as aurora } from './aurora'
export { default as avalanche } from './avalanche'
export { default as base } from './base'
export { default as berachainTestnet } from './berachain-testnet'
export { default as berachain } from './berachain'
export { default as birdlayer } from './birdlayer'
export { default as bitlayer } from './bitlayer'
export { default as bsc } from './bsc'
export { default as conflux } from './conflux'
export { default as ethereum } from './ethereum'
export { default as linea } from './linea'
export { default as manta } from './manta'
export { default as mantle } from './mantle'
export { default as monadTestnet } from './monad-testnet'
export { default as morph } from './morph'
export { default as neox } from './neox'
export { default as optimism } from './optimism'
export { default as plumeTestnet } from './plume-testnet'
export { default as plume } from './plume'
export { default as polygon } from './polygon'
export { default as riseTestnet } from './rise-testnet'
export { default as scroll } from './scroll'
export { default as sepolia } from './sepolia'
export { default as tacTestnet } from './tac-testnet'
export { default as taiko } from './taiko'
export { default as xLayer } from './x-layer'
export { default as zeroMainnet } from './zero-mainnet'
export { default as zircuitMainnet } from './zircuit-mainnet'

export const multiCallAddressList = {"1":"0x0Cd61B78fF75701eA23fCaec5a22D464F7E1Dc1e","10":"0x9b5f2020a3121684bed861e7b5C64D2AF3f33841","56":"0xdcd53616CFf1Aec6342d8C813Ee393c1eC7D7807","137":"0xBd2456637cb7621984e1B7E60189a9856aA60813","196":"0xdf45fe87c36616a5ffdfe05d54a63f29afe91d9f","1030":"0x44023441f2bad375b6b5c6354b03c3e9ad01e269","2390":"0x1bE661D780631d8CAB4DEafB71CFC3dD071ae3f2","2818":"0x388371233439cF57bB8C9f2e4835954841cfCb15","5000":"0x65934e2f228Fde069A6255F46E6A15Bc9DE38545","8453":"0xee7210fc88E1FFdB6aFb305E8F68b4f1d20FEdAd","10143":"0x0376076C9D1c7DCb899DC5Db96Cec0492Bd375b7","10169":"0x6D3bd005A8a75d6522C9cFE7d309BB1Cf9650e03","42161":"0x3b49d23C0322ecD24D01c7b35f26a57Ec7cF7901","43114":"0xbcd2FDC3B884Cf0dfD932f55Ec2Fe1fB7e8c62Da","47763":"0x388371233439cF57bB8C9f2e4835954841cfCb15","48900":"0xDF45Fe87c36616a5fFDFe05D54A63f29AfE91d9f","53456":"0xB95eD7E958E196688984951F41Ac2888F4B10aB9","59144":"0x1172035A744Ea18161497e94f0bbCe244d51de9F","80084":"0x701855ae3a8b2A989DC8ACCf02Dd2b96f8B21671","80094":"0xEf1F9B93c4F4E31260b316DC5740adcE54209479","98864":"0x701855ae3a8b2A989DC8ACCf02Dd2b96f8B21671","98866":"0xB95eD7E958E196688984951F41Ac2888F4B10aB9","167000":"0x388371233439cF57bB8C9f2e4835954841cfCb15","200901":"0xd5cf3f9dfcfc1c3f8b476d881f2f7e79142e319b","421614":"0xB969a1B4069c12f3F3f5450F4240290EF993BA76","534352":"0x6433407a29706Bbdd43b36cd402a53A174f066a1","543210":"0x12Bea73C7117feC468Ae1Dd97923d0b3E41d6928","11155111":"0x1fC8EC204549C865a17b4059A57decA66A4Bd4cC","11155931":"0x0376076C9D1c7DCb899DC5Db96Cec0492Bd375b7","1313161554":"0x5a0C840a7089aa222c4458b3BE0947fe5a5006DE"}
