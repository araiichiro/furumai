<template>
  <g v-bind="visibility">
    <path
      v-if="g.elem.d"
      v-bind:d="g.elem.d"
      v-bind="g.elem.secureAttrs.svgAttrs"
    ></path>
    <VIcon
      v-else-if="g.elem.icon"
      v-bind:elem="g.elem"
    ></VIcon>
    <rect
      v-else
      v-bind="g.elem.secureAttrs.svgAttrs"
    ></rect>

    <TextContent
      v-bind:text="g.elem.text"
    ></TextContent>
    <LabelComponent
      v-bind:text="g.elem.label"
    ></LabelComponent>

    <Group
      v-for="c in g.children"
      v-bind:key="c.elem.secureAttrs.svgAttrs.id"
      v-bind:g="c"
    ></Group>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Group} from '@/components/model/Svg'
import LabelComponent from '@/components/svg/LabelComponent.vue'
import TextContent from '@/components/svg/TextContent.vue'
import VIcon from '@/components/svg/VIcon.vue'
import {Assigns} from '@/style/Style'

@Component({
  name: 'Group',
  components: {
    LabelComponent,
    TextContent,
    VIcon,
  },
})
export default class GroupComponent extends Vue {
  @Prop()
  public g!: Group

  get visibility(): Assigns {
    if (this.g.elem.visibility) {
      return {
        visibility: this.g.elem.visibility,
      }
    } else {
      return {}
    }
  }
}
</script>

<style scoped>

</style>
