import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import imgCard1 from '../../../assets/images/cards/box-card1.png';
import imgCard2 from '../../../assets/images/cards/box-card2.png';
import imgCard3 from '../../../assets/images/cards/box-card3.png';
import imgCard4 from '../../../assets/images/cards/box-card4.png';
import './styles.css';

const MainCard = ({ onClick }) => {
  const [hoveredItem, sethoveredItem] = useState(-1);

  return (
    <Grid container spacing={2} display="flex" justifyContent="space-around">
      {[
        { img: imgCard1 },
        { img: imgCard2 },
        { img: imgCard3 },
        { img: imgCard4 },
      ].map((item, index) => (
        <Grid
          item
          xl={3}
          lg={3}
          md={6}
          sm={6}
          xs={6}
          onMouseEnter={() => sethoveredItem(index)}
          onMouseLeave={() => sethoveredItem(-1)}
          onTouchStart={() => sethoveredItem(index)}
          sx={{ maxHeight: '100%' }}
        >
          <Box paddingY={8} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <Button
                sx={{ padding: 0 }}
                onClick={() => {
                  onClick(index);
                }}
                className={hoveredItem === index ? 'cardhovered' : undefined}
              >
                <img src={item.img} alt="card" width={'100%'} height="248px" />
              </Button>
              <div
                style={{ display: hoveredItem === index ? 'flex' : 'none' }}
                className={hoveredItem === index ? 'contentHovered' : undefined}
              >
                <Box display={'flex'} justifyContent="space-around">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: 'white',
                        fontFamily: 'Kanit',
                        fontSize: 12,
                        height: 18,
                      }}
                    >
                      COST
                    </Typography>
                    <Typography
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
                        height: 36,
                        fontSize: 24,
                      }}
                    >
                      12.5
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      className="divider"
                      sx={{
                        margin: 0,
                        color: '#424242',
                        minHeight: '35px',
                        fontWeight: 100,
                        width: '1px',
                        fontSize: '42px',
                        marginRight: '16px',
                        marginLeft: '16px',
                        transform: 'translateY(-8px)',
                      }}
                    >
                      |
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          color: 'white',
                          fontFamily: 'Kanit',
                          fontSize: 12,
                          height: 18,
                        }}
                      >
                        COST
                      </Typography>
                      <Typography
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
                          height: 36,
                          fontSize: 24,
                        }}
                      >
                        12.5
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCard;
