<template>
  <g>
    <v-icon
      v-bind:name="name"
      v-bind="shapeAttrs"
      class="no_rough"
    ></v-icon>
    <TextContent
      v-bind:position="labelPosition"
      v-bind:content="textContentLabel"
      v-bind:attrs="textAttrs"></TextContent>
    <TextContent
      v-bind:position="textPosition"
      v-bind:content="textContentText"
      v-bind:attrs="textAttrs"></TextContent>
    <GridArea v-bind:box="shape.box"></GridArea>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import 'vue-awesome/icons'
import TextContent from '@/components/svg/TextContent.vue'
import Icon from 'vue-awesome/components/Icon.vue'
import GridArea from '@/components/svg/GridArea.vue'
import {Shape} from '@/components/model/Shape'
import {asString} from '@/utils/types'

@Component({
  components: {
    GridArea,
    TextContent,
    'v-icon': Icon,
  },
})
export default class VIcon extends Vue {
  private static validIcons = new Set(VIcon.icons())

  private static icons(): string[] {
    const a = []
    for (const i of Object.keys((Icon as any).icons)) {
      a.push(i)
    }
    return a
  }

  @Prop()
  public shape!: Shape

  get name(): string {
    const requiredName = this.shape.type.split(':')[1]
    if (VIcon.validIcons.has(requiredName)) {
      return requiredName
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${this.shape.type}`)
    }
  }

  get labelPosition(): {x: number, y: number} {
    const {x, y} = this.shape.box
    const lc = 1 // TODO count lines
    return {
      x,
      y: y - 32 * lc,
    }
  }

  get textContentText() {
    return {
      t: this.shape.text.t,
    }
  }

  get textContentLabel() {
    return {
      label: this.shape.text.label,
    }
  }

  get textPosition(): {x: number, y: number} {
    const {x, y, padding} = this.shape.box
    return {
      x: x + padding.left,
      y: y + padding.top,
    }
  }

  public get shapeAttrs() {
    const {x, y, width, height, margin, padding} = asString(this.shape.box)
    return {
      id: `_icon_${this.shape.id}`,
      x, y, width, height, margin, padding,
      ...this.shape.svgAttrs.svgAttrs,
    }
  }

  public get textAttrs() {
    return this.shape.text.textAttrs.svgAttrs
  }
}

</script>

<style scoped>

</style>
