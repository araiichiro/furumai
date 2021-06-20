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
import LabelComponent from "@/components/svg/LabelComponent.vue";

@Component({
  components: {
    LabelComponent,
    TextContent,
  },
})
export default class Cylinder extends Vue {
  @Prop()
  public shape!: Shape

  get shapeAttrs() {
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
      y: y.add(padding.top).toString(),
    }
  }

  get d(): string {
    const box = this.shape.location
    const cx = box.cx.pixel
    const cy = box.cy.pixel
    const {width, height} = box.area.asPixel()

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

  get labelPosition(): {x: string, y: string} {
    const {x, y} = this.shape.location.start
    return {
      x: x.toString(),
      y: y.toString(),
    }
  }
}
</script>

<style scoped>

</style>
