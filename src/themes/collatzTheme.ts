import { createTheme, Theme } from "@material-ui/core/styles";

import brown from "@material-ui/core/colors/brown";

const collatzTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#52524f'
    },
    primary: {
      main: '#c9cec7',
    },
    secondary: {
      main: brown[300],
    },
  },
});

export default collatzTheme;
