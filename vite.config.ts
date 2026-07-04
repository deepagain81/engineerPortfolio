import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { htmlMetaPlugin } from './vite/html-meta-plugin'

export default defineConfig({
  plugins: [react(), htmlMetaPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
