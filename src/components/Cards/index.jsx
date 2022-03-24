import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import shape from '../../assets/Shape.png'
import subtract from '../../assets/Subtract.png'
import CollectButton from '../Button'

const CardDouble = ({ title, src, image }) => {
  return (
    <Paper
      style={{
        background:
          'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)'
      }}
      sx={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
        borderRadius: '10px',
        padding: 2
      }}
      elevation={1}
    >
      <Grid style={{ justifyContent: 'space-between', display: 'flex' }}>
        <Box style={{ display: 'flex' }}>
          <Box style={{ position: 'relative', display: 'flex' }}>
            <img src={shape} alt='img' />
            <img
              style={{ position: 'absolute', top: 15, left: 11 }}
              src={subtract}
              alt='img'
            />
          </Box>
          <Typography
            variant='h5'
            component='div'
            style={{
              color: 'white',
              fontFamily: 'Kanit',
              fontStyle: 'normal',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '30px',
              margin: 10
            }}
          >
            {title}
          </Typography>
        </Box>
        <CollectButton />
      </Grid>
      <img src={src} alt='img' />
      <img
        src={image}
        alt='img'
        height={'109.95px'}
        width={'320.68px'}
        style={{ left: '463px' }}
      />
    </Paper>
  )
}

export default CardDouble
