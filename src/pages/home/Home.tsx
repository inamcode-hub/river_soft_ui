// Import necessary modules
import React from 'react';
import { Button, Box, Typography } from '@mui/material'; // Use Typography for themed text

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h1">Home Page</Typography>
      <Button color="primary">Click Me</Button>
    </Box>
  );
};

export default Home;
