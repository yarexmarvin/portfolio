import * as React from "react"
import './App.css'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import stickerHi from './assets/img/stickerMac.png'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"

export const App = () => {

  return (
    <ChakraProvider theme={theme}  >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>

      </Route>
    </Routes>
    
    </BrowserRouter>
  
 </ChakraProvider>
)
}
