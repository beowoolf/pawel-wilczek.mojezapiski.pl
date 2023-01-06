export default {
  data() {
    return {
      baseUrl: this.$config.website.baseUrl,
      routePath: this.$route.path,
      test: 'ABC',
    }
  },
  computed: {
    computedPageTitle() {
      return this.rawPageTitle.replace(/<\/?[^>]+>/gi, '').replace('\n', '')
    },
    computedPageDescription() {
      return this.rawPageDescription
        .replace(/<\/?[^>]+>/gi, '')
        .replace('\n', '')
    },
    companyName() {
      return this.$config.website.companyName
    },
    currentPath() {
      return this.$config.website.baseUrl + this.routePath // tutaj musi być this.$config.website.baseUrl zamiast this.baseUrl, bo this.baseUrl może być w późniejszym czasie nadpisany
    },
    isBlog() {
      const articlePagePrefix = '/blog'
      const categoryPagePrefix = articlePagePrefix + '/category/'
      return (
        this.routePath.indexOf(articlePagePrefix) === 0 &&
        this.routePath.length > articlePagePrefix.length + 1 &&
        !this.routePath.includes(categoryPagePrefix)
      )
    },
  },
  head() {
    const head = {
      title: `${this.computedPageTitle} | ${this.companyName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.computedPageDescription,
        },
        {
          hid: 'robots',
          name: 'robots',
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          hid: 'author',
          name: 'author',
          content: `${this.companyName}`,
        },
        {
          hid: 'copyright',
          name: 'copyright',
          content: `${this.companyName}`,
        },
        {
          hid: 'publisher',
          name: 'publisher',
          content: `${this.companyName}`,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.computedPageTitle} | ${this.companyName}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.computedPageDescription,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.baseUrl}${this.heroUnitImg}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${this.currentPath}`,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.computedPageTitle} | ${this.companyName}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.computedPageDescription,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.isBlog ? 'article' : 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.baseUrl}${this.heroUnitImg}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `${this.baseUrl}${this.heroUnitImg}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.currentPath}`,
        },
        // itemprops
        {
          itemprop: 'name',
          content: `${this.computedPageTitle} | ${this.companyName}`,
        },
        {
          itemprop: 'description',
          content: this.computedPageDescription,
        },
        {
          itemprop: 'url',
          content: `${this.currentPath}`,
        },
        {
          itemprop: 'image',
          content: `${this.baseUrl}${this.heroUnitImg}`,
        },
        {
          itemprop: 'thumbnailUrl',
          content: `${this.baseUrl}${this.heroUnitImg}`,
        },
      ],
      link: [
        {
          rel: 'image_src',
          href: `${this.baseUrl}${this.heroUnitImg}`,
        },
        {
          rel: 'canonical',
          href: `${this.currentPath}`,
        },
      ],
    }

    if (this.isBlog === true)
      head.meta.push(
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.post.createdAt,
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.post.updatedAt,
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: this.post.author,
        }
      )
    if (this.keywords && this.keywords.length > 0)
      head.meta.push({
        hid: 'keywords',
        name: 'keywords',
        content: `${this.keywords.join(', ')}`,
      })

    return head
  },
}
