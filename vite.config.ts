import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/', // Variable change depending on command run
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      // Optimize and add an hash to assets files names
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || assetInfo.name // Fallback to assetInfo.name if names array is undefined

          if (fileName?.match(/\.(png|jpe?g|svg|gif|webp)$/)) {
            return 'img/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
