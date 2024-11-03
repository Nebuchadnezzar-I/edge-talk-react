import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import Dashboard from './pages/dashboard'
import './index.css'
import { ThemeProvider } from './components/theme/theme-provider'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
         <Routes>
            <Route path="/" element={
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Dashboard />
                </ThemeProvider>
            } />
        </Routes>
    </BrowserRouter>
)
