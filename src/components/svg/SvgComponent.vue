<template>
  <div ref="svgContainer">
    <svg
      v-if="rough && roughHtml.length > 0"
      v-html="roughHtml"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${shape.box.width} ${shape.box.height}`"
      :width="shape.box.width / 2"
      :height="shape.box.height / 2"
      class="svg-root"
    ></svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${shape.box.width} ${shape.box.height}`"
      :width="shape.box.width / 2"
      :height="shape.box.height / 2"
      class="svg-root"
    >
      <Group v-bind:g="shape"></Group>
    </svg>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {Shape} from '@/components/model/Shape'
import Group from './Group.vue'
import {convertSvg} from '@/utils/rougher'

@Component({
  components: {
    Group,
  },
})
export default class SvgComponent extends Vue {
  @Prop()
  public shape!: Shape

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
