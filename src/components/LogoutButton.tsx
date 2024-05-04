import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

import { LogoutOptions } from '@auth0/auth0-react';

const LogoutButton: React.FC  = () => {
    const { logout } = useAuth0();

    return (
        <Button variant="contained" color="primary" fullWidth onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>
            Log Out
        </Button>
    );
};

export default LogoutButton;
