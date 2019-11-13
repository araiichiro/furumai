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
import {Shape} from '@/components/model/Shape'
import TextContent from '@/components/svg/TextContent.vue'

@Component({
  components: {
    TextContent,
    GridArea,
  },
})
export default class Person extends Vue {
  @Prop()
  public shape!: Shape

  get shapeAttrs() {
    return this.shape.svgAttrs.svgAttrs
  }

  get textAttrs() {
    return {
      'text-anchor': 'middle',
      ...this.shape.text.textAttrs.svgAttrs,
    }
  }

  get textPosition(): {x: number, y: number} {
    const {x, y, width} = this.shape.box
    return {
      x: x + width / 2,
      y: y - 32, // FIXME
    }
  }

  get d(): string {
    const box = this.shape.box
    const {x, y, width, height} = box
    return this.person(x + width / 4, y, width / 2, height)
  }

  private person(x: number, y: number, width: number, height: number): string {
    const cx = this.shape.box.cx
    const xx = x + width
    const yy = y + height
    const cr = height / 5

    const cxr = cx - cr
    const cxl = cx + cr
    const yuu = y - cr / 3
    const yum = y + cr
    const yud = y + 2 * cr + cr / 3 // FIXME
    const xl = x
    const xr = xx
    const y1 = y + cr * 2
    const y2 = y + cr * 3
    const y3 = cr * 4 + y

    return `M ${cxr},${yum}
C ${cxr},${yud}
${cxl},${yud}
${cxl},${yum}
M ${cxr},${yum}
C ${cxr},${yuu}
${cxl},${yuu}
${cxl},${yum}
M${cx},${y1}
L${cx},${y3}
M${xl},${y2}
L${xr},${y2}
M${cx},${y3}
L${xl},${yy}
M${cx},${y3}
L${xr},${yy}`
  }
}
</script>

<style scoped>

</style>
