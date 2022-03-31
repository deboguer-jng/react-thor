import React from 'react';
import Spider from '../../assets/images/spider.png';
import { Grid } from '@mui/material';
import './style.css';

const Boxes = ({ Src }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={3} key={index}>
          <div className="spidercard">
            <img src={Spider} alt="alt" width={'100%'} height={'100%'} />
            <div className="spidernumber">2.113</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Boxes;
