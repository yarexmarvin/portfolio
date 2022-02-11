import * as React from "react"
import './App.css'
import {
  ChakraProvider
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import stickerHi from './assets/img/stickerMac.png'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import { extendTheme } from '@chakra-ui/react'

export const App = () => {

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  
  const theme = extendTheme({ config })



  return (
    <ChakraProvider theme={theme}>
    <HashRouter >
    <Routes>
      <Route path='' element={<Navigation />}>
        <Route index element={<Main />} />
        <Route path='skills' element={<Skills />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    
    </HashRouter>
  
 </ChakraProvider>
)
}
