<template>
  <v-icon
    v-bind:name="name"
    v-bind="svgAttrs"
    class="no_rough"
  ></v-icon>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import {SvgElem} from '@/components/model/SvgElem'
import {Assigns} from '@/style/Style'

@Component({
  components: {
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
    const requiredName = this.elem.icon || ''
    if (VIcon.validIcons.has(requiredName)) {
      return requiredName
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${this.elem.icon}`)
    }
  }

  get svgAttrs(): Assigns {
    const {x, y, width, height, ...rest} = this.elem.secureAttrs.svgAttrs
    return {
      x,
      y,
      width,
      height,
      style: Object.keys(rest).map((k) => `${k}:${rest[k]}`).join(';'),
    }
  }
}
</script>

<style scoped>

</style>
