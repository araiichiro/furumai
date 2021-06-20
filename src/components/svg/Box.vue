<template>
  <g v-bind:visibility="shape.visibility">
    <rect
      v-bind="shapeAttrs"
    ></rect>
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
export default class Box extends Vue {
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
