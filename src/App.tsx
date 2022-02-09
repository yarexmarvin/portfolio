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
import Main from "./components/Main"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

export const App = () => {

  return (
    <ChakraProvider >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Main />} />
        <Route path='skills' element={<Skills />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    
    </BrowserRouter>
  
 </ChakraProvider>
)
}
