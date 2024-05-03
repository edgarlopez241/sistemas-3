import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      text: {
        primary: '#ffffff',
      },
    },
    typography: {
      fontSize: 20,
      fontFamily: 'Roboto',
    },
  });
  

export default function Subscription() {
    return <PricingList />;
  }
