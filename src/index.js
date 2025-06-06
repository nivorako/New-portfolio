import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'

// Thème par défaut
const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    background: '#f8fafc',
    text: '#1f2937',
    accent: '#3b82f6',
  },
  fonts: {
    primary: '"Chewy", cursive',
    secondary: '"Roboto", sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
