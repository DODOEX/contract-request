export interface ContractConfigDataI {
  /** DODOBscToken */
  DODO_TOKEN: string;

  /** ERC20Helper */
  ERC20_HELPER: string;
  /** DODOCalleeHelper */
  CALLEE_HELPER: string;

  /** DODOApprove */
  DODO_APPROVE: string;
  /** DODOApproveProxy */
  DODO_APPROVE_PROXY?: string;
  /** DODOV2Proxy02 */
  DODO_PROXY: string;
  /** DODODspProxy */
  DODO_DSP_PROXY: string;
  /** DODODppProxy */
  DODO_DPP_PROXY: string;
  /** DODOV1Proxy */
  DODO_V1_PAIR_PROXY?: string;
  /** ERC20V3Factory */
  ERC20V3_FACTORY: string;

  /**
   * CrowdPooling
   */
  /** DODOCpProxy */
  DODO_CP_PROXY_V2: string;
  /** FeeRateDIP3Impl */
  FEE_RATE_IMPL: string;

  /** DODOMineV3Proxy */
  DODO_MINEV3_PROXY: string;

  /** DODOStarterProxy */
  DODO_STARTER_PROXY?: string;

  /** DVMFactory */
  DVM_FACTORY: string;
  /** DSPFactory */
  DSP_FACTORY: string;

  /** Multicall */
  MULTI_CALL: string;
  /** DODOV1PmmHelper */
  ROUTE_V1_DATA_FETCH: string;
  /** DODOV2RouteHelper */
  ROUTE_V2_DATA_FETCH: string;

  /** vDODOToken */
  vDODO?: string;
  vDODO_DODO_TEAM?: string;

  // DODONFT
  ROUTE_NFT_DATA_FETCH?: string;
  DODO_NFT_PROXY?: string;
  BUYOUT_MODEL?: string;
  DODO_NFT_REGISTER?: string;
  DODO_NFT_ERC721?: string;
  DODO_NFT_ERC1155?: string;
  DODO_NFTPOOL_PROXY?: string;
  DODO_NFT_APPROVE?: string;
  DODO_DROPS_PROXY?: string;

  /**
   * D3MM
   */
  /** D3Proxy */
  D3Proxy?: string;
  /** D3Vault */
  D3Vault?: string;

  /** MarginTrading */
  MARGIN_TRADING?: string;
  /** MarginTradingFactory */
  MARGIN_TRADING_FACTORY?: string;
  /** InitializableImmutableAdminUpgradeabilityProxy */
  AAVE_LENDING_POOL?: string;
  /** AaveProtocolDataProvider */
  AAVE_PROTOCOL_DATA_PROVIDER?: string;
  /** LendingPoolAddressesProvider */
  AAVE_LENDING_POOL_ADDRESSES_PROVIDER?: string;

  /** Account */
  /**
   * _MAINTAINER_
   * https://github.com/DODOEX/contractV2/blob/main/config/eth-config.js#L71
   */
  DEFAULT_MAINTAINER?: string | string[];
}
