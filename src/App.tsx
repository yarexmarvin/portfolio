import * as React from "react";

// styles
import "./App.css";

// routing
import { HashRouter, Route, Routes } from "react-router-dom";

// apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// pages
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// chakra
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyles, mode } from "@chakra-ui/theme-tools";

export const App = () => {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const styles: GlobalStyles = {
    global: (props) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode(
          "white",
          "linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66))"
        )(props),
      },
      html: {
        bg: mode(
          "white",
          "linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66))"
        )(props),
      },
    }),
  };

  const theme = extendTheme({
    config,
    styles,
  });

  const client = new ApolloClient({
    uri: "https://salty-waters-49462.herokuapp.com/https://leetcode.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="" element={<Navigation />}>
              <Route index element={<Main />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
};
