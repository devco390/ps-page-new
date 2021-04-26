import { ThemeProvider } from "styled-components";

import GlobalStyles from "src/styles/global";
import theme from "src/styles/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
