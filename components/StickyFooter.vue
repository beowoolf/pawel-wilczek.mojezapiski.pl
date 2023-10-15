<template>
  <div
    class="fixed-bottom font-size-sticky-footer py-2"
    :class="
      $colorMode.preference == 'light' ? 'bg-footer-dark' : 'bg-footer-dark'
    "
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  name: 'StickyFooter',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style>
.bg-footer-light {
  background-color: rgb(210 210 210 / 100%) !important;
  color: rgba(0 0 0 / 80%);
}

.bg-footer-dark {
  background-color: rgb(48 49 59 / 100%) !important;
  color: #ebf4f1;
}

@media only screen and (max-width: 767px) {
  .font-size-sticky-footer {
    font-family: Poppins, Arial, Verdana, Tahoma, sans-serif;
    font-weight: normal;
    font-size: 10px;
    text-align: center;
  }
}
@media (min-width: 768px) {
  .font-size-sticky-footer {
    font-family: Poppins, Arial, Verdana, Tahoma, sans-serif;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
  }
}
</style>
