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
      v-bind:viewCode="this.viewCode !== 'false'"
    ></FurumaiApp1>
    <div v-else-if="version === -1">version = -1</div>
    <div v-else>version error: {{version}}</div>
    <!--
    <iframe
      class="docSnippet"
      :src="url"
    ></iframe>
    -->
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import FurumaiApp1 from '@/components/FurumaiApp1.vue'
import {DataEncoderDecoderV1} from '@/io/DataEncoderDecoderV1'

@Component({
  components: {FurumaiApp1},
})
export default class DocSnippet extends Vue {
  private static codec = new DataEncoderDecoderV1()

  private version: number = -1
  private furumaiData: any = {}

  @Prop({default: 'no name'}) private filename!: string
  @Prop() private url!: string
  @Prop({default: 'true'}) private viewCode!: string

  public mounted() {
    if (this.url) {
      const tokens = this.url.split('/')
      if (tokens[0] === DocSnippet.codec.formatVersion) {
        const data = DocSnippet.codec.decode(tokens[1])
        const {version, ...rest} = data
        if (version && version > 0) {
          this.version = version
          this.furumaiData = rest
        } else {
          throw new Error(`app version is not specified`)
        }
      } else {
        throw new Error(`unsupported data format version: ${tokens[0]}`)
      }
    }
  }
}
</script>

<style>
</style>
