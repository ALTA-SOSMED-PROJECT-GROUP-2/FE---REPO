import "./styles/index.css"

import App from './pages/home.tsx'
import Login from "./pages/auth/login.tsx"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './pages/auth/register.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
)
