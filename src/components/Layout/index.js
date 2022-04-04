import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Header from '../Header';
import { LeftSideBar } from './../LeftSidebar';
import bgImage from '../../assets/images/bg-img.png';

const Layout = ({ children }) => {
  const mobileCardView = useMediaQuery('(max-width:500px)');
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'hidden',
      }}
    >
      <LeftSideBar />
      <Box sx={{ marginLeft: mobileCardView ? 0 : 15, width: '100%' }}>
        <Header />

        <Box height={'80vh'}>
          <Box
            paddingX={mobileCardView ? 0 : 4}
            // marginBottom={4}
            sx={{ maxHeight: '100%', overflowY: 'scroll' }}
          >
            <Box paddingX={4} marginBottom={4}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
