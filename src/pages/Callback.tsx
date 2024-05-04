import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

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
          navigate('/about');
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
    <div>
      {/* You can add a loading indicator here if needed */}
      Loading...
    </div>
  );
};

export default Callback;
