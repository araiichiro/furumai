<template>
  <rect v-bind="attrs"></rect>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import {Box} from "@/layout/engine/Box"

  @Component
  export default class GridArea extends Vue {
    @Prop()
    box!: Box

    get attrs(): any {
      const {x, y, width, height, margin} = this.box
      return {
        fill: 'none',
        stroke: 'none',
        visibility: 'hidden',
        x: x - margin.left,
        y: y - margin.top,
        width: margin.left + width + margin.right,
        height: margin.top + height + margin.bottom,
      }
    }

  }
</script>

<style scoped>
</style>
