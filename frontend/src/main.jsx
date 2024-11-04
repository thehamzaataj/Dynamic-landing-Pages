import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../src/Redux/store/store.js'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from  'react-redux'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  <ThemeProvider>
      <App />
      </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
)