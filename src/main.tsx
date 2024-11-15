import { ThemeProvider } from './components/theme-provider.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark">
            <App />
        </ThemeProvider>
    </StrictMode>
)
