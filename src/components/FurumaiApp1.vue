<template>
  <div class="app1">
    <label v-if="editorMode">
      <textarea
        class="code-editor"
        ref="editor"
        v-model="furumaiData.code" title="Furumai Description"
        @keyup.ctrl.enter="furumai"
        @keyup.alt.enter="furumai"
        @keyup.meta.enter="furumai"
      ></textarea>
      <br/>
      <button @click="furumai">View Furumai</button>
    </label>
    <div v-else class="code-viewer"><pre>{{ pre(furumaiData.code) }}</pre></div>
    <div ref="moments"></div>
    <div><pre>{{ errors }}</pre></div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import AppParams1 from '../components/AppParams1'
import {toSvg} from '@/furumai/utils';

@Component
export default class FurumaiApp1 extends Vue {
  @Prop() furumaiData!: AppParams1
  @Prop() changeUrl!: () => void
  @Prop({default: true}) editorMode!: boolean
  @Prop({default: false}) hideFirstFrame!: boolean

  public errors: string = ''

  pre(text: string): string {
    return text.replace(/</g, '&lt;')
      //.replace(/>/g, '&gt;')
  }

  private toSvgOrError(text: string): SVGElement[] | Error {
    try {
      return toSvg(text)
    } catch (e) {
      return e
    }
  }

  private draw(text: string): void {
    const animationConfig = {
      ...this.furumaiData.animation
    }
    const svgs = this.toSvgOrError(text)
    const div = this.$refs.moments as HTMLElement
    if (svgs instanceof Error) {
      const stack = svgs.stack || ''
      this.errors = stack.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    } else if (div) {
      div.innerHTML = ''
      svgs.forEach((svg) =>{
        //div.innerHTML = ''
        div.appendChild(svg)
        div.appendChild(document.createElement('hr'))
      })
    } else {
      throw new Error('error! not found error div dom')
    }
  }

  public mounted() {
    const editor = this.$refs.editor as HTMLElement
    const editorConfig = {
      focus: true,
      ...this.furumaiData.editor
    }
    if (editor && editorConfig.focus) {
      editor.focus()
    }
    this.draw(this.furumaiData.code)
  }

  public furumai() {
    this.draw(this.furumaiData.code)
    this.changeUrl()
  }
}
</script>

<style>
  .app1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  .code-editor {
    width:30em;
    height:20em;
  }

  .code-viewer {
    padding: 1rem;
    border-style: dashed;
    border-width: 1px;
    border-color: aquamarine;
  }

  pre {
    text-align: left;
  }

</style>
