import Web3 from 'web3';

export const getContract = (abi, address, provider) => {
  const _web3 = new Web3(provider);

  return new _web3.eth.Contract(abi, address);
};
