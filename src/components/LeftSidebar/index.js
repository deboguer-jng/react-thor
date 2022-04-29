import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, IconButton, Typography } from '@mui/material';

// Icons
import { FiMenu } from 'react-icons/fi';

// Images
import imgHammer from '../../assets/images/LeftBar/Bitmap.png';
import imgThunder from '../../assets/images/LeftBar/Bitmap-1.png';
import imgDashboard from '../../assets/images/dashboard.png';
import imgNode from '../../assets/images/nodes.png';
import imgInvestment from '../../assets/images/investment.png';
import imgFarm from '../../assets/images/farm.png';
import imgFaq from '../../assets/images/faq.png';
import imgDiscord from '../../assets/images/LeftBar/discord.png';
import imgTwitter from '../../assets/images/LeftBar/twitter.png';
import imgStack from '../../assets/images/LeftBar/stack.png';
import imgBubble from '../../assets/images/LeftBar/bubble.png';

import styles from './style.module.css';

const LeftSideBar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
      display={{ xs: 'none', sm: 'none', md: 'flex' }}
    >
      <Box
        sx={{
          width: '88px',
          height: '100%',
        }}
        style={{
          background: 'linear-gradient(180deg, #0E111C 0%, #11141D 100%',
        }}
      >
        <Box marginTop={20}>
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
      <Box display={{ xs: 'none', sm: 'none', md: 'flex' }} flexDirection="column" className={styles.sidebarContainer}>
        <Box marginTop={20} paddingX={'15px'}>
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

        <Box className={styles.socialIcons}>
          <Button variant="text" size="small" sx={{ minWidth: '40px' }}>
            <img src={imgDiscord} width={'20px'} />
          </Button>

          <Button variant="text" size="small" sx={{ minWidth: '40px' }}>
            <img src={imgTwitter} width={'20px'} />
          </Button>
          <Button variant="text" size="small" sx={{ minWidth: '40px' }}>
            <img src={imgStack} width={'20px'} />
          </Button>

          <Button variant="text" size="small" sx={{ minWidth: '40px' }}>
            <img src={imgBubble} width={'20px'} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
