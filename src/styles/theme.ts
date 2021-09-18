import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#37474F'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
});
