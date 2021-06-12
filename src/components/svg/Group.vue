<template>
  <g >
<!--
v-bind="g.svgAttrs.svgAttrs"
  <rect v-bind="attrs"></rect>-->
<!--    <TextContent-->
<!--      v-bind:content="g.text"-->
<!--      v-bind:position="textPosition"-->
<!--      v-bind:dy="labelDy"-->
<!--      v-bind:attrs="textAttrs"></TextContent>-->
<!--    <LabelComponent>-->
<!--    </LabelComponent>-->
<!--    <Group-->
<!--      v-for="c in childGroups"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:g="c"></Group>-->
    <Box
      v-for="c in boxes"
      v-bind:key="c.id"
      v-bind:shape="c"></Box>
<!--    <Cylinder-->
<!--      v-for="c in cylinders"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:shape="c"></Cylinder>-->
<!--    <Pipe-->
<!--      v-for="c in pipes"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:shape="c"></Pipe>-->
<!--    <Person-->
<!--      v-for="c in persons"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:shape="c"></Person>-->
<!--    <VIcon-->
<!--      v-for="c in vIcons"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:shape="c"></VIcon>-->
<!--    <Arrow-->
<!--      v-for="c in arrows"-->
<!--      v-bind:key="c.id"-->
<!--      v-bind:shape="c"></Arrow>-->
<!--    <GridArea v-bind:box="g.box"></GridArea>-->
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import GridArea from '@/components/svg/GridArea.vue'
import * as model from '@/components/model/Group'
import TextContent from '@/components/svg/TextContent.vue'
import {Shape} from '@/components/model/Shape'
import Cylinder from '@/components/svg/Cylinder.vue'
import Person from '@/components/svg/Person.vue'
import Box from '@/components/svg/Box.vue'
import Arrow from '@/components/svg/Arrow.vue'
import Pipe from '@/components/svg/Pipe.vue'
import VIcon from '@/components/svg/VIcon.vue'

@Component({
  name: 'Group',
  components: {
    VIcon,
    Person,
    Cylinder,
    Pipe,
    TextContent,
    GridArea,
    Box,
    Arrow,
  },
})
export default class Group extends Vue {
  @Prop()
  public g!: model.Group

  // get labelPosition(): Position {
  //   const {x, y} = this.g.svgAttrs.svgAttrs
  //   return {
  //     x,
  //     y: y - 32, // FIXME
  //   }
  // }

  // get childGroups(): model.Group[] {
  //   return this.g.children.filter((i) => i.type === 'group').map((i) => i as model.Group)
  // }

  get boxes(): Shape[] {
    return this.g.children.filter((i) => i.type === 'box')
  }

  // get cylinders(): Shape[] {
  //   return this.g.children.filter((i) => i.type === 'cylinder')
  // }
  //
  // get pipes(): Shape[] {
  //     return this.g.children.filter((i) => i.type === 'pipe')
  // }
  //
  // get persons(): Shape[] {
  //   return this.g.children.filter((i) => i.type === 'person')
  // }
  //
  // get vIcons(): Shape[] {
  //   return this.g.children.filter((i) => i.type.startsWith('icon'))
  // }
  //
  // get arrows(): Shape[] {
  //   return this.g.children.filter((i) => i.type === 'arrow' || i.type === 'edge')
  // }
  //
  // get attrs(): Attrs {
  //   const {x, y, width, height} = asString(this.g.box)
  //   return {
  //     x,
  //     y,
  //     width,
  //     height,
  //     ...this.g.svgAttrs.svgAttrs,
  //   }
  // }
  //
  // get textPosition(): {x: number, y: number} {
  //   const {x, y} = this.g.box
  //   return {x, y}
  // }
  //
  // get labelDy(): number {
  //   const label = this.g.text.label || ''
  //   const lc = label.split('\\n').length
  //   return -1 * lc
  // }
  //
  // get textAttrs() {
  //   return this.g.text.textAttrs.svgAttrs
  // }
}
</script>

<style scoped>

</style>
