// Import necessary modules
import { createTheme } from '@mui/material/styles';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6347', // Tomato color
    },
    secondary: {
      main: '#4CAF50', // Green color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font family
    h1: {
      fontSize: '2rem', // Custom H1 font size
    },
  },
  components: {
    // Example: Customize MUI Button component styling
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Rounded corners for buttons
        },
      },
    },
  },
});

export default theme;
