import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import imgNode from '../../assets/images/nodes.png';
import Cards from './Cards';

const HeadCard = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        borderRadius: '10px',
        background:
          'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
        padding: 4,
        marginBottom: 4,
      }}
    >
      <Box display="flex">
        <Box flex={1} display="flex" justifyContent={'space-between'}>
          <Box>
            <Box display={'flex'}>
              <img src={imgNode} alt="coin" width={40} height={40} />
              <Typography
                variant="h4"
                component="div"
                color={'white'}
                fontWeight={500}
                sx={{ fontFamily: 'Kanit', opacity: 0.5, marginLeft: 2 }}
              >
                My Nodes
              </Typography>
            </Box>
            <Container maxWidth="md" sx={{ marginTop: 2, marginLeft: 4 }}>
              <Typography
                variant="h1"
                gutterBottom
                component="div"
                sx={{
                  background:
                    'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
                  fontFamily: 'Kanit',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontStyle: 'normal',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                }}
              >
                8
              </Typography>
            </Container>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent="flex-end"
          >
            <Box marginBottom={2}>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: 20,
                }}
                fullWidth
              >
                claim all
              </Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: 20,
                }}
                fullWidth
              >
                Pay all fees
              </Button>
            </Box>
          </Box>
        </Box>
        <Box flex={1} paddingX={4}>
          <Cards />
        </Box>
      </Box>
    </Container>
  );
};

export default HeadCard;
