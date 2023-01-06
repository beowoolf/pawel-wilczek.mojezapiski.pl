<template>
  <div class="container-fluid">
    <div class="embed-responsive embed-responsive-16by9">
      <embed
        src="/certyfikat-administracja-serwerem-ubuntu-cz-i.pdf"
        type="application/pdf"
      />
    </div>
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'PageWithCertificatesFromKuvi',
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/pw.jpg',
      rawPageTitle: 'Certyfikaty Pawła Wilczka od Kuvi',
      rawPageDescription:
        'Zdobyte certyfikaty na platformie Kuvi przez Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: [
        'Paweł',
        'Wilczek',
        'programowanie',
        'administracja',
        'systemy',
        'operacyjne',
        'bazodanowe',
        'BASH',
        'kwalifikacje',
        'social',
        'media',
        'portal',
        'społecznościowy',
        'kursy',
        'wideo',
        'certyfikaty',
        'książki',
        'serwery',
        'Ubuntu',
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
      href: `/certyfikat-administracja-serwerem-ubuntu-cz-i.pdf`,
    })
    return head
  },
}
</script>
