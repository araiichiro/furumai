<template>
  <text
    v-if="text"
    v-bind:x="text.base.x"
    v-bind:y="text.base.y"
    v-bind="text.svgAttrs.svgAttrs"
    class="label"
  >
    <tspan
      v-if="text"
      v-for="t in text.lines"
      v-bind:dy="t.dy"
      v-bind:x="text.base.x"
    >{{ t.text }}
    </tspan>
  </text>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {TextElem} from '@/components/model/TextElem'

@Component
export default class LabelComponent extends Vue {
  @Prop()
  public text?: TextElem
}
</script>

<style scoped>

</style>
