<template>
  <nuxt-img
    alt="logo MojeZapiski.pl"
    title="logo MojeZapiski.pl"
    class="img-fluid logo"
    src="/logo.png"
    style="width: 166px; height: 54px"
    format="webp"
    preload
  />
</template>

<script>
export default {
  name: 'LogoComponent',
}
</script>

<style>
.logo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
