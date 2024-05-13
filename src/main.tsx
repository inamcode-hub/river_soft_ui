// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material'; // Import GlobalStyles from @mui/material
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import theme from './lib/styles/theme'; // Custom theme
import Provider from './lib/redux/Provider';
import RoutesConfig from './RoutesConfig';
import { globalStyles } from './lib/styles/GlobalStyles'; // Import global styles
import './lib/styles/index.css';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} /> {/* Use global styles */}
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: `${window.location.origin}/callback`,
            audience: `https://${domain}/api/v2/`,
            scope: 'openid profile email',
          }}
        >
          <Router>
            <RoutesConfig />
          </Router>
        </Auth0Provider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
