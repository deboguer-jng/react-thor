import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Investment from './screens/Investments';
import Nodes from './screens/Nodes';
import Farm from './screens/Farm';
import Faq from './screens/Faq';
import './App.css';
import { MainContextWrapper } from './Foundation/Main.context';

const App = () => {
  return (
    <MainContextWrapper>
      <Router>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Investment />} path="/investment" />
          <Route element={<Nodes />} path="/nodes" />
          <Route element={<Farm />} path="/farm" />
          <Route element={<Faq />} path="/faq" />
        </Routes>
      </Router>
    </MainContextWrapper>
  );
};

export default App;
