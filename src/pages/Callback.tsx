import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../components/PageLoading';

const Callback: React.FC = () => {
  const { isLoading, isAuthenticated, error, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      if (isLoading) return;
      
      if (isAuthenticated) {
        try {
         
          const accessToken = await getAccessTokenSilently();
           console.log(`Access Token: ${accessToken}`); // Log the access token
          navigate('/dashboard');
        } catch (error) {
          console.error('Failed to fetch access token:', error);
        }
      }

      if (error) {
        console.error('Authentication error:', error);
      }
    };

    handleAuthentication();
  }, [isLoading, isAuthenticated, error, getAccessTokenSilently, navigate]);

  return (
    <PageLoading />
  );
};

export default Callback;
