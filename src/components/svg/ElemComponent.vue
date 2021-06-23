<template>
  <g v-bind="visibility">
    <path
      v-if="elem.d"
      v-bind:d="elem.d"
      v-bind="elem.secureAttrs.svgAttrs"
    ></path>
    <VIcon
      v-else-if="elem.icon"
      v-bind:elem="elem"
    ></VIcon>
    <rect
      v-else
      v-bind="elem.secureAttrs.svgAttrs"
    ></rect>

    <TextContent
      v-bind:text="elem.text"
    ></TextContent>
    <LabelComponent
      v-bind:text="elem.label"
    ></LabelComponent>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import 'vue-awesome/icons'
import TextContent from '@/components/svg/TextContent.vue'
import LabelComponent from '@/components/svg/LabelComponent.vue'
import VIcon from '@/components/svg/VIcon.vue'
import {Assigns} from '@/style/Style'
import {SvgElem} from '@/components/model/SvgElem'

@Component({
  components: {
    LabelComponent,
    TextContent,
    VIcon,
  },
})
export default class ElemComponent extends Vue {
  @Prop()
  public elem!: SvgElem

  get visibility(): Assigns {
    if (this.elem.visibility) {
      return {
        visibility: this.elem.visibility,
      }
    } else {
      return {}
    }
  }
}
</script>

<style scoped>

</style>
