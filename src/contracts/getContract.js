import Web3 from 'web3';

import { logError } from '../utils/log';
import { VALID_CHAIN } from '../config/constants';

let web3;
let web3Infura;

const infuraUrl =
  VALID_CHAIN === 1
    ? `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    : `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`;

try {
  web3 = new Web3(window?.web3?.currentProvider);
  web3Infura = new Web3(infuraUrl);
} catch (e) {
  logError('Connect Web3', e);
}

export const setWeb3Provider = (provider) => {
  web3 = new Web3(provider);
};
