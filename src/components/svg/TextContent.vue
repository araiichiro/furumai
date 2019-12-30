<template>
  <text
    v-bind:x="position.x + dxy.x"
    v-bind:y="position.y + dxy.y"
    v-bind="attrs"
  >
    <tspan
      v-for="t in texts"
      v-bind:dy="t.dy"
      v-bind:x="position.x + dxy.x"
      v-bind="attrs"
    >{{ t.text }}</tspan>
  </text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import * as api from '@/components/model/TextContent'
import {Attrs, num} from '@/utils/types'

@Component
export default class TextContent extends Vue {
  @Prop()
  public content!: api.TextContent

  @Prop({default: false})
  public centering!: boolean

  @Prop({default: 0.5})
  public dy!: number

  @Prop({default: {x: 0, y: 0}})
  public position!: {x: number, y: number}

  @Prop()
  public attrs!: Attrs

  get dxy(): {x: number, y: number} {
    const {dx, dy} = this.attrs
    return {x: num(dx) || 0, y: num(dy) || 0}
  }

  get texts(): Array<{text: string, dy: string}> {
    const label = this.content.label
    const content = this.content.t
    const txt = label ? (content ? label + '\\n' + content : label) : content || ''
    if (txt) {
      if (this.centering) {
        const [head, ...tail] = txt.split('\\n')
        const first = {text: head, dy: `${0.35 - tail.length * 0.5}em`}
        const rest = tail.map((s) => {
          return {text: s, dy: '1em'}
        })
        return [first, ...rest]
      } else {
        const [head, ...tail] = txt.split('\\n')
        const first = {text: head, dy: `${this.dy + 0.35}em`}
        const rest = tail.map((s) => {
          return {text: s, dy: '1em'}
        })
        return [first, ...rest]
      }
    } else {
      return []
    }
  }
}
</script>

<style scoped>

</style>
