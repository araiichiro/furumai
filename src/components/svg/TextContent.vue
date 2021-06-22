<template>
  <text
    v-if="text"
    v-bind:x="text.base.x"
    v-bind:y="text.base.y"
    class="text"
  >
    <tspan
      v-if="text"
      v-for="t in text.lines"
      v-bind:dy="t.dy"
      v-bind:x="text.base.x"
    >{{ t.text }}</tspan>
  </text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {TextElem} from "@/components/model/TextElem";

@Component
export default class TextContent extends Vue {
  @Prop()
  public text?: TextElem

  // @Prop()
  // public content!: string
  //
  // @Prop({default: false})
  // public centering!: boolean
  //
  // @Prop({default: 0.5})
  // public dy!: number
  //
  // @Prop({default: {x: 0, y: 0}})
  // public position!: {x: string, y: string}
}
</script>

<style scoped>

</style>
