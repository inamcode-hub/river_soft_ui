// Import necessary modules
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import About from './pages/about/About';
import { Login } from '@mui/icons-material';

// Define some placeholder components for routes


// Define the RoutesConfig component
const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login/>} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
