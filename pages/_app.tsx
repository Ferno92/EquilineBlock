import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { createContext, useCallback, useEffect, useState } from "react";
import { GlobalStyles, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "../src/theme";
import { Router } from "next/router";
import ReactGA from "react-ga";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ThemeContext = createContext({
  mode: "light",
  setMode: (mode: string) => {
    console.log("mode", mode);
  },
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<string | null>();
  const preferredTheme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  const toggleTheme = (mode: string) => {
    console.log("toggleTheme", mode);
    if (window) {
      window.localStorage.setItem("theme", mode);
      setTheme(mode);
    }
  };

  useEffect(() => {
    if (window) {
      setTheme(window.localStorage.getItem("theme"));
    }
    Router.events.on("routeChangeStart", (url) => {
      if (window) {
        //console.log("route change", url)
        ReactGA.pageview(url);
      }
    });
  }, []);

  const getActualTheme = useCallback(() => {
    const actualTheme =
      theme === undefined
        ? preferredTheme
        : theme === "light"
        ? lightTheme
        : darkTheme;
    return actualTheme;
  }, [theme, preferredTheme]);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Equiline</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={getActualTheme()}>
        <ThemeContext.Provider
          value={{
            mode: theme != undefined ? theme : "",
            setMode: (mode) => toggleTheme(mode),
          }}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={{
              html: { height: "100%" },
              body: {
                //backgroundColor: getActualTheme().palette.background.default,
                height: "100%",
                margin: 0,
                "&>div": {
                  height: "100%",
                },
              },
            }}
          />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
