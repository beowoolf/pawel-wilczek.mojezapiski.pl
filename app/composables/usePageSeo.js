function stripTags(value) {
  return String(value)
    .replace(/<\/?[^>]+>/gi, '')
    .replace('\n', '')
}

function urlImageFromMarkdown(markdown) {
  const match = markdown.match(/\(.*\)/)
  if (!match) return ''
  return match[0].substring(1, match[0].length - 1)
}

function typeOfCert(url) {
  if (url.endsWith('.pdf')) return 'pdf'
  if (url.endsWith('.png')) return 'png'
  return 'both'
}

function certificatePreloadLinks(platforms) {
  const link = []
  if (!platforms?.internal) return link

  for (const platform of platforms.internal) {
    for (const document of platform.documents) {
      if (document.f) {
        for (const file of document.f) {
          const type = typeOfCert(file.l)
          link.push({
            rel: 'preload',
            as: type === 'png' ? 'image' : 'fetch',
            href: `${type === 'png' ? '/_ipx/f_webp' : ''}${file.l}`,
          })
        }
        continue
      }

      const url = document.i
      if (!url) continue
      const type = typeOfCert(url)
      const isFullUrl = url.includes('/')
      let mainUrl = isFullUrl ? '' : '/videopoint/png/'
      mainUrl += url
      if (type === 'both') mainUrl = `/_ipx/f_webp${mainUrl}.png`
      if (type === 'both' || type === 'png') {
        link.push({ rel: 'preload', as: 'image', href: mainUrl })
      }
      if (type === 'both' || type === 'pdf') {
        link.push({
          rel: 'preload',
          as: 'fetch',
          href: mainUrl
            .replace('.png', '.pdf')
            .replace('/png/', '/pdf/')
            .replace('/_ipx/f_webp', ''),
        })
      }
    }
  }

  return link
}

export function usePageSeo({
  rawPageTitle,
  rawPageDescription,
  heroUnitImg,
  keywords = [],
  markdownImages = [],
  platforms = null,
}) {
  const route = useRoute()
  const config = useRuntimeConfig()

  useHead(() => {
    const baseUrl = config.public.website.baseUrl
    const companyName = config.public.website.companyName
    const routePath = route.path
    const computedPageTitle = stripTags(rawPageTitle)
    const computedPageDescription = stripTags(rawPageDescription)
    const currentPath = baseUrl + routePath
    const articlePagePrefix = '/blog'
    const categoryPagePrefix = `${articlePagePrefix}/category/`
    const isBlog =
      routePath.indexOf(articlePagePrefix) === 0 &&
      routePath.length > articlePagePrefix.length + 1 &&
      !routePath.includes(categoryPagePrefix)
    const title = `${computedPageTitle} | ${companyName}`

    const meta = [
      { name: 'description', content: computedPageDescription },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'author', content: companyName },
      { name: 'copyright', content: companyName },
      { name: 'publisher', content: companyName },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: computedPageDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${baseUrl}${heroUnitImg}` },
      { name: 'twitter:url', content: currentPath },
      { property: 'og:title', content: title },
      { property: 'og:description', content: computedPageDescription },
      { property: 'og:type', content: isBlog ? 'article' : 'website' },
      { property: 'og:image', content: `${baseUrl}${heroUnitImg}` },
      { property: 'og:image:secure_url', content: `${baseUrl}${heroUnitImg}` },
      { property: 'og:url', content: currentPath },
      { itemprop: 'name', content: title },
      { itemprop: 'description', content: computedPageDescription },
      { itemprop: 'url', content: currentPath },
      { itemprop: 'image', content: `${baseUrl}${heroUnitImg}` },
      { itemprop: 'thumbnailUrl', content: `${baseUrl}${heroUnitImg}` },
    ]

    if (keywords.length > 0) {
      meta.push({ name: 'keywords', content: keywords.join(', ') })
    }

    const link = [
      { rel: 'image_src', href: `${baseUrl}${heroUnitImg}` },
      { rel: 'canonical', href: currentPath },
    ]

    if (routePath === '/' || routePath === '') {
      for (const markdownImage of markdownImages) {
        link.push({
          rel: 'preload',
          as: 'image',
          href: urlImageFromMarkdown(markdownImage),
        })
      }
      link.push({
        rel: 'preload',
        as: 'image',
        href: '/api?username=beowoolf&show_icons=true&theme=gotham&count_private=true&locale=pl&cache_seconds=7200&include_all_commits=true',
      })
      link.push({
        rel: 'preload',
        as: 'image',
        href: '/api/top-langs/?username=beowoolf&langs_count=10&theme=gotham&card_width=467&locale=pl&cache_seconds=7200',
      })
    }

    if (
      routePath === '/moje-kwalifikacje' ||
      routePath === '/moje-kwalifikacje/'
    ) {
      link.push(...certificatePreloadLinks(platforms))
    }

    return { title, meta, link }
  })
}
