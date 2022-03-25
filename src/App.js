import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// pages 
import Dashboard from './screens/Dashboard';
import Investment from './screens/Investments';
import Nodes from './screens/Nodes';

import './App.css';


const App = () => {
  return (

    <Router>

      <Routes>

        <Route element={<Dashboard />} path="/" />
        <Route element={<Investment />} path="/investment" />
        <Route element={<Nodes />} path="/nodes" />


      </Routes>

    </Router>
  );
}

export default App;
