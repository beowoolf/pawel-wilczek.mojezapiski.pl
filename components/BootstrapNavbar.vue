<template>
  <nav
    class="navbar"
    :class="
      'navbar-' + type + ' bg-' + variant + ' navbar-expand-' + toggleable
    "
  >
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'BootstrapNavbar',
  props: {
    toggleable: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
}
</script>
