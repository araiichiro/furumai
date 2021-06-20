<template>
  <g>
    <Box
      v-for="c in boxes"
      v-bind:key="c.id"
      v-bind:shape="c"></Box>
    <Cylinder
      v-for="c in cylinders"
      v-bind:key="c.id"
      v-bind:shape="c"></Cylinder>
    <Pipe
      v-for="c in pipes"
      v-bind:key="c.id"
      v-bind:shape="c"></Pipe>
    <Person
      v-for="c in persons"
      v-bind:key="c.id"
      v-bind:shape="c"></Person>
    <VIcon
      v-for="c in vIcons"
      v-bind:key="c.id"
      v-bind:shape="c"></VIcon>
    <Arrow
      v-for="c in arrows"
      v-bind:key="c.id"
      v-bind:shape="c"></Arrow>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import * as model from '@/components/model/Shape'
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
    Box,
    Arrow,
  },
})
export default class Group extends Vue {
  @Prop()
  public shapes!: model.Shape[]

  get boxes(): Shape[] {
    return this.shapeOf("box")
  }

  get cylinders(): Shape[] {
    return this.shapeOf("cylinder")
  }

  get pipes(): Shape[] {
    return this.shapeOf("pipe")
  }

  get persons(): Shape[] {
    return this.shapeOf("person")
  }

  get vIcons(): Shape[] {
    return this.shapes.filter((s) => s.icon.length > 0)
  }

  get arrows(): Shape[] {
    return [
      ...this.shapeOf("arrow"),
      ...this.shapeOf("edge"),
    ]
  }

  shapeOf(shape: string): Shape[] {
    return this.shapes.filter((s) => s.shape === shape && s.icon === "")
  }
}
</script>

<style scoped>

</style>
