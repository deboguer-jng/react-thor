import axios from "axios";

export async function fetchHistoricalData(symbol, hours) {
  return axios
    .get(
      `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=${hours}&api_key=${process.env.API_KEY}`
    )
    .then((res) => res.data);
}

export async function fetchSingleSymbolPrice(symbol) {
  return axios
    .get(
      `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${process.env.API_KEY}`
    )
    .then((res) => res.data);
}
