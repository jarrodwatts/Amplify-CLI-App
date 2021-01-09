import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: { black: "rgba(0, 0, 0, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      main: "#2196f3",
      contrastText: "rgba(45, 55, 72, 1)",
    },
    secondary: {
      main: "#f50057",
      contrastText: "rgba(45, 55, 72, 1)",
    },
    error: {
      main: "#f44336",
      contrastText: "rgba(0, 0, 0, 0.54)",
    },
    text: {
      primary: "rgba(45, 55, 72, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;
