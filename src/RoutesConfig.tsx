// RoutesConfig.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Callback from './pages/Callback';
import TestPage from './pages/TestPage';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='TestPage' element={<TestPage />} /> 
        <Route path="callback" element={<Callback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
