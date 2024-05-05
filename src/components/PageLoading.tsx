import React from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';

const PageLoading: React.FC = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '0 16px'  // Adjust padding as needed
        }}>
            <CircularProgress size={60} thickness={4} color="primary" sx={{ marginBottom: 2 }} /> {/* Adjust size and thickness for visibility */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Loading, please wait...
            </Typography>
            {/* Optional: Add a subtext if needed */}
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Sit tight while we get everything ready for you.
            </Typography>
        </Container>
    );
};

export default PageLoading;
