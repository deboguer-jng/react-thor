import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import { LeftSideBar } from './../LeftSidebar';
import bgImage from '../../assets/images/bg-img.png';
import ScrollArea from 'react-scrollbar';

const Layout = ({ children }) => {
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
      <Box sx={{ marginLeft: 15, width: '100%' }}>
        <Header />
        <Box height={'85vh'}>
          <ScrollArea
            speed={0.8}
            contentClassName="content"
            horizontal={false}
            style={{ height: '100%' }}
          >
            <Box paddingX={4} marginBottom={4}>
              {children}
            </Box>
          </ScrollArea>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
