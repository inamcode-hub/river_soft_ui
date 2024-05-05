import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const LayoutDashboard: React.FC = () => {
  return (
    <div>
       <Navbar  />
      <Outlet />
    </div>
  );
};

export default LayoutDashboard;