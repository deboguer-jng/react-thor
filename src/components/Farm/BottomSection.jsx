import React, { useEffect, useState } from 'react';

import { Container, Box, Typography, Button, Grid, Select, MenuItem, FormControl } from '@mui/material';
import OutlinedButton from '../CustomButton/OutlinedButton';

import imgThor from '../../assets/images/LeftBar/Bitmap.png';

import { IoIosArrowDown } from 'react-icons/io';

import styles from './style.module.css';
import {
  DEFAULT_TOKEN_DECIMAL,
  useApprove,
  useDeposit,
  useGetAllowance,
  useGetBalance,
  useGetTotalStaked,
  useGetTotalSupply,
  useGetUserInfo,
  useWithdraw,
} from '../../hooks/farm';
import { pools } from '../../utils/farm';
import BigNumber from 'bignumber.js';
import { getNumber } from '../../utils/utils';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BottomSection = () => {
  const web3context = useSelector((state) => state.web3.web3context);
  const [farmType, setFarmType] = useState('0');
  const [amount, setAmount] = useState(new BigNumber(0));
  const [poolConfig, setPoolConfig] = useState(pools[0]);
  const [active, setActive] = useState(1);

  const { onApprove, isApproving } = useApprove(poolConfig.address);
  const { onDeposit, isDepositing } = useDeposit(poolConfig.pid);
  const { onWithdraw, isWithdrawing } = useWithdraw(poolConfig.pid);

  const allowance = useGetAllowance(poolConfig.address);
  const totalSupply = useGetTotalSupply(poolConfig.address);
  const totalStaked = useGetTotalStaked(poolConfig.address);
  const userInfo = useGetUserInfo(poolConfig.pid);
  const balance = useGetBalance(poolConfig.address);

  const isAllowed = allowance.data && new BigNumber(allowance.data).isGreaterThan(0);
  const totalAllocation = pools.map((p) => p.multiplier).reduce((a, b) => a + b, 0);

  const lpPrice = useQuery(
    ['lpPrice', poolConfig.pid, poolConfig.symbol],
    () => {
      return poolConfig.getPrice(web3context.library);
    },
    {
      refetchInterval: 60000 * 10,
      enabled: Boolean(totalSupply.data && web3context.library),
    },
  );

  const thorPrice = useQuery(
    'thorPrice',
    () => {
      return axios
        .get(
          'https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=0x8F47416CaE600bccF9530E9F3aeaA06bdD1Caa79&vs_currencies=USD',
        )
        .then((response) => response.data?.['0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79']?.['usd']);
    },
    {
      refetchInterval: 60000 * 10,
    },
  );

  const stakedRatio =
    thorPrice &&
    totalStaked.data &&
    lpPrice.data &&
    (770 * (poolConfig.multiplier / totalAllocation) * thorPrice) /
      (Number(getNumber(totalStaked.data)) * lpPrice.data);
  const APY = stakedRatio ? 365 * stakedRatio * 100 : 0;

  const handleFarmTypeChange = (e) => {
    setPoolConfig(pools[parseInt(e.target.value)]);
    setFarmType(e.target.value);
  };

  const handleTransaction = () => {
    if (!isAllowed) {
      onApprove();
    } else {
      if (active === 1) {
        onDeposit(new BigNumber(amount.toString()).times(DEFAULT_TOKEN_DECIMAL).toFixed());
      } else {
        onWithdraw(amount?.toString());
      }
    }
  };

  const setMax = () => {
    if (active === 1) {
      setAmount(new BigNumber(getNumber(balance.data, 18)));
    } else {
      setAmount(new BigNumber(getNumber(userInfo.data.amount, 18)));
    }
  };

  return (
    <>
      <DesktopSection
        isAllowed={isAllowed}
        userInfo={userInfo}
        balance={balance}
        lpPrice={lpPrice}
        active={active}
        amount={amount}
        farmType={farmType}
        APY={APY}
        handleFarmTypeChange={handleFarmTypeChange}
        handleTransaction={handleTransaction}
        setActive={setActive}
        setAmount={setAmount}
        setMax={setMax}
      />
      <MobileSection
        isAllowed={isAllowed}
        userInfo={userInfo}
        balance={balance}
        lpPrice={lpPrice}
        active={active}
        amount={amount}
        farmType={farmType}
        APY={APY}
        handleFarmTypeChange={handleFarmTypeChange}
        handleTransaction={handleTransaction}
        setActive={setActive}
        setAmount={setAmount}
        setMax={setMax}
      />
    </>
  );
};

const DesktopSection = ({
  handleFarmTypeChange,
  userInfo,
  balance,
  lpPrice,
  APY,
  active,
  setActive,
  setAmount,
  amount,
  farmType,
  isAllowed,
  handleTransaction,
  setMax,
}) => {
  return (
    <Box
      marginTop={4}
      sx={{
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: 4,
        paddingTop: 10,
      }}
      display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
    >
      <Box className={styles.roundBorder}>
        <Container maxWidth="sm">
          <Box
            width={'236px'}
            sx={{
              marginX: 'auto',
              marginTop: '-65px',
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontFamily: 'Kanit',
                color: 'white',
                opacity: 0.5,
                textAlign: 'center',
              }}
            >
              Select Type
            </Typography>
            <FormControl sx={{ width: '100%' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                value={farmType}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background:
                        'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
                    },
                  },
                }}
                onChange={handleFarmTypeChange}
                sx={{
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '2rem',
                }}
              >
                <MenuItem value={'0'}>
                  <Box display="flex" alignItems="center">
                    <img src={imgThor} alt="hammer" width={'32px'} height={'32px'} />
                    <Typography
                      marginLeft={1}
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Kanit',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      THOR
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={'1'}>
                  <Box display="flex" alignItems="center">
                    <img src={imgThor} alt="hammer" width={'32px'} height={'32px'} />
                    <Typography
                      marginLeft={1}
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Kanit',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      THOR-AVAX
                    </Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            display={'flex'}
            justifyContent="space-between"
            flexDirection={{ xs: 'column', sm: 'row' }}
            marginTop={4}
          >
            <Box>
              <Typography
                marginLeft={2}
                sx={{
                  fontFamily: 'Kanit',
                  color: 'white',
                  opacity: 0.5,
                  fontSize: '20px',
                }}
              >
                Stacked USD
              </Typography>
              <Typography
                marginLeft={2}
                gutterBottom
                sx={{
                  background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '36px',
                }}
              >
                $
                {userInfo?.data && lpPrice.data
                  ? (Number(getNumber(userInfo.data.amount)) * lpPrice.data).toFixed(2)
                  : 0.0}
              </Typography>
            </Box>
            <Box>
              <Typography
                marginLeft={2}
                sx={{
                  fontFamily: 'Kanit',
                  color: 'white',
                  opacity: 0.5,
                  fontSize: '20px',
                }}
              >
                APR
              </Typography>
              <Typography
                marginLeft={2}
                variant="h4"
                gutterBottom
                sx={{
                  background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '36px',
                }}
              >
                {APY ? APY.toFixed() : 0}%
              </Typography>
            </Box>
          </Box>

          <Box marginTop={4}>
            <Box
              maxWidth={'300px'}
              sx={{
                border: '1px solid #5C5C5C',
                borderRadius: '48px',
                overflowX: 'hidden',
                display: 'flex',
                marginX: 'auto',
              }}
            >
              <Box flex={1}>
                {active === 1 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                    }}
                  >
                    deposit
                  </Button>
                ) : (
                  <Button variant="text" fullWidth sx={{ color: 'white' }} onClick={() => setActive(1)}>
                    deposit
                  </Button>
                )}
              </Box>
              <Box flex={1}>
                {active === 2 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                    }}
                  >
                    withdraw
                  </Button>
                ) : (
                  <Button variant="text" fullWidth sx={{ color: 'white' }} onClick={() => setActive(2)}>
                    withdraw
                  </Button>
                )}
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2} marginTop={4}>
            <Grid item lg={8} md={8} sm={12} xs={12} position="relative">
              <input
                type="number"
                value={amount}
                min={0}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className={styles.inputStyle}
                placeholder="Enter amount..."
              />
              <Box position={'absolute'} top={'35%'} right={'3%'}>
                <Typography
                  variant="body2"
                  onClick={setMax}
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Kanit',
                    cursor: 'pointer',
                  }}
                >
                  MAX
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    opacity: 0.5,
                    fontFamily: 'Kanit',
                    marginTop: '-3px',
                  }}
                >
                  {active === 1
                    ? balance.data
                      ? getNumber(balance.data, 2)
                      : 0.0
                    : userInfo.data
                    ? getNumber(userInfo.data.amount, 2)
                    : 0.0}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <OutlinedButton paddingVertical={'13px'} paddingHorizontal="40px" onClick={handleTransaction}>
                {isAllowed ? (active === 1 ? 'Deposit' : 'Withdraw') : 'Approve'}
              </OutlinedButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const MobileSection = ({
  handleFarmTypeChange,
  userInfo,
  balance,
  lpPrice,
  APY,
  active,
  setActive,
  setAmount,
  amount,
  farmType,
  isAllowed,
  handleTransaction,
  setMax,
}) => {
  return (
    <Box
      marginTop={4}
      sx={{
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: 4,
        paddingTop: 10,
      }}
      display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}
    >
      <Box className={styles.roundBorderMobile}>
        <Box
          width={'45%'}
          sx={{
            marginX: 'auto',
            marginTop: '-65px',
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontFamily: 'Kanit',
              color: 'white',
              opacity: 0.5,
              textAlign: 'center',
            }}
          >
            Select Type
          </Typography>
          <FormControl sx={{ width: '100%' }} size="small">
            <Select
              labelId="demo-simple-select-label"
              value={farmType}
              MenuProps={{
                PaperProps: {
                  sx: {
                    background:
                      'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
                  },
                },
              }}
              onChange={handleFarmTypeChange}
              sx={{
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '1.5rem',
              }}
            >
              <MenuItem value={'0'}>
                <Box display="flex" alignItems="center">
                  <img src={imgThor} alt="hammer" width={'20px'} height={'20px'} />
                  <Typography
                    marginLeft={1}
                    variant="subtitle1"
                    sx={{
                      fontFamily: 'Kanit',
                      color: 'white',
                      fontSize: '12px',
                    }}
                  >
                    THOR
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem value={'1'}>
                <Box display="flex" alignItems="center">
                  <img src={imgThor} alt="hammer" width={'20px'} height={'20px'} />
                  <Typography
                    marginLeft={1}
                    variant="subtitle1"
                    sx={{
                      fontFamily: 'Kanit',
                      color: 'white',
                      fontSize: '12px',
                    }}
                  >
                    THOR-AVAX
                  </Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Container maxWidth="sm">
          <Box display={'flex'} justifyContent="space-between" alignItems={'center'} marginTop="20px">
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Kanit',
                    color: 'white',
                    opacity: 0.5,
                    fontSize: '10px',
                    fontWeight: 400,
                  }}
                >
                  Stacked USD
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                    fontFamily: 'Kanit',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    textFillColor: 'transparent',
                    fontStyle: 'normal',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: '24px',
                  }}
                >
                  $
                  {userInfo?.data && lpPrice.data
                    ? (Number(getNumber(userInfo.data.amount)) * lpPrice.data).toFixed(2)
                    : 0.0}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Kanit',
                    color: 'white',
                    opacity: 0.5,
                    fontSize: '10px',
                    fontWeight: 400,
                  }}
                >
                  APR
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                    fontFamily: 'Kanit',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    textFillColor: 'transparent',
                    fontStyle: 'normal',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: '24px',
                  }}
                >
                  {APY ? APY.toFixed() : 0}%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginTop={2}>
            <Box
              maxWidth={'300px'}
              sx={{
                border: '1px solid #5C5C5C',
                borderRadius: '48px',
                overflowX: 'hidden',
                display: 'flex',
                marginX: 'auto',
              }}
            >
              <Box flex={1}>
                {active === 1 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                      fontSize: '10px',
                    }}
                  >
                    deposit
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ color: 'white', fontSize: '10px' }}
                    onClick={() => setActive(1)}
                  >
                    deposit
                  </Button>
                )}
              </Box>
              <Box flex={1}>
                {active === 2 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                      fontSize: '10px',
                    }}
                  >
                    withdraw
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ color: 'white', fontSize: '10px' }}
                    onClick={() => setActive(2)}
                  >
                    withdraw
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
          <Box marginTop={2} position="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className={styles.inputStyle}
              placeholder="Enter amount..."
            />
            <Box position={'absolute'} top={'20%'} right={'3%'} textAlign="end">
              <Typography
                onClick={setMax}
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Kanit',
                  fontSize: '8px',
                }}
              >
                MAX
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  opacity: 0.5,
                  fontFamily: 'Kanit',
                  marginTop: '-3px',
                  fontSize: '10px',
                }}
              >
                {active === 1
                  ? balance.data
                    ? getNumber(balance.data, 2)
                    : 0.0
                  : userInfo.data
                  ? getNumber(userInfo.data.amount, 2)
                  : 0.0}
              </Typography>
            </Box>
          </Box>
          <Box marginTop="10px">
            <OutlinedButton paddingVertical={'10px'} paddingHorizontal="40px" fullWidth onClick={handleTransaction}>
              {isAllowed ? (active === 1 ? 'Deposit' : 'Withdraw') : 'Approve'}
            </OutlinedButton>
          </Box>
          <Box textAlign={'center'} marginTop={2}>
            <a
              href="https://traderjoexyz.com/trade?outputCurrency=0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79"
              target="_blank"
            >
              <Typography
                sx={{
                  fontFamily: 'Kanit',
                  fontSize: '12px',
                  fontWeight: 400,
                  background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Buy THOR-AVAX
              </Typography>
            </a>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export { BottomSection };
