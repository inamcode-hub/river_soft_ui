import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutOptions } from '@auth0/auth0-react';

const LogoutButton: React.FC = () => {
    const { logout } = useAuth0();

    
    const returnToUrl = import.meta.env.VITE_APP_ENV ? window.location.origin : import.meta.env.VITE_VERCEL_URL + '/';

    return (
        <Button variant="contained" color="primary" onClick={() => logout({ returnTo: returnToUrl } as LogoutOptions)}>
            Log Out
        </Button>
    );
};

export default LogoutButton;
