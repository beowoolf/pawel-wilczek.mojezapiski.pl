<template>
  <a :href="page" :title="anchor"><slot /></a>
</template>

<script>
export default {
  name: 'ExternalLink',
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
