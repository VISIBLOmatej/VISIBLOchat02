import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Najde element s id="root" v index.html a do něj vykreslí aplikaci
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
