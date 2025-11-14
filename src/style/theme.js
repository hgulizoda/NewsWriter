import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#121212",
    },
    grey: {
      500: "#484747",
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
