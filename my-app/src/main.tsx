import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./component/navbar.css"
import {BrowserRouter} from "react-router-dom";
import AppContextProvider from "./context/appContext";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
