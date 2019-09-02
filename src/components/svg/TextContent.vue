<template>
  <text
    v-bind:x="position.x + content.dx"
    v-bind:y="position.y + content.dy"
    v-bind="attrs"
  >
    <tspan
      v-for="t in texts"
      dy="1em"
      v-bind:x="position.x"
      v-bind="attrs"
    >{{ t }}</tspan>
  </text>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import * as api from "@/shared/vue/TextContent"
  import {Attrs} from "@/furumai/utils"

  @Component
  export default class TextContent extends Vue {
    @Prop()
    content!: api.TextContent

    @Prop({default: {x: 0, y: 0}})
    position!: {x: number, y: number}

    @Prop()
    attrs!: Attrs

    get texts(): string[] {
      const label = this.content.label
      const content = this.content.t
      const txt = label ? (content ? label + '\\n' + content : label) : content || ''
      if (txt) {
        return txt.split('\\n')
      } else {
        return []
      }
    }
  }
</script>

<style scoped>

</style>
