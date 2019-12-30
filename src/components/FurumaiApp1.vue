<template>
  <div class="app1">
    <div class="row">
      <div class="col" v-if="viewCode">
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
            <hr />
            <div>
              Default settings:
              <pre>{{ defaultConfig }}</pre>
            </div>
          </label>
        </div>
        <div v-else class="code-viewer">
          <pre class="language-none">{{ pre(furumaiData.code) }}</pre>
        </div>
      </div>
      <div class="col-6">
        <div class="text-error" v-if="errors.length > 0">
          <pre>{{ errors }}</pre>
        </div>
        <div class="" ref="moments" v-else>
          <div class="card" v-for="s in svgs">
            <SvgComponent v-bind:shape="s" v-bind:rough="furumaiData.rough"></SvgComponent>
          </div>
        </div>
        <div class="nav-right moments-footer">
          <button class="button primary" @click="download" v-if="editorMode">Download SVG(s)</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {Route} from 'vue-router'
import {parse} from '@/utils/parser'
import {Story} from '@/utils/Story'
import * as model from '@/components/model/Group'
import {Group} from '@/components/model/Group'
import SvgComponent from '@/components/svg/SvgComponent.vue'

interface AppParams1 {
  code: string
  animation?: {
    active?: boolean
    speed?: number,
  }
  rough?: boolean
  displayFirstSvg?: boolean
}

@Component({
  components: {
    SvgComponent,
  },
})
export default class FurumaiApp1 extends Vue {
  @Prop({default: {}}) private furumaiData!: AppParams1
  @Prop() private changeUrl!: (data: AppParams1) => void
  @Prop({default: true}) private editorMode!: boolean
  @Prop({default: true}) private viewCode!: boolean

  private errors: string = ''

  private defaultConfig = `config [
  orientation='top to bottom',
  mode='no diff',
  align='no center'
];

font-size = 24;
group [margin='100 20', padding='20 16',
       stroke=none, fill=none,
       text.stroke=black, text.stroke-width=1, text.fill=black];
zone  [margin='20 150', padding='20 16',
       stroke=none, fill=none,
       text.stroke=black, text.stroke-width=1, text.fill=black];
node  [margin='24 20', padding='24 16', width=215, height=150,
       fill=none, stroke=black, 'stroke-width'=2,
       text.fill=black, text.stroke-width=1];
edge  [stroke=black, 'stroke-width'=2
       text.fill=black, text.stroke-width=1];`

  private svgs: model.Group[] = []

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
    const cards = div.getElementsByClassName('svg-root')

    for (let i = 0; i < cards.length; i++) {
      const c = cards.item(i)
      if (c) {
        const blob = '<?xml version="1.0" encoding="UTF-8"?>' + c.outerHTML
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

  private toSvgOrError(text: string): model.Group[] | Error {
    try {
      return vue(text, this.defaultConfig)
    } catch (e) {
      return e
    }
  }

  private draw(text: string): void {
    this.errors = ''
    const animationConfig = {
      ...this.furumaiData.animation,
    }
    let svgs = this.toSvgOrError(text)
    if (svgs instanceof Error) {
        const stack = svgs.stack || ''
        this.errors = stack
    } else {
        if (!this.furumaiData.displayFirstSvg) {
            const [first, ...rest] = svgs
            svgs = rest.length > 0 ? rest : svgs
        }
        this.svgs = svgs
    }
  }
}

function vue(furumaiCode: string, defaults: string): Group[] | SyntaxError {
  const story = parse(furumaiCode)
  if (story instanceof Story) {
    const defaultConfig = parse(defaults) as Story
    const ret: Group[] = []
    for (const moment of story.moments(defaultConfig.frames)) {
      ret.push(moment.vue())
    }
    return ret
  } else {
    return story
  }
}
</script>

<style>
  .code-editor-wrap {
    max-width: 80rem;
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

  .options {
    margin-right: 2rem;
  }

  .moments-footer {
    margin-right: 1.5rem;
  }

  .card {
    overflow: scroll;
  }

  .text-error {
    overflow: scroll;
  }
</style>
