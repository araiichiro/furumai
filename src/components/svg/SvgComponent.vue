<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${shape.box.width} ${shape.box.height}`"
    :width="shape.box.width / 2"
    :height="shape.box.height / 2"
  >
    <Group v-bind:g="shape"></Group>
  </svg>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import {Shape} from "@/shared/vue/Shape"
  import Group from "./Group.vue"

  @Component({
    components: {
      Group
    },
  })
  export default class SvgComponent extends Vue {
    @Prop()
    shape!: Shape
  }

</script>

<style scoped>

</style>
