<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="brand" href="#">Furumai</a>
      <div class="tabs">
        <router-link :to="{name: 'docs'}" :class="{ active: this.$route.path.match(/docs/) }">Docs</router-link>
        <router-link :to="{name: 'dependencies'}" :class="{ active: this.$route.path.match(/dependencies/) }">Dependencies</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Header extends Vue {
}
</script>

<style scoped>
  nav {
    padding-bottom: 1rem;
  }
</style>
