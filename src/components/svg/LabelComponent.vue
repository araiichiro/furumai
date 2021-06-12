<template>

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
export default class LabelComponent extends Vue {
  @Prop()
  //public shape!: Shape
  public shape!: Svg

  @Prop()
  public x: number

  @Prop()
  public y: number


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
