import { ThemeProvider } from './components/project/theme-provider.tsx'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
    </ThemeProvider>
)
