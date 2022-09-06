import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { Buffer } from 'buffer'
import { MoralisProvider } from "react-moralis"
import { GlobalStyles } from "./components/Countdown/styles/global";
import theme from './theme/index'
import button from './components/Button'
import overrides from './theme/index' 

window.Buffer = window.Buffer || Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <React.StrictMode>
                <GlobalStyles />
                <App />
            </React.StrictMode>
        </ChakraProvider>
    </BrowserRouter>

)
