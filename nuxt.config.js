export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'pl',
      class: 'h-100',
    },
    headAttrs: {
      itemscope: true,
      itemtype: 'https://schema.org/WebPage',
    },
    bodyAttrs: {
      class: 'd-flex flex-column h-100',
    },
    title: 'Paweł Wilczek - MojeZapiski.pl',
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Wizytówka internetowa Pawła Wilczka',
      },
      { name: 'format-detection', content: 'telephone=no' },
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
        defer: true,
        src: '//cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/body.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/jsonld'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image',
    'cookie-universal-nuxt',
    '@nuxtjs/google-gtag',
    '@nuxtjs/proxy',
    'nuxt-compress',
    '@nuxtjs/sitemap',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: {
        wght: [400, 700],
      },
    },
  },

  'google-gtag': {
    id: 'G-BQD0EGRB6N',
  },

  sitemap: {
    hostname: 'https://pawel-wilczek.mojezapiski.pl',
    trailingSlash: true,
  },

  proxy: {
    '/api': 'https://github-readme-stats.vercel.app',
  },

  'nuxt-compress': {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Paweł Wilczek',
      short_name: 'Paweł Wilczek',
      theme_color: '#007bff',
      lang: 'pl-PL',
    },
    workbox: {
      offlineAssets: [
        '/_ipx/f_webp/logo.png',
        '/ciss/certyfikat_en-179.pdf',
        '/ciss/certyfikat_pl-179.pdf',
        '/_ipx/f_webp/ciss/emblemat179.png',
        '/Xamarin.pdf',
        '/certyfikat-administracja-serwerem-ubuntu-cz-i.pdf',
        '/devmentors/modularny-monolit.pdf',
        '/devmentors/mikroserwisy-.net.pdf',
        '/_ipx/f_webp/akademiadotnet/zostanprogramistadotnet/AEE9E08A-1F8A-405F-93CF-753650E9DB35.png',
        '/akademiadotnet/zostanprogramistadotnet/AEE9E08A-1F8A-405F-93CF-753650E9DB35.pdf',
        '/_ipx/f_webp/akademiadotnet/szkolaentityframework/A61C8762-EAEB-48BC-9B24-9872C95B921D.png',
        '/akademiadotnet/szkolaentityframework/A61C8762-EAEB-48BC-9B24-9872C95B921D.pdf',
        '/_ipx/f_webp/akademiadotnet/szkolaaspdotnet/0A07CE2F-EEBB-4C4F-ADA3-F8F877913844.png',
        '/akademiadotnet/szkolaaspdotnet/0A07CE2F-EEBB-4C4F-ADA3-F8F877913844.pdf',
        '/_ipx/f_webp/akademiadotnet/szkolatestowjednostkowych/D8258FF3-C359-4CE1-8CA3-9CCF1FE2DCE5.png',
        '/akademiadotnet/szkolatestowjednostkowych/D8258FF3-C359-4CE1-8CA3-9CCF1FE2DCE5.pdf',
        '/_ipx/f_webp/akademiadotnet/szkolahtmlcss/9662ACC2-0DB9-4198-82D9-08D88CA465D7.png',
        '/akademiadotnet/szkolahtmlcss/9662ACC2-0DB9-4198-82D9-08D88CA465D7.pdf',
        '/_ipx/f_webp/akademiadotnet/szkolablazora/B17FF3B5-994C-49BD-99A5-D1C7D6BE5EF8.png',
        '/akademiadotnet/szkolablazora/B17FF3B5-994C-49BD-99A5-D1C7D6BE5EF8.pdf',
        '/javaready/certyfikat-jjr.pdf',
        '/_ipx/f_webp/videopoint/png/067caf5b14476aa52b26d621dea6096c.png',
        '/videopoint/pdf/067caf5b14476aa52b26d621dea6096c.pdf',
        '/_ipx/f_webp/videopoint/png/x181cf530ba36acc06000a7120dbeed89fbcb5e9f7a26b6fe9c8db7958a993859.png',
        '/videopoint/pdf/x181cf530ba36acc06000a7120dbeed89fbcb5e9f7a26b6fe9c8db7958a993859.pdf',
        '/_ipx/f_webp/videopoint/png/xb8c66c25f58de3bc9f14ece1edbd9a30f1e766ff08b25d417cebfb6c2b561863.png',
        '/videopoint/pdf/xb8c66c25f58de3bc9f14ece1edbd9a30f1e766ff08b25d417cebfb6c2b561863.pdf',
        '/_ipx/f_webp/videopoint/png/x811cdf8e947e31a67d477e33aec2abbad199eabdaf40c11d58b77361a25bb0a1.png',
        '/videopoint/pdf/x811cdf8e947e31a67d477e33aec2abbad199eabdaf40c11d58b77361a25bb0a1.pdf',
        '/_ipx/f_webp/videopoint/png/x52533a2b2fa65f42a945ae0445d6f314967e1de7b15f65742d0782c75754a0a0.png',
        '/videopoint/pdf/x52533a2b2fa65f42a945ae0445d6f314967e1de7b15f65742d0782c75754a0a0.pdf',
        '/_ipx/f_webp/videopoint/png/xbef8c0d3ffbd0534c50f6084ae3f22f37586bd31d5f2e582063d1a5b0721ecb4.png',
        '/videopoint/pdf/xbef8c0d3ffbd0534c50f6084ae3f22f37586bd31d5f2e582063d1a5b0721ecb4.pdf',
        '/_ipx/f_webp/videopoint/png/xfaf3ce730be85a6716974a333fa0b990b025c1b604bb2a9a9c808e00c2eb757c.png',
        '/videopoint/pdf/xfaf3ce730be85a6716974a333fa0b990b025c1b604bb2a9a9c808e00c2eb757c.pdf',
        '/_ipx/f_webp/videopoint/png/xb68ee93ce848b27b3e948ca9c98e22fe088b35cc43c2f12106f2f022d62251a7.png',
        '/videopoint/pdf/xb68ee93ce848b27b3e948ca9c98e22fe088b35cc43c2f12106f2f022d62251a7.pdf',
        '/_ipx/f_webp/videopoint/png/xf6e6335e5336a9e350bc53c8b4995d5e6cd25b3d7a09cced1407c3f4ea8dad3f.png',
        '/videopoint/pdf/xf6e6335e5336a9e350bc53c8b4995d5e6cd25b3d7a09cced1407c3f4ea8dad3f.pdf',
        '/_ipx/f_webp/videopoint/png/x1ed38cbeba53d38910301816c30cf19bf9f53fa3de29d5af657b40773769b87c.png',
        '/videopoint/pdf/x1ed38cbeba53d38910301816c30cf19bf9f53fa3de29d5af657b40773769b87c.pdf',
        '/_ipx/f_webp/videopoint/png/x046a9ced12decac16cb9608253247e1bafa7e60e9928dfe4de6394175ef010c9.png',
        '/videopoint/pdf/x046a9ced12decac16cb9608253247e1bafa7e60e9928dfe4de6394175ef010c9.pdf',
        '/_ipx/f_webp/videopoint/png/x4b4f33cb60fdb4a6e559c77f0e7a5d8066bbfee08bbda79cf47cde38ec4df598.png',
        '/videopoint/pdf/x4b4f33cb60fdb4a6e559c77f0e7a5d8066bbfee08bbda79cf47cde38ec4df598.pdf',
        '/_ipx/f_webp/videopoint/png/x7e67543ce14710758277e1f40ae2bf4e76df91e35f2c2fdf73a2ba1754f28017.png',
        '/videopoint/pdf/x7e67543ce14710758277e1f40ae2bf4e76df91e35f2c2fdf73a2ba1754f28017.pdf',
        '/_ipx/f_webp/videopoint/png/692d8af622bec57b4551fc80c28fd971619f6dc4ea3535a8e9a9344e0aaecc68.png',
        '/videopoint/pdf/692d8af622bec57b4551fc80c28fd971619f6dc4ea3535a8e9a9344e0aaecc68.pdf',
        '/_ipx/f_webp/videopoint/png/810a9aca36854dcc7fe1310351d58ea2c5e27bc85b587bb6f57f43d01fb152db.png',
        '/videopoint/pdf/810a9aca36854dcc7fe1310351d58ea2c5e27bc85b587bb6f57f43d01fb152db.pdf',
        '/_ipx/f_webp/videopoint/png/316cc2b8bdb78330347b287da3f4e0213dc69c6f013712dba0fb7ced58f666d9.png',
        '/videopoint/pdf/316cc2b8bdb78330347b287da3f4e0213dc69c6f013712dba0fb7ced58f666d9.pdf',
        '/_ipx/f_webp/videopoint/png/3988e319cb3f545d61b5695dd18ee5aefaf67df951a5bf65d8f897e883c9c854.png',
        '/videopoint/pdf/3988e319cb3f545d61b5695dd18ee5aefaf67df951a5bf65d8f897e883c9c854.pdf',
        '/_ipx/f_webp/videopoint/png/091c1677d23ba679e1294b52f34ccf2323a72b690ceb04146e6c4b4c90f86cf2.png',
        '/videopoint/pdf/091c1677d23ba679e1294b52f34ccf2323a72b690ceb04146e6c4b4c90f86cf2.pdf',
        '/_ipx/f_webp/videopoint/png/e2511c57c2dd1f4ab972e3a8e22849cc43709e7066b9878ad4d970ae28286f7a.png',
        '/videopoint/pdf/e2511c57c2dd1f4ab972e3a8e22849cc43709e7066b9878ad4d970ae28286f7a.pdf',
        '/_ipx/f_webp/videopoint/png/e8c1c7af9b5119f4a830e332ad840178e59c7687333dfc3e4d52367c9a055c13.png',
        '/videopoint/pdf/e8c1c7af9b5119f4a830e332ad840178e59c7687333dfc3e4d52367c9a055c13.pdf',
        '/_ipx/f_webp/videopoint/png/f96d6474172d474956698b5581b9807d3e77cc31e587e83bb7ed4b4ce1f8bb00.png',
        '/videopoint/pdf/f96d6474172d474956698b5581b9807d3e77cc31e587e83bb7ed4b4ce1f8bb00.pdf',
        '/_ipx/f_webp/videopoint/png/5947a3da9d453922bdb7c59acb03d3a000525261beb746865db5a245cdbd0a41.png',
        '/videopoint/pdf/5947a3da9d453922bdb7c59acb03d3a000525261beb746865db5a245cdbd0a41.pdf',
        '/_ipx/f_webp/videopoint/png/f16e0376c14b3d506c29d2a4edb7e03f46bc01401a95154289ab1d4c5e41e196.png',
        '/videopoint/pdf/f16e0376c14b3d506c29d2a4edb7e03f46bc01401a95154289ab1d4c5e41e196.pdf',
        '/_ipx/f_webp/videopoint/png/a3b9a1624f4406de63f59b91313c90a6a2a2a463dc1845b7527f8e21b037d173.png',
        '/videopoint/pdf/a3b9a1624f4406de63f59b91313c90a6a2a2a463dc1845b7527f8e21b037d173.pdf',
        '/_ipx/f_webp/videopoint/png/d1b3577904298adc08368612422a6088662b07bfa2dc76ae9f4dbaa7789e0c90.png',
        '/videopoint/pdf/d1b3577904298adc08368612422a6088662b07bfa2dc76ae9f4dbaa7789e0c90.pdf',
        '/_ipx/f_webp/videopoint/png/d47eeeab1c3995dbe8b128809519a3ca6b7a7a574796dac55f0521b2a01a2646.png',
        '/videopoint/pdf/d47eeeab1c3995dbe8b128809519a3ca6b7a7a574796dac55f0521b2a01a2646.pdf',
        '/_ipx/f_webp/videopoint/png/8a8b9b20d4e0ce94a59d362e896ce1d4b8ba9be7175332f496e4896878715689.png',
        '/videopoint/pdf/8a8b9b20d4e0ce94a59d362e896ce1d4b8ba9be7175332f496e4896878715689.pdf',
        '/_ipx/f_webp/videopoint/png/855a1ef83be5e2e72e1fb8a9a572097463f7b54b8619a2ad5cd7ddf4e00aae55.png',
        '/videopoint/pdf/855a1ef83be5e2e72e1fb8a9a572097463f7b54b8619a2ad5cd7ddf4e00aae55.pdf',
        '/_ipx/f_webp/videopoint/png/f8f27b8b3ba6b4581c73e95ddf5812e05500cf0fe0a71b6b4db9b26b62cc2403.png',
        '/videopoint/pdf/f8f27b8b3ba6b4581c73e95ddf5812e05500cf0fe0a71b6b4db9b26b62cc2403.pdf',
        '/_ipx/f_webp/videopoint/png/f53845da23c6ecdcc1eecf83e579408fea2c9863c868c846bc6e1c1a1f086db2.png',
        '/videopoint/pdf/f53845da23c6ecdcc1eecf83e579408fea2c9863c868c846bc6e1c1a1f086db2.pdf',
        '/_ipx/f_webp/videopoint/png/a5db4620bb5f38db0db9c60406798269902cadac1522e9fe5e3ee3fa49cb6c50.png',
        '/videopoint/pdf/a5db4620bb5f38db0db9c60406798269902cadac1522e9fe5e3ee3fa49cb6c50.pdf',
        '/_ipx/f_webp/videopoint/png/fe334db26f67788c70ec1a4a9dc4c7d56cad567714e3897a80e4e63014b791cd.png',
        '/videopoint/pdf/fe334db26f67788c70ec1a4a9dc4c7d56cad567714e3897a80e4e63014b791cd.pdf',
        '/_ipx/f_webp/videopoint/png/a9cc0f9b21787115f568055357b458741229e792b824b3b6ab2cc68ff01f1132.png',
        '/videopoint/pdf/a9cc0f9b21787115f568055357b458741229e792b824b3b6ab2cc68ff01f1132.pdf',
        '/_ipx/f_webp/videopoint/png/8083bbc05d56f8bca8af4303c7bf9688bc2246fe2bd0f08caca2420e10b68405.png',
        '/videopoint/pdf/8083bbc05d56f8bca8af4303c7bf9688bc2246fe2bd0f08caca2420e10b68405.pdf',
        '/_ipx/f_webp/videopoint/png/bfe8add091bc8dd4788c8732aaaf9d317a3cbacfa747bdc8cbcd9b58f0a34047.png',
        '/videopoint/pdf/bfe8add091bc8dd4788c8732aaaf9d317a3cbacfa747bdc8cbcd9b58f0a34047.pdf',
        '/_ipx/f_webp/videopoint/png/45c0e4b75c25035e2bcf2600f4b84d9ce87e325bfcc884756669c0e4366de238.png',
        '/videopoint/pdf/45c0e4b75c25035e2bcf2600f4b84d9ce87e325bfcc884756669c0e4366de238.pdf',
        '/_ipx/f_webp/videopoint/png/48d220876fa73461572812d686c4637b1661d851df83cdddf75eaad2f5c2ca4e.png',
        '/videopoint/pdf/48d220876fa73461572812d686c4637b1661d851df83cdddf75eaad2f5c2ca4e.pdf',
        '/_ipx/f_webp/videopoint/png/d92310d6a8140a054c608dd56bd0ef800b12553011f18013476f3cbb9ba32bef.png',
        '/videopoint/pdf/d92310d6a8140a054c608dd56bd0ef800b12553011f18013476f3cbb9ba32bef.pdf',
        '/_ipx/f_webp/videopoint/png/f1b505eb1714ec6935b8b3f0cf515946f1129a89da8beb3cbe518aac01483cb7.png',
        '/videopoint/pdf/f1b505eb1714ec6935b8b3f0cf515946f1129a89da8beb3cbe518aac01483cb7.pdf',
        '/_ipx/f_webp/videopoint/png/3b16b5fc368983cfdef5fab38569d1242dad061b525c119ae33e52acdcb83e8b.png',
        '/videopoint/pdf/3b16b5fc368983cfdef5fab38569d1242dad061b525c119ae33e52acdcb83e8b.pdf',
        '/_ipx/f_webp/videopoint/png/2546d212c2030ccd35066edb979320e65c26068cef18ba904364141cc41c1fdd.png',
        '/videopoint/pdf/2546d212c2030ccd35066edb979320e65c26068cef18ba904364141cc41c1fdd.pdf',
        '/_ipx/f_webp/videopoint/png/74a0b0908f48b5e23c4faf5d5d9938944dd258729bdbfaf58e72b1817a7188e4.png',
        '/videopoint/pdf/74a0b0908f48b5e23c4faf5d5d9938944dd258729bdbfaf58e72b1817a7188e4.pdf',
        '/_ipx/f_webp/videopoint/png/33fe2228eb78a71a603cde16b0df625df6aa009b1cb7bd2b226dfd8a1b9d0ce3.png',
        '/videopoint/pdf/33fe2228eb78a71a603cde16b0df625df6aa009b1cb7bd2b226dfd8a1b9d0ce3.pdf',
        '/_ipx/f_webp/videopoint/png/220feb1219bac66d080a253d4a1502f2adc461ea82cc5c41b7446991bf858716.png',
        '/videopoint/pdf/220feb1219bac66d080a253d4a1502f2adc461ea82cc5c41b7446991bf858716.pdf',
        '/_ipx/f_webp/videopoint/png/84add7a8b5c70853fea5ad44fea8b2f33a80d94d650ade12f81151adb96b8a6a.png',
        '/videopoint/pdf/84add7a8b5c70853fea5ad44fea8b2f33a80d94d650ade12f81151adb96b8a6a.pdf',
        '/_ipx/f_webp/videopoint/png/7bc4a82b614d18eac48e32f371ed5ae92cea5c8b45f72189ff3f94666a241431.png',
        '/videopoint/pdf/7bc4a82b614d18eac48e32f371ed5ae92cea5c8b45f72189ff3f94666a241431.pdf',
        '/_ipx/f_webp/videopoint/png/18c8a2b92c4789d5e8028cc6efd92ab8f74078578b5980fa533a6dce63176a27.png',
        '/videopoint/pdf/18c8a2b92c4789d5e8028cc6efd92ab8f74078578b5980fa533a6dce63176a27.pdf',
        '/_ipx/f_webp/videopoint/png/028bba5d09fb81ff0c6e8466aa77124c4d3bc4112482ad15aebb9d6c3a86e4d6.png',
        '/videopoint/pdf/028bba5d09fb81ff0c6e8466aa77124c4d3bc4112482ad15aebb9d6c3a86e4d6.pdf',
        'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
        'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
        'https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white',
        'https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white',
        'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens',
        'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
        'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
        'https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82',
        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white',
        'https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white',
        'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
        'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white',
        'https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white',
        'https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white',
        'https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white',
        'https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white',
        'https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white',
        'https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white',
        'https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white',
        'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
        'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
        'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
        'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
        'https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white',
        'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white',
        'https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white',
        'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white',
        'https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black',
        'https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white',
        'https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white',
        'https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white',
        'https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white',
        'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
        'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white',
        '/api?username=beowoolf&show_icons=true&theme=gotham&count_private=true&locale=pl&cache_seconds=7200&include_all_commits=true',
        '/api/top-langs/?username=beowoolf&langs_count=10&theme=gotham&card_width=467&locale=pl&cache_seconds=7200',
        '/_ipx/f_webp,s_502x483/pw.jpg',
      ],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
  },

  publicRuntimeConfig: {
    website: {
      publicTest: 'public1',
      bothTest: 'public2',
      baseUrl: 'https://pawel-wilczek.mojezapiski.pl',
      companyName: 'MojeZapiski.pl',
    },
  },
  privateRuntimeConfig: {
    website: {
      privateTest: 'private1',
      bothTest: 'private2',
    },
  },
  router: {
    // ran before every route on both client and server
    middleware: ['redirectsMiddleware', 'colorModeMiddleware'],
  },
}
