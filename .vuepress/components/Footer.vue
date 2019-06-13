<template>
  <footer id="footer">
    <hr/>
    <a href="/furumai/docs/about.html">About</a>
    <a href="/furumai/docs/gallery.html">Gallery</a>
    <a href="https://github.com/araiichiro/furumai">GitHub Repository</a>
    <cookie-law></cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw },
  name: 'Footer',
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
