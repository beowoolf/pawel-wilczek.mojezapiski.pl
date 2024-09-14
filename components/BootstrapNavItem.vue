<template>
  <li class="nav-item">
    <InternalLink
      v-if="to"
      :page="to"
      :anchor="linkAttrs.title"
      target="_self"
      class="nav-link"
      :class="linkClasses"
      ><slot>{{ linkAttrs.title }}</slot></InternalLink
    >
    <a
      v-else-if="href"
      :href="href"
      :title="linkAttrs.title"
      target="_self"
      class="nav-link"
      :class="linkClasses"
      @click.prevent="goTo()"
      ><slot>{{ linkAttrs.title }}</slot></a
    >
  </li>
</template>

<script>
export default {
  name: 'BootstrapNavItem',
  props: {
    linkClasses: {
      type: String,
      required: false,
      default: '',
    },
    to: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    linkAttrs: {
      type: Object,
      required: false,
      default: () => {
        return { title: '' }
      },
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
