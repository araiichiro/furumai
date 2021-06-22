<template>
  <g>
    <ElemComponent
      v-for="c in elems"
      v-bind:key="c.secureAttrs.id"
      v-bind:elem="c"
    ></ElemComponent>
  </g>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ElemComponent from "@/components/svg/ElemComponent.vue";
import {SvgElem} from "@/components/model/SvgElem";

@Component({
  name: 'Group',
  components: {
    ElemComponent,
  },
})
export default class GroupComponent extends Vue {
  @Prop()
  public elems!: SvgElem[]
}
</script>

<style scoped>

</style>
