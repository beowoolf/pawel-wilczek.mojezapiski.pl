<template>
  <NuxtLink :to="page" :title="anchor"
    ><slot>{{ anchor }}</slot></NuxtLink
  >
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
      type: [String, Object],
      required: true,
    },
  },
}
</script>
