import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getContract } from '../utils/contract';
import asgardAbi from '../assets/abis/asgard.json';
import tokenAbi from '../assets/abis/token.json';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

export const masterChef = '0xd003A09719D45DB83C07872e18Bc3e1a69B4824a';
export const BIG_TEN = new BigNumber(10);
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);

export const useAsgardContract = () => {
  const web3context = useSelector((state) => state.web3.web3context);
  const provider = web3context?.library;

  return [provider, useMemo(() => getContract(asgardAbi, masterChef, provider), [provider])];
};

const useTokenContract = (address) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const provider = web3context?.library;

  return [provider, useMemo(() => getContract(tokenAbi, address, provider), [address, provider])];
};

export const useGetAllowance = (address) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [provider, contract] = useTokenContract(address);

  async function getAllowance() {
    try {
      if (!web3context) return 0;
      return contract.methods.allowance(web3context?.account, masterChef).call();
    } catch (e) {
      console.log(e);
    }
  }

  return useQuery(['getFarmAllowance', Boolean(provider), address], getAllowance, {
    enabled: Boolean(provider && web3context?.account),
    refetchInterval: (data) => {
      return new BigNumber(data).isGreaterThan(0) ? false : 1000;
    },
  });
};

export const useApprove = (address) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [provider, contract] = useTokenContract(address);
  const approve = async (address) => {
    if (!provider) return;

    return contract.methods.approve(address, ethers.constants.MaxUint256).send({ from: web3context?.account });
  };

  const { isLoading, mutateAsync } = useMutation(() => approve(masterChef));

  return { onApprove: mutateAsync, isApproving: isLoading };
};

export const useGetUserInfo = (pid) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [provider, contract] = useAsgardContract();

  async function getUserInfo() {
    try {
      return contract.methods.userInfo(pid, web3context?.account).call();
    } catch (e) {
      console.log(e);
    }
  }

  return useQuery(['getUserInfo', pid, Boolean(provider), web3context?.account], getUserInfo, {
    enabled: Boolean(provider && web3context?.account),
    refetchInterval: 2000,
  });
};

export const useGetBalance = (address) => {
  const [provider, contract] = useTokenContract(address);
  const web3context = useSelector((state) => state.web3.web3context);

  async function getBalanceOf() {
    try {
      if (!web3context) return 0;
      return contract.methods.balanceOf(web3context?.account).call();
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  return useQuery(['farmBalanceOf', Boolean(provider), address], getBalanceOf, {
    refetchInterval: 2000,
    enabled: Boolean(provider && web3context?.account),
  });
};

export const useDeposit = (pid) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [provider, contract] = useAsgardContract();

  const deposit = async (contract, pid, amount, account) => {
    if (!provider) return;

    return contract.methods.deposit(pid, amount).send({ from: account });
  };

  const { isLoading, mutateAsync } = useMutation(([account, amount]) => deposit(contract, pid, amount, account));

  const onDeposit = useCallback(
    async (amount) => {
      if (!web3context?.account) return;
      return mutateAsync([web3context?.account, amount]);
    },
    [web3context, mutateAsync],
  );

  return { onDeposit, isDepositing: isLoading };
};

export const useWithdraw = (pid) => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [provider, contract] = useAsgardContract();

  const withdraw = async (contract, pid, amount, account) => {
    if (!provider) return;

    return contract.methods
      .withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toFixed())
      .send({ from: account });
  };

  const { isLoading, mutateAsync } = useMutation(([account, amount]) => withdraw(contract, pid, amount, account));

  const onWithdraw = useCallback(
    async (amount) => {
      if (!web3context?.account) return;
      return mutateAsync([web3context?.account, amount]);
    },
    [web3context, mutateAsync],
  );

  return { onWithdraw, isWithdrawing: isLoading };
};

export const useGetTotalSupply = (address) => {
  const [provider, contract] = useTokenContract(address);
  const web3context = useSelector((state) => state.web3.web3context);

  async function totalSupply() {
    try {
      return contract.methods.totalSupply().call();
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  return useQuery(['totalSupply', Boolean(provider), address], totalSupply, {
    refetchInterval: 2000,
    enabled: Boolean(provider && web3context?.account),
  });
};

export const useGetTotalStaked = (address) => {
  const [provider, contract] = useTokenContract(address);
  const web3context = useSelector((state) => state.web3.web3context);

  async function getBalanceOf() {
    try {
      return contract.methods.balanceOf(masterChef).call();
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  return useQuery(['farmBalanceStakedOf', Boolean(provider), address], getBalanceOf, {
    refetchInterval: 2000,
    enabled: Boolean(provider && web3context?.account),
  });
};
