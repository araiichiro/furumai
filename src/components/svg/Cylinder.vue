<template>
  <g>
    <path
      v-bind:d="d"
      v-bind="shapeAttrs"
    ></path>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
      v-bind:attrs="textAttrs"
    ></TextContent>
    <GridArea v-bind:box="shape.box"></GridArea>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import GridArea from '@/components/svg/GridArea.vue'
import {Shape} from '@/shared/vue/Shape'
import TextContent from '@/components/svg/TextContent.vue'

@Component({
  components: {
    TextContent,
    GridArea,
  },
})
export default class Cylinder extends Vue {
  @Prop()
  public shape!: Shape

  get shapeAttrs() {
    return {
      fill: 'none',
      stroke: 'black',
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  get textAttrs() {
    return this.shape.text.textAttrs.svgAttrs
  }

  get textPosition(): {x: number, y: number} {
    const {x, y, padding} = this.shape.box
    return {
      x: x + padding.left,
      y: y + padding.top,
    }
  }

  get d(): string {
    const box = this.shape.box
    const cx = box.cx
    const cy = box.cy
    const {width, height} = box

    const curve = 8 + (width * 1.2) / 20  // FIXME
    const xl = cx - (width / 2)
    const xr = cx + (width / 2)
    const yum = cy - (height / 2)
    const yuu = yum - curve
    const yud = yum + curve
    const ydm = cy + (height / 2)
    const ydd = ydm + curve

    return `M ${xr},${yum}
C ${xr},${yud}
  ${xl},${yud}
  ${xl},${yum}
M ${xr},${yum}
C ${xr},${yuu}
  ${xl},${yuu}
  ${xl},${yum}
M ${xr},${yum}
L ${xr},${ydm}
C ${xr},${ydd}
  ${xl},${ydd}
  ${xl},${ydm}
L ${xl},${yum}`


  }
}
</script>

<style scoped>

</style>
