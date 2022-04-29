import React from 'react';
import { useEffect } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Dashboard from './screens/Dashboard';
import Investment from './screens/Investments';
import Nodes from './screens/Nodes';
import Farm from './screens/Farm';
import Faq from './screens/Faq';

import './App.css';

// Slick Carousel Css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { darkTheme, lightTheme } from './theme/materialUiTheme';
import { getLibrary } from './utils/web3ConnectFunctions';
// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/main.css';

import { useTheme } from './hooks';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.setProperty(
      `--mainBackground`,
      theme === 'light' ? lightTheme.palette.background.main : darkTheme.palette.background.main,
    );
  }, [theme]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Router>
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Investment />} path="/investment" />
            <Route element={<Nodes />} path="/nodes" />
            <Route element={<Farm />} path="/farm" />
            <Route element={<Faq />} path="/faq" />
          </Routes>
        </Router>
      </ThemeProvider>
    </Web3ReactProvider>
  );
};

export default App;
