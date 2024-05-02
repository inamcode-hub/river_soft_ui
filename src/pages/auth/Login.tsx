// Import necessary modules
import React from 'react';
import { TextField, Button, Grid, Link, Typography } from '@mui/material';
import CardWrapper from '../../lib/styles/CardWrapper';
import { styled } from '@mui/system';
const Home: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    <MainContainer>
   <CardWrapper>
    {/* ============Header========== */}
      <div className="header">
      <Typography variant="h1" className="title">
        Sign In
      </Typography>
      
      </div>
      {/* ============Header========== */}
      {/* ============Body========== */}
      <div className="body">
     
        <div className="content">
        <Typography variant="body2">
        New User ? <Link href="#">Create an account</Link>
      </Typography>
        <TextField
        label="Email Address"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <Typography variant="body2" align="right">
        <Link href="#">Forgot password?</Link>
      </Typography>
      </div>

      </div>
      {/* ============Body========== */}
      {/* ============Footer========== */}
      <div className="footer">
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Sign In
      </Button>
      </div>
      {/* ============Footer========== */}
    </CardWrapper>
</MainContainer>
  );
};

const MainContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .body{
    padding: 1rem 0;
    .content{
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
  }
`;
export default Home;

      
    
     