import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/custom/theme-provider'
import './index.css'

// Pages
import Dashboard from './pages/Dashboard'
import ChatWindow from './pages/ChatWindow'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Dashboard />
                </ThemeProvider>
            } />

            <Route path="/n/:slug" element={
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ChatWindow />
                </ThemeProvider>
            } />
        </Routes>
    </BrowserRouter>
)
