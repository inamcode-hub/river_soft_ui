// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './lib/redux/Provider';
import RoutesConfig from './RoutesConfig';

// Render the main application wrapped in a router and provider
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Router>
        <RoutesConfig />
      </Router>
    </Provider>
  </React.StrictMode>
);
