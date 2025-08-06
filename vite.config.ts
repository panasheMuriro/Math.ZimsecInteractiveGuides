import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

// import checker from 'vite-plugin-checker';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(),
      
        visualizer({
      open: true, // Opens browser on build
      gzipSize: true,
      brotliSize: true,
    }),
      VitePWA({
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
        theme_color: '#f4f1de',
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

     build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Example: separate KaTeX, React, and Charting libs
            if (id.includes('katex')) return 'katex';
            if (id.includes('react')) return 'react';
            if (id.includes('recharts')) return 'charts';
            return 'vendor'; // fallback for all other node_modules
          }
        },
      },
    },
  },

})
