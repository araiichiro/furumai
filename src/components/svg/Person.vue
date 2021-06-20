<template>
  <g v-bind:visibility="shape.visibility">
    <path
      v-bind:d="d"
      v-bind="shapeAttrs"
    ></path>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
    ></TextContent>
    <LabelComponent
      v-bind:content="shape.label"
      v-bind:position="labelPosition"
    ></LabelComponent>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Shape} from '@/components/model/Shape'
import TextContent from '@/components/svg/TextContent.vue'
import {Length} from "@/layout/types";
import LabelComponent from "@/components/svg/LabelComponent.vue";

@Component({
  components: {
    LabelComponent,
    TextContent,
  },
})
export default class Person extends Vue {
  @Prop()
  public shape!: Shape

  public get shapeAttrs() {
    return {
      id: this.shape.id,
      class: this.shape.class,
      visibility: this.shape.visibility,
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  get textPosition(): {x: string, y: string} {
    const {x, y} = this.shape.location.start
    const {padding} = this.shape.location.area
    return {
      x: x.add(padding.left).toString(),
      y: y.add(padding.top).sub(Length.pixel(32)).toString(), // FIXME
    }
  }

  get labelPosition(): {x: string, y: string} {
    const {x, y} = this.shape.location.start
    return {
      x: x.toString(),
      y: y.toString(),
    }
  }

  get d(): string {
    const box = this.shape.location
    const {x, y} = box.start
    const {width, height} = box.area
    return this.person(x.pixel + width.pixel / 4, y.pixel, width.pixel / 2, height.pixel)
  }

  private person(x: number, y: number, width: number, height: number): string {
    const cx = this.shape.location.cx.pixel
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
