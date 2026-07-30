import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/** Every HTML entry point. Adding a writing piece means adding it here and in
 *  src/data/writing.tsx; scripts/prerender.js prerenders each route it finds here. */
export const pages = {
  main: 'index.html',
  'writing-classes': 'writing/javascript-doesnt-have-classes/index.html',
  'writing-prototype': 'writing/prototype-chain/index.html',
}

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
  css: {
    // The stylesheets are plain CSS with design-system tokens — no PostCSS pipeline.
    // Declaring it inline stops Vite searching ancestor directories for a config.
    postcss: { plugins: [] },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, file]) => [name, path.resolve(__dirname, file)])
      ),
    },
  },
}))
