import { cp, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const repo = join(root, '..')
const dist = join(repo, 'dist')

await cp(join(dist, 'index.html'), join(dist, '404.html'))
await cp(join(dist, 'index.html'), join(repo, 'index.html'))
await cp(join(dist, '404.html'), join(repo, '404.html'))
await rm(join(repo, 'assets'), { recursive: true, force: true })
await cp(join(dist, 'assets'), join(repo, 'assets'), { recursive: true })
await rm(join(repo, 'images'), { recursive: true, force: true })
await cp(join(dist, 'images'), join(repo, 'images'), { recursive: true })
await cp(join(repo, 'public/.nojekyll'), join(repo, '.nojekyll'))

console.log('Copied the production build to the repo root for GitHub Pages.')
