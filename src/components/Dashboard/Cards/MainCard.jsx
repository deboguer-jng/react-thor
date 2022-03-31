import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import imgCard1 from '../../../assets/images/cards/box-card1.png';
import imgCard2 from '../../../assets/images/cards/box-card2.png';
import imgCard3 from '../../../assets/images/cards/box-card3.png';
import imgCard4 from '../../../assets/images/cards/box-card4.png';
import styles from './style.module.css';

const MainCard = ({ onClick }) => {
  const handleClick = () => {
    onClick(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
        <Box padding={4}>
          <Button sx={{ padding: 0 }} onClick={handleClick}>
            <img src={imgCard1} alt="card" width={'100%'} height="248px" />
          </Button>
        </Box>
      </Grid>
      <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
        <Box padding={4} className={styles.cardBox}>
          <Button sx={{ padding: 0 }} onClick={handleClick}>
            <img src={imgCard2} alt="card" width={'100%'} height="248px" />
          </Button>
        </Box>
      </Grid>
      <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
        <Box padding={4}>
          <Button sx={{ padding: 0 }} onClick={handleClick}>
            <img src={imgCard3} alt="card" width={'100%'} height="248px" />
          </Button>
          <Box
            display={'flex'}
            justifyContent="space-between"
            alignItems={'center'}
            paddingX={'10px'}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="subtitle1"
                sx={{ color: 'white', fontFamily: 'Kanit' }}
              >
                COST
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  background:
                    'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  marginTop: '-10px',
                }}
              >
                12.5
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="subtitle1"
                sx={{ color: 'white', fontFamily: 'Kanit' }}
              >
                REWARDS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  background:
                    'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                  marginTop: '-10px',
                }}
              >
                .144
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
        <Box padding={4}>
          <Button sx={{ padding: 0 }} onClick={handleClick}>
            <img src={imgCard4} alt="card" width={'100%'} height="248px" />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainCard;
