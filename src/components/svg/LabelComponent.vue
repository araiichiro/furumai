<template>
  <text
    class="label"
    v-bind:x="position.x"
    v-bind:y="position.y"
  >
    <tspan
      v-for="t in texts"
      v-bind:dy="`-0.4em`"
      v-bind:x="position.x"
    >{{ t.text }}</tspan>
  </text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class TextContent extends Vue {
  @Prop()
  public content!: string

  @Prop({default: false})
  public centering!: boolean

  @Prop({default: 0.5})
  public dy!: number

  @Prop({default: {x: 0, y: 0}})
  public position!: {x: string, y: string}

  get texts(): Array<{text: string, dy: string}> {
    const txt = this.content
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
