import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontFamily: "'Newsreader', serif" },
    h2: { fontFamily: "'Newsreader', serif" },
    h3: { fontFamily: "'Newsreader', serif" },
    h4: { fontFamily: "'Newsreader', serif" },
    h5: { fontFamily: "'Newsreader', serif" },
    h6: { fontFamily: "'Newsreader', serif" },
  },

  palette: {
    primary: {
      main: "#121212",
    },
    grey: {
      500: "#484747",
      700: "#3f3d3dff",
    },

    background: {
      default: "#FAFAF7",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#333",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
            color: "#000",
          },
        },
      },
    },
  },
});

export default theme;
