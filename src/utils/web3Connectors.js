import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { isMobile } from 'react-device-detect';

import coinbaseLogo from '../assets/wallets/coinbase.png';
import fortmaticLogo from '../assets/wallets/fortmatic.png';
import injectedLogo from '../assets/wallets/injected.png';
import metamaskLogo from '../assets/wallets/metamask.png';
import portisLogo from '../assets/wallets/portis.png';
import walletconnectLogo from '../assets/wallets/walletconnect.png';
import { VALID_CHAIN } from '../config/constants';

const REACT_APP_NETWORK_URL1 = `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
const REACT_APP_NETWORK_URL4 = `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;
const REACT_APP_NETWORK_URL43114 = 'https://api.avax.network/ext/bc/C/rpc';
const REACT_APP_NETWORK_URL43113 = 'https://api.avax-test.network/ext/bc/C/rpc';
const POLLING_INTERVAL = 12000;

const RPC_URLS = {
  1: REACT_APP_NETWORK_URL1,
  4: REACT_APP_NETWORK_URL4,
  43113: REACT_APP_NETWORK_URL43113,
  43114: REACT_APP_NETWORK_URL43114,
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 43113, 43114],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1], 4: RPC_URLS[4], 43113: RPC_URLS[43113], 43114: RPC_URLS[43114] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[VALID_CHAIN],
  appName: 'Dropzero',
});

const fortmaticKey =
  process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION'
    ? process.env.REACT_APP_PRODUCTION_FORTMATIC_KEY
    : process.env.REACT_APP_DEVELOPMENT_FORTMATIC_KEY;

const portisKey =
  process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION'
    ? process.env.REACT_APP_PRODUCTION_PORTIS_ID
    : process.env.REACT_APP_DEVELOPMENT_PORTIS_ID;

export const fortmatic = new FortmaticConnector({
  apiKey: fortmaticKey,
  chainId: VALID_CHAIN,
});

export const portis = new PortisConnector({
  dAppId: portisKey,
  networks: [VALID_CHAIN],
});

export const injectedConnectorList = [
  {
    name: 'Metamask',
    connector: injected,
    connectorType: InjectedConnector,
    logo: metamaskLogo,
  },
  {
    name: 'Injected',
    connector: injected,
    connectorType: InjectedConnector,
    logo: injectedLogo,
  },
];

export const desktopWalletList = [
  {
    name: 'Metamask',
    connector: injected,
    connectorType: InjectedConnector,
    logo: metamaskLogo,
  },
  {
    name: 'WalletConnect',
    connector: walletconnect,
    connectorType: WalletConnectConnector,
    logo: walletconnectLogo,
  },
];

export const mobileWalletList = [
  {
    name: 'WalletConnect',
    connector: walletconnect,
    connectorType: WalletConnectConnector,
    logo: walletconnectLogo,
  },

  {
    name: 'Fortmatic',
    connector: fortmatic,
    connectorType: FortmaticConnector,
    logo: fortmaticLogo,
  },
  {
    name: 'Portis',
    connector: portis,
    connectorType: PortisConnector,
    logo: portisLogo,
  },
];

export const walletList = isMobile
  ? window?.ethereum
    ? [window?.ethereum?.isMetaMask ? injectedConnectorList[0] : injectedConnectorList[1]]
    : mobileWalletList
  : desktopWalletList;
