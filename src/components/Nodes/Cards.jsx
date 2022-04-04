import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import imgCircle from '../../assets/images/cards/circle.png';
import imgHammer from '../../assets/images/cards/hammer.png';
import { Box, width } from '@mui/system';
import './styles.css';
const Cards = () => {
  const data = [
    {
      img: imgCircle,
      count: 8,
    },
    {
      img: imgCircle,
      count: 2,
    },
    {
      img: imgHammer,
      count: 3,
    },
    {
      img: imgCircle,
      count: 5,
    },
  ];
  const [hoveredItem, sethoveredItem] = useState(-1);

  return (
    <Grid container spacing={2} style={{ paddingBottom: 100 }}>
      {data.map((d, index) => (
        <Grid
          item
          xs={6}
          lg={3}
          key={index}
          onMouseEnter={() => sethoveredItem(index)}
          onMouseLeave={() => sethoveredItem(-1)}
          onTouchStart={() => sethoveredItem(index)}
        >
          <div className={hoveredItem === index ? 'nactionhovered' : 'naction'}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '6px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'Kanit',
                    fontSize: 10,
                    height: 11,
                    textTransform: 'uppercase',
                  }}
                  style={{
                    width: '50%',
                  }}
                >
                  Pay fees
                </Typography>
              </div>
              <div
                style={{
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 6,
                }}
              >
                <Typography
                  className="divider"
                  sx={{
                    margin: 0,
                    color: '#424242',
                    minHeight: '19px',
                    fontWeight: 100,
                    width: '1px',
                    fontSize: '24px',
                    transform: 'translateY(8px)',
                  }}
                >
                  |
                </Typography>
              </div>
              <div
                style={{
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'Kanit',
                    fontSize: 10,
                    height: 11,
                    textTransform: 'uppercase',
                  }}
                  style={{
                    width: '100%',
                    marginRight: 16,
                  }}
                >
                  CLAIM Rewards
                </Typography>
              </div>
            </div>
          </div>
          <div
            className={
              hoveredItem === index ? 'nspidercardhover' : 'nspidercard'
            }
          >
            <Box
              display="flex"
              flexDirection="column"
              className={hoveredItem === index ? 'ncardhovered' : undefined}
              width={'129px'}
              height={'174px'}
            >
              <img src={d.img} width={'129px'} height={'174px'} alt="circle" />
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  display: 'flex',
                  justifyContent: 'space-around',
                  color: '#fff',
                  transform: 'translateY(-44px)',
                }}
              >
                {d.count}
              </Typography>
            </Box>
          </div>
        </Grid>
        // <Grid
        //   item
        //   xl={3}
        //   sm={6}
        //   display="flex"
        //   justifyContent="center"
        //   onMouseEnter={() => sethoveredItem(index)}
        //   onMouseLeave={() => sethoveredItem(-1)}
        //   onTouchStart={() => sethoveredItem(index)}
        // >
        // <Box display="flex" flexDirection="column">
        //   <Box
        //     display="flex"
        //     flexDirection="column"
        //     className={hoveredItem === index ? 'cardhovered' : undefined}
        //   >
        //     <img src={d.img} width={'129px'} height={'174px'} alt="circle" />
        //     <Typography
        //       sx={{
        //         fontSize: '24px',
        //         fontWeight: 500,
        //         display: 'flex',
        //         justifyContent: 'space-around',
        //         color: '#fff',
        //         transform: 'translateY(-44px)',
        //       }}
        //     >
        //       {d.count}
        //     </Typography>
        //   </Box>
        //   </Box>
        // </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
