import React from 'react';
import { Typography, Card, CardContent, CardActions, Container, } from '@mui/material';
import LogoutButton from '../../components/LogoutButton';
import { Box } from '@mui/system';

const About: React.FC = () => {
  // container margin top 2

  return (
    <Box  sx={{marginTop: 2}}>
    <Container maxWidth="sm"  >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            This is your dashboard page. You can only see this page if you are logged in.
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            All business logic is handled in the backend, and the frontend is only responsible for rendering the data.
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            Only authenticated users can access this page.
          </Typography>
        </CardContent>
        <CardActions>
            <LogoutButton />
        
        </CardActions>
      </Card>
    </Container>
    </Box>
  );
};

export default About;
