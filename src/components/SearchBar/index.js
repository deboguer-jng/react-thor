import React from 'react';

import { Box, IconButton } from '@mui/material';
import imgSearch from '../../assets/images/search.png';

import styles from './style.module.css';

const SearchBar = ({ placeholder }) => {
    return (
        <Box className={styles.inpBox}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.inpSearch}
            />
            <IconButton aria-label="search" className={styles.btnSearch}>
                <img
                    src={imgSearch}
                    alt="search"
                    width="16px"
                    height="16px"
                />
            </IconButton>
        </Box>
    )
}

export default SearchBar;