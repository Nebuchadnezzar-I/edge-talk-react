import path from "path"
import react from "@vitejs/plugin-react"
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'EdgeTalk.ai',
                short_name: 'EdgeTalk',
                theme_color: '#09090b',
            }
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})

