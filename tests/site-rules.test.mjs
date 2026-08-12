import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    if (!/\.(tsx?|css|mjs|json)$/.test(entry.name)) return []
    return [full]
  })
}

const forbiddenCommerce = /\b(price|prices|cart|checkout|payment|buy now|add to cart)\b/i
const forbiddenCommitments = /\b(warranty|warranties|guarantee|guaranteed|quality guarantee)\b/i

const siteData = read('lib/site-data.ts')
const routes = read('lib/routes.ts')
const header = read('components/site-header.tsx')

assert.match(siteData, /XIAOFEIDIANQI/, 'brand name should be present')
assert.match(siteData, /杭州小飞电器有限公司/, 'Chinese admin display name should be preserved')
assert.match(siteData, /Smart Control Systems/, 'positioning should target control systems')
assert.match(siteData, /label:\s*['"]Home['"]/, 'nav data must include visible Home navigation')
assert.match(routes, /inquiryPath\s*=\s*['"]\/contact#inquiry['"]/, 'inquiry route should be centralized')
assert.match(header, /navItems\.map/, 'header must render navigation data')

const sourceDirs = ['app', 'components', 'lib'].map((name) => path.join(root, name))
const files = sourceDirs.flatMap((dir) => walk(dir))
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  assert.doesNotMatch(text, forbiddenCommerce, `${path.relative(root, file)} contains commerce wording`)
  assert.doesNotMatch(text, forbiddenCommitments, `${path.relative(root, file)} contains forbidden commitment wording`)
}

console.log(`site rules passed across ${files.length} files`)
