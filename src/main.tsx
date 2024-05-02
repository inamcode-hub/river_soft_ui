// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material'; // Import GlobalStyles from @mui/material
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './lib/styles/theme'; // Custom theme
import Provider from './lib/redux/Provider';
import RoutesConfig from './RoutesConfig';
import { globalStyles } from './lib/styles/GlobalStyles'; // Import global styles
import './lib/styles/index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />  {/* Use global styles */}
        <Router>
          <RoutesConfig />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
