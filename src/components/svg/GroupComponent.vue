<template>
  <g v-bind="attrs">
    <path
      v-if="g.elem.d"
      v-bind:d="g.elem.d"
      v-bind="childAttrs"
    ></path>
    <VIcon
      v-else-if="g.elem.icon"
      v-bind:elem="g.elem"
    ></VIcon>
    <rect
      v-else
      v-bind="childAttrs"
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

  get attrs(): Assigns {
    if (this.g.elem.visibility) {
      return {
        visibility: this.g.elem.visibility,
        id: this.g.elem.id,
        'class': this.g.elem.className,
      }
    } else {
      return {
        id: this.g.elem.id,
        'class': this.g.elem.className,
      }
    }
  }

  get childAttrs(): Assigns {
    return {
      'class': 'self',
      ...this.g.elem.secureAttrs.svgAttrs,
    }
  }

}
</script>

<style scoped>

</style>
