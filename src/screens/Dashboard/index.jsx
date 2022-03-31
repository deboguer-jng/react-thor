import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Card from '../../components/Dashboard/Card';
import Nodes from '../../components/Dashboard/Node';
import MainCard from '../../components/Dashboard/Cards/MainCard';
import imgGraph from '../../assets/images/updown-graph.png';

function Dashboard() {
  const [mainCard, setMainCard] = useState(false);

  return (
    <Layout>
      <Heading title={'dashboard'} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Card title="Rewards" number="32.111" />
          <Card
            title="Thor Price"
            noBoxes={true}
            number="$35.60"
            image={imgGraph}
          />
          <Card title="My Nodes" number="8" />
        </Grid>
      </Container>
      <Box marginY={8}>
        <Heading title={'create node'} />
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            background:
              'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
            borderRadius: '20px',
            paddingX: '40px',
            paddingY: '20px',
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
