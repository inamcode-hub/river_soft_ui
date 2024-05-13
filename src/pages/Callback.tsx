import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../components/PageLoading';

const Callback: React.FC = () => {
  const { isLoading, isAuthenticated, error, user, getAccessTokenSilently } =
    useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      if (isLoading) return;

      if (isAuthenticated && user) {
        try {
          const accessToken = await getAccessTokenSilently();
          //  send access token to the server to authenticate the token and add the user to the database if the user does not exist.

          console.log(`Access Token: ${accessToken}`); // Log the access token
          console.log(`User Name: ${user.name}`); // Log the user's name
          console.log(`User Email: ${user.email}`); // Log the user's email
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
  }, [
    isLoading,
    isAuthenticated,
    user,
    error,
    getAccessTokenSilently,
    navigate,
  ]);

  return <PageLoading />;
};

export default Callback;
