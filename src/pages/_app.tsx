import "../styles/globals.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* MaterialUIとstyled-componentsに同じthemeを与える */}
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Component {...pageProps} />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </>
  );
}
export default MyApp;
