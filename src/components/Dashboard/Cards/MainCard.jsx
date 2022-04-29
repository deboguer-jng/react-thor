import React, { useState } from 'react';

import { Box, Grid, Button, Typography, IconButton } from '@mui/material';

import imgCard1 from '../../../assets/images/cards/box-card1.png';
import imgCard2 from '../../../assets/images/cards/box-card2.png';
import imgCard3 from '../../../assets/images/cards/box-card3.png';
import imgCard4 from '../../../assets/images/cards/box-card4.png';
import imgClose from '../../../assets/images/close.png';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Modal from 'react-bootstrap/Modal';
import OutlinedButton from '../../CustomButton/OutlinedButton';

import Slider from 'react-slick';

import styles from '../style.module.css';
import './slick.css';
import { getSelectedNode } from '../dashboard.utils';

var settings = {
  dots: false,
  arrows: false,
  infinite: false,
  className: 'center',
  centerMode: true,
  centerPadding: '0',
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const images = [imgCard1, imgCard2, imgCard3, imgCard4];

const MainCardDesktop = ({ onClick }) => {
  const handleClick = (index) => {
    onClick(index + 1);
  };
  return (
    <Box className={styles.parentMainContainer} sx={{ height: '380px' }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={3} key={index}>
            <Box className={styles.boxContainer}>
              <Button sx={{ padding: 0 }} onClick={() => handleClick(index)} className={styles.btnContainer}>
                <img src={image} alt="card" width={'176px'} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'white',
                      fontFamily: 'Kanit',
                      fontSize: '12px',
                      textAlign: 'left',
                      lineHeight: 1,
                    }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      lineHeight: 1,
                      background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                      fontFamily: 'Kanit',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      textFillColor: 'transparent',
                      fontStyle: 'normal',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      marginTop: '4px',
                      fontSize: '24px',
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ border: '1px solid #424242' }}></Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      lineHeight: 1,
                      color: 'white',
                      fontFamily: 'Kanit',
                      fontSize: '12px',
                    }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      lineHeight: 1,
                      background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                      fontFamily: 'Kanit',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      textFillColor: 'transparent',
                      fontStyle: 'normal',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      fontSize: '24px',
                      marginTop: '4px',
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={2}>
          <Grid item xs={3} className={styles.pmBoxes}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard1} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard2} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard3} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard4} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5S
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
       */}
    </Box>
  );
};

const MainCardMobile = ({ onClick, currentCard }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(2);
  const [total, setTotal] = useState(1);

  const increament = () => {
    if (total === '') {
      setTotal(1);
    } else {
      setTotal(parseInt(total) + 1);
    }
  };

  const decrement = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };

  const handleInput = (e) => {
    const re = /^[0-9\b]+$/;

    if (total !== '') {
      if (e.target.value === '' || re.test(e.target.value)) {
        setTotal(e.target.value);
      }
    } else {
      if (re.test(e.target.value)) {
        setTotal(e.target.value);
      }
    }
  };
  const onClose = () => {
    setShow(false);
    onClick(undefined);
  };
  const toggleModal = (index) => {
    setShow(true);
    onClick(index + 1);
  };
  const images = [imgCard1, imgCard2, imgCard3, imgCard4, imgCard3];

  const selectedNode = getSelectedNode(currentCard);
  return (
    <Box
      display={{
        xs: 'block',
        sm: 'block',
        md: 'block',
        lg: 'none',
      }}
      sx={{
        width: '100%',
        height: 'auto',
        background: 'linear-gradient(92.91deg,rgba(19, 22, 30, 0.76) 1.78%,rgba(19, 22, 30, 0.62) 99.64%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: '20px 0px',
        textAlign: 'center',
      }}
    >
      <Modal show={show} fullscreen={true} onHide={onClose}>
        <Modal.Body
          style={{
            background: 'rgba(13, 16, 27, 0.64)',
            padding: '0px 20px',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
        >
          <Box textAlign="right" marginTop={'20px'} marginRight="20px">
            <IconButton onClick={onClose}>
              <img src={imgClose} alt="close" width={'20px'} height="20px" />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              borderRadius: '50px',
              height: '30px',
              border: '1px solid #5C5C5C',
              display: 'flex',
              overflowX: 'hidden',
              marginTop: '30px',
            }}
          >
            {value === 0 ? (
              <Button
                fullWidth
                sx={{
                  background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                  color: 'white',
                  borderRadius: '0',
                  padding: '10px',
                  fontSize: '10px',
                }}
                size="small"
              >
                new
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: 'white', padding: '10px', fontSize: '10px' }}
                onClick={() => setValue(0)}
                size="small"
              >
                new
              </Button>
            )}

            {value === 1 ? (
              <Button
                fullWidth
                sx={{
                  background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                  color: 'white',
                  borderRadius: '0',
                  padding: '10px',
                  fontSize: '10px',
                }}
                size="small"
              >
                compound
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{
                  color: 'white',
                  padding: '10px',
                  fontSize: '10px',
                  borderLeft: '1px solid #5C5C5C',
                  borderRight: '1px solid #5C5C5C',
                  borderRadius: 0,
                }}
                onClick={() => setValue(1)}
                size="small"
              >
                compound
              </Button>
            )}

            {value === 2 ? (
              <Button
                fullWidth
                sx={{
                  background: 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
                  color: 'white',
                  borderRadius: '0',
                  padding: '10px',
                  fontSize: '10px',
                }}
                size="small"
              >
                combine
              </Button>
            ) : (
              <Button
                fullWidth
                sx={{ color: 'white', padding: '10px', fontSize: '10px' }}
                onClick={() => setValue(2)}
                size="small"
              >
                combine
              </Button>
            )}
          </Box>
          <Box marginTop={4}>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '21px',
              }}
            >
              Number of Nodes
            </Typography>

            <Box display={'flex'} alignItems="center" marginTop={4}>
              <Box flex={1} sx={{ textAlign: 'center' }}>
                <IconButton aria-label="remove" size="large" onClick={decrement}>
                  <RemoveIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>
              </Box>
              <Box
                flex={1}
                sx={{
                  width: '80px',
                  backgroundColor: '#23242C',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <input
                  type="text"
                  value={total}
                  onChange={handleInput}
                  style={{
                    width: '100%',
                    height: '103px',
                    backgroundColor: 'transparent',
                    border: 'transparent',
                    color: '#FFF4D1',
                    fontSize: '90px',
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Box flex={1} sx={{ textAlign: 'center' }}>
                <IconButton aria-label="delete" size="large" onClick={increament}>
                  <AddIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box marginTop={2}>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                textAlign: 'center',
                fontSize: '18px',
              }}
            >
              TOTAL
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontFamily: 'Kanit',
                textAlign: 'center',
                background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
                fontSize: '24px',
              }}
            >
              21.25 {selectedNode.name}
            </Typography>
          </Box>
          {total > 0 ? (
            <>
              {Array(parseInt(total))
                .fill(0)
                .map((v) => (
                  <input key={v} className={styles.appinput} placeholder="Name your node" />
                ))}
            </>
          ) : null}
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            {total > 1 ? (
              <OutlinedButton label="Create Nodes" paddingHorizontal="40px" paddingVertical="10px" fontSize="14px" />
            ) : (
              <OutlinedButton label="Create Node" paddingHorizontal="40px" paddingVertical="10px" fontSize="14px" />
            )}
          </Box>
        </Modal.Body>
      </Modal>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box paddingX={'5px'} paddingY="30px" key={index}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }} onClick={() => toggleModal(index)}>
              <Box className={styles.mainContainerMobile}>
                <img src={img} alt="thor" />
              </Box>
              <Box className={styles.hiddenContainerMobile}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '8px',
                      background: 'linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    COST
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '8px',
                      background: 'linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      background: 'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        {/* <Box paddingX={"5px"} paddingY="30px">
          <Box
            sx={{ width: "100%", height: "100%", position: "relative" }}
            onClick={() => setShow(true)}
          >
            <Box className={styles.mainContainerMobile}>
              <img src={imgCard1} alt="thor" />
            </Box>
            <Box className={styles.hiddenContainerMobile}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  COST
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REWARDS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingX={"5px"} paddingY="30px">
          <Box
            sx={{ width: "100%", height: "100%", position: "relative" }}
            onClick={() => setShow(true)}
          >
            <Box className={styles.mainContainerMobile}>
              <img src={imgCard2} alt="thir" />
            </Box>
            <Box className={styles.hiddenContainerMobile}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  COST
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REWARDS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingX={"5px"} paddingY="30px">
          <Box
            sx={{ width: "100%", height: "100%", position: "relative" }}
            onClick={() => setShow(true)}
          >
            <Box className={styles.mainContainerMobile}>
              <img src={imgCard3} alt="thor" />
            </Box>
            <Box className={styles.hiddenContainerMobile}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  COST
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REWARDS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingX={"5px"} paddingY="30px">
          <Box
            sx={{ width: "100%", height: "100%", position: "relative" }}
            onClick={() => setShow(true)}
          >
            <Box className={styles.mainContainerMobile}>
              <img src={imgCard4} alt="thir" />
            </Box>
            <Box className={styles.hiddenContainerMobile}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  COST
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REWARDS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box paddingX={"5px"} paddingY="30px">
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Box className={styles.mainContainerMobile}>
              <img src={imgCard4} alt="thir" />
            </Box>
            <Box className={styles.hiddenContainerMobile}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  COST
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "8px",
                    background:
                      "linear-gradient(180deg, #EEEEEE 0%, #D8D8D8 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REWARDS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  12.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Slider>
      {/* <Slider {...settings}>
        <Box paddingX={"5px"}>
          <Box>a</Box>
          <Box padding={4} className={styles.btnContainerMobile}>
            <Button
              sx={{ padding: 0 }}
              onClick={handleClick}
              className={styles.btnContainer}
            >
              <img src={imgCard1} alt="card" width={"120px"} height="160px" />
            </Button>
            <Box className={styles.childContainer}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", fontFamily: "Kanit" }}
                >
                  COST
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    fontFamily: "Kanit",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    textFillColor: "transparent",
                    fontStyle: "normal",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                    marginTop: "-10px",
                  }}
                >
                  12.5
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", fontFamily: "Kanit" }}
                >
                  REWARDS
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    background:
                      "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                    fontFamily: "Kanit",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    textFillColor: "transparent",
                    fontStyle: "normal",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                    marginTop: "-10px",
                  }}
                >
                  .144
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider> */}
    </Box>
  );
};

export { MainCardDesktop, MainCardMobile };
