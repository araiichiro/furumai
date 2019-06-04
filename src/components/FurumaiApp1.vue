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
            <span class="options"><input type="checkbox"/>Enable Rough.js</span>
            <button class="button primary furumai-button" @click="furumai">View (ctrl-enter)</button>
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
    const div = this.$refs.moments as HTMLElement
    if (div) {
      div.innerHTML = ''
      const svgs = this.toSvgOrError(text)
      if (svgs instanceof Error) {
        const stack = svgs.stack || ''
        this.errors = stack //.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      } else {
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
