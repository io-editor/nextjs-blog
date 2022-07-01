import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Noto Sans JP",
      "sans-serif",
    ].join(","),
    fontDisplay: "swap",
  },
});

export default theme;
