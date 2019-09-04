<template>
  <g v-bind="g.svgAttrs.svgAttrs">
    <Group
      v-for="c in childGroups"
      v-bind:key="c.id"
      v-bind:g="c"></Group>
    <Box
      v-for="c in boxes"
      v-bind:key="c.id"
      v-bind:shape="c"></Box>
    <Cylinder
      v-for="c in cylinders"
      v-bind:key="c.id"
      v-bind:shape="c"></Cylinder>
    <Person
      v-for="c in persons"
      v-bind:key="c.id"
      v-bind:shape="c"></Person>
    <Arrow
      v-for="c in arrows"
      v-bind:key="c.id"
      v-bind:shape="c"></Arrow>
    <GridArea v-bind:box="g.box"></GridArea>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import GridArea from '@/components/svg/GridArea.vue'
import * as shared from '@/shared/vue/Group'
import TextContent from '@/components/svg/TextContent.vue'
import {Shape} from '@/shared/vue/Shape'
import {Attrs} from '@/furumai/utils'
import Cylinder from '@/components/svg/Cylinder.vue'
import Person from '@/components/svg/Person.vue'
import Box from '@/components/svg/Box.vue'
import Arrow from '@/components/svg/Arrow.vue'

@Component({
  name: 'Group',
  components: {
    Person,
    Cylinder,
    TextContent,
    GridArea,
    Box,
    Arrow,
  },
})
export default class Group extends Vue {
  @Prop()
  public g!: shared.Group

  get childGroups(): shared.Group[] {
    return this.g.children.filter((i) => i.type === 'group').map((i) => i as shared.Group)
  }

  get boxes(): Shape[] {
    return this.g.children.filter((i) => i.type === 'box')
  }

  get cylinders(): Shape[] {
    return this.g.children.filter((i) => i.type === 'cylinder')
  }

  get persons(): Shape[] {
    return this.g.children.filter((i) => i.type === 'person')
  }

  get arrows(): Shape[] {
    return this.g.children.filter((i) => i.type === 'arrow')
  }

  get attrs(): Attrs {
    return {
      fill: 'none',
      stroke: 'black',
      ...this.g.svgAttrs.svgAttrs,
    }
  }
}
</script>

<style scoped>

</style>
