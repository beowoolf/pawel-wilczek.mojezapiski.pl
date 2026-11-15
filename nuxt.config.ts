// https://nuxt.com/docs/api/configuration/nuxt-config
import { cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-gtag',
    'nuxt-seo-experiments',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
  ],
  site: {
    url: 'https://pawel-wilczek.mojezapiski.pl',
    name: 'MojeZapiski.pl',
    trailingSlash: true,
    // Publiczna wizytówka zawsze indexowalna (także poza NODE_ENV=production).
    indexable: true,
  },
  gtag: {
    id: 'G-BQD0EGRB6N',
    // Skrypt GTM wstrzykujemy w app.head (SSR); tu bez drugiego tagu po stronie klienta.
    initMode: 'manual',
  },
  sitemap: {
    exclude: ['/api', '/api/**'],
  },
  fonts: {
    families: [{ name: 'Roboto', provider: 'google', weights: [400, 700] }],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl-PL',
        class: 'h-100',
      },
      bodyAttrs: {
        class: 'd-flex flex-column h-100',
      },
      title: 'Paweł Wilczek - MojeZapiski.pl',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Wizytówka internetowa Pawła Wilczka',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#007bff' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'Paweł Wilczek' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BQD0EGRB6N',
        },
        {
          innerHTML:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BQD0EGRB6N');",
        },
        {
          defer: true,
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Paweł Wilczek',
      short_name: 'Paweł Wilczek',
      theme_color: '#007bff',
      lang: 'pl-PL',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            /\.(?:png|jpe?g|webp|pdf)$/i.test(url.pathname),
          handler: 'CacheFirst',
          options: {
            cacheName: 'public-media',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/_ipx/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'ipx-images',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
        {
          urlPattern: ({ url }) =>
            url.pathname === '/api' || url.pathname.startsWith('/api/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'github-stats',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 2,
            },
            networkTimeoutSeconds: 10,
          },
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      website: {
        baseUrl: 'https://pawel-wilczek.mojezapiski.pl',
        companyName: 'MojeZapiski.pl',
      },
    },
  },

  routeRules: {
    '/api': { proxy: 'https://github-readme-stats.vercel.app/api' },
    '/api/**': { proxy: 'https://github-readme-stats.vercel.app/api/**' },
    '/certyfikat_en-179.pdf': {
      redirect: { to: '/moje-kwalifikacje/', statusCode: 301 },
    },
  },

  nitro: {
    compressPublicAssets: true,
    externals: {
      traceOptions: {
        base: process.cwd(),
      },
      // NFT skips non-JS assets; FreeBSD sharp needs the .wasm binary in .output.
      traceInclude: [
        'node_modules/@img/sharp-wasm32/lib/sharp-wasm32-0.35.5.node.wasm',
        'node_modules/@img/sharp-wasm32/lib/sharp-wasm32-0.35.5.node.js',
        'node_modules/@img/sharp-wasm32/index.cjs',
      ],
    },
    hooks: {
      compiled(nitro) {
        // Ensure WASM sharp runtime is fully present for FreeBSD/MyDevil IPX.
        for (const pkg of ['sharp-wasm32', 'sharp-freebsd-wasm32']) {
          const src = join(process.cwd(), 'node_modules', '@img', pkg)
          const dest = join(
            nitro.options.output.serverDir,
            'node_modules',
            '@img',
            pkg,
          )
          if (existsSync(src)) {
            cpSync(src, dest, { recursive: true })
          }
        }
      },
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '-mode',
    storage: 'cookie',
    storageKey: 'colorModeTheme',
    cookieAttrs: {
      path: '/',
      'max-age': 60 * 60 * 24 * 366,
    },
  },
})
