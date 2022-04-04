import React, { useState } from 'react';
import Spider from '../../assets/images/spider.png';
import { Grid } from '@mui/material';
import './style.css';

const Boxes = ({}) => {
  const [hoveredItem, sethoveredItem] = useState(-1);
  return (
    <Grid container spacing={2}>
      {Array.from(Array(4)).map((_, index) => (
        <Grid
          item
          xs={3}
          key={index}
          maxHeight="120px"
          onMouseEnter={() => sethoveredItem(index)}
          onMouseLeave={() => sethoveredItem(-1)}
          onTouchStart={() => sethoveredItem(index)}
        >
          <div className={hoveredItem === index ? 'actionhovered' : 'action'}>
            <p
              onClick={() => console.log('tab pressed collect', index)}
              className="collectBtn"
            >
              Collect
            </p>
          </div>
          <div
            className={hoveredItem === index ? 'spidercardhover' : 'spidercard'}
          >
            <img src={Spider} alt="alt" width={'60%'} height={'60%'} />
            <div className="spidernumber">2.113</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Boxes;
