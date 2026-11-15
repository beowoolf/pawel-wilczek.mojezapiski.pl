import { describe, expect, it } from 'vitest'
import { $fetch, fetch, setup } from '@nuxt/test-utils/e2e'

describe('robots.txt', async () => {
  await setup({
    rootDir: process.cwd(),
    // Windows + full Nuxt build needs a generous timeout
    setupTimeout: 240_000,
  })

  it('returns HTTP 200 (not 404)', async () => {
    const response = await fetch('/robots.txt')
    expect(response.status).toBe(200)
  })

  it('allows crawling and points to sitemap', async () => {
    const body = await $fetch<string>('/robots.txt')
    expect(body).not.toMatch(/indexing disabled/i)
    expect(body).toMatch(/User-agent:\s*\*/i)
    // Puste Disallow = pełne zezwolenie na crawl (nie "Disallow: /")
    expect(body).toMatch(/Disallow:\s*$/m)
    expect(body).not.toContain('Disallow: /')
    expect(body).toContain(
      'Sitemap: https://pawel-wilczek.mojezapiski.pl/sitemap.xml',
    )
  })
})
