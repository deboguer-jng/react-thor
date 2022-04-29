import React from 'react';

import { Box } from '@mui/system';
import Layout from '../../components/Layout';
import { Container } from '@mui/material';
import Heading from '../../components/Heading';
import HeadCard from '../../components/Nodes/HeadCard';
import InvestTable from '../../components/Nodes/Table';

const Nodes = () => {
  return (
    <Layout>
      <Heading title={'my nodes'} />
      <HeadCard />
      <InvestTable />
    </Layout>
  );
};

export default Nodes;
