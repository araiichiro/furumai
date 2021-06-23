<template>
  <div ref="svgContainer">
    <svg
      v-if="rough && roughHtml.length > 0"
      v-html="roughHtml"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      :width="width.toString()"
      :height="height.toString()"
      class="svg-root"
    ></svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      class="svg-root"
      :viewBox="viewBox"
      :width="width.toString()"
      :height="height.toString()"
      id="svgRoot"
    >
      <svg:style type="text/css">{{ svgStyle }}</svg:style>
      <Group v-bind:elems="svg.elems"></Group>
    </svg>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import GroupComponent from './GroupComponent.vue'
import {convertSvg} from '@/effect/rougher'
import {Svg} from '@/components/model/Svg'
import {Length} from '@/layout/types'

@Component({
  components: {
    Group: GroupComponent,
  },
})
export default class SvgComponent extends Vue {
  @Prop()
  public svg!: Svg

  @Prop()
  public rough!: boolean

  public roughHtml: string = ``

  get svgStyle(): string {
    return this.svg.styles.toCss()
  }

  public mounted() {
    Vue.nextTick(() => this.refresh())
  }

  @Watch('svg')
  public onShapeChanged(val: Svg, newVal: Svg) {
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

  public get width(): Length {
    return this.svg.size.width
  }

  public get height(): Length {
    return this.svg.size.height
  }

  public get viewBox(): string {
    const widthString = this.width.toString()
    const heightString = this.height.toString()
    if (widthString.endsWith('px') && heightString.endsWith('px')) {
      const width = widthString.substr(0, widthString.length - 2)
      const height = heightString.substr(0, heightString.length - 2)
      return `0 0 ${width} ${height}`
    } else {
      throw new Error(`unsupported length: ${widthString}, ${heightString}`)
    }
  }
}
</script>

<style scoped>

</style>
