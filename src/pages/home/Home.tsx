// Import necessary modules
import React from 'react';
import { Button, Box, Typography } from '@mui/material'; // Use Typography for themed text

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h1">Home Page</Typography>
      <Typography variant="h2">Home Page</Typography>
      <Typography variant="h3">Home Page</Typography>
      <Typography variant="h4">Home Page</Typography>
      <Typography variant="h4">Home Page</Typography>
      <Typography variant="h5">Home Page</Typography>
      <Typography variant="body1">Welcome to the Home Page!</Typography>
      <br />
      <Typography variant="body2">Click the button below:</Typography>

      <Button color="primary">Click Me</Button>
      <Button color="secondary">Click Me</Button>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">Click Me</Button>
      <Button variant="contained" color="primary">Click Me</Button>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">Click Me</Button>
      <Button variant="outlined" color="primary">Click Me</Button>
      <Button variant="text">Click Me</Button>
    </Box>
  );
};

export default Home;
