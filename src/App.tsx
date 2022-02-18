import * as React from "react";
import "./App.css";
import {
  ChakraProvider,
  ChakraProviderProps,
  ColorMode,
  ColorModeProviderProps,
  GlobalStyle,
  ThemeComponentProps,
  ThemeConfig,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import stickerHi from "./assets/img/stickerMac.png";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { extendTheme } from "@chakra-ui/react";
import {
  GlobalStyleProps,
  GlobalStyles,
  mode,
  Styles,
} from "@chakra-ui/theme-tools";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

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

  // const component = {
  //   MenuList: {
  //     baseStyle: (props: GlobalStyleProps) => ({
  //       bg: mode('white', 'rgba(66, 66, 66)')(props)
  //     })
  //   }
  // }

  const theme = extendTheme({
    // component,
    config,
    styles,
  });

  const client = new ApolloClient({
    uri: "https://salty-waters-49462.herokuapp.com/leetcode.com/graphql",
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
