<template>
  <div>
    <FurumaiApp1 v-if="version === 1" v-bind:furumaiData="furumaiData" v-bind:changeUrl="changeUrl"></FurumaiApp1>
    <div v-else-if="version === -1">version = -1</div>
    <div v-else>version error: {{version}}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import FurumaiApp1 from "@/components/FurumaiApp1.vue";
import {DataEncoderDecoderV1} from "@/io/DataEncoderDecoderV1";

@Component({
  components: {
    FurumaiApp1
  },
})
export default class FurumaiApp extends Vue {
  private static codec = new DataEncoderDecoderV1()

  private version: number = -1
  private furumaiData: any = {}

  mounted() {
    const params = this.$route.params as any
    if (params.format === FurumaiApp.codec.formatVersion) {
      const data = FurumaiApp.codec.decode(params.data)
      const {version, ...rest} = data
      if (version && version > 0) {
        this.version = version || 1
        this.furumaiData = rest
      } else {
        throw new Error(`app version is not specified`)
      }
    } else {
      throw new Error(`unsupported data format version: ${params.format}`)
    }
  }

  changeUrl() {
    const data = {
      version: this.version,
    ...this.furumaiData
    }
    const encoded = FurumaiApp.codec.encode(data)
    this.$router.push({name: 'furumai', params: {format: FurumaiApp.codec.formatVersion, data: encoded}})
  }
}
</script>

<style>
</style>
