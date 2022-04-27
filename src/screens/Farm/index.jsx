import React, { useState } from 'react';

import { Container, Box, Typography, Button, Grid } from '@mui/material';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { HeadCardDesktop, HeadCardMobile } from '../../components/Farm/HeadCard';
import { BottomSectionDesktop, BottomSectionMobile } from '../../components/Farm/BottomSection';

const Farm = () => {
  return (
    <Layout>
      <Heading title={'farm'} />
      <Container maxWidth="lg">
        <HeadCardDesktop />
        <HeadCardMobile />
        <BottomSectionDesktop />
        <BottomSectionMobile />
      </Container>
    </Layout>
  );
};

export default Farm;
