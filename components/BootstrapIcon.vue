<template>
  <i class="bi" :class="'bi-' + icon"></i>
</template>

<script>
export default {
  name: 'BootstrapIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
