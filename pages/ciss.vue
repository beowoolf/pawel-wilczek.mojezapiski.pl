<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 embed-responsive embed-responsive-4by3">
        <embed src="/ciss/certyfikat_en-179.pdf" type="application/pdf" />
      </div>
      <div class="col-6 embed-responsive embed-responsive-4by3">
        <embed src="/ciss/certyfikat_pl-179.pdf" type="application/pdf" />
      </div>
    </div>
    <nuxt-img
      alt="Emblemat CISS"
      title="Emblemat CISS"
      class="img-fluid"
      format="webp"
      preload
      src="/ciss/emblemat179.png"
      style="background-color: white"
    />
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'PageWithCertificatesAndEmblemateFromAkademiaBezpieczenstwaIT',
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/ciss/emblemat179.png',
      rawPageTitle: 'Certyfikaty Pawła Wilczka od Akademia Bezpieczeństwa IT',
      rawPageDescription:
        'Zdobyte certyfikaty na platformie Akademia Bezpieczeństwa IT przez Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: [
        'Paweł',
        'Wilczek',
        'programowanie',
        'administracja',
        'systemy',
        'operacyjne',
        'bazodanowe',
        'kwalifikacje',
        'social',
        'media',
        'portal',
        'społecznościowy',
        'kursy',
        'wideo',
        'certyfikaty',
        'książki',
        'CISS',
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
      href: `/ciss/certyfikat_en-179.pdf`,
    })
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `/ciss/certyfikat_pl-179.pdf`,
    })
    return head
  },
}
</script>
