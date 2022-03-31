import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import imgSearch from '../../assets/images/search.png';
import styles from './style.module.css';
import { useMainContext } from '../../Foundation/Main.context';

const InputSearch = () => {
  const { initialFAQ, setFilteredFAQ, setQuery } = useMainContext();
  const [query, setLocalQuery] = useState('');
  const getFilteredFAQs = () => {
    setFilteredFAQ(
      initialFAQ.filter((x) =>
        x.question.toLowerCase().includes(query.toLowerCase()),
      ),
      setQuery(query),
    );
  };
  return (
    <Box position={'relative'}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Enter search term..."
        value={query}
        onChange={(value) => {
          setLocalQuery(value.target.value);
          setFilteredFAQ([]);
          setQuery('');
        }}
      />
      <IconButton
        aria-label="search"
        size="large"
        sx={{ position: 'absolute', top: '10%', right: '2%' }}
        onClick={getFilteredFAQs}
      >
        <img src={imgSearch} alt="search" width={'20px'} />
      </IconButton>
    </Box>
  );
};

export default InputSearch;
