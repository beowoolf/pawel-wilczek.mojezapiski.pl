<template>
  <div class="container-fluid">
    <h1>O mnie</h1>
    <ExternalLink
      :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
      page="https://github.com/beowoolf/"
      anchor="moje konto w serwisie GitHub"
      target="_blank"
      rel="nofollow"
    >
      <nuxt-img
        alt="Paweł Wilczek"
        title="Paweł Wilczek"
        class="img-fluid img-thumbnail"
        format="webp"
        preload
        src="/pw.jpg"
        width="1871px"
        height="1802px"
        sizes="sm:49vw md:49vw lg:49vw"
        style="width: 49vw; height: auto; float: right"
      />
    </ExternalLink>
    <p>
      Nazywam się <strong>Paweł Wilczek</strong> i jestem
      <strong>magistrem inżynierem</strong> w dziedzinie
      <strong>informatyki</strong>.
    </p>
    <p>
      Pomagam rozwiązywać problemy związane z
      <strong>tworzeniem stron internetowych</strong>.
    </p>
    <p>
      Specjalizuję się w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          rel="nofollow"
          page="https://github.com/beowoolf/pawel-wilczek.mojezapiski.pl"
          anchor="jeden z moich projektów, w którym wykorzystywałem Nuxt.js to projekt tej mojej wizytówki internetowej"
          >Nuxt.js</ExternalLink
        ></strong
      >
      i
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          rel="follow"
          page="https://cenbit.pl/"
          anchor="mój projekt w którym wykorzystałem Spring Boot to projekt wyszukiwarki kursów wideo online Cenbit, której jestem założycielem"
          >Spring Boot</ExternalLink
        ></strong
      >, ale nie wykluczam też <strong>tworzenia mikroserwisów</strong> w innych
      językach programowania dostosowanych do danej dziedziny, jak np.
      <strong>Machine Learning</strong> w języku <strong>Python</strong>.
    </p>
    <p>
      Szkolę programistów głównie z
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://www.bielbit.pl/"
          anchor="projekt, w którym wykorzystywałem Nuxt.js to projekt nowej strony firmowej"
          >Nuxt.js</ExternalLink
        ></strong
      >/<strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://lexbit.bielbit.pl/"
          anchor="projekt, w którym wykorzystywałem Vue.js"
          >Vue.js</ExternalLink
        ></strong
      >, ale konsultuję również projekty napisane w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          rel="follow"
          page="https://cenbit.pl/"
          anchor="mój projekt w którym wykorzystałem Spring Boot to projekt wyszukiwarki kursów wideo online Cenbit, której jestem założycielem"
          >Spring Boot</ExternalLink
        ></strong
      >.
    </p>
    <p>
      Chociaż z powołania jestem
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://github.com/beowoolf/"
          anchor="moje konto w serwisie GitHub"
          rel="nofollow"
          >programistą</ExternalLink
        ></strong
      >
      to zajmuję się również <strong>administracją systemami</strong> i
      <strong>bazami danych</strong>.
    </p>
    <p>
      Zawodowo głównie piszę aplikacje w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="http://web.archive.org/web/20220204094132/https://czesci.fcapoland.pl/"
          anchor="jeden z pierwszych projektów pisanych w języku PHP, przy którym miałem okazję pracować"
          rel="nofollow"
          >PHP</ExternalLink
        ></strong
      >,
      <strong>
        <ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://www.bielbit.pl/"
          anchor="jeden z projektów, który pisałem w języku JavaScript to projekt nowej strony firmowej"
          >JavaScript</ExternalLink
        >/<ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://lexbit.bielbit.pl/"
          anchor="projekt, w którym pisałem w języku TypeScript"
          >TypeScript</ExternalLink
        ></strong
      >
      (m.in. w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://lexbit.bielbit.pl/"
          anchor="projekt, w którym wykorzystywałem Vue.js"
          >Vue.js</ExternalLink
        ></strong
      >
      oraz
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://www.bielbit.pl/"
          anchor="projekt, w którym wykorzystywałem Nuxt.js to projekt nowej strony firmowej"
          >Nuxt.js</ExternalLink
        ></strong
      >) oraz
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://lexbit.bielbit.pl/"
          anchor="jeden z projektów pisanych w języku C#, przy którym miałem okazję pracować"
          >C#</ExternalLink
        ></strong
      >, a także piszę skrypty <strong>BASH</strong>.
    </p>
    <p>
      Moim głównym hobby jest pisanie aplikacji w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          rel="follow"
          page="https://cenbit.pl/"
          anchor="mój projekt w którym wykorzystałem Spring Boot to projekt wyszukiwarki kursów wideo online Cenbit, której jestem założycielem"
          >Spring Boot</ExternalLink
        ></strong
      >
      oraz w
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          rel="nofollow"
          page="https://github.com/beowoolf/pawel-wilczek.mojezapiski.pl"
          anchor="jeden z moich projektów, w którym wykorzystywałem Nuxt.js to projekt tej mojej wizytówki internetowej"
          >Nuxt.js</ExternalLink
        ></strong
      >
      czyli <strong>Vue.js</strong> na sterydach.
    </p>
    <p>
      W wolnych chwilach tworzę
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://mojezapiski.pl"
          anchor="mój otwarty blog"
          >mój otwarty blog</ExternalLink
        ></strong
      >
      oraz uczę się z <strong>kursów wideo</strong> oraz
      <strong>książek</strong> przydatnych w mojej pracy i moim hobby w ramach,
      którego próbuje uruchomić
      <strong
        ><ExternalLink
          :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
          style="text-decoration: underline"
          page="https://socialtube.pl"
          anchor="projekt mojego portalu społecznościowego"
          >portal społecznościowy</ExternalLink
        ></strong
      >.
    </p>
    <p>Rozwijam się w różnych dziedzinach związanych z <strong>IT</strong>.</p>
    <p>
      Poza <strong>IT</strong> interesuję się również
      <strong>serialami kryminalnymi</strong> oraz <strong>kabaretami</strong>.
    </p>
    <p>
      W liceum w latach 2008,
      <ExternalLink
        :class="$colorMode.preference == 'light' ? 'text-dark' : 'text-white'"
        style="text-decoration: underline"
        page="https://www.youtube.com/watch?v=iW8FksnGJlo"
        anchor="mój wykład na konferencji BioMedTech Silesia Junior 2009"
        rel="nofollow"
        >2009</ExternalLink
      >
      oraz 2010 startowałem w konferencji
      <strong>BioMedTech Silesia Junior</strong> wygłaszając wykłady.
    </p>
    <h2>W swojej pracy wykorzystuję</h2>
    <p>
      <img-shields-io-badge
        v-for="markdownImage in markdownImages"
        :key="markdownImage"
        :md="markdownImage"
      />
    </p>
    <h2>Moje statystyki GitHub 📈</h2>
    <p>
      <img
        alt="Statystyki GitHub użytkownika Paweł Wilczek"
        title="Statystyki GitHub użytkownika Paweł Wilczek"
        src="/api?username=beowoolf&show_icons=true&theme=gotham&count_private=true&locale=pl&cache_seconds=7200&include_all_commits=true&rank_icon=github"
        class="img-fluid"
      />
    </p>
    <p>
      <img
        alt="Najczęściej używane języki"
        title="Najczęściej używane języki"
        src="/api/top-langs/?username=beowoolf&langs_count=10&theme=gotham&card_width=467&locale=pl&cache_seconds=7200"
        class="img-fluid"
      />
    </p>
    <!--ol>
      <li
        v-for="categoryAndLinks in categoriesAndLinks"
        :key="categoryAndLinks.category_name"
      >
        <p>{{ categoryAndLinks.category_name }}</p>
        <ul>
          <li v-for="link in categoryAndLinks.links" :key="link.href">
            <span class="btn btn-link">
              <i :class="link.classes"></i>
              <ExternalLink class="text-dark" style="text-decoration: underline;" :page="link.href" :anchor="link.anchor">{{ link.anchor }}</ExternalLink>
            </span>
          </li>
        </ul>
      </li>
    </ol-->
    <!--pre class="text-left">{{ categoriesAndLinks }}</pre-->
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'HomePage',
  /* async asyncData({ $axios }) {
    const categoriesAndLinks = await $axios.$get(
      'http://links-api.test:8081/?categories=all&links=all'
    )
    return { categoriesAndLinks }
  }, */
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/pw.jpg',
      rawPageTitle: 'Paweł Wilczek',
      rawPageDescription:
        'Internetowa wizytówka Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: [
        'Paweł',
        'Wilczek',
        'magister',
        'inżynier',
        'informatyka',
        'śledcza',
        'programista',
        'programowanie',
        'administracja',
        'systemy',
        'operacyjne',
        'bazodanowe',
        'PHP',
        'JavaScript',
        'TypeScript',
        'C#',
        'BASH',
        'Spring',
        'Vue.js',
        'Nuxt.js',
        'kwalifikacje',
        'social',
        'media',
        'portal',
        'społecznościowy',
        'kursy',
        'wideo',
        'certyfikaty',
        'książki',
        'audiobook',
        'podcast',
        'seriale',
        'kryminalne',
        'kabarety',
        'BioMedTech',
        'Silesia',
      ],
      markdownImages: [
        '![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)',
        '![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)',
        '![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white)',
        '![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)',
        '![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)',
        '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',
        '![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)',
        '![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)',
        '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
        '![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)',
        '![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)',
        '![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)',
        '![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',
        '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
        '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
        '![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)',
        '![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)',
        '![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)',
        '![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)',
        '![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)',
        '![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)',
        '![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)',
        '![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)',
        '![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)',
        '![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)',
        '![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)',
        '![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)',
        '![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)',
        '![Neo4J](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)',
        '![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)',
        '![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)',
        '![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)',
        '![Apache Tomcat](https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black)',
        '![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)',
        '![NetBeans IDE](https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white)',
        '![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)',
        '![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)',
        '![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)',
        '![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)',
        '![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)',
        '![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)',
      ],
    }
  },
  // head() {
  //   const head = {
  //     link: [],
  //   }
  //   for (let index = 0; index < this.markdownImages.length; index++)
  //     head.link.push({
  //       rel: 'preload',
  //       as: 'image',
  //       href: this.urlImageFromMarkdown(this.markdownImages[index]),
  //     })
  //   head.link.push({
  //     rel: 'preload',
  //     as: 'image',
  //     href: `/api?username=beowoolf&show_icons=true&theme=gotham&count_private=true&locale=pl&cache_seconds=7200&include_all_commits=true`,
  //   })
  //   head.link.push({
  //     rel: 'preload',
  //     as: 'image',
  //     href: `/api/top-langs/?username=beowoolf&langs_count=10&theme=gotham&card_width=467&locale=pl&cache_seconds=7200`,
  //   })
  //   return head
  // },
  methods: {
    urlImageFromMarkdown(markdown) {
      const arr = markdown.match(/\(.*\)/)
      const first = arr[0]
      const indexStart = 1
      const indexEnd = first.length - 1
      return first.substring(indexStart, indexEnd)
    },
  },
  jsonld() {
    return {
      '@context': 'http://schema.org/',
      '@type': 'WebSite',
      name: 'Paweł Wilczek | MojeZapiski.pl',
      image: 'https://pawel-wilczek.mojezapiski.pl/logo.png',
      url: 'https://pawel-wilczek.mojezapiski.pl/',
    }
  },
}
</script>

<style>
.h2-imitation {
  font-size: 24px;
  font-weight: 500;
}
</style>
