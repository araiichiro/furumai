<template>
  <text
    v-if="text"
    v-bind:x="text.attrs.x"
    v-bind:y="text.attrs.y"
    class="label text"
  >
    <tspan
      v-if="text"
      v-for="t in text.lines"
      v-bind:dy="`-0.4em`"
      v-bind:x="text.attrs.x"
    >{{ t.text }}</tspan>
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
