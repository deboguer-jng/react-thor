import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Modal,
  useMediaQuery,
} from '@mui/material';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Nodes from '../../components/Dashboard/Node';
import MainCard from '../../components/Dashboard/Cards/MainCard';
import imgReward from '../../assets/images/svg/rewardIcon.svg';

import { DashboardCardRow, RewardsFile } from './RewardsFile';
import Boxes from '../../components/Boxes';
import { Clear } from '@mui/icons-material';

function Dashboard() {
  const [mainCard, setMainCard] = useState(-1);
  const mobileCardView = useMediaQuery('(max-width:500px)');

  return (
    <Layout>
      <Heading title={'dashboard'} />
      <DashboardCardRow
        children={[
          <RewardsFile
            title="Rewards"
            subTitle="test"
            number="1999"
            icon={imgReward}
            onClick={() => console.log('1st')}
          >
            <Boxes />
          </RewardsFile>,
          <RewardsFile
            title="Thor Price"
            subTitle="test"
            number="$1999"
            icon={imgReward}
          >
            <Boxes />
          </RewardsFile>,
          <RewardsFile
            title="My Nodes"
            subTitle={<Typography sx={{ color: '#fff' }}>test</Typography>}
            number="1999"
            icon={imgReward}
          >
            <Boxes />
          </RewardsFile>,
        ]}
      />

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
          }}
        >
          {mainCard >= 0 ? (
            mobileCardView ? (
              <Modal
                open
                sx={{
                  backgroundColor: 'rgba(13, 16, 27, 0.64)',
                  backdropFilter: 'blur(28px)',
                  overflow: 'scroll',
                }}
              >
                <Box
                  sx={{
                    paddingTop: '150px',
                    paddingBottom: '155px',
                    backgroundColor: 'rgba(13, 16, 27, 0.64)',
                    backdropFilter: 'blur(28px)',
                  }}
                >
                  <Clear
                    sx={{
                      top: '32px',
                      right: '32px',
                      position: 'absolute',
                      color: '#BB9D44',
                    }}
                    onClick={() => setMainCard(-1)}
                  />
                  <Nodes index={mainCard} />
                </Box>
              </Modal>
            ) : (
              <Nodes index={mainCard} />
            )
          ) : (
            <MainCard onClick={setMainCard} />
          )}
        </Box>
      </Container>
    </Layout>
  );
}

export default Dashboard;
