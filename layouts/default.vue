<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/Footer.vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    Navigation,
    Footer
  }
})
</script>
