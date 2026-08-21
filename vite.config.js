import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/CV/',
  root: resolve(repoRoot, 'src'),
  publicDir: resolve(repoRoot, 'public'),
  build: {
    outDir: resolve(repoRoot, 'dist'),
    emptyOutDir: true,
  },
})
