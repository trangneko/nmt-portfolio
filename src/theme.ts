import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0 74 137)",
      contrastText: "rgb(255 255 255)",
      light: "rgb(0 110 200)", 
      dark: "rgb(255 255 255)",
    },
    secondary: {
      main: "rgb(71 95 131)",
      contrastText: "rgb(255 255 255)",
      light: "rgb(198 219 255)", 
      dark: "rgb(43 68 102)", 
    },
    tertiary: {
      main: "rgb(137 75 96)",
      contrastText: "rgb(255 255 255)",
      light: "rgb(255 187 206)", 
      dark: "rgb(95 41 60)", 
    },
    error: {
      main: "rgb(186 26 26)",
      contrastText: "rgb(255 255 255)",
      light: "rgb(255 218 214)",
      dark: "rgb(65 0 2)", 
    },
    background: {
      default: "rgb(249 249 255)",
      paper: "rgb(255 255 255)",
    },
    text: {
      primary: "rgb(24 28 33)",
      secondary: "rgb(24 28 33)",
    },
    surfaceVariant: {
      main: "rgb(249 249 255)",
      contrastText: "rgb(24 28 33)",
    },
    outline: "rgb(113 119 131)",
    shadow: "rgb(0 0 0)",
    surfaceTint: "rgb(0 95 174)",
    scrim: "rgb(0, 0, 0)",
  },
  typography: {
    fontFamily: '"Noto Sans JP", Arial, sans-serif',
    h1: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold"
    },
    h2: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold"
    },
    h3: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold"
    },
    h4: {
      fontFamily: "'Zen Kaku Gothic Antique', serif",
      fontWeight: "bold"
    },
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
