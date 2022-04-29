import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(2, 1),
    background: theme.palette.background.secondary,
  },
  navlink: {
    textDecoration: 'none',
    color: theme.palette.text.disabled,
    padding: theme.spacing(0, 1.5),
    textTransform: 'uppercase',
    '& .MuiTypography-body2': {
      letterSpacing: 5,
    },
    '& p': {
      opacity: '0.7',
    },
  },
  activeNavlink: {
    color: theme.palette.text.primary,
    '& p': {
      fontWeight: 'bold',
      opacity: '1',
    },
  },
  navTypography: {
    fontWeight: 600,
  },
  logo: {
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    background: theme.palette.background.secondary2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    '& img': {
      width: '100%',
    },
  },
}));
