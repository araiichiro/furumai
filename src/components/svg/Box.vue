<template>
  <g>
    <rect
      v-bind="attrs.shape"
    ></rect>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
      v-bind:attrs="attrs.text"></TextContent>
    <GridArea v-bind:box="shape.box"></GridArea>
  </g>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"
  import {Shape} from "@/shared/vue/Shape"
  import GridArea from "@/components/svg/GridArea.vue"
  import TextContent from "@/components/svg/TextContent.vue"
  import {asString, divideAttrs, ShapeAndTextAttrs} from "@/furumai/utils"

  @Component({
    components: {
      TextContent,
      GridArea
    },
  })
  export default class Box extends Vue {
    @Prop()
    shape!: Shape

    public get attrs():ShapeAndTextAttrs {
      const {shape, text} = divideAttrs(this.shape.svgAttrs.svgAttrs)
      const {x, y, width, height, margin, padding} = asString(this.shape.box)
      return {
        shape: {
          id: `_rect_${this.shape.id}`,
          fill: 'none',
          stroke: 'black',
          x, y, width, height, margin, padding,
          ...shape
        },
        text: {
          ...text
        }
      }
    }

    get textPosition(): {x: number, y: number} {
      const {x, y, padding} = this.shape.box
      return {
        x: x + padding.left,
        y: y + padding.top
      }
    }
  }
</script>

<style scoped>

</style>
