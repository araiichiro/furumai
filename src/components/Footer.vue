<template>
  <div>
    <router-link :to="{name: 'dependencies'}">Dependencies</router-link>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
})
export default class Docs extends Vue {
}
</script>

<style scoped>
</style>
