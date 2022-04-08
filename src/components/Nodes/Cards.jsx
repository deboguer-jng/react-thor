import React from "react";

import { Box, Grid } from "@mui/material";

import imgCircle from "../../assets/images/cards/circle.png";
import imgHammer from "../../assets/images/cards/hammer.png";

import imgNodeCard1 from "../../assets/images/cards/nodeCard1.png";
import imgNodeCard2 from "../../assets/images/cards/nodeCard2.png";
import imgNodeCard3 from "../../assets/images/cards/nodeCard3.png";

import styles from "./style.module.css";

const Cards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={6} xs={12}>
        <Box className={styles.mainBox}>
          <img src={imgNodeCard1} width={"90%"} alt="circle" />
          <p
            style={{
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: "33px",
              color: "white",
            }}
          >
            1
          </p>
        </Box>
        <Box className={styles.hoverContent}>
          <Box>
            <p>PAY</p>
            <p>FEE</p>
          </Box>
          <Box>
            <p>CLAIM</p>
            <p>REWARDS</p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <Box className={styles.mainBox}>
          <img src={imgNodeCard2} width={"90%"} alt="circle" />
          <p
            style={{
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: "33px",
              color: "white",
            }}
          >
            1
          </p>
        </Box>
        <Box className={styles.hoverContent}>
          <Box>
            <p>PAY</p>
            <p>FEE</p>
          </Box>
          <Box>
            <p>CLAIM</p>
            <p>REWARDS</p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <Box className={styles.mainBox}>
          <img src={imgNodeCard3} width={"90%"} alt="circle" />
          <p
            style={{
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: "33px",
              color: "white",
            }}
          >
            1
          </p>
        </Box>
        <Box className={styles.hoverContent}>
          <Box>
            <p>PAY</p>
            <p>FEE</p>
          </Box>
          <Box>
            <p>CLAIM</p>
            <p>REWARDS</p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <Box className={styles.mainBox}>
          <img src={imgNodeCard1} width={"90%"} alt="circle" />
          <p
            style={{
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: "33px",
              color: "white",
            }}
          >
            1
          </p>
        </Box>
        <Box className={styles.hoverContent}>
          <Box>
            <p>PAY</p>
            <p>FEE</p>
          </Box>
          <Box>
            <p>CLAIM</p>
            <p>REWARDS</p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cards;
