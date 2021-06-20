<template>
  <g v-bind:visibility="shape.visibility">
    <v-icon
      v-bind:name="name"
      v-bind="shapeAttrs"
      class="no_rough"
    ></v-icon>
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
import 'vue-awesome/icons'
import TextContent from '@/components/svg/TextContent.vue'
import LabelComponent from "@/components/svg/LabelComponent.vue";
import Icon from 'vue-awesome/components/Icon.vue'
import {Shape} from '@/components/model/Shape'

@Component({
  components: {
    LabelComponent,
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
    const requiredName = this.shape.icon
    if (VIcon.validIcons.has(requiredName)) {
      return requiredName
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${this.shape.icon}`)
    }
  }

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
      y: y.add(padding.top).toString(),
    }
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
