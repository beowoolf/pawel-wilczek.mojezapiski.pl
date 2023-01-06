<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 embed-responsive embed-responsive-4by3">
        <embed src="/devmentors/modularny-monolit.pdf" type="application/pdf" />
      </div>
      <div class="col-sm-6 embed-responsive embed-responsive-4by3">
        <embed src="/devmentors/mikroserwisy-.net.pdf" type="application/pdf" />
      </div>
    </div>
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'PageWithCertificatesFromDevmentors',
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/pw.jpg',
      rawPageTitle: 'Certyfikaty Pawła Wilczka od Devmentors',
      rawPageDescription:
        'Zdobyte certyfikaty na platformie Devmentors przez Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: [
        'Paweł',
        'Wilczek',
        'programowanie',
        'administracja',
        'systemy',
        'operacyjne',
        'bazodanowe',
        'C#',
        '.NET',
        'kwalifikacje',
        'social',
        'media',
        'portal',
        'społecznościowy',
        'kursy',
        'wideo',
        'certyfikaty',
        'książki',
      ],
    }
  },
  head() {
    const head = {
      link: [],
    }
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `/devmentors/modularny-monolit.pdf`,
    })
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `/devmentors/mikroserwisy-.net.pdf`,
    })
    return head
  },
}
</script>
