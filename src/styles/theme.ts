import { createTheme, responsiveFontSizes } from "@mui/material";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      dark: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      dark?: string;
    };
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#2c2b26",
    },
    secondary: {
      main: "#6809a7ff",
    },
    gradient: {
      dark: "linear-gradient(to right, #000000, #2F0743)",
    },
  },

  typography: {
    fontFamily: "Helvetica Neue",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        html: {
          width: "100%",
          overflowX: "hidden",
        },

        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          overflowX: "hidden",
        },

        "#root": {
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
