import "../styles/globals.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

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
