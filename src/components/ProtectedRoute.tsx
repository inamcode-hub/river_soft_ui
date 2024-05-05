// ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PageLoading from './PageLoading';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <PageLoading />; 
  }

  if (error) {
    console.error('Auth0 error:', error);
    return <div>Error during authentication</div>; // Optionally handle errors more gracefully
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // This will render the nested routes if authenticated
};

export default ProtectedRoute;
