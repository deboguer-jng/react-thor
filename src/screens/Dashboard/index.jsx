import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Card from "../../components/Dashboard/Card";
import Nodes from "../../components/Dashboard/Node";
import MainCard from "../../components/Dashboard/Cards/MainCard";

import imgGraph from "../../assets/images/updown-graph.png";
import imgCup from "../../assets/images/cup.png";
import imgDollar from "../../assets/images/dollar.png";
import imgEarth from "../../assets/images/earth.png";

function Dashboard() {
  const [mainCard, setMainCard] = useState(false);

  return (
    <Layout>
      <Box marginY={"20px"}>
        <Heading title={"dashboard"} />
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Card
            title="Rewards"
            number="32.111"
            btnLabel="collect all"
            icon={imgCup}
          />
          <Card
            title="Thor Price"
            noBoxes={true}
            number="$35.60"
            image={imgGraph}
            icon={imgDollar}
            btnLabel="view chart"
          />
          <Card
            title="My Nodes"
            number="8"
            btnLabel="view nodes"
            icon={imgEarth}
            hideHover={true}
          />
        </Grid>
      </Container>
      <Box marginY={"20px"}>
        <Heading title={"create node"} />
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            background:
              "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.48)",
            borderRadius: "20px",
            paddingX: "40px",
            paddingY: "10px",
          }}
        >
          {mainCard ? (
            <Nodes onClick={setMainCard} />
          ) : (
            <MainCard onClick={setMainCard} />
          )}
        </Box>
      </Container>
    </Layout>
  );
}

export default Dashboard;
