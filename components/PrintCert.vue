<template>
  <div>
    <div v-if="print === true" class="ratio ratio-4x3">
      <embed
        :src="linkBase.replace('.png', '.pdf').replace('/png/', '/pdf/')"
        type="application/pdf"
      />
    </div>
    <nuxt-img
      v-else
      preload
      format="webp"
      class="img-fluid"
      :alt="generateImgDesc()"
      :title="generateImgDesc()"
      :src="linkBase"
      style="cursor: pointer"
      @click="$emit('printme')"
    />
  </div>
</template>

<script>
export default {
  name: 'PrintCert',
  props: {
    print: {
      type: Boolean,
      required: true,
    },
    linkBase: {
      type: String,
      required: true,
    },
    imgDesc: {
      type: String,
      required: true,
    },
  },
  methods: {
    generateImgDesc() {
      return 'Certyfikat ukończenia szkolenia pt. "' + this.imgDesc + '".'
    },
  },
}
</script>
