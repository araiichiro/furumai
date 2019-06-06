<template>
  <div id="footer">
    <hr/>
    <nav class="nav">
      <div class="nav-left">
        <div class="tabs">
          <router-link :to="{name: 'dependencies'}" exact-active-class="active">Dependencies</router-link>
          <a href="https://github.com/araiichiro/furumai">GitHub</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
}
</script>

<style scoped>
</style>
