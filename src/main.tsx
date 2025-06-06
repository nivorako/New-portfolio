import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App.tsx'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)