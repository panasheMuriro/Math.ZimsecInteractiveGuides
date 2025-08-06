import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
// import checker from 'vite-plugin-checker';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
      },
      registerType: 'autoUpdate',
      manifest: {
        name: 'Math | Zimsec Interactive Guides',
        short_name: 'O Math Zim',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#e07a5f',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      }})],

})
