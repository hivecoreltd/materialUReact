import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import {NavbarProvider } from "../src/Context/NavbarProvider"
import {TitelProvider } from "../src/Context/titelContext"
import {ViwelistProvider } from "../src/Context/viwelistContext"


ReactDOM.render(
  // <React.StrictMode>
    <HashRouter>
      <NavbarProvider>
      <TitelProvider> 
      <ViwelistProvider> 
      <App/>
      </ViwelistProvider>
      </TitelProvider>
      </NavbarProvider>
    </HashRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
