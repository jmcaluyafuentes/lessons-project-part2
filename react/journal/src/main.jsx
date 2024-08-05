import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  {/* The BrowserRouter component must wrap the whole App to prevent full page refresh */}
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
