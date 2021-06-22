<template>
  <v-icon
    v-bind:name="name"
    v-bind="elem.secureAttrs.svgAttrs"
    class="no_rough"
  ></v-icon>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import 'vue-awesome/icons'
import TextContent from '@/components/svg/TextContent.vue'
import LabelComponent from "@/components/svg/LabelComponent.vue";
import Icon from 'vue-awesome/components/Icon.vue'
import {SvgElem} from "@/components/model/SvgElem";

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
  public elem!: SvgElem

  get name(): string {
    const requiredName = this.elem.icon || ""
    if (VIcon.validIcons.has(requiredName)) {
      return requiredName
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${this.elem.icon}`)
    }
  }
}

</script>

<style scoped>

</style>
