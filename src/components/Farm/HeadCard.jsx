import React from 'react';

import { Container, Grid, Box, Typography } from '@mui/material';

import CustomButton from '../../components/CustomButton';

import imgFarm from '../../assets/images/farm.png';
import imgThor from '../../assets/images/LeftBar/Bitmap.png';

import styles from './style.module.css';

const HeadCardDesktop = () => {
  return (
    <Grid container spacing={2} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
      <Grid item md={12} lg={6} sm={12} xs={12}>
        <Box
          sx={{
            background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
            borderRadius: '12px',
            padding: 4,
          }}
          height="240px"
        >
          <Box display={'flex'} alignItems="center">
            <img src={imgFarm} alt="farm" />
            <Typography marginLeft={2} variant="h4" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              Farm
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Box paddingX={1}>
              <Box>
                <Typography
                  marginLeft={2}
                  variant="subtitle1"
                  sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}
                >
                  Total Volume Locked
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  marginLeft={2}
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                    fontFamily: 'Kanit',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    textFillColor: 'transparent',
                    fontStyle: 'normal',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    fontSize: '72px',
                  }}
                >
                  5,366,044
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    color: '#8c8b97',
                    fontFamily: 'Kanit',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '32px',
                    marginTop: 2,
                    // marginTop: "-50px",
                  }}
                >
                  .86
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} sm={12} xs={12}>
        <Box
          sx={{
            background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
            borderRadius: '12px',
            padding: 4,
          }}
          height="240px"
        >
          <Box sx={{ textAlign: 'right' }}>
            <CustomButton label="claim rewards" />
          </Box>
          <Box marginTop={2}>
            <Typography marginLeft={2} variant="subtitle1" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              Unclaimed
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center" marginTop={2}>
            <img src={imgThor} alt="thor" width={'32px'} />
            <Typography
              marginLeft={2}
              variant="h4"
              sx={{
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                fontFamily: 'Kanit',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent',
                fontStyle: 'normal',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              5.678
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <Typography variant="subtitle2" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              USD
            </Typography>
            <Typography
              marginLeft={2}
              variant="subtitle2"
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                fontWeight: 600,
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} sm={12} xs={12}>
        <Box
          sx={{
            background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
            borderRadius: '12px',
            padding: 4,
          }}
          height="240px"
        >
          <Box sx={{ textAlign: 'right' }}>
            <CustomButton label="buy thor" />
          </Box>
          <Box marginTop={2}>
            <Typography marginLeft={2} variant="subtitle1" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              My Staked
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center" marginTop={2}>
            <img src={imgThor} alt="thor" width={'32px'} />
            <Typography
              marginLeft={2}
              variant="h4"
              sx={{
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                fontFamily: 'Kanit',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent',
                fontStyle: 'normal',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              5.678
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <Typography variant="subtitle2" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              USD
            </Typography>
            <Typography
              marginLeft={2}
              variant="subtitle2"
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                fontWeight: 600,
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const HeadCardMobile = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        borderRadius: '12px',
        padding: 4,
      }}
      display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
          Total Volume Locked
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}>
          <Typography
            gutterBottom
            sx={{
              background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
              fontFamily: 'Kanit',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textFillColor: 'transparent',
              fontStyle: 'normal',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
              fontSize: '40px',
            }}
          >
            5,366,044
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: '#8c8b97',
              fontFamily: 'Kanit',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              marginTop: '8px',
            }}
          >
            .86
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '0px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      ></Box>
      <Box className={styles.headCardContainer}>
        <Box sx={{ flex: 1 }}>
          <Box marginTop={2}>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              Unclaimed
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <img src={imgThor} alt="thor" width={'24px'} />
            <Typography
              sx={{
                marginLeft: '10px',
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                fontFamily: 'Kanit',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent',
                fontStyle: 'normal',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: '24px',
              }}
            >
              5.678
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: 'Kanit',
                color: 'white',
                opacity: 0.5,
                fontSize: '12px',
              }}
            >
              USD
            </Typography>
            <Typography
              marginLeft="10px"
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                fontWeight: 600,
                fontSize: '12px',
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, marginLeft: '30px' }}>
          <Box marginTop={2}>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Kanit', color: 'white', opacity: 0.5 }}>
              Unclaimed
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <img src={imgThor} alt="thor" width={'24px'} />
            <Typography
              sx={{
                marginLeft: '10px',
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                fontFamily: 'Kanit',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent',
                fontStyle: 'normal',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: '24px',
              }}
            >
              5.678
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: 'Kanit',
                color: 'white',
                opacity: 0.5,
                fontSize: '12px',
              }}
            >
              USD
            </Typography>
            <Typography
              marginLeft="10px"
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                fontWeight: 600,
                fontSize: '12px',
              }}
            >
              $7000
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { HeadCardDesktop, HeadCardMobile };
