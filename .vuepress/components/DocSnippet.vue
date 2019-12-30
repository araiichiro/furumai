<template>
  <div>
    <nav class="nav">
      <div class="nav-right">
        <a class="edit-button" :href="appUrl(url)">Edit</a>
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
import {DataEncoderDecoderV1} from '@/utils/types'

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

  public appUrl(url) {
    return `/furumai/#/apps/${url}`
  }

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
  @import "~chota/src/_card.css";
  @import "~chota/src/_nav.css";
  :root {
    --color-primary: #1a9f60;
    --color-lightGrey: #d2d6dd;
    --color-grey: #7e818b;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 1rem;
    --font-size: 1.0rem;
    --font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next",
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  }
  .card {
    margin: 0.5rem 0 0.5rem 0;
    padding: 0;
  }

  .nav, .nav-right, .edit-button, .nav a {
    min-height: 0rem;
    margin: 0.5rem 0 0 0;
    padding: 0;
  }
</style>
