<template>
  <div>
    <nav class="nav">
      <div class="nav-left">
        <a class="brand" :href="url">{{ filename }}</a>
        <a class="button primary" :href="url">Edit</a>
      </div>
      <!--
      <div class="nav-right">
        <a class="button primary" :href="url">Edit</a>
      </div>
      -->
    </nav>

    <FurumaiApp1
      v-if="version === 1"
      v-bind:furumaiData="furumaiData"
      v-bind:editorMode="false"
    ></FurumaiApp1>
    <div v-else-if="version === -1">version = -1</div>
    <div v-else>version error: {{version}}</div>
    <hr />
    <!--
    <iframe
      class="docSnippet"
      :src="url"
    ></iframe>
    -->
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import FurumaiApp1 from "@/components/FurumaiApp1.vue";
import {DataEncoderDecoderV1} from "@/io/DataEncoderDecoderV1";
@Component({
  components: {FurumaiApp1}
})
export default class Docs extends Vue {
  private static codec = new DataEncoderDecoderV1()

  private version: number = -1
  private furumaiData: any = {}

  @Prop({default: 'no name'}) filename!: string
  @Prop() url!: string

  public mounted() {
    if (this.url) {
      const tokens = this.url.split('/')
      if (tokens[2] === Docs.codec.formatVersion) {
        const data = Docs.codec.decode(tokens[3])
        const {version, ...rest} = data
        if (version && version > 0) {
          this.version = version
          this.furumaiData = rest
        } else {
          throw new Error(`app version is not specified`)
        }
      } else {
        throw new Error(`unsupported data format version: ${tokens[2]}`)
      }
    }
  }
}
</script>

<style>
</style>
