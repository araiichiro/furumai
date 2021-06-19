<template xmlns:svg="http://www.w3.org/2000/svg">
  <div ref="svgContainer">
    <svg
      v-if="rough && roughHtml.length > 0"
      v-html="roughHtml"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${shape.g.shape.svgAttrs.svgAttrs.width} ${shape.g.shape.svgAttrs.svgAttrs.height}`"
      :width="shape.g.shape.svgAttrs.svgAttrs.width / 2"
      :height="shape.g.shape.svgAttrs.svgAttrs.height / 2"
      class="svg-root"
    ></svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${shape.g.shape.svgAttrs.svgAttrs.width} ${shape.g.shape.svgAttrs.svgAttrs.height}`"
      :width="shape.g.shape.svgAttrs.svgAttrs.width / 2"
      :height="shape.g.shape.svgAttrs.svgAttrs.height / 2"
      class="svg-root"
    >
      <svg:style type="text/css">
        {{ shape.style }}
      </svg:style>
      <Group v-bind:g="shape.g"></Group>
    </svg>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {Shape} from '@/components/model/Shape'
import Group from './Group.vue'
import {convertSvg} from '@/effect/rougher'
import {Svg} from "@/components/model/Svg";

@Component({
  components: {
    Group,
  },
})
export default class SvgComponent extends Vue {
  @Prop()
  //public shape!: Shape
  public shape!: Svg

  @Prop()
  public style!: string

  @Prop()
  public rough!: boolean

  public roughHtml: string = ``

  public mounted() {
    Vue.nextTick(() => this.refresh())
  }

  @Watch('shape')
  public onShapeChanged(val: Shape, newVal: Shape) {
    this.roughHtml = ''
    Vue.nextTick(() => this.refresh())
  }

  private refresh() {
    if (this.rough) {
      const c = this.$refs.svgContainer as HTMLElement
      const svg = c.firstElementChild as SVGElement
      const converted = convertSvg(svg)
      this.roughHtml = converted.innerHTML
    }
  }
}
</script>

<style scoped>

</style>
