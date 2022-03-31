import React from 'react';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import HeadCard from '../../components/Nodes/HeadCard';
import InvestTable from '../../components/Nodes/Table';
import { Container } from '@mui/material';

const Nodes = () => {
  return (
    <Layout>
      <Heading title={'my nodes'} />
      <Container maxWidth="xl">
        <HeadCard />
        <InvestTable />
      </Container>
    </Layout>
  );
};

export default Nodes;
