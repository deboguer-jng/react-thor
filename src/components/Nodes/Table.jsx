import React, { useState } from 'react';

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Checkbox,
  styled,
  Grid,
  Slider,
  SliderThumb,
} from '@mui/material';
import ScrollArea from 'react-scrollbar';
import CustomButton from '../CustomButton';

import imgAvax from '../../assets/images/avax.png';
import imgCopy from '../../assets/images/copy.png';
import imgSearch from '../../assets/images/search.png';
import imgFilter from '../../assets/images/filter.png';
import imgClose from '../../assets/images/close.png';
import imgNodeCard1 from '../../assets/images/cards/nodeCard1.png';
import imgNodeCard2 from '../../assets/images/cards/nodeCard2.png';
import imgNodeCard3 from '../../assets/images/cards/nodeCard3.png';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import OutlinedButton from '../CustomButton/OutlinedButton';
import SearchBar from '../SearchBar';
import Modal from 'react-bootstrap/Modal';
import useWindowDimensions from '../../dimension';

import styles from './style.module.css';
import './style.css';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

// Check Icon 2

const FilterIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: '24px',
  height: '24px',
  border: '1.5px solid #32B267',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const FilterCheckedIcon = styled(FilterIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: '24px',
    height: '24px',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

function FilterCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<FilterCheckedIcon />}
      icon={<FilterIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#A88D47;',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: '16px',
    width: '4px',
    borderRadius: '0',
    backgroundColor:
      'linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#A88D47',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: '4px',
  },
  '& .MuiSlider-markLabel': {
    color: 'rgba(255, 255, 255, 0.4)',
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return <SliderThumb {...other}>{children}</SliderThumb>;
}

const marks = [
  {
    value: 0,
    label: 'All',
  },
  {
    value: 20,
    label: '50%',
  },
  {
    value: 40,
    label: '40%',
  },
  {
    value: 60,
    label: '30%',
  },
  {
    value: 80,
    label: '20%',
  },
  {
    value: 100,
    label: 'Flat',
  },
];

const InvestTable = () => {
  const { width } = useWindowDimensions();
  const [searchbar, setSearchbar] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <Box>
        <Box display={'flex'} justifyContent="space-between" marginBottom="10px">
          <Modal
            show={show}
            fullscreen={true}
            onHide={() => setShow(false)}
            // style={{ background: "transparent" }}
          >
            <Modal.Body
              style={{
                // background: "rgba(13, 16, 27, 0.64)",
                background: 'none',
                padding: '0px 20px',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            >
              <Box display={'flex'} justifyContent="space-between" alignItems={'center'} marginTop={'70px'}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontFamily: 'Kanit',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    Filter by
                  </Typography>
                </Box>
                <Box>
                  <IconButton onClick={() => setShow(false)}>
                    <img src={imgClose} alt="close" width={'20px'} height="20px" />
                  </IconButton>
                </Box>
              </Box>
              <Box display={'flex'} justifyContent="space-between" alignItems={'center'} marginTop={'30px'}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Kanit',
                      fontWeight: 500,
                      color: 'white',
                    }}
                  >
                    Filter by
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontFamily: 'Kanit',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    All
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={2} marginTop="10px">
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: '72px',
                      background: '#11141D',
                      boxShadow:
                        '0px -0.911392px 14.5823px rgba(222, 191, 112, 0.1), 0px 3.64557px 3.64557px rgba(0, 0, 0, 0.25)',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '0.91px solid',
                    }}
                  >
                    <img src={imgNodeCard1} alt="thor" width={'80%'} />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: '72px',
                      background: '#11141D',
                      boxShadow:
                        '0px -0.911392px 14.5823px rgba(222, 191, 112, 0.1), 0px 3.64557px 3.64557px rgba(0, 0, 0, 0.25)',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={imgNodeCard2} alt="thor" width={'80%'} />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: '72px',
                      background: '#11141D',
                      boxShadow:
                        '0px -0.911392px 14.5823px rgba(222, 191, 112, 0.1), 0px 3.64557px 3.64557px rgba(0, 0, 0, 0.25)',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={imgNodeCard3} alt="thor" width={'80%'} />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: '72px',
                      background: '#11141D',
                      boxShadow:
                        '0px -0.911392px 14.5823px rgba(222, 191, 112, 0.1), 0px 3.64557px 3.64557px rgba(0, 0, 0, 0.25)',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={imgNodeCard1} alt="thor" width={'80%'} />
                  </Box>
                </Grid>
              </Grid>

              <Box
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  height: 0,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              ></Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <Typography sx={{ fontFamily: 'Kanit', fontSize: '14px', color: 'white' }}>Tax Tier</Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontFamily: 'Kanit',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  All
                </Typography>
              </Box>
              <Box>
                <AirbnbSlider
                  track={false}
                  components={{ Thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                  defaultValue={[20, 40]}
                  marks={marks}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                  marginTop: '20px',
                  height: 0,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              ></Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <Typography sx={{ fontFamily: 'Kanit', fontSize: '14px', color: 'white' }}>Status</Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontFamily: 'Kanit',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  All
                </Typography>
              </Box>
              <Box marginTop={'10px'} display="flex">
                <Box flex="1" display={'flex'} alignItems="center">
                  <Box>
                    <FilterCheckbox />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Kanit',
                        fontSize: '12px',
                        color: 'white',
                      }}
                    >
                      GOOD STANDING
                    </Typography>
                  </Box>
                </Box>
                <Box flex="1" display={'flex'} alignItems="center">
                  <Box>
                    <FilterCheckbox />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Kanit',
                        fontSize: '12px',
                        color: 'white',
                      }}
                    >
                      OVERDUE
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box marginTop={'10px'} display="flex">
                <Box flex="1" display={'flex'} alignItems="center">
                  <Box>
                    <FilterCheckbox />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Kanit',
                        fontSize: '12px',
                        color: 'white',
                      }}
                    >
                      DUE SOON
                    </Typography>
                  </Box>
                </Box>
                <Box flex="1" display={'flex'} alignItems="center">
                  <Box>
                    <FilterCheckbox />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Kanit',
                        fontSize: '12px',
                        color: 'white',
                      }}
                    >
                      INACTIVE
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Modal.Body>
          </Modal>
          {width > 700 ? (
            <Box display={'flex'} alignItems="center">
              <Box>
                <Box className={styles.inpBox}>
                  <input type="text" placeholder="Search nodes" className={styles.inpSearch} />
                  <IconButton aria-label="search" className={styles.btnSearch}>
                    <img src={imgSearch} alt="search" width="16px" height="16px" />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  minWidth: 100,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 0px',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #FFFFFF',
                  marginLeft: '40px',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '18px',
                    fontFamily: 'Kanit',
                    fontWeight: 300,
                  }}
                >
                  View All
                </Typography>
                <MdOutlineKeyboardArrowDown color="white" fontSize={22} />
              </Box>
            </Box>
          ) : (
            <Box>
              <IconButton aria-label="search" onClick={() => setSearchbar(!searchbar)}>
                <img src={imgSearch} alt="search" width="16px" height="16px" />
              </IconButton>
              <IconButton aria-label="filter" onClick={() => setShow(true)}>
                <img src={imgFilter} alt="search" width="16px" height="16px" />
              </IconButton>
            </Box>
          )}

          <Box display={'flex'} alignItems="center">
            <Box>
              <CustomButton paddingHorizontal={4} label={'claim all'} />
            </Box>
            <Box marginLeft={2}>
              <OutlinedButton paddingHorizontal={4} label={'pay all'} />
            </Box>
          </Box>
        </Box>
      </Box>

      {searchbar ? (
        <Box paddingX="20px" marginBottom={'20px'}>
          <SearchBar placeholder={'Search Node'} />
        </Box>
      ) : null}

      <ScrollArea speed={0.8} contentClassName="content" horizontal={false} style={{ height: '40vh' }}>
        <TableContainer
          // component={Paper}
          sx={{
            background: 'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
          }}
          style={{
            backgroundColor: 'transparent',
            borderRadius: '12px',
            width: '100%',
          }}
        >
          <Table
            sx={{
              minWidth: 700,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {width < 700 ? (
                  <TableCell
                    sx={{
                      fontWeight: '500',
                      color: 'rgba(151,155,172,0.5)',
                      fontFamily: 'Kanit',
                    }}
                  >
                    <BpCheckbox />
                  </TableCell>
                ) : null}
                <TableCell
                  sx={{
                    fontWeight: '500',
                    color: 'rgba(151,155,172,0.5)',
                    fontFamily: 'Kanit',
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Kanit',
                    color: 'rgba(151,155,172,0.5)',
                  }}
                >
                  Warrior
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    color: 'rgba(151,155,172,0.5)',
                    fontFamily: 'Kanit',
                  }}
                >
                  Date/Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Kanit',
                    color: 'rgba(151,155,172,0.5)',
                  }}
                >
                  Rewards
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Kanit',
                    color: 'rgba(151,155,172,0.5)',
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Kanit',
                    color: 'rgba(151,155,172,0.5)',
                  }}
                >
                  Tax
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontFamily: 'Kanit',
                    color: 'rgba(151,155,172,0.5)',
                  }}
                >
                  RPC
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.tbody}>
              {[1, 2, 3, 4, 5, 6, 7].map((v) => (
                <TableRow>
                  {width < 700 ? (
                    <TableCell
                      sx={{
                        fontWeight: '500',
                        color: 'rgba(151,155,172,0.5)',
                        fontFamily: 'Kanit',
                      }}
                    >
                      <BpCheckbox />
                    </TableCell>
                  ) : null}
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: 'white',
                        fontFamily: 'Kanit',
                        fontWeight: 300,
                      }}
                    >
                      galaxy2012
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems={'center'}>
                      <Box>
                        <img src={imgAvax} alt="AVAX" width={30} />
                      </Box>
                      <Box marginLeft={2}>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            color: 'white',
                            fontFamily: 'Trojan',
                            fontWeight: 400,
                          }}
                        >
                          ODIN
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: 'white',
                        fontFamily: 'Kanit',
                        fontWeight: 300,
                      }}
                    >
                      12/27/21, 8:55 AM
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: '#fff',
                        fontFamily: 'Kanit',
                        fontWeight: 300,
                      }}
                    >
                      .196
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display={'flex'} alignItems="center">
                      <Box
                        sx={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: '#32B267',
                          borderRadius: '50%',
                        }}
                      ></Box>
                      <Typography
                        variant="subtitle3"
                        component="div"
                        sx={{
                          color: 'white',
                          fontFamily: 'Kanit',
                          fontWeight: 300,
                          marginLeft: 1,
                        }}
                      >
                        15 DAYS LEFT
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: '#fff',
                        fontFamily: 'Kanit',
                        fontWeight: 300,
                      }}
                    >
                      40%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display={'flex'} alignItems="center" className={styles.boxxxx}>
                      <Box className={styles.tooltipContainer}>
                        <img src={imgAvax} alt="AVAX" width={'24px'} height={'24px'} />
                        <Box marginLeft={'3px'} marginTop="5px">
                          <MdOutlineKeyboardArrowDown fontSize={'18px'} color="white" />
                        </Box>
                      </Box>
                      <Box className={styles.tooltip}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img src={imgCopy} alt="copy" width="8px" height={'8px'} />
                          <p className={styles.copyTxt}>COPY</p>
                        </Box>
                        <p className={styles.para}>
                          https://rpc.thor.financial/node/c057e88a-4808-4b45-acc4-eb7464e70fba
                        </p>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '10px',
                          }}
                        >
                          <img src={imgCopy} alt="copy" width="8px" height={'8px'} />
                          <p className={styles.copyTxt}>COPIED</p>
                        </Box>
                        <p className={styles.para}>
                          https://rpc.thor.financial/node/c057e88a-4808-4b45-acc4-eb7464e70fba
                        </p>
                        <Box marginTop="10px">
                          <p className={styles.copyTxt} style={{ textAlign: 'center' }}>
                            HOW TO
                          </p>
                        </Box>
                      </Box>

                      <Box marginLeft={2}>
                        <OutlinedButton label="claim" />
                      </Box>

                      <Box marginLeft={2}>
                        <CustomButton label="pay fee" />
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollArea>
    </>
  );
};

export default InvestTable;
