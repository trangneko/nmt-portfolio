import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(144, 212, 244)",
      contrastText: "rgb(0, 25, 35)",
      light: "rgb(190, 233, 255)", 
      dark: "rgb(84, 153, 184)",
    },
    secondary: {
      main: "rgb(184, 206, 218)",
      contrastText: "rgb(3, 25, 34)",
      light: "rgb(208, 230, 242)", 
      dark: "rgb(127, 148, 159)", 
    },
    tertiary: {
      main: "rgb(205, 195, 255)",
      contrastText: "rgb(22, 11, 68)",
      light: "rgb(229, 222, 255)", 
      dark: "rgb(146, 137, 199)", 
    },
    error: {
      main: "rgb(255, 186, 177)",
      contrastText: "rgb(55, 0, 1)",
      light: "rgb(255, 84, 73)",
      dark: "rgb(255, 186, 177)", 
    },
    background: {
      default: "rgb(15, 20, 23)",
      paper: "rgb(27, 32, 35)",
    },
    text: {
      primary: "rgb(223, 227, 231)",
      secondary: "rgb(196, 204, 209)",
    },
    surfaceVariant: {
      main: "rgb(64, 72, 76)",
      contrastText: "rgb(196, 204, 209)",
    },
    outline: "rgb(156, 164, 169)",
    shadow: "rgb(0, 0, 0)",
    surfaceTint: "rgb(140, 207, 240)",
    scrim: "rgb(0, 0, 0)",
  },
  typography: {
    fontFamily: '"M PLUS Rounded 1c", "Noto Sans JP", Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', 
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          height: '2px', 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px', 
        },
      },
    }
  },
});

export default theme;
