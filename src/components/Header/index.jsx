import React, { useState, useEffect, useCallback } from 'react';

import { NavLink } from 'react-router-dom';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

import { Box, IconButton, Drawer, Button, Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';
import WalletDialog from '../WalletDialog';

import imgHammer from '../../assets/images/LeftBar/Bitmap.png';
import imgThunder from '../../assets/images/LeftBar/Bitmap-1.png';
import imgDashboard from '../../assets/images/dashboard.png';
import imgNode from '../../assets/images/nodes.png';
import imgInvestment from '../../assets/images/investment.png';
import imgFarm from '../../assets/images/farm.png';
import imgFaq from '../../assets/images/faq.png';

// Icons
import { FiMenu } from 'react-icons/fi';

import Logo from '../Logo';
import imgHumburger from '../../assets/images/humburger.png';

import styles from './style.module.css';

// for wallet connect
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { setWeb3Provider } from '../../contracts/getContract';

import { useStyles } from '../../theme/styles/components/connectWalletStyles';
import { walletList } from '../../utils/web3Connectors';
import { conciseAddress } from '../../utils/formattingFunctions';
import { useSnackbar, useLoading, useWeb3, useTheme, useJWT } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { storeWeb3Context } from '../../redux';

const Header = () => {
  const web3context = useWeb3React();
  const dispatch = useDispatch();
  const web3contextRedux = useSelector((state) => state.web3.web3context);
  const { showSnackbarF } = useSnackbar();
  const { setLoadingF, loading } = useLoading();
  // const { storeWeb3ContextF } = useWeb3();
  const { theme } = useTheme();
  const { getJWTF } = useJWT();

  const [open, setOpen] = useState(false);

  const getErrorMessage = (e) => {
    if (e instanceof UnsupportedChainIdError) {
      return 'Unsupported Network';
    } else if (e instanceof NoEthereumProviderError) {
      return 'No Wallet Found';
    } else if (e instanceof UserRejectedRequestError) {
      return 'Wallet Connection Rejected';
    } else if (e.code === -32002) {
      return 'Wallet Connection Request Pending';
    } else {
      return 'An Error Occurred';
    }
  };

  const activateWallet = useCallback(
    (connector, onClose = () => {}) => {
      setLoadingF({
        walletConnection: true,
        connector: connector ? connector : InjectedConnector,
      });

      if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined;
      } else if (connector instanceof FortmaticConnector) {
        onClose();
      }

      web3context
        .activate(
          connector
            ? connector
            : new InjectedConnector({
                supportedChainIds: [1, 3, 4, 5, 42, 43113, 43114],
              }),
          undefined,
          true,
        )
        .then(() => {
          setLoadingF({ walletConnection: false });
          //getJWTF(web3context.account, Date.now());
        })
        .catch((e) => {
          const err = getErrorMessage(e);
          showSnackbarF({ message: err, severity: 'error' });
          console.error('ERROR activateWallet -> ', e);
          setLoadingF({ walletConnection: false });
        });
    },
    [web3context, loading],
  );

  useEffect(() => {
    if (!isMobile) {
      activateWallet();
    }
  }, []);

  useEffect(() => {
    if (web3context?.error) {
      web3context.deactivate();
    }
    dispatch(storeWeb3Context(web3context));

    if (web3context.active || web3context.account) {
      setOpen(false);
    }
  }, [web3context]);

  window.ethereum?.on('networkChanged', function (networkId) {
    if (networkId) {
      let msg = 'Network changed to ';
      if (networkId === '1') {
        msg += 'mainnet';
      } else if (networkId === '3') {
        msg += 'ropsten';
      } else if (networkId === '4') {
        msg += 'rinkeby';
      } else if (networkId === '5') {
        msg += 'goerli';
      } else if (networkId === '42') {
        msg += 'kovan';
      }
      showSnackbarF({ message: msg, severity: 'info' });
    }
  });

  const [state, setState] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [walletAddr, setWalletAddr] = useState('0x1051..AgD2');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 'auto',
        height: '100%',
        display: 'flex',
        backdropFilter: 'blur(28px)',
        background: 'none',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: '88px',
          height: '100%',
          backgroundColor: 'black',
        }}
      >
        <Box marginTop={10}>
          <Box marginBottom={4}>
            <Button
              variant="text"
              sx={{
                paddingX: '0',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
              fullWidth
            >
              <Box>
                <Box
                  sx={{
                    width: '10px',
                    height: '50px',
                  }}
                  style={{
                    background:
                      'linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)',
                  }}
                ></Box>
              </Box>
              <Box marginLeft={2}>
                <img src={imgHammer} alt="hammer" width={'32px'} height="32px" />
              </Box>
            </Button>
          </Box>

          <Box marginBottom={4}>
            <Button variant="text" sx={{ marginLeft: 2 }}>
              <img src={imgThunder} alt="thunder" width={'32px'} height="32px" />
            </Button>
          </Box>

          <Box marginBottom={4}>
            <Button variant="text" sx={{ marginLeft: 2 }}>
              <img src={imgThunder} alt="thunder" width={'32px'} height="32px" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '208px', height: '100%', paddingX: '20px' }}>
        <Box marginTop={10}>
          <Box marginBottom={2}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgDashboard} width={'16px'} />
              </Box>
              <Box className={styles.btnText}>
                <Typography variant="subtitle2" className={styles.text} component="div">
                  DASHBOARD
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/nodes"
              className={({ isActive }) =>
                isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgNode} width={'16px'} />
              </Box>
              <Box className={styles.btnText}>
                <Typography variant="subtitle2" className={styles.text} component="div">
                  MY NODES
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/investment"
              className={({ isActive }) =>
                isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgInvestment} width={'16px'} />
              </Box>
              <Box className={styles.btnText}>
                <Typography variant="subtitle2" className={styles.text} component="div">
                  INVESTMENTS
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/farm"
              className={({ isActive }) =>
                isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgFarm} width={'16px'} />
              </Box>
              <Box className={styles.btnText}>
                <Typography variant="subtitle2" className={styles.text} component="div">
                  FARM
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box marginBottom={2}>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`
              }
            >
              <Box className={styles.btnIcon}>
                <img src={imgFaq} width={'16px'} />
              </Box>
              <Box className={styles.btnText}>
                <Typography variant="subtitle2" className={styles.text} component="div">
                  FAQ
                </Typography>
              </Box>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        height: '10vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '20px',
      }}
    >
      <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
        <IconButton aria-label="menu" sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
          <img src={imgHumburger} alt="humburger" />
        </IconButton>
      </Box>
      <Logo />
      <Box>
        <Drawer
          PaperProps={{
            sx: {
              background: 'transparent',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.48)',
            },
          }}
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>

        <Box
          sx={{
            width: '313px',
            border: '1px solid white',
            backgroundColor: '#171B24',
            borderRadius: '21px',
            overflow: 'hidden',
          }}
          display={{ xs: 'none', sm: 'none', md: 'flex' }}
        >
          <Button
            sx={{
              ':hover': {
                backgroundColor: 'white',
              },
              fontSize: '12px',
              fontFamily: 'Kanit',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '21px',
              paddingX: '20px',
            }}
          >
            34.712 THOR | 34.712 AVAX
          </Button>
          <Button
            sx={{ fontSize: '12px', fontFamily: 'Kanit', color: 'white', flexGrow: 1 }}
            onClick={() => setOpen(true)}
          >
            {web3context.active && web3context.account ? conciseAddress(web3context.account) : 'CONNECT WALLET'}
          </Button>
        </Box>
      </Box>
      <WalletDialog
        open={open}
        setOpen={setOpen}
        items={walletList}
        activate={activateWallet}
        address={conciseAddress(web3context.account)}
      />
    </Box>
  );
};

export default Header;
