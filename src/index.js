import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
})

const moralisAppId = "zofWUCgZOlVgGwwViBTjQ5pK2YQ1QSjaok737h4k";
const moralisServerURL = "https://m35kiwx4tkim.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
      <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
