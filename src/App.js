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
import Farm from './screens/Farm';
import Faq from './screens/Faq';

import './App.css';

// Slick Carousel Css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (

    <Router>

      <Routes>

        <Route element={<Dashboard />} path="/" />
        <Route element={<Investment />} path="/investment" />
        <Route element={<Nodes />} path="/nodes" />
        <Route element={<Farm />} path="/farm" />
        <Route element={<Faq />} path="/faq" />

      </Routes>

    </Router>
  );
}

export default App;
