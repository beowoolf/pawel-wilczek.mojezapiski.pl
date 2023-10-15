<template>
  <InternalLink
    v-if="to"
    :page="to"
    :anchor="title"
    target="_self"
    class="navbar-brand"
    :class="linkClasses"
    ><slot>{{ title }}</slot></InternalLink
  >
  <a
    v-else-if="href"
    :href="href"
    :title="title"
    target="_self"
    class="navbar-brand"
    :class="linkClasses"
    @click.prevent="goTo()"
    ><slot>{{ title }}</slot></a
  >
</template>

<script>
export default {
  name: 'BootstrapNavbarBrand',
  props: {
    linkClasses: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    to: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    href: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  methods: {
    goTo() {
      // console.log("Href:" + this.href)
      if (this.href !== '#') window.open(this.href, '_self')
    },
  },
}
</script>
