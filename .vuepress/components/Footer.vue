<template>
  <footer id="footer">
    <hr/>
    <a href="/furumai/docs/about.html">About</a>
    <a href="/furumai/docs/gallery.html">Gallery</a>
    <a href="https://github.com/araiichiro/furumai">GitHub Repository</a>
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
  #footer {
    float: left;
  }

  #footer a {
    margin-right: 1rem;
  }
</style>
