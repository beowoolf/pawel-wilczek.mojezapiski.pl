<template>
  <div class="d-flex flex-column h-100">
    <header>
      <!-- Fixed navbar -->
      <BootstrapNavbar
        toggleable="md"
        type="dark"
        variant="dark"
        class="fixed-top"
      >
        <div class="container-fluid">
          <BootstrapNavbarBrand to="/" title="O mnie"
            ><logo
          /></BootstrapNavbarBrand>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse">
            <BootstrapNavbarNav class="ms-auto">
              <BootstrapNavItem
                link-classes="text-white"
                to="/"
                :link-attrs="{ title: 'O mnie' }"
                >O mnie</BootstrapNavItem
              >
              <BootstrapNavItem
                link-classes="text-white"
                to="/moje-kwalifikacje/"
                :link-attrs="{ title: 'Moje kwalifikacje' }"
                >Moje kwalifikacje</BootstrapNavItem
              >
              <BootstrapNavItem
                v-if="!modeSwitcher"
                href="#"
                :link-attrs="{ title: 'tryb jasny' }"
              >
                <span @click="setColorModeTheme('light')">
                  <BootstrapIcon
                    :icon="$colorMode.preference == 'dark' ? 'sun' : 'sun-fill'"
                    :class="
                      $colorMode.preference == 'light'
                        ? 'text-warning'
                        : 'text-warning'
                    "
                  ></BootstrapIcon>
                </span>
              </BootstrapNavItem>
              <BootstrapNavItem
                v-if="!modeSwitcher"
                href="#"
                :link-attrs="{ title: 'tryb ciemny' }"
              >
                <span @click="setColorModeTheme('dark')">
                  <BootstrapIcon
                    :icon="
                      $colorMode.preference == 'light' ? 'moon' : 'moon-fill'
                    "
                    :class="
                      $colorMode.preference == 'light'
                        ? 'text-white'
                        : 'text-white'
                    "
                  ></BootstrapIcon>
                </span>
              </BootstrapNavItem>
              <BootstrapNavItem
                v-if="modeSwitcher"
                href="#"
                :link-attrs="{
                  title:
                    'włącz tryb ' +
                    ($colorMode.preference == 'dark' ? 'jasny' : 'ciemny'),
                }"
              >
                <span
                  @click="
                    setColorModeTheme(
                      $colorMode.preference == 'dark' ? 'light' : 'dark',
                    )
                  "
                >
                  <BootstrapIcon
                    :icon="$colorMode.preference == 'dark' ? 'sun' : 'sun-fill'"
                    :class="
                      $colorMode.preference == 'light'
                        ? 'text-warning'
                        : 'text-warning'
                    "
                  ></BootstrapIcon>
                  /
                  <BootstrapIcon
                    :icon="
                      $colorMode.preference == 'light' ? 'moon' : 'moon-fill'
                    "
                    :class="
                      $colorMode.preference == 'light'
                        ? 'text-white'
                        : 'text-white'
                    "
                  ></BootstrapIcon>
                </span>
              </BootstrapNavItem>
            </BootstrapNavbarNav>
          </div>
        </div>
      </BootstrapNavbar>
    </header>
    <main :class="$colorMode.preference + '-theme'">
      <nuxt />
    </main>
    <footer
      class="footer mt-auto py-3"
      :class="$colorMode.preference == 'light' ? 'bg-dark' : 'bg-dark'"
    >
      <div class="container-fluid">
        <span
          :class="
            $colorMode.preference == 'light' ? 'text-white' : 'text-white'
          "
        >
          Copyrights&copy; {{ currentYear }} Paweł Wilczek
        </span>
        <span style="float: right">
          <ExternalLink
            v-for="{ link, name } in socials"
            :key="link"
            :page="link"
            :anchor="'mój profil w serwisie ' + name"
            class="mx-2 text-white"
            target="_blank"
            rel="nofollow"
          >
            <BootstrapIcon :icon="name.toLowerCase()" />
          </ExternalLink>
        </span>
      </div>
    </footer>
    <!--b-toast
      id="update-toast"
      variant="secondary"
      solid
      no-auto-hide
      no-close-button
      toaster="b-toaster-top-right"
    >
      <div class="mb-2">Strona została zaktualizowana.</div>
      <button
        v-if="false"
        class="btn btn-primary"
        style="background-color: #0051a8"
        @click.prevent="closeUpdateToast(true)"
      >
        Teraz
      </button>
      <button
        class="btn btn-primary"
        style="background-color: #0051a8"
        @click.prevent="closeUpdateToast(false)"
      >
        OK
      </button>
    </b-toast-->
    <sticky-footer v-if="!isCookiesAccepted" text="ABC">
      Ta strona korzysta z cookies, aby świadczyć usługi na najwyższym poziomie.
      Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
      <button
        class="btn btn-primary"
        style="background-color: #0051a8"
        @click.prevent="acceptCookies()"
      >
        Zgoda
      </button>
      <ExternalLink
        class="btn btn-link text-warning"
        style="color: #0051a8"
        anchor="Dowiedz się więcej"
        page="http://wszystkoociasteczkach.pl"
        rel="nofollow"
        >Dowiedz się więcej</ExternalLink
      >
    </sticky-footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isCookiesAccepted: true,
      modeSwitcher: false,
      // platforms: {
      // internal: [
      // {
      //   link: '/ciss/',
      //   name: 'Akademia Bezpieczeństwa IT',
      // },
      // {
      //   link: '/educativo/',
      //   name: 'Educativo',
      // },
      // {
      //   link: '/kuvi/',
      //   name: 'Kuvi',
      // },
      // {
      //   link: '/videopoint/',
      //   name: 'Videopoint',
      // },
      // {
      //   link: '/devmentors/',
      //   name: 'Devmentors',
      // },
      // {
      //   link: '/akademiadotnet/',
      //   name: 'Akademia .NET',
      // },
      // ],
      // external: [
      //   {
      //     link: 'https://eduj.pl/p/profil/Paweł-TW5FUmpYdWUvNi9WY1lnanB4TlgyQT09',
      //     name: 'Eduj',
      //   },
      //   {
      //     link: 'https://eduweb.pl/profil/77103',
      //     name: 'Eduweb',
      //   },
      //   {
      //     link: 'https://platforma.strefakursow.pl/p/profil/Pawe%C5%82-cVkweVo2cXEzN2tuWm5vb0xtb1BNdz09',
      //     name: 'Strefa Kursów',
      //   },
      // ],
      // },
      socials: [
        {
          link: 'https://www.facebook.com/profile.php?id=100002685182268',
          name: 'Facebook',
        },
        {
          link: 'https://twitter.com/CyberZiom',
          name: 'Twitter',
        },
        {
          link: 'https://pl.linkedin.com/in/pawe%C5%82-wilczek-885803151',
          name: 'LinkedIn',
        },
        {
          link: 'https://www.instagram.com/spring.java.nuxt.js.developer/?hl=pl',
          name: 'Instagram',
        },
        {
          link: 'https://github.com/beowoolf/',
          name: 'GitHub',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  async mounted() {
    const workbox = await window.$workbox
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
        if (event.isUpdate) {
          // whatever logic you want to use to notify the user that they need to refresh the page.
          console.log('Update was applied. :-D')
          // this.$bvToast.show('update-toast')
        }
      })
    }
    this.isCookiesAccepted = this.$cookies.get('isCookiesAccepted')
    // const dropdowns = document.getElementsByClassName('dropdown-toggle')
    // for (let index = 0; index < dropdowns.length; index++) {
    //   const element = dropdowns[index]
    //   for (let i = 0; i < element.children.length; i++) {
    //     const child = element.children[i]
    //     element.setAttribute('title', child.textContent)
    //   }
    // }
  },
  methods: {
    acceptCookies() {
      this.$cookies.set('isCookiesAccepted', true, {
        maxAge: 60 * 60 * 24 * 366 * 10,
      })
      this.isCookiesAccepted = true
    },
    // closeUpdateToast(reload) {
    //   this.$bvToast.hide('update-toast')
    //   if (reload === true) window.location.reload(true)
    // },
    setColorModeTheme(color) {
      // console.log(color)
      this.$colorMode.preference = color
      this.$cookies.set('colorModeTheme', color, {
        maxAge: 60 * 60 * 24 * 366,
      })
    },
  },
}
</script>

<style>
body {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  word-spacing: 1px;

  /* -ms-text-size-adjust: 100%; */

  /* -webkit-text-size-adjust: 100%; */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body,
.light-theme {
  background-color: rgb(239 239 239 / 100%);
  color: rgba(0 0 0 / 80%);
}

.dark-mode body,
.dark-theme {
  background-color: rgb(38 39 47 / 100%);
  color: #ebf4f1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
main > .container-fluid { */
main {
  padding: 100px 15px 0;

  /* display: flex; */
}

.footer {
  background-color: #f5f5f5;
}

.footer > .container-fluid {
  padding-right: 15px;
  padding-left: 15px;
}

.text-primary {
  color: #0068d6 !important;
}
</style>
