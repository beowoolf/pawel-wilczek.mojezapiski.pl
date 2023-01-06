<template>
  <div class="col-sm-6">
    <div v-if="print === true" class="embed-responsive embed-responsive-16by9">
      <embed :src="linkBase + '.pdf'" type="application/pdf" />
    </div>
    <nuxt-img
      v-else
      preload
      format="webp"
      class="img-fluid"
      :alt="generateImgDesc()"
      :title="generateImgDesc()"
      :src="linkBase + '.png'"
      style="cursor: pointer"
      @click="$emit('printme')"
    />
  </div>
</template>

<script>
export default {
  name: 'AkademiaDotNetCert',
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
