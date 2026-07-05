import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

import { htmlMetaPlugin } from './vite/html-meta-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // The chat widget needs an absolute API origin in prod. When this is unset,
  // chatApi.ts silently falls back to a relative /api/query, which resolves
  // against the static host and breaks with a 405 — so fail the build instead.
  if (mode === 'prod' && !env.VITE_DOMAIN_URL) {
    throw new Error(
      'VITE_DOMAIN_URL is required for prod builds. Set it in .env.prod locally ' +
        'or as a Cloudflare Pages environment variable (Production and Preview).',
    )
  }

  return {
    plugins: [react(), htmlMetaPlugin()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
