import React from 'react';
import { Box } from '@mui/material';
import { MainDrawer, MenuDrawer } from '../drawer';

export const LeftSideBar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
      display={{ xs: 'none', sm: 'none', md: 'flex' }}
    >
      <MainDrawer />
      <MenuDrawer />
    </Box>
  );
};
