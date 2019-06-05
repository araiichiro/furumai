<template>
  <div class="app1">
    <div class="row">
      <div class="col-6">
        <div v-if="editorMode" class="code-editor-wrap">
        <label>
          <div>
          <textarea
            class="code-editor"
            ref="editor"
            v-model="furumaiData.code" title="Furumai Description"
            @keyup.ctrl.enter="furumai"
            @keyup.alt.enter="furumai"
            @keyup.meta.enter="furumai"
          ></textarea>
          </div>
          <div class="nav-right">
            <label class="options">
              <input type="checkbox" v-model="furumaiData.rough" @change="furumai"/>Rough.js
            </label>
            <label class="options">
              <input type="checkbox" v-model="furumaiData.displayFirstSvg" @change="furumai"/>Display 1st SVG
            </label>
            <button class="button primary furumai-button" @click="furumai">View (Ctrl + Enter)</button>
          </div>
        </label>
        </div>
        <div v-else class="code-viewer"><pre>{{ pre(furumaiData.code) }}</pre></div>
      </div>
      <div class="col-6">
        <div class="text-error" v-if="errors && errors.length > 0"><pre>{{ errors }}</pre></div>
        <div class="" ref="moments" v-else></div>
        <div class="nav-right moments-footer">
          <button class="button primary" @click="download">Download SVG(s)</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import AppParams1 from '@/components/AppParams1'
import {toSvg} from '@/furumai/utils';

@Component
export default class FurumaiApp1 extends Vue {
  @Prop({default: {}}) furumaiData!: AppParams1
  @Prop() changeUrl!: () => void
  @Prop({default: true}) editorMode!: boolean

  public errors: string = ''

  pre(text: string): string {
    return text.replace(/</g, '&lt;')
      //.replace(/>/g, '&gt;')
  }

  private toSvgOrError(text: string): SVGElement[] | Error {
    try {
      return toSvg(text, this.furumaiData.rough || false)
    } catch (e) {
      return e
    }
  }

  private draw(text: string): void {
    const animationConfig = {
      ...this.furumaiData.animation
    }
    const div = this.$refs.moments as HTMLElement
    if (div) {
      div.innerHTML = ''
      let svgs = this.toSvgOrError(text)
      if (svgs instanceof Error) {
        const stack = svgs.stack || ''
        this.errors = stack //.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      } else {
        if (!this.furumaiData.displayFirstSvg) {
          const [first, ...rest] = svgs
          svgs = rest.length > 0 ? rest : svgs
        }
        svgs.forEach((svg) => {
          //div.innerHTML = ''


          const card = document.createElement('div')
          card.classList.add('card')

          card.appendChild(svg)
          div.appendChild(card)
          // div.appendChild(document.createElement('hr'))
        })
      }
    } else {
      throw new Error('error! not found error div dom')
    }
  }

  public mounted() {
    const editor = this.$refs.editor as HTMLElement
    if (editor) {
      editor.focus()
    }
    this.draw(this.furumaiData.code)
  }

  public furumai() {
    this.draw(this.furumaiData.code)
    this.changeUrl()
  }

  download() {
    throw new Error('not impl')
  }
}
</script>

<style>
  .code-editor-wrap {
    padding-left: 1.5rem;
  }
  .code-editor {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    height:70vh;
  }

  .card {
    margin: 1.5rem;
  }

  .code-viewer {
    margin-left: 1.5rem;
  }

  .options {
    margin-right: 2rem;
  }

  .moments-footer {
    margin-right: 1.5rem;
  }
</style>
