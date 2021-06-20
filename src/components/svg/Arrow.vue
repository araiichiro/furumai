<template>
  <g v-bind:visibility="shape.visibility">
    <path
      v-bind:d="d"
      v-bind="shapeAttrs"
    ></path>
    <TextContent
      v-bind:content="shape.text"
      v-bind:position="textPosition"
      v-bind:centering="true"
    ></TextContent>
  </g>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'vue-property-decorator'
import {Shape} from '@/components/model/Shape'
import {Vector2d} from '@/layout/Vector2d'
import TextContent from '@/components/svg/TextContent.vue'

@Component({
  components: {
    TextContent,
  },
})
export default class Arrow extends Vue {
  @Prop()
  public shape!: Shape

  get textPosition(): {x: number, y: number} {
    const {x1, y1, x2, y2} = this.xy
    const vec = new Vector2d(x1, y1, x2, y2)

    let v = vec.normalize()
    v = v.dy === 0 ? v.rotate(90 * Math.sign(v.dx)) : v.dy > 0 ? v.rotate(-90) : v.rotate(90)
    v = v.multiple(24)

    const cos = vec.dx / vec.length
    const u = Math.abs(cos) > 0.98 ? vec.multiple(cos).multiple(0.35) : vec.multiple(0.1)
    const loc = this.shape.location

    return {
      x: loc.cx.pixel + v.dx - u.dx,
      y: loc.cy.pixel + v.dy - u.dy,
    }
  }

  private get xy(): {x1: number, y1: number, x2: number, y2: number} {
    const start = this.shape.location.start
    const end = this.shape.location.end
    return {x1: start.x.pixel, y1: start.y.pixel, x2: end.x.pixel, y2: end.y.pixel}
  }

  get d(): string {
    return this.shape.shape === 'arrow' ? this.arrow : this.line
  }

  get line(): string {
    const {x1, y1, x2, y2} = this.xy
    return `M${x1} ${y1} L${x2} ${y2}`
  }

  get arrow(): string {
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

  public get shapeAttrs() {
    return {
      id: this.shape.id,
      class: this.shape.class,
      visibility: this.shape.visibility,
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  private defaults = {
    arrow: {
      head: {
        size: 16,
        degree: 27,
      },
    },
  }
}

</script>

<style scoped>

</style>
