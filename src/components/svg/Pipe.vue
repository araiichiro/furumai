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
  export default class Pipe extends Vue {
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
      x: x.add(padding.left).add(Length.pixel(10)).toString(), // FIXME
      y: y.add(padding.top).sub(Length.pixel(10)).toString(), // FIXME
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
    const cx = box.cx.pixel
    const cy = box.cy.pixel
    const {width, height} = box.area.asPixel()

    const curve = 8 + (width * 1.2) / 20  // FIXME
    const xl = cx - (width / 2)
    const xr = cx + (width / 2)
    const yum = cy - (height / 2)
    const ydm = cy + (height / 2)

    return `M ${xl},${yum}
C ${xl + curve},${yum}
  ${xl + curve},${ydm}
  ${xl},${ydm}
M ${xl},${yum}
C ${xl - curve},${yum}
  ${xl - curve},${ydm}
  ${xl},${ydm}
M ${xl},${yum}
L ${xr},${yum}
C ${xr + curve},${yum}
  ${xr + curve},${ydm}
  ${xr},${ydm}
L ${xl},${ydm}`
    }
  }
</script>

<style scoped>

</style>
