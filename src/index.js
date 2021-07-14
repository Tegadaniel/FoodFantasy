import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices';
import { Provider } from 'react-redux'

const store = configureStore({ reducer: rootReducer })
ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
