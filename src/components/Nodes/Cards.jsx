import React from 'react';
import { Grid } from '@mui/material';
import imgCircle from '../../assets/images/cards/circle.png';
import imgHammer from '../../assets/images/cards/hammer.png';

const Cards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={6} xs={12}>
        <img src={imgCircle} width={'100%'} height={'100%'} alt="circle" />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <img src={imgCircle} width={'100%'} height={'100%'} alt="circle" />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <img src={imgHammer} width={'100%'} height={'100%'} alt="circle" />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <img src={imgCircle} width={'100%'} height={'100%'} alt="circle" />
      </Grid>
    </Grid>
  );
};

export default Cards;
