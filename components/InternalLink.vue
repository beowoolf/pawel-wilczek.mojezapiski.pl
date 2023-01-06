<template>
  <NuxtLink :to="page" :title="anchor"><slot /></NuxtLink>
</template>

<script>
export default {
  name: 'InternalLink',
  props: {
    anchor: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
}
</script>
