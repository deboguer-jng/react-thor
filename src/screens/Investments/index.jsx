import React from 'react';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import HeadCard from '../../components/Investments/HeadCard';
import InvestTable from '../../components/Investments/Table';
import { Container } from '@mui/material';

const Investments = () => {
  return (
    <Layout>
      <Heading title={'investments'} />
      <Container maxWidth="xl">
        <HeadCard />
        <InvestTable />
      </Container>
    </Layout>
  );
};

export default Investments;
