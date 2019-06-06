<template>
  <nav class="nav">
    <div class="nav-left">
      <router-link :to="{path: '/'}" class="brand">Furumai</router-link>
      <div class="tabs">
        <router-link :to="{name: 'docs', params: {lang: 'en'}}" exact-active-class="active">docs</router-link>
        <router-link :to="{name: 'docs', params: {lang: 'ja'}}" exact-active-class="active">docs-ja</router-link>
        <a class="button outline" href="https://github.com/araiichiro/furumai">GitHub</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Header extends Vue {
}
</script>

<style scoped>
  nav {
    padding-bottom: 1rem;
  }
</style>
