import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  useMediaQuery,
} from '@mui/material';
import imgCard1 from '../../../assets/images/cards/box-card1.png';
import imgCard2 from '../../../assets/images/cards/box-card2.png';
import imgCard3 from '../../../assets/images/cards/box-card3.png';
import imgCard4 from '../../../assets/images/cards/box-card4.png';
import './style.css';
import CollectButton from '../../CustomButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CreateNode = ({ index }) => {
  const [value, setValue] = useState([]);
  const [total, setTotal] = useState(0);
  const images = [
    { img: imgCard1 },
    { img: imgCard2 },
    { img: imgCard3 },
    { img: imgCard4 },
  ];
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOnChange = (v, index) => {
    setValue([
      ...value.slice(0, index),
      v,
      ...value.slice(index + 1, value.length),
    ]);
  };
  const getInputSections = (total) => {
    let content = [];

    for (let index = 0; index < total; index++) {
      content.push(
        <input
          className="appinput"
          placeholder="Name your node"
          value={value[index]}
          onChange={(e) => {
            handleOnChange(e.target.value, index);
          }}
        />,
      );
    }
    return content;
  };
  const mobileCardView = useMediaQuery('(max-width:500px)');

  return (
    <Grid container display="flex" justifyContent="space-around">
      {!mobileCardView && (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          display="flex"
          alignItems="center"
        >
          <Box flex={1} sx={{ textAlign: 'center' }}>
            <Button padding={0}>
              <img src={images[index].img} alt="card" height="265px" />
            </Button>
          </Box>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        display="flex"
        maxWidth="xl"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          minWidth="340px"
          maxWidth="360px"
          sx={{
            borderRadius: '20px',
            border: '1px solid white',
            display: 'flex',
            overflow: 'hidden',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.64)',
            minHeight: '32px',
            maxHeight: '32px',
            marginTop: '32px',
            justifyContent: 'center',
          }}
        >
          <Grid container display="flex" justifyContent="space-around">
            <Grid
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#fff',
                background:
                  selectedOption === 0
                    ? 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)'
                    : 'transparent',
              }}
              onClick={() => setSelectedOption(0)}
              item
            >
              <Button
                sx={{
                  flex: 1,
                  maxHeight: '32px',
                  color: '#fff',
                }}
              >
                NEW
              </Button>
            </Grid>
            <Grid
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#fff',
                background:
                  selectedOption === 1
                    ? 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)'
                    : 'transparent',
              }}
              onClick={() => setSelectedOption(1)}
              item
            >
              <Button
                sx={{
                  padding: 0,
                  fontSize: '12px',
                  borderLeft: '1px solid #ccc',
                  borderRight: '1px solid #ccc',
                  borderRadius: 0,
                  flex: 1,
                  maxHeight: '32px',
                  color: '#fff',
                }}
              >
                COMPOUND
              </Button>
            </Grid>
            <Grid
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#fff',
                background:
                  selectedOption === 2
                    ? 'linear-gradient(91.33deg, #2E62FF 19.49%, #4A28DE 88.25%)'
                    : 'transparent',
              }}
              onClick={() => setSelectedOption(2)}
              item
            >
              <Button
                sx={{
                  flex: 1,
                  maxHeight: '32px',
                  color: '#fff',
                }}
              >
                COMBINE
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={4}>
          <Typography
            variant="h6"
            sx={{ color: 'white', fontFamily: 'Kanit', textAlign: 'center' }}
          >
            Number of Nodes
          </Typography>

          <Box display={'flex'} alignItems="center" marginTop={4}>
            <Box flex={1} sx={{ textAlign: 'center' }}>
              <IconButton
                aria-label="remove"
                size="large"
                onClick={() => {
                  if (total > 0) setTotal(total - 1);
                }}
              >
                <RemoveIcon
                  sx={{
                    color: total > 0 ? 'white' : 'rgba(255, 255, 255, 0.4)',
                  }}
                  fontSize="large"
                />
              </IconButton>
            </Box>
            <Box
              flex={1}
              sx={{
                backgroundColor: '#23242C',
                borderRadius: '10px',
                minHeight: '100px',
                minWidth: '84px',
                maxHeight: '100px',
                maxWidth: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontFamily: 'Kanit',
                  textAlign: 'center',
                  background:
                    'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {total}
              </Typography>
            </Box>
            <Box flex={1} sx={{ textAlign: 'center' }}>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => setTotal(total + 1)}
              >
                <AddIcon sx={{ color: 'white' }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box marginTop={2}>
          <Typography
            variant="h6"
            sx={{ color: 'white', fontFamily: 'Kanit', textAlign: 'center' }}
          >
            TOTAL
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontFamily: 'Kanit',
              textAlign: 'center',
              background:
                'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
              marginBottom: '13px',
            }}
          >
            21.25 THOR
          </Typography>
        </Box>
      </Grid>
      <Box
        flex={2}
        paddingX={2}
        paddingY={4}
        maxHeight="372px"
        paddingRight="16px"
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontFamily: 'Kanit',
            fontWeight: 600,
            opacity: 0.6,
          }}
        >
          Step 1 of 2
        </Typography>
        <Box overflow="auto" maxHeight={'210px'}>
          {getInputSections(total)?.map((i) => i)}
        </Box>
        {total > 0 && (
          <Box
            sx={{
              textAlign: 'right',
              marginTop: 2,
              justifyContent: mobileCardView ? 'center' : undefined,
              display: mobileCardView ? 'flex' : undefined,
            }}
          >
            <CollectButton label="APPROVE CONTRACT" />
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default CreateNode;
