<template>
  <text
    v-bind:x="position.x + dxy.x"
    v-bind:y="position.y + dxy.y"
    v-bind="attrs"
  >
    <tspan
      v-for="t in texts"
      dy="1em"
      v-bind:x="position.x + dxy.x"
      v-bind="attrs"
    >{{ t }}</tspan>
  </text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import * as api from '@/components/model/TextContent'
import {Attrs, num} from '@/utils'

@Component
export default class TextContent extends Vue {
  @Prop()
  public content!: api.TextContent

  @Prop({default: {x: 0, y: 0}})
  public position!: {x: number, y: number}

  @Prop()
  public attrs!: Attrs

  get dxy(): {x: number, y: number} {
    const {dx, dy} = this.attrs
    return {x: num(dx) || 0, y: num(dy) || 0}
  }

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
