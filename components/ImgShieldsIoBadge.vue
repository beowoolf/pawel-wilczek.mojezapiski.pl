<template>
  <img
    :alt="alt"
    :title="alt"
    :src="dataCanonicalSrc"
    :data-canonical-src="dataCanonicalSrc"
    style="max-width: 100%"
  />
</template>

<script>
export default {
  name: 'ImgShieldsIoBadge',
  props: {
    md: {
      type: String,
      required: true,
    },
  },
  computed: {
    alt() {
      const arr = this.md.match(/\[.*\]/)
      const first = arr[0]
      const indexStart = 1
      const indexEnd = first.length - 1
      return first.substring(indexStart, indexEnd)
    },
    dataCanonicalSrc() {
      const arr = this.md.match(/\(.*\)/)
      const first = arr[0]
      const indexStart = 1
      const indexEnd = first.length - 1
      return first.substring(indexStart, indexEnd)
    },
  },
}
</script>
