<template>
  <div class="container-fluid">
    <h1>Moje kwalifikacje</h1>
    <h2>Certyfikaty od:</h2>
    <ol>
      <li v-for="{ link, name, documents } in platforms.internal" :key="link">
        {{ name }}:
        <ul>
          <li v-for="{ c, d, i, p, f } in documents" :key="c">
            <template v-if="d">{{ d }} - </template>{{ c }} -
            <a
              v-if="i"
              :title="'pokaż certyfikat ' + c"
              :class="
                $colorMode.preference == 'light'
                  ? 'text-primary'
                  : 'text-warning'
              "
              href="#"
              @click.prevent="pokazCertyfikat(i, c)"
            >
              pokaż
            </a>
            <template v-if="i && false"
              >{{ i }} {{ typeOfCert(i) }} -
            </template>
            <template v-if="false">{{ p }}</template>
            <template v-if="f"
              ><span v-for="{ l, a } in f" :key="l"
                ><template v-if="false">[</template
                ><a
                  :title="a"
                  :class="
                    $colorMode.preference == 'light'
                      ? 'text-primary'
                      : 'text-warning'
                  "
                  href="#"
                  @click.prevent="
                    pokazCertyfikat(l, generujTytulOknaModalnego(c, a))
                  "
                  >{{ a }}</a
                >,
                <template v-if="false">
                  ({{ l }} {{ typeOfCert(l) }})]</template
                >
              </span></template
            >
          </li>
        </ul>
      </li>
    </ol>
    <h2>Profile na platformach z kursami:</h2>
    <ol>
      <li v-for="{ link, name } in platforms.external" :key="link">
        {{ name }}
        <ExternalLink
          :page="link"
          :class="
            $colorMode.preference == 'light' ? 'text-primary' : 'text-warning'
          "
          target="_blank"
          rel="nofollow"
          :anchor="
            'Przejdź do mojego profilu na platformie z kursami od ' + name
          "
          >przejdź</ExternalLink
        >
      </li>
    </ol>
    <!--b-modal
      ref="my-modal"
      hide-footer
      :size="cert.type === 'png' ? 'sm' : 'lg'"
      :title="cert.title"
      :header-bg-variant="$colorMode.preference == 'dark' ? 'dark' : 'light'"
      :header-text-variant="$colorMode.preference == 'dark' ? 'light' : 'dark'"
      :body-bg-variant="$colorMode.preference == 'dark' ? 'dark' : 'light'"
      :body-text-variant="$colorMode.preference == 'dark' ? 'light' : 'dark'"
    >
    </b-modal-->
    <div
      id="exampleModal"
      ref="exampleModalRef"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        :class="'modal-' + (cert.type === 'png' ? 'sm' : 'lg')"
      >
        <div
          class="modal-content"
          :class="
            'text-bg-' + ($colorMode.preference == 'light' ? 'light' : 'dark')
          "
        >
          <div class="modal-header">
            <h3 id="exampleModalLabel" class="modal-title fs-5">
              {{ cert.title }}
            </h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <PrintCert
              v-if="cert.type === 'both'"
              :print="cert.print"
              :link-base="cert.mainUrl"
              :img-desc="cert.title"
              @printme="cert.print = true"
            />
            <div v-else-if="cert.type === 'pdf'" class="ratio ratio-4x3">
              <embed
                :src="
                  cert.mainUrl.replace('.png', '.pdf').replace('/png/', '/pdf/')
                "
                type="application/pdf"
              />
            </div>
            <nuxt-img
              v-else-if="cert.type === 'png'"
              preload
              format="webp"
              class="img-fluid"
              :alt="cert.title"
              :title="cert.title"
              :src="cert.mainUrl"
            />
          </div>
        </div>
      </div>
    </div>
    <!--div class="ratio ratio-16x9">
      <embed
        src="/certyfikat-administracja-serwerem-ubuntu-cz-i.pdf"
        type="application/pdf"
      />
    </div-->
  </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
  name: 'MojeKwalifikacje',
  mixins: [SEO],
  data() {
    return {
      heroUnitImg: '/pw.jpg',
      rawPageTitle: 'Kwalifikacje Pawła Wilczka',
      rawPageDescription:
        'Zdobyte kwalifikacje przez Pawła Wilczka magistra inżyniera w dziedzinie informatyki specjalizującego się w programowaniu i zajmującego się również administracją systemami operacyjnymi i bazodanowymi.',
      keywords: ['Paweł', 'Wilczek'],
      platforms: {
        internal: [
          {
            link: '/ciss/',
            name: 'Akademia Bezpieczeństwa IT',
            documents: [
              {
                c: 'CISS - Certified IT Security Specialist',
                d: '2016-12-12',
                i: '',
                f: [
                  {
                    l: '/ciss/certyfikat_en-179.pdf',
                    a: 'show certificate in English language version',
                  },
                  {
                    l: '/ciss/certyfikat_pl-179.pdf',
                    a: 'pokaż certyfikat w wersji polskiej językowej',
                  },
                  { l: '/ciss/emblemat179.png', a: 'pokaż emblemat' },
                ],
                p: false,
              },
            ],
          },
          {
            link: '/educativo/',
            name: 'Educativo',
            documents: [
              {
                c: 'Tworzenie cross-platformowych aplikacji Xamarin',
                d: '2017-03-27',
                i: '/Xamarin.pdf',
                p: false,
              },
            ],
          },
          {
            link: '/kuvi/',
            name: 'Kuvi',
            documents: [
              {
                c: 'Administracja serwerem Ubuntu cz. I',
                d: '',
                i: '/certyfikat-administracja-serwerem-ubuntu-cz-i.pdf',
                p: false,
              },
            ],
          },
          {
            link: '/devmentors/',
            name: 'Devmentors',
            documents: [
              {
                c: 'Modularny Monolit',
                d: '',
                i: '/devmentors/modularny-monolit.pdf',
                p: false,
              },
              {
                c: 'Mikroserwisy .NET',
                d: '',
                i: '/devmentors/mikroserwisy-.net.pdf',
                p: false,
              },
            ],
          },
          {
            link: '/akademiadotnet/',
            name: 'Akademia .NET',
            documents: [
              {
                c: 'Zostań Programistą .NET',
                d: '2021-11-10',
                i: '/akademiadotnet/zostanprogramistadotnet/AEE9E08A-1F8A-405F-93CF-753650E9DB35',
                p: false,
              },
              {
                c: 'Szkoła Enity Framework Core',
                d: '2022-01-11',
                i: '/akademiadotnet/szkolaentityframework/A61C8762-EAEB-48BC-9B24-9872C95B921D',
                p: false,
              },
              {
                c: 'Szkoła ASP.NET Core',
                d: '2022-03-21',
                i: '/akademiadotnet/szkolaaspdotnet/0A07CE2F-EEBB-4C4F-ADA3-F8F877913844',
                p: false,
              },
              {
                c: 'Szkoła Testów Jednostkowych',
                d: '2022-05-19',
                i: '/akademiadotnet/szkolatestowjednostkowych/D8258FF3-C359-4CE1-8CA3-9CCF1FE2DCE5',
                p: false,
              },
              {
                c: 'Szkoła HTML CSS',
                d: '2023-05-15',
                i: '/akademiadotnet/szkolahtmlcss/9662ACC2-0DB9-4198-82D9-08D88CA465D7',
                p: false,
              },
              {
                c: 'Szkoła Blazora',
                d: '2023-12-28',
                i: '/akademiadotnet/szkolablazora/B17FF3B5-994C-49BD-99A5-D1C7D6BE5EF8',
                p: false,
              },
            ],
          },
          {
            link: '/javaready/',
            name: '(Junior) Java Ready',
            documents: [
              {
                c: 'Junior Java Ready - wiedza komercyjna Junior Java Developera',
                d: '2023-05-08',
                i: '/javaready/certyfikat-jjr.pdf',
                p: false,
              },
            ],
          },
          {
            link: '/devbites/',
            name: 'devBites',
            documents: [
              {
                c: 'Programowanie Obiektowe (Fundamenty)',
                d: '2023-12-01',
                i: '/devbites/ProgramowanieObiektoweFundamenty.pdf',
                p: false,
              },
            ],
          },
          {
            link: '/videopoint/',
            name: 'Videopoint',
            documents: [
              {
                c: 'Vue.js. Kurs video. Podstawy pracy z frameworkiem',
                d: '2023-12-30',
                i: '067caf5b14476aa52b26d621dea6096c',
                p: false,
              },
              {
                c: 'OpenShift. Kurs video. Zosta\u0144 administratorem system\u00F3w IT',
                d: '2022-06-17',
                i: 'x181cf530ba36acc06000a7120dbeed89fbcb5e9f7a26b6fe9c8db7958a993859',
                p: false,
              },
              {
                c: 'Kubernetes. Kurs video. Wdra\u017Canie aplikacji',
                d: '2022-06-17',
                i: 'xb8c66c25f58de3bc9f14ece1edbd9a30f1e766ff08b25d417cebfb6c2b561863',
                p: false,
              },
              {
                c: 'Docker. Kurs video. Praca z systemem konteneryzacji i Docker Swarm',
                d: '2022-06-17',
                i: 'x811cdf8e947e31a67d477e33aec2abbad199eabdaf40c11d58b77361a25bb0a1',
                p: false,
              },
              {
                c: 'Ansible. Kurs video. Automatyzacja w IT od podstaw',
                d: '2022-06-17',
                i: 'x52533a2b2fa65f42a945ae0445d6f314967e1de7b15f65742d0782c75754a0a0',
                p: false,
              },
              {
                c: 'Linux DevOps. Kurs video. Jenkins, Ansible, Terraform i Traefik',
                d: '2022-06-17',
                i: 'xbef8c0d3ffbd0534c50f6084ae3f22f37586bd31d5f2e582063d1a5b0721ecb4',
                p: false,
              },
              {
                c: 'Java. Kurs video. Zaawansowane elementy j\u0119zyka',
                d: '2022-05-20',
                i: 'xfaf3ce730be85a6716974a333fa0b990b025c1b604bb2a9a9c808e00c2eb757c',
                p: false,
              },
              {
                c: 'Java Full Stack Developer. Kurs video. Tworzenie aplikacji internetowych od podstaw',
                d: '2022-05-20',
                i: 'xb68ee93ce848b27b3e948ca9c98e22fe088b35cc43c2f12106f2f022d62251a7',
                p: false,
              },
              {
                c: 'Vue.js. Kurs video. Tworzenie zaawansowanych aplikacji webowych',
                d: '2022-05-20',
                i: 'xf6e6335e5336a9e350bc53c8b4995d5e6cd25b3d7a09cced1407c3f4ea8dad3f',
                p: false,
              },
              {
                c: 'Asynchroniczne REST API w Pythonie. Kurs video. Tworzenie aplikacji w aiohttp',
                d: '2022-05-20',
                i: 'x1ed38cbeba53d38910301816c30cf19bf9f53fa3de29d5af657b40773769b87c',
                p: false,
              },
              {
                c: 'Linux. Kurs video. Wprowadzenie do pracy z konsol\u0105',
                d: '2022-05-20',
                i: 'x046a9ced12decac16cb9608253247e1bafa7e60e9928dfe4de6394175ef010c9',
                p: false,
              },
              {
                c: 'Vim. Kurs video. Zosta\u0144 administratorem system\u00F3w IT',
                d: '2022-05-20',
                i: 'x4b4f33cb60fdb4a6e559c77f0e7a5d8066bbfee08bbda79cf47cde38ec4df598',
                p: false,
              },
              {
                c: 'Django REST framework. Kurs video. Praktyczne wprowadzenie do projektowania interfejs\u00F3w REST API',
                d: '2022-05-20',
                i: 'x7e67543ce14710758277e1f40ae2bf4e76df91e35f2c2fdf73a2ba1754f28017',
                p: false,
              },
              {
                c: 'Sass od podstaw. Kurs video. Budowa kompleksowej strony  w oparciu o metodologi\u0119 BEM',
                d: '2021-07-10',
                i: '692d8af622bec57b4551fc80c28fd971619f6dc4ea3535a8e9a9344e0aaecc68',
                p: false,
              },
              {
                c: 'Bash. Kurs video. Zosta\u0144 administratorem system\u00F3w IT',
                d: '2021-07-10',
                i: '810a9aca36854dcc7fe1310351d58ea2c5e27bc85b587bb6f57f43d01fb152db',
                p: false,
              },
              {
                c: 'Wzorce projektowe dla programist\u00F3w C#. Kurs video',
                d: '2021-07-10',
                i: '316cc2b8bdb78330347b287da3f4e0213dc69c6f013712dba0fb7ced58f666d9',
                p: false,
              },
              {
                c: 'Testy E2E. Kurs video. Protractor, Cypress, Cucumber',
                d: '2021-07-10',
                i: '3988e319cb3f545d61b5695dd18ee5aefaf67df951a5bf65d8f897e883c9c854',
                p: false,
              },
              {
                c: 'CSS i SASS. Kurs video. Praktyczny projekt nowoczesnego dashboardu',
                d: '2021-07-10',
                i: '091c1677d23ba679e1294b52f34ccf2323a72b690ceb04146e6c4b4c90f86cf2',
                p: false,
              },
              {
                c: 'MySQL. Kurs video. Od podstaw do zagadnie\u0144 zaawansowanych. Tworzenie i analizowanie baz danych',
                d: '2021-07-10',
                i: 'e2511c57c2dd1f4ab972e3a8e22849cc43709e7066b9878ad4d970ae28286f7a',
                p: false,
              },
              {
                c: 'Angielski w biznesie. Kurs video. Poziom pierwszy. Kurs j\u0119zykowy dla zapracowanych',
                d: '2021-04-19',
                i: 'e8c1c7af9b5119f4a830e332ad840178e59c7687333dfc3e4d52367c9a055c13',
                p: false,
              },
              {
                c: 'Testowanie oprogramowania w .NET Core 2.0. Kurs video. Poziom pierwszy. Jak pisa\u0107 dobry, niezawodny i \u0142atwy w utrzymaniu kod',
                d: '2021-04-19',
                i: 'f96d6474172d474956698b5581b9807d3e77cc31e587e83bb7ed4b4ce1f8bb00',
                p: false,
              },
              {
                c: 'Angular 5. Kurs video. Poziom pierwszy. Programowanie webowe w oparciu o architektur\u0119 komponentow\u0105',
                d: '2021-04-19',
                i: '5947a3da9d453922bdb7c59acb03d3a000525261beb746865db5a245cdbd0a41',
                p: false,
              },
              {
                c: 'PHP. Kurs video. Poziom drugi. Programowanie obiektowe w praktyce',
                d: '2021-04-19',
                i: 'f16e0376c14b3d506c29d2a4edb7e03f46bc01401a95154289ab1d4c5e41e196',
                p: false,
              },
              {
                c: 'SEO. Kurs video. Poziom drugi. Strategie pozycjonowania i techniki pracy',
                d: '2021-04-19',
                i: 'a3b9a1624f4406de63f59b91313c90a6a2a2a463dc1845b7527f8e21b037d173',
                p: false,
              },
              {
                c: 'J\u0119zyk C#. Kurs video. Poziom pierwszy. Programowanie dla pocz\u0105tkuj\u0105cych',
                d: '2021-04-19',
                i: 'd1b3577904298adc08368612422a6088662b07bfa2dc76ae9f4dbaa7789e0c90',
                p: false,
              },
              {
                c: 'Programowanie w C#. Poziom drugi. Kurs video. Zaawansowane techniki',
                d: '2021-04-19',
                i: 'd47eeeab1c3995dbe8b128809519a3ca6b7a7a574796dac55f0521b2a01a2646',
                p: false,
              },
              {
                c: 'Nowoczesny JavaScript. Kurs video. Nowo\u015Bci od ES6 do ES2020',
                d: '2021-04-19',
                i: '8a8b9b20d4e0ce94a59d362e896ce1d4b8ba9be7175332f496e4896878715689',
                p: false,
              },
              {
                c: 'LESS. Kurs video. Poziom pierwszy. Jak usprawni\u0107 prac\u0119 z CSS',
                d: '2021-02-21',
                i: '855a1ef83be5e2e72e1fb8a9a572097463f7b54b8619a2ad5cd7ddf4e00aae55',
                p: false,
              },
              {
                c: 'CSS3. Kurs video. Poziom pierwszy. Nowoczesne i stylowe strony WWW',
                d: '2021-02-19',
                i: 'f8f27b8b3ba6b4581c73e95ddf5812e05500cf0fe0a71b6b4db9b26b62cc2403',
                p: false,
              },
              {
                c: 'PHP. Kurs video. Poziom pierwszy. Programowanie obiektowe w praktyce',
                d: '2021-02-18',
                i: 'f53845da23c6ecdcc1eecf83e579408fea2c9863c868c846bc6e1c1a1f086db2',
                p: false,
              },
              {
                c: 'HTML5. Kurs video. Poziom pierwszy. Programowanie dla pocz\u0105tkuj\u0105cych webmaster\u00F3w',
                d: '2021-02-18',
                i: 'a5db4620bb5f38db0db9c60406798269902cadac1522e9fe5e3ee3fa49cb6c50',
                p: false,
              },
              {
                c: 'jQuery. Kurs video. Poziom pierwszy. Interaktywne interfejsy internetowe',
                d: '2021-02-18',
                i: 'fe334db26f67788c70ec1a4a9dc4c7d56cad567714e3897a80e4e63014b791cd',
                p: false,
              },
              {
                c: 'JavaScript. Kurs video. Poziom pierwszy. Programowanie interaktywnych stron internetowych',
                d: '2021-01-30',
                i: 'a9cc0f9b21787115f568055357b458741229e792b824b3b6ab2cc68ff01f1132',
                p: false,
              },
              {
                c: 'Java 8. Programowanie obiektowe. Kurs video. Poziom pierwszy',
                d: '2021-01-22',
                i: '8083bbc05d56f8bca8af4303c7bf9688bc2246fe2bd0f08caca2420e10b68405',
                p: false,
              },
              {
                c: 'Responsive i Bootstrap. Kurs video. Poziom pierwszy. B\u0142yskawiczne tworzenie responsywnych serwis\u00F3w WWW',
                d: '2021-01-22',
                i: 'bfe8add091bc8dd4788c8732aaaf9d317a3cbacfa747bdc8cbcd9b58f0a34047',
                p: false,
              },
              {
                c: 'Raspberry Pi. Kurs video. Praktyczne zastosowanie popularnej maliny',
                d: '2021-01-12',
                i: '45c0e4b75c25035e2bcf2600f4b84d9ce87e325bfcc884756669c0e4366de238',
                p: false,
              },
              {
                c: 'Vue.js. Kurs video. Sprawne i szybkie pisanie aplikacji webowych',
                d: '2021-01-09',
                i: '48d220876fa73461572812d686c4637b1661d851df83cdddf75eaad2f5c2ca4e',
                p: false,
              },
              {
                c: 'Java RESTful API z wykorzystaniem Hibernate. Kurs video. Poziom pierwszy. Tworzenie panelu administracyjnego',
                d: '2021-01-05',
                i: 'd92310d6a8140a054c608dd56bd0ef800b12553011f18013476f3cbb9ba32bef',
                p: false,
              },
              {
                c: 'Spring Security. Kurs video. Metody zabezpieczania aplikacji webowych',
                d: '2021-01-04',
                i: 'f1b505eb1714ec6935b8b3f0cf515946f1129a89da8beb3cbe518aac01483cb7',
                p: false,
              },
              {
                c: 'Spring Web MVC. Kurs video. Programowanie aplikacji webowych',
                d: '2021-01-04',
                i: '3b16b5fc368983cfdef5fab38569d1242dad061b525c119ae33e52acdcb83e8b',
                p: false,
              },
              {
                c: 'Spring. Kurs video. Poziom pierwszy. Prosty spos\u00F3b na zaawansowane aplikacje',
                d: '2021-01-03',
                i: '2546d212c2030ccd35066edb979320e65c26068cef18ba904364141cc41c1fdd',
                p: false,
              },
              {
                c: 'ASP.NET Core. Kurs video. Tworzenie REST Web API',
                d: '2021-01-01',
                i: '74a0b0908f48b5e23c4faf5d5d9938944dd258729bdbfaf58e72b1817a7188e4',
                p: false,
              },
              {
                c: 'ASP.NET Core MVC. Kurs video. Poziom drugi. Programowanie nowoczesnych aplikacji internetowych',
                d: '2021-01-01',
                i: '33fe2228eb78a71a603cde16b0df625df6aa009b1cb7bd2b226dfd8a1b9d0ce3',
                p: false,
              },
              {
                c: 'ASP.NET MVC. Kurs video. Poziom pierwszy. Programowanie aplikacji internetowych',
                d: '2021-01-01',
                i: '220feb1219bac66d080a253d4a1502f2adc461ea82cc5c41b7446991bf858716',
                p: false,
              },
              {
                c: 'Java na serwerze - kurs przetrwania.  Ob\u00F3z drugi. Od serwlet\u00F3w do Spring Boota',
                d: '2021-01-01',
                i: '84add7a8b5c70853fea5ad44fea8b2f33a80d94d650ade12f81151adb96b8a6a',
                p: false,
              },
              {
                c: 'Java na serwerze - kurs przetrwania. Ob\u00F3z pierwszy',
                d: '2018-07-29',
                i: '7bc4a82b614d18eac48e32f371ed5ae92cea5c8b45f72189ff3f94666a241431',
                p: false,
              },
              {
                c: 'Platforma Xamarin. Kurs video. Poziom drugi. Zaawansowane techniki tworzenia aplikacji cross-platform',
                d: '2018-07-29',
                i: '18c8a2b92c4789d5e8028cc6efd92ab8f74078578b5980fa533a6dce63176a27',
                p: false,
              },
              {
                c: 'Platforma Xamarin. Kurs video. Poziom pierwszy. Tworzenie pierwszej aplikacji cross-platform',
                d: '2018-07-29',
                i: '028bba5d09fb81ff0c6e8466aa77124c4d3bc4112482ad15aebb9d6c3a86e4d6',
                p: false,
              },
            ],
          },
        ],
        external: [
          {
            link: 'https://eduj.pl/p/profil/Paweł-TW5FUmpYdWUvNi9WY1lnanB4TlgyQT09',
            name: 'Eduj',
          },
          {
            link: 'https://eduweb.pl/profil/77103',
            name: 'Eduweb',
          },
          {
            link: 'https://platforma.strefakursow.pl/p/profil/Pawe%C5%82-cVkweVo2cXEzN2tuWm5vb0xtb1BNdz09',
            name: 'Strefa Kursów',
          },
        ],
      },
      cert: {
        title: '',
        mainUrl: '',
        print: false,
      },
    }
  },
  // head() {
  //   const head = {
  //     link: [],
  //   }
  //   for (let index = 0; index < this.platforms.internal.length; index++) {
  //     const element = this.platforms.internal[index].documents
  //     // console.log(element)
  //     for (let pos = 0; pos < element.length; pos++) {
  //       const elementPos = element[pos]
  //       // console.log(elementPos)
  //       if (elementPos.f)
  //         for (let i = 0; i < elementPos.f.length; i++)
  //           head.link.push({
  //             rel: 'preload',
  //             as:
  //               this.typeOfCert(elementPos.f[i].l) === 'png'
  //                 ? 'image'
  //                 : 'embed',
  //             href: `${
  //               (this.typeOfCert(elementPos.f[i].l) === 'png'
  //                 ? '/_ipx/f_webp'
  //                 : '') + elementPos.f[i].l
  //             }`,
  //           })
  //       else {
  //         const url = elementPos.i
  //         // console.log(elementPos)
  //         // console.log("URL: " + url)
  //         const type = this.typeOfCert(url)
  //         const isFullUrl = url.includes('/')
  //         let mainUrl = ''
  //         if (isFullUrl === false) mainUrl = '/videopoint/png/'
  //         mainUrl = mainUrl + url
  //         if (type === 'both') mainUrl = '/_ipx/f_webp' + mainUrl + '.png'
  //         if (type === 'both' || type === 'png')
  //           head.link.push({
  //             rel: 'preload',
  //             as: 'image',
  //             href: `${mainUrl}`,
  //           })
  //         if (type === 'both' || type === 'pdf')
  //           head.link.push({
  //             rel: 'preload',
  //             as: 'embed',
  //             href: `${mainUrl
  //               .replace('.png', '.pdf')
  //               .replace('/png/', '/pdf/')
  //               .replace('/_ipx/f_webp', '')}`,
  //           })
  //       }
  //     }
  //   }
  //   return head
  // },
  methods: {
    typeOfCert(url) {
      // console.log(url)
      return url.endsWith('.pdf')
        ? 'pdf'
        : url.endsWith('.png')
          ? 'png'
          : 'both'
    },
    openModal() {
      // eslint-disable-next-line no-undef
      const myModal = new bootstrap.Modal(this.$refs.exampleModalRef, {
        keyboard: false,
      })

      myModal.show()
    },
    pokazCertyfikat(url, name) {
      this.cert.type = this.typeOfCert(url)
      // console.log('typ: ' + this.cert.type)
      // console.log('url: ' + url)
      // console.log('name: ' + name)
      this.cert.title = name
      const isFullUrl = url.includes('/')
      this.cert.mainUrl = ''
      if (isFullUrl === false) this.cert.mainUrl = '/videopoint/png/'
      this.cert.mainUrl = this.cert.mainUrl + url
      if (this.cert.type === 'both')
        this.cert.mainUrl = this.cert.mainUrl + '.png'
      // console.log('this.cert.mainUrl: ' + this.cert.mainUrl)
      // if (this.cert.type === 'both')
      //   console.log(
      //     'alternativeUrl: ' +
      //       this.cert.mainUrl.replace('.png', '.pdf').replace('/png/', '/pdf/')
      //   )
      this.cert.print = false
      // this.$refs['my-modal'].show()
      this.openModal()
    },
    generujTytulOknaModalnego(cert, anchor) {
      const anchorArray = anchor.split(' ')
      const what = anchorArray[1]
      return cert + ' - ' + what
    },
  },
}
</script>
