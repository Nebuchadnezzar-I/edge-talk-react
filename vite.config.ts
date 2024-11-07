import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { VitePWA } from 'vite-plugin-pwa'
import path from "path"

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'EdgeTalk.ai',
                short_name: 'EdgeTalk',
                theme_color: '#09090b',
                icons: [
                    {
                        src: '/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
