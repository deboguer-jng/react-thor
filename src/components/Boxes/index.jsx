import React from 'react';
import imgNode1 from '../../assets/images/cards/nodeCard1.png';
import imgNode2 from '../../assets/images/cards/nodeCard2.png';
import imgNode3 from '../../assets/images/cards/nodeCard3.png';
import imgNode4 from '../../assets/images/cards/nodeCard4.png';
import { Grid, Paper } from '@mui/material';
import styles from './style.module.css';
const Boxes = ({ hideHover }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(4)).map((_, index) => (
        <Grid item xs={3} key={index}>
          <div className={styles.mainContainer}>
            <div className={styles.spidercard}>
              <img
                src={index === 0 ? imgNode2 : index === 1 ? imgNode3 : index === 2 ? imgNode1 : imgNode4}
                alt="cards"
                width={'auto'}
                height={'50px'}
              />
              {hideHover ? (
                <div className={styles.spidernumber}>1</div>
              ) : (
                <div className={styles.spidernumber}>2.113</div>
              )}
            </div>
            {!hideHover ? <div className={styles.hideBtn}>Collect</div> : null}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Boxes;
