<template>
  <g>
    <rect
      v-bind="shapeAttrs"
    ></rect>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
      v-bind:attrs="textAttrs"></TextContent>
    <GridArea v-bind:box="shape.box"></GridArea>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Shape} from '@/shared/vue/Shape'
import GridArea from '@/components/svg/GridArea.vue'
import TextContent from '@/components/svg/TextContent.vue'
import {asString} from '@/furumai/utils'

@Component({
  components: {
    TextContent,
    GridArea,
  },
})
export default class Box extends Vue {
  @Prop()
  public shape!: Shape

  public get shapeAttrs() {
    const {x, y, width, height, margin, padding} = asString(this.shape.box)
    return {
      id: `_rect_${this.shape.id}`,
      x, y, width, height, margin, padding,
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  public get textAttrs() {
    return this.shape.text.textAttrs.svgAttrs
  }

  get textPosition(): {x: number, y: number} {
    const {x, y, padding} = this.shape.box
    return {
      x: x + padding.left,
      y: y + padding.top,
    }
  }
}
</script>

<style scoped>

</style>
