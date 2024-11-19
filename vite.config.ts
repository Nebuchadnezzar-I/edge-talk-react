import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

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
                        src: '',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
