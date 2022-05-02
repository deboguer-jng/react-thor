import axios from 'axios';
import { getContract } from './contract';
import tokenAbi from '../assets/abis/token.json';
import { getNumber } from './utils';

export const pools = [
  {
    pid: 0,
    multiplier: 100,
    name: 'THOR-AVAX JOE LP',
    symbol: 'THOR-AVAX LP',
    address: '0x95189f25b4609120F72783E883640216E92732DA',
    cta: (
      <a
        href="https://traderjoexyz.com/pool/0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79/AVAX"
        target={'_blank'}
        rel={'noreferrer nofollow'}
      >
        Add THOR-AVAX liquidity
      </a>
    ),
    getPrice: async (ethereum) => {
      async function getTotalSupply() {
        try {
          const contract = getContract(tokenAbi, '0x95189f25b4609120F72783E883640216E92732DA', ethereum);
          return contract.methods.totalSupply().call();
        } catch (e) {
          console.log(e);
          return 0;
        }
      }

      const totalSupply = await getTotalSupply();

      return axios
        .get(
          `https://openapi.debank.com/v1/user/chain_balance?id=0x95189f25b4609120F72783E883640216E92732DA&chain_id=avax`,
        )
        .then((response) => {
          return response.data?.['usd_value'] / Number(getNumber(totalSupply));
        });
    },
    // logos: [thor, avax],
  },
  {
    pid: 1,
    multiplier: 10,
    name: 'THOR',
    symbol: 'THOR',
    address: '0x8F47416CaE600bccF9530E9F3aeaA06bdD1Caa79',
    cta: (
      <a
        href="https://traderjoexyz.com/trade?outputCurrency=0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79"
        target={'_blank'}
        rel={'noreferrer nofollow'}
      >
        Buy THOR
      </a>
    ),
    // logos: [thor],
    getPrice: async () => {
      return axios
        .get('https://api.coingecko.com/api/v3/simple/price?ids=thor&vs_currencies=usd')
        .then((r) => r.data.thor.usd);
    },
  },
];
