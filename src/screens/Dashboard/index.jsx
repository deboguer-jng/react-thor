import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Card from "../../components/Dashboard/Card";
import Nodes from "../../components/Dashboard/Node";
import {
  MainCardDesktop,
  MainCardMobile,
} from "../../components/Dashboard/Cards/MainCard";

import imgGraph from "../../assets/images/updown-graph.png";
import imgCup from "../../assets/images/cup.png";
import imgDollar from "../../assets/images/dollar.png";
import imgEarth from "../../assets/images/earth.png";

import Slider from "react-slick";

import styles from "../../components/Dashboard/style.module.css";
import "./slick.css";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  dotsClass: "button__bar",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Dashboard() {
  const [mainCard, setMainCard] = useState(false);

  return (
    <Layout>
      <Box marginY={"20px"}>
        <Heading title={"dashboard"} />
      </Box>
      <Container maxWidth="xl">
        <Slider {...settings}>
          <Box paddingX={"10px"}>
            <Card
              title="Rewards"
              number="32.111"
              btnLabel="collect all"
              icon={imgCup}
            />
          </Box>
          <Box paddingX={"10px"}>
            <Card
              title="Thor Price"
              noBoxes={true}
              number="$35.60"
              image={imgGraph}
              icon={imgDollar}
              btnLabel="view chart"
            />
          </Box>
          <Box paddingX={"10px"}>
            <Card
              title="My Nodes"
              number="8"
              btnLabel="view nodes"
              icon={imgEarth}
              hideHover={true}
            />
          </Box>
        </Slider>
      </Container>
      <Box marginY={"20px"}>
        <Heading title={"create node"} />
      </Box>

      <Container maxWidth="xl">
        <MainCardMobile />
        <Box
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          }}
          className={styles.mainContainer}
        >
          {mainCard ? (
            <Nodes onClick={setMainCard} />
          ) : (
            <MainCardDesktop onClick={setMainCard} />
          )}
        </Box>
      </Container>
    </Layout>
  );
}

export default Dashboard;
