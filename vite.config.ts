import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Transform BASE_URL in HTML
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/%BASE_URL%/g, mode === 'production' ? '/portfolio/' : '/')
      },
    },
  ],
  base: mode === 'production' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))

