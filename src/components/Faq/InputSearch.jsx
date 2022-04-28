import React from 'react';

import { Box, IconButton } from '@mui/material';

import imgSearch from '../../assets/images/search.png';

import styles from './style.module.css';

const InputSearch = () => {
  return (
    <Box position={'relative'}>
      <input type="text" className={styles.searchInput} placeholder="Enter search term..." />
      <IconButton aria-label="search" size="large" sx={{ position: 'absolute', top: '12%', right: '1%' }}>
        <img src={imgSearch} alt="search" width={'20px'} />
      </IconButton>
    </Box>
  );
};

export default InputSearch;
