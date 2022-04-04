import {
  Card,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomButton from '../../components/CustomButton';

export function DashboardCardRow({ children }) {
  const mobileCardView = useMediaQuery('(max-width:500px)');
  const styles = {
    root: {
      display: 'inline-flex',
      minWidth: '100%',
      justifyContent: 'space-between',
    },
  };
  return (
    <Container maxWidth="xl">
      <Grid
        container
        flexDirection={mobileCardView ? 'column' : 'row'}
        style={styles.root}
        spacing={3}
        justifyContent="space-between"
      >
        {children.map((child) => child)}
      </Grid>
    </Container>
  );
}
export function RewardsFile({
  title,
  number,
  subTitle,
  icon,
  children,
  onClick,
}) {
  const mobileCardView = useMediaQuery('(max-width:500px)');
  const styles = {
    card: {
      minWidth: mobileCardView && '90vw',
      maxWidth: mobileCardView ? '341px' : '398px',
      minHeight: '230px',
      maxHeight: '268px',
      background:
        'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.48)',
      borderRadius: '10px',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '24px',
      paddingBottom: '18px',
      width: '100%',
      height: '100%',
    },
    subTitle: {
      background:
        'linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);',
      fontFamily: 'Kanit',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      fontStyle: 'normal',
      WebkitTextFillColor: 'transparent',
      fontWeight: 600,
      fontSize: '48px',
      maxHeight: '49px',
    },
    iconBox: {
      width: mobileCardView ? '34px' : '40px',
      height: mobileCardView ? '34px' : '40px',
      borderRadius: 15,
      backgroundColor: '#333746',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    icon: {
      width: mobileCardView ? '11px' : '20px',
      height: mobileCardView ? '11px' : '20px',
    },
    title: {
      color: 'white',
      fontFamily: 'Kanit',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '30px',
      opacity: 0.5,
      fontSize: '20px',
      maxHeight: '21px',
    },
    inline: { justifyContent: 'space-between', display: 'flex' },
  };
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={styles.card}>
        <Grid style={styles.inline} flexDirection={{ xs: 'row' }}>
          <Box style={{ display: 'flex' }}>
            <Box style={styles.iconBox}>
              <img style={styles.icon} src={icon} alt="img" />
            </Box>
            <Box marginLeft={'16px'} marginTop="4px">
              <Typography variant="h6" component="div" style={styles.title}>
                {title}
              </Typography>
              <Typography variant="h4" sx={styles.subTitle}>
                {number}
              </Typography>
              <Box variant="p">{subTitle}</Box>
            </Box>
          </Box>
          <Box marginTop="6px">
            <CustomButton label="collect all" onClick={onClick} />
          </Box>
        </Grid>
        <Box marginTop="18px">{children}</Box>
      </Card>
    </Grid>
  );
}
