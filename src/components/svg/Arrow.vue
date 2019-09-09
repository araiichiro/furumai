<template>
  <g>
    <path
      v-bind:d="d"
      v-bind="attrs.shape"
    ></path>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
      v-bind:attrs="attrs.text"
    ></TextContent>
    <GridArea v-bind:box="shape.box"></GridArea>
  </g>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'vue-property-decorator'
import GridArea from '@/components/svg/GridArea.vue'
import {Shape} from '@/shared/vue/Shape'
import {Vector2d} from '@/layout/engine/Vector2d'
import TextContent from '@/components/svg/TextContent.vue'
import {divideAttrs, ShapeAndTextAttrs} from '@/furumai/utils'

@Component({
  components: {
    TextContent,
    GridArea,
  },
})
export default class Arrow extends Vue {
  @Prop()
  public shape!: Shape

  // textPosition!: {x: number, y: number}
  get textPosition(): {x: number, y: number} {
    const {x1, y1, x2, y2} = this.xy
    const vec = new Vector2d(x1, y1, x2, y2)

    let v = vec.normalize()
    v = v.dy === 0 ? v.rotate(90 * Math.sign(v.dx)) : v.dy > 0 ? v.rotate(-90) : v.rotate(90)
    v = v.multiple(24)

    const dy = 15
    const cos = vec.dx / vec.length
    const u = Math.abs(cos) > 0.98 ? vec.multiple(cos).multiple(0.35) : vec.multiple(0.1)
    const box = this.shape.box
    return {
      x: box.cx + v.dx - u.dx,
      y: box.cy + v.dy - dy - u.dy,
    }
  }

  private get xy(): {x1: number, y1: number, x2: number, y2: number} {
    const {x, y, width, height} = this.shape.box
    return {x1: x, y1: y, x2: x + width, y2: y + height}
  }

  get d(): string {
    const {x1, y1, x2, y2} = this.xy
    function rotateBase(deg: number, pump: number) {
      const v1 = new Vector2d(x1, y1, x2, y2).normalize().multiple(pump).rotate(deg).negate()
      return v1.move(x2, y2)
    }

    const degree = this.defaults.arrow.head.degree
    const pumpUp = this.defaults.arrow.head.size
    const va = rotateBase(degree, pumpUp)
    const vb = rotateBase(-degree, pumpUp)

    return `M ${x1} ${y1}
L ${x2} ${y2}
M ${va.x2} ${va.y2}
L ${x2} ${y2}
M ${vb.x2} ${vb.y2}
L ${x2} ${y2}`
  }

  public get attrs(): ShapeAndTextAttrs {
    const {shape, text} = divideAttrs(this.shape.svgAttrs.svgAttrs)
    const strokeWidth = this.defaults.arrow.width
    return {
      shape: {
        stroke: 'black',
        'stroke-width': `${strokeWidth}`,
        ...shape,
      },
      text: {
        ...text,
      },
    }
  }

  private defaults = {
    arrow: {
      width: 2,
      head: {
        size: 26,
        degree: 27,
      },
    },
  }
}

</script>

<style scoped>

</style>
