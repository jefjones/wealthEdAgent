import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    env: {
      VITE_USE_MOCK: 'true',
    },
  },
})
