import type { Plugin } from 'vite'

// Node-context import: site.ts must stay side-effect-free and free of
// browser-only APIs, since this file imports it directly at build time.
import { site } from '../src/data/site'

function escapeHtmlAttribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function htmlMetaPlugin(): Plugin {
  const replacements: Record<string, string> = {
    '{{SITE_TITLE}}': escapeHtmlAttribute(`${site.name} - ${site.role}`),
    '{{SITE_DESCRIPTION}}': escapeHtmlAttribute(site.tagline),
  }

  return {
    name: 'html-meta',
    transformIndexHtml(html) {
      return Object.entries(replacements).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      )
    },
  }
}
