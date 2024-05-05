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
import LayoutDashboard from './pages/dashboard/LayoutDashboard';
import Profile from './pages/dashboard/pages/profile/Profile';
import Settings from './pages/dashboard/pages/settings/Settings';

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="testpage" element={<TestPage />} /> 
        <Route path="callback" element={<Callback />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<LayoutDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
