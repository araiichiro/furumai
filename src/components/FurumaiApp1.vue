<template>
  <div class="app1">
    <div class="row">
      <div class="col code-area" v-if="viewCode">
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
        <div v-else class="code-viewer">
          <pre class="language-none">{{ pre(furumaiData.code) }}</pre>
        </div>
      </div>
      <div class="col">
        <div class="text-error" v-if="errors && errors.length > 0">
          <pre>{{ errors }}</pre>
        </div>
        <div class="" ref="moments" v-else></div>
        <div class="nav-right moments-footer">
          <button class="button primary" @click="download" v-if="editorMode">Download SVG(s)</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import AppParams1 from '@/components/AppParams1'
import {toSvg} from '@/furumai/utils'
import {Route} from 'vue-router'

@Component
export default class FurumaiApp1 extends Vue {
  @Prop({default: {}}) private furumaiData!: AppParams1
  @Prop() private changeUrl!: (data: AppParams1) => void
  @Prop({default: true}) private editorMode!: boolean
  @Prop({default: true}) private viewCode!: boolean

  private errors: string = ''

  @Watch('$route')
  public onRouteChanged(route: Route, oldRoute: Route) {
    this.draw(this.furumaiData.code)
  }

  public pre(text: string): string {
    return text.replace(/</g, '&lt;')
  }

  public mounted() {
    const editor = this.$refs.editor as HTMLElement
    if (editor) {
      editor.focus()
    }
    this.draw(this.furumaiData.code)
  }

  public furumai() {
    this.changeUrl(this.furumaiData)
  }

  public download() {
    const div = this.$refs.moments as HTMLElement
    const cards = div.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
      const c = cards.item(i)
      if (c) {
        const blob = c.innerHTML
        const url = window.URL.createObjectURL(new Blob([blob], {type: 'image/svg+xml'}))
        const link = document.createElement('a')
        link.href = url
        link.download = `furumai-${i}.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
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
      ...this.furumaiData.animation,
    }
    const div = this.$refs.moments as HTMLElement
    if (div) {
      div.innerHTML = ''
      let svgs = this.toSvgOrError(text)
      if (svgs instanceof Error) {
        const stack = svgs.stack || ''
        this.errors = stack
      } else {
        if (!this.furumaiData.displayFirstSvg) {
          const [first, ...rest] = svgs
          svgs = rest.length > 0 ? rest : svgs
        }
        svgs.forEach((svg) => {
          const card = document.createElement('div')
          card.classList.add('card')
          card.appendChild(svg)
          div.appendChild(card)
        })
      }
    } else {
      throw new Error('error! not found error div dom')
    }
  }
}
</script>

<style>
  .code-area {
    max-width: 80rem;
  }

  .code-editor-wrap {
    padding-left: 1.5rem;
  }

  .code-editor {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    height: 70vh;
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

  .card {
    overflow: scroll;
  }

</style>
