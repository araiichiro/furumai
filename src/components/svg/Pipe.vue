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
  export default class Pipe extends Vue {
    @Prop()
    public shape!: Shape

    get shapeAttrs() {
      return this.shape.svgAttrs.svgAttrs
    }

    get textAttrs() {
      return this.shape.text.textAttrs.svgAttrs
    }

    get textPosition(): {x: number, y: number} {
      const {x, y, padding} = this.shape.box
      return {
        x: x + padding.left + 10, // FIXME
        y: y + padding.top - 10, // FIXME
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
