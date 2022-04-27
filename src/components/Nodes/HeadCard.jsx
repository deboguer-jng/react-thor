import React from 'react';

import { Container, Box, Typography, Button } from '@mui/material';

import imgNode from '../../assets/images/earth.png';
import Cards from './Cards';
import CustomButton from '../CustomButton';
import OutlinedButton from '../CustomButton/OutlinedButton';

import styles from './style.module.css';

const HeadCard = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: '10px',
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        padding: 4,
        marginBottom: 4,
      }}
    >
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}>
        <Box
          flex={1}
          display="flex"
          flexDirection={{ xs: 'row', sm: 'row', md: 'column' }}
          justifyContent={{
            xs: 'space-between',
            sm: 'space-between',
            md: 'normal',
          }}
        >
          <Box>
            <Typography className={styles.head1} component="div">
              My Nodes
            </Typography>
            <Typography component="div" className={styles.head2}>
              8
            </Typography>
          </Box>
          <Box
            sx={{
              width: '296px',
              height: '0px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            display={{ xs: 'none', sm: 'none', md: 'block' }}
          ></Box>
          <Box
            marginTop={{ xs: 1, sm: 1, md: 2 }}
            display="flex"
            alignItems={{ xs: 'flex-end', sm: 'flex-end', md: 'center' }}
            flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
          >
            <Typography
              component="div"
              color={'white'}
              fontWeight={500}
              sx={{
                fontFamily: 'Kanit',
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: '16px',
                fontSize: '12px',
              }}
            >
              Total Average Tax
            </Typography>
            <Typography
              component="div"
              sx={{
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                fontFamily: 'Kanit',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent',
                fontStyle: 'normal',
                WebkitTextFillColor: 'transparent',
                // lineHeight: "144px",
                fontSize: '16px',
                fontWeight: 500,
                marginLeft: '8px',
              }}
            >
              23.5%
            </Typography>
          </Box>
        </Box>
        <Box flex={1}>
          <Cards />
        </Box>
      </Box>
    </Container>
  );
};

export default HeadCard;
