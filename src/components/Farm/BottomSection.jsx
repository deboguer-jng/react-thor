import React, { useEffect, useState } from 'react';

import { Container, Box, Typography, Button, Grid, Select, MenuItem, FormControl } from '@mui/material';
import OutlinedButton from '../CustomButton/OutlinedButton';

import imgThor from '../../assets/images/LeftBar/Bitmap.png';

import { IoIosArrowDown } from 'react-icons/io';

import styles from './style.module.css';

const BottomSectionDesktop = () => {
  const [active, setActive] = useState(1);
  const [farmType, setFarmType] = useState('thor');
  const [approved, setApproved] = useState(false);

  const handleFarmTypeChange = (e) => {
    setFarmType(e.target.value);
  };

  const getThorApproved = () => {
    // const
  };

  useEffect(() => {}, []);

  return (
    <Box
      marginTop={4}
      sx={{
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: 4,
        paddingTop: 10,
      }}
      display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
    >
      <Box className={styles.roundBorder}>
        <Container maxWidth="sm">
          <Box
            width={'236px'}
            sx={{
              marginX: 'auto',
              marginTop: '-65px',
            }}
          >
            <Typography
              marginLeft={2}
              gutterBottom
              sx={{
                fontFamily: 'Kanit',
                color: 'white',
                opacity: 0.5,
                textAlign: 'center',
                fontSize: '14px',
              }}
            >
              Select type
            </Typography>
            <FormControl sx={{ width: '100%' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                value={farmType}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background:
                        'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
                    },
                  },
                }}
                onChange={handleFarmTypeChange}
                sx={{
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '2rem',
                }}
              >
                <MenuItem value="thor">
                  <Box display="flex" alignItems="center">
                    <img src={imgThor} alt="hammer" width={'32px'} height={'32px'} />
                    <Typography
                      marginLeft={1}
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Kanit',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      THOR
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="thor-avax">
                  <Box display="flex" alignItems="center">
                    <img src={imgThor} alt="hammer" width={'32px'} height={'32px'} />
                    <Typography
                      marginLeft={1}
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Kanit',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      THOR-AVAX
                    </Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            display={'flex'}
            justifyContent="space-between"
            flexDirection={{ xs: 'column', sm: 'row' }}
            marginTop={4}
          >
            <Box>
              <Typography
                marginLeft={2}
                sx={{
                  fontFamily: 'Kanit',
                  color: 'white',
                  opacity: 0.5,
                  fontSize: '20px',
                }}
              >
                Stacked USD
              </Typography>
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
                  fontWeight: 'bold',
                  fontSize: '36px',
                }}
              >
                $6.7M
              </Typography>
            </Box>
            <Box>
              <Typography
                marginLeft={2}
                sx={{
                  fontFamily: 'Kanit',
                  color: 'white',
                  opacity: 0.5,
                  fontSize: '20px',
                }}
              >
                APR
              </Typography>
              <Typography
                marginLeft={2}
                variant="h4"
                gutterBottom
                sx={{
                  background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '36px',
                }}
              >
                390%
              </Typography>
            </Box>
          </Box>

          <Box marginTop={4}>
            <Box
              maxWidth={'300px'}
              sx={{
                border: '1px solid #5C5C5C',
                borderRadius: '48px',
                overflowX: 'hidden',
                display: 'flex',
                marginX: 'auto',
              }}
            >
              <Box flex={1}>
                {active === 1 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                    }}
                  >
                    deposit
                  </Button>
                ) : (
                  <Button variant="text" fullWidth sx={{ color: 'white' }} onClick={() => setActive(1)}>
                    deposit
                  </Button>
                )}
              </Box>
              <Box flex={1}>
                {active === 2 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                    }}
                  >
                    withdraw
                  </Button>
                ) : (
                  <Button variant="text" fullWidth sx={{ color: 'white' }} onClick={() => setActive(2)}>
                    withdraw
                  </Button>
                )}
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2} marginTop={4}>
            <Grid item lg={8} md={8} sm={12} xs={12} position="relative">
              <input type="text" className={styles.inputStyle} placeholder="Enter amount..." />
              <Box position={'absolute'} top={'35%'} right={'3%'}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Kanit',
                  }}
                >
                  MAX
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    opacity: 0.5,
                    fontFamily: 'Kanit',
                    marginTop: '-3px',
                  }}
                >
                  40.00
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <OutlinedButton label="Approve" paddingVertical={'13px'} paddingHorizontal="40px" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const BottomSectionMobile = () => {
  const [active, setActive] = useState(1);

  return (
    <Box
      marginTop={4}
      sx={{
        background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: 4,
        paddingTop: 10,
      }}
      display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}
    >
      <Box className={styles.roundBorderMobile}>
        <Box
          sx={{
            width: '48%',
            height: '24px',
            marginX: 'auto',
            marginTop: '-30px',
            borderRadius: '48px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            padding: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img src={imgThor} alt="thor" width="16px" height="16px" />
          <Typography
            sx={{
              fontFamily: 'Kanit',
              color: 'white',
              fontSize: '10px',
              fontWeight: 500,
              lineHeight: '14px',
            }}
          >
            THOR - AVAX
          </Typography>
          <IoIosArrowDown color="white" fontSize={'16px'} />
        </Box>
        <Container maxWidth="sm">
          <Box display={'flex'} justifyContent="space-between" alignItems={'center'} marginTop="20px">
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Kanit',
                    color: 'white',
                    opacity: 0.5,
                    fontSize: '10px',
                    fontWeight: 400,
                  }}
                >
                  Stacked USD
                </Typography>
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
                    fontWeight: 'bold',
                    fontSize: '24px',
                  }}
                >
                  $6.7M
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Kanit',
                    color: 'white',
                    opacity: 0.5,
                    fontSize: '10px',
                    fontWeight: 400,
                  }}
                >
                  APR
                </Typography>
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
                    fontWeight: 'bold',
                    fontSize: '24px',
                  }}
                >
                  390%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginTop={2}>
            <Box
              maxWidth={'300px'}
              sx={{
                border: '1px solid #5C5C5C',
                borderRadius: '48px',
                overflowX: 'hidden',
                display: 'flex',
                marginX: 'auto',
              }}
            >
              <Box flex={1}>
                {active === 1 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                      fontSize: '10px',
                    }}
                  >
                    deposit
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ color: 'white', fontSize: '10px' }}
                    onClick={() => setActive(1)}
                  >
                    deposit
                  </Button>
                )}
              </Box>
              <Box flex={1}>
                {active === 2 ? (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '48px',
                      background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                      fontSize: '10px',
                    }}
                  >
                    withdraw
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ color: 'white', fontSize: '10px' }}
                    onClick={() => setActive(2)}
                  >
                    withdraw
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
          <Box marginTop={2} position="relative">
            <input type="text" className={styles.inputStyle} placeholder="Enter amount..." />
            <Box position={'absolute'} top={'20%'} right={'3%'} textAlign="end">
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Kanit',
                  fontSize: '8px',
                }}
              >
                MAX
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  opacity: 0.5,
                  fontFamily: 'Kanit',
                  marginTop: '-3px',
                  fontSize: '10px',
                }}
              >
                40.00
              </Typography>
            </Box>
          </Box>
          <Box marginTop="10px">
            <OutlinedButton label="Approve" paddingVertical={'10px'} paddingHorizontal="40px" fullWidth />
          </Box>
          <Box textAlign={'center'} marginTop={2}>
            <Typography
              sx={{
                fontFamily: 'Kanit',
                fontSize: '12px',
                fontWeight: 400,
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Buy THOR-AVAX
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export { BottomSectionDesktop, BottomSectionMobile };
