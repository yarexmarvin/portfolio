import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import {theme} from '@chakra-ui/react'
import { Provider } from "react-redux"
import store from "./store/store"


ReactDOM.render(
  <Provider store={store}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </Provider>,
  document.getElementById("root"),
)

