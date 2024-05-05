// RoutesConfig.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Callback from './pages/Callback';
import TestPage from './pages/TestPage';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/NotFound';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='TestPage' element={<TestPage />} /> 
        <Route path="callback" element={<Callback />} />
        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
