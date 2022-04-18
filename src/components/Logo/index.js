import React, { useState } from 'react'
import { Box } from '@mui/material';
import logo from '../../assets/images/logo.png';
import useWindowDimensions from '../../dimension';

const Logo = () => {

  return (
    <Box>
      <img src={logo} width={"180px"} height="45px" />
    </Box>
  )
}

export default Logo;
