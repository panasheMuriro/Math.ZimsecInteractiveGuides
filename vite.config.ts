import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// import checker from 'vite-plugin-checker';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  VitePWA({
    workbox: {
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB

      cleanupOutdatedCaches: true,
        // Configure default caching strategy with expiration
        runtimeCaching: [
          {
            urlPattern: () => true, // Match all routes (or refine as needed)
            handler: 'StaleWhileRevalidate', // Or 'CacheFirst', 'NetworkFirst', etc.
            options: {
              cacheName: 'app-cache-v1', // Give your cache a name/version
              expiration: {
                // Set the maximum age for entries in the cache to 30 days
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days in seconds
                // Optional: Limit the number of entries in the cache
                // maxEntries: 200,
              },
              cacheableResponse: {
                statuses: [0, 200], // Cache responses with these status codes
              },
            },
          },
        ],
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
    },
  })],

  build: {
    rollupOptions: {
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       // Example: separate KaTeX, React, and Charting libs
      //       if (id.includes('katex')) return 'katex';
      //       if (id.includes('react')) return 'react';
      //       if (id.includes('recharts')) return 'charts';
      //       return 'vendor'; // fallback for all other node_modules
      //     }
      //   },
      // },
    },
  },

})
