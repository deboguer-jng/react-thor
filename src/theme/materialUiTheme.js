import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#65C988',
    },
    error: {
      main: '#c66065',
    },
    background: {
      main: '#000',
      primary: '#121212',
      secondary: '#292929',
      secondary2: '#000',
      input: '#000',
      // dialog: '#0A0A0A',
      dialog: '#1A1A1A',
      disabled: '#2F2F2F',
      hover: '#000',
      overlay: 'rgba(0,0,0,0.6)',
    },
    text: {
      primary: '#fff',
      secondary: '#C5C5C5',
      disabled: '#C5C5C5',
      placeholder: '#606060',
      title: '#fff',
    },
    border: {
      lightBorder: '#333',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#65C988',
    },
    error: {
      main: '#c66065',
    },
    background: {
      main: '#F5F5F5',
      primary: '#fff',
      secondary: '#F5F5F5',
      input: '#F5F5F5',
      dialog: '#fff',
      secondary2: '#fff',
      disabled: '#E2E2E2',
      hover: '#E5E5E5',
      overlay: 'rgba(0,0,0,0.6)',
    },
    text: {
      primary: '#000',
      secondary: '#666',
      disabled: '#B2B2B2',
      placeholder: '#B8B8B8',
      title: '#787A97',
    },
    border: {
      lightBorder: '#E7E8EA',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});
