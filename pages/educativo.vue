<template>
  <div class="container-fluid">
    <div class="embed-responsive embed-responsive-16by9">
      <embed src="/Xamarin.pdf" type="application/pdf" />
    </div>
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'PageWithCertificatesFromEducativo',
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/pw.jpg',
      rawPageTitle: 'Certyfikaty Pawła Wilczka od Educativo',
      rawPageDescription:
        'Zdobyte certyfikaty na platformie Educativo przez Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: [
        'Paweł',
        'Wilczek',
        'programowanie',
        'administracja',
        'systemy',
        'operacyjne',
        'bazodanowe',
        'C#',
        'Xamarin',
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
      href: `/Xamarin.pdf`,
    })
    return head
  },
}
</script>
