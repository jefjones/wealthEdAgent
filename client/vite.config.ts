import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vitest/config'

/** Each test pack is a lazy chunk. Must match the loaders in src/content/catalog.ts. */
const PACK_SOURCES: Record<string, string> = {
  'life-health': 'src/content/pack.ts',
  sie: 'src/content/sie/pack.ts',
  'series-6': 'src/content/series6/pack.ts',
  'series-63': 'src/content/series63/pack.ts',
  'series-65': 'src/content/series65/pack.ts',
}

type BundleChunk = { type: 'chunk'; fileName: string; facadeModuleId: string | null; isEntry: boolean; imports: string[] }

/** Writes pack-manifest.json: for each test, its chunk and the shared chunks it imports (not the entry). */
function packManifest(): Plugin {
  return {
    name: 'wea-pack-manifest',
    apply: 'build',
    generateBundle(_options, bundle) {
      const chunks = Object.values(bundle).filter((item) => item.type === 'chunk') as unknown as BundleChunk[]
      const byFile = new Map(chunks.map((chunk) => [chunk.fileName, chunk]))
      const packs: Record<string, string[]> = {}
      for (const [testId, source] of Object.entries(PACK_SOURCES)) {
        const root = chunks.find((chunk) => (chunk.facadeModuleId ?? '').replace(/\\/g, '/').endsWith(source))
        if (!root) throw new Error(`No chunk for ${source}`)
        const files = new Set<string>()
        const walk = (fileName: string) => {
          const chunk = byFile.get(fileName)
          if (!chunk || chunk.isEntry || files.has(fileName)) return
          files.add(fileName)
          chunk.imports.forEach(walk)
        }
        walk(root.fileName)
        packs[testId] = [...files]
      }
      this.emitFile({ type: 'asset', fileName: 'pack-manifest.json', source: JSON.stringify({ packs }, null, 2) })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    packManifest(),
    VitePWA({
      strategies: 'generateSW',
      injectRegister: null,
      registerType: 'autoUpdate',
      includeAssets: [],
      // IIS on wealthedagent.com has no MIME type for .webmanifest (404), which made the SW precache fail. .json is served.
      manifestFilename: 'manifest.json',
      manifest: {
        name: 'Life/Health and Securities Licenses Test Content Study',
        short_name: 'License Study',
        description: 'Study and practice for life and health and securities license tests.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f3f7fb',
        theme_color: '#2a6cb5',
        icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
      },
      workbox: {
        // Shell only: index.html, the entry JS and CSS, Latin fonts, icons. Test packs are cached by "Go offline".
        globPatterns: [
          'index.html',
          'assets/index-*.{js,css}',
          'assets/*-latin-400-normal-*.woff2',
          'assets/*-latin-600-normal-*.woff2',
          'favicon.svg',
          'icons.svg',
        ],
        globIgnores: ['assets/chunk-*'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//, /\.[a-z0-9]+$/i],
        importScripts: ['pack-sw.js'],
        runtimeCaching: [],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      },
      devOptions: { enabled: false },
    }),
  ],
  build: {
    rolldownOptions: {
      output: {
        // Every lazy chunk starts with "chunk-" so the service worker knows which files "Go offline" saves.
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3005,
    host: '0.0.0.0',
    strictPort: true,
  },
  preview: {
    port: 3005,
    host: '0.0.0.0',
    strictPort: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    setupFiles: ['src/test/loadPacks.ts'],
    env: {
      VITE_USE_MOCK: 'true',
    },
  },
})
