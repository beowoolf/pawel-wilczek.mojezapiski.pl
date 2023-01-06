<template>
  <div class="container-fluid">
    <div class="row">
      <AkademiaDotNetCert
        :print="first"
        :link-base="firstLinkBase"
        :img-desc="firstImgDesc"
        @printme="first = true"
      />
      <AkademiaDotNetCert
        :print="second"
        :link-base="secondLinkBase"
        :img-desc="secondImgDesc"
        @printme="second = true"
      />
    </div>
    <div class="row">
      <AkademiaDotNetCert
        :print="third"
        :link-base="thirdLinkBase"
        :img-desc="thirdImgDesc"
        @printme="third = true"
      />
      <AkademiaDotNetCert
        :print="fourth"
        :link-base="fourthLinkBase"
        :img-desc="fourthImgDesc"
        @printme="fourth = true"
      />
    </div>
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'PageWithCertificatesFromAkademiaDotNet',
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
        'ASP',
        '.NET',
        'Core',
        'Entity',
        'testy',
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
      first: false,
      firstLinkBase:
        '/akademiadotnet/zostanprogramistadotnet/AEE9E08A-1F8A-405F-93CF-753650E9DB35',
      firstImgDesc: 'Zostań Programistą .NET',
      second: false,
      secondLinkBase:
        '/akademiadotnet/szkolaentityframework/A61C8762-EAEB-48BC-9B24-9872C95B921D',
      secondImgDesc: 'Szkoła Enity Framework Core',
      third: false,
      thirdLinkBase:
        '/akademiadotnet/szkolaaspdotnet/0A07CE2F-EEBB-4C4F-ADA3-F8F877913844',
      thirdImgDesc: 'Szkoła ASP.NET Core',
      fourth: false,
      fourthLinkBase:
        '/akademiadotnet/szkolatestowjednostkowych/D8258FF3-C359-4CE1-8CA3-9CCF1FE2DCE5',
      fourthImgDesc: 'Szkoła Testów Jednostkowych',
    }
  },
  head() {
    const head = {
      link: [],
    }
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `${this.firstLinkBase}.pdf`,
    })
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `${this.secondLinkBase}.pdf`,
    })
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `${this.thirdLinkBase}.pdf`,
    })
    head.link.push({
      rel: 'preload',
      as: 'embed',
      href: `${this.fourthLinkBase}.pdf`,
    })
    return head
  },
}
</script>
