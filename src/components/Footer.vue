<template>
  <footer id="footer">
    <cookie-law v-on:accept="cookieAccepted()" v-show="false"></cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw },
  name: 'Footer',
  methods: {
    cookieAccepted: () => {
      return this.$ga.enable()
    },
  },
}
</script>

<style scoped>
</style>
