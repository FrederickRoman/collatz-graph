import { createTheme, Theme } from "@mui/material/styles";

import { brown } from "@mui/material/colors";

const collatzTheme: Theme = createTheme({
  palette: {
    background: {
      default: "#52524f",
    },
    primary: {
      main: "#c9cec7",
    },
    secondary: {
      main: brown[300],
    },
  },
});

export default collatzTheme;
