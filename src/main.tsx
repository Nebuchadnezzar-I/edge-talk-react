import { ThemeProvider } from './components/project/theme-provider.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'

import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Home />
        </ThemeProvider>
    </StrictMode>,
)
