<template>
  <g v-bind:visibility="shape.visibility">
    <rect
      v-bind="shapeAttrs"
    ></rect>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
    ></TextContent>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Shape} from '@/components/model/Shape'
import TextContent from '@/components/svg/TextContent.vue'

@Component({
  components: {
    TextContent,
  },
})
export default class Box extends Vue {
  @Prop()
  public shape!: Shape

  public get visibility(): string {
    return this.shape.visibility
  }

  public get shapeAttrs() {
    return {
      class: this.shape.class,
      visibility: this.shape.visibility,
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  get textPosition(): {x: string, y: string} {
    const {x, y} = this.shape.base
    const {padding} = this.shape.area
    return {
      x: x.add(padding.left).toString(),
      y: y.add(padding.top).toString(),
    }
  }
}
</script>

<style scoped>

</style>
