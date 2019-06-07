<template>
  <div>
    <div v-if="lang === 'ja'" class="description" v-html="md(abst)"></div>
    <div v-if="lang === 'en'" class="description">
      not implemented...
    </div>

    <div v-if="lang === 'ja'" class="description" v-html="md(features)"></div>
    <div v-if="lang === 'ja'" class="description" v-html="md(background)"></div>
    <div v-if="lang === 'ja'" class="description" v-html="md(gallery)"></div>
    <DocSnippet
      filename="B-tree like"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymmYCGANpUlThCQAXaDQDcAHSRg48AEZweQgJ60AFnHyEk4qUkYBtcly60AxADYADAFEAYgBEAQjUwACGEKgIA1kxpmAIIAzE4ArI6ubiIAHkIAdJ7efuYWdgAcAJyBAExRsQnGpgFpWbk0ALqSSBD4FBAGSb7+ZgDCwa0R6ZXVUhTeAK4ADm5cHMrQ6G7AUm5ucujVc3I51QC+vUj9CMOj49A507NuHIvHHKvnwUsnACzrmwC0z1ILBkK0QmpQEDBqCFx8DAqAZ0FYKlExnIIMVvAghD0pKd3rQwCD0phMhCqkjgiiaGiDFjEUgOLd8YSwdjNgs3I8AHwnM5IWkMu7VU50xlkgz4VQ0HLdHGk4Jcu5SKTPR5SQhcCAiJlisk09D4r4-P4AoEgzKYKmQjjQ2EIeEklZq76-f6AnV68Ek5EfAno6kS0lTNkcPF82iCs0e7nXV6HT1Blkh7m3EDYDhIOB0DhCRAoVCgDg4JOQNBeAYQNbYQYUNTZqC5tZAA')"
      :viewCode="false"
    ></DocSnippet>

    <DocSnippet
      filename="Key Value Store"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5AIYA2lSVOESALtDQNwA6SARSgIArgAcABDibsOMScAGTpdANoM6AIwgNaMuHMl0aAXX5IVOLRu279szpK1mLVnLZ16aBozhqYkjAAFnTiELThsMiuAgC+FkIiEkHQkFCKypJI6ppetAByBBCSAIIBQaHh+gCeTEiEULGW2TZ59jRFhJIAQhUhYRE+dXAN3OZZSB7t3l0lAML9VUM4I2NNEy3BwZ4dABKjXPiSe3QNCKSkS4O0WggAHs0JAgLWkgC0AHytahy0AO5QOBcQIAMVKAEkADIAUQAIgBCJH9DgiADWEHe+DoAygUDoNVoAA5JAAWZogbBnOAAWzoHEQKFQoDoOAZkDQqNEEDi2GSFGCnKg3LiQA')"
      :viewCode="false"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(functions)"></div>

    <div v-if="lang === 'ja'" class="description" v-html="md(basicShapes)"></div>
    <DocSnippet
      filename="Basic Shapes"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIADgIb75xIDmAvAOQBMADAwNwA6S3ZOALgijoA2jAAWZEhEbTYyBgF0uSJAQiiJUmQwBGCAB5KVMQVDI0NYydMY4AngBtqhKMe68BQ9AAIAtAB8PmqE6CohGv5BpkIWGiog2GRIcAC2ZPyIKKigfJmQaPxQAK4QAL5lQA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(multiFrames)"></div>
    <DocSnippet
      filename="./gallery/docs/simple-animation.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(labelText)"></div>
    <DocSnippet
      filename="./gallery/docs/label-text.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEdYAVanBi9bvAIL4AtnCRPZipDDVRaAObkVHSMQgCeRu6EUIYmZhYs1g4OANIAagDKhoIsFADWEOHoqLxgtEYAruQyXkog2LRIcC60-IgoqKAq7ZBo-FDVAL5DQA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(svgAttrs)"></div>
    <DocSnippet
      filename="./gallery/docs/svg-attributes.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkA7AAwAEATBywF0A3AB0kYpOnJiuXGABcoCANYRWAYg4BOAGYtMMuYpUQAtABtGEHNQAOTESCUBXJPkeGdcc+Y0AOACMcFk9keVN4AC81RzYeDyRZeQgAD3kAOgUlVQ0dADZqFlFErmS09K8fBxB1fOoE4TEJHmKJdC5TAD4uJB5pEqyTUwB3OHx5AAtWdH4DAeNVCysbexYXN31DQcX8ahgJ2ihqAE9q9DzeABYE2QRbahw4eVPHDnSAVgbikGxqJDgaPJEChUKAHkDIGhFM4IABfWFAA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(zoneGroup)"></div>
    <DocSnippet
      filename="./gallery/docs/group-zone.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI01IEQDaAtgIZQScJAF4mIAOwAGcQF0A3CzY9uMABZ8qEEQHItsZDoVKaAI3IB3GNHSLWNAC4IEAG1ssAvnbKVa1qGBwOBAMzPYAXsgQNHzhoSZsVOQAHgCe7vZspnw4ANYQSPjoJl4mkUjRsQBMjAk0SQhpVXZsWTn5hVUldqVILCo0ALQAfGaW-hlOrgwjYwhWNnYs5vMTQ6MNaRkrC1AzGympzSyb6etm7QVFdqc1s9l5V8co2HxIcPwOiCiooDlfkDQDigFAgHg8QA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(marginPadding)"></div>
    <DocSnippet
      filename="./gallery/docs/margin-padding.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkATAAwAE637XAzH2YBdANwAdJElaUa9Jsx5Ku6diIlJJtKAgCuAB060ewSZ04AvZBEsmz5ztToNGq9hoed9VfPga1XPg8HJAIIWWcmNzF7cyp0UU4AIwT7AF9gqyQbC1ZOUyRPJ3lXYPNvX39S2M4qRKTgjPssnP58muKXVMKHCr8kAO7PKn5GjTTJEGwqJDhqABdEFFRQKhxFyDR5qF0INLSgA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(dxDy)"></div>
    <DocSnippet
      filename="./gallery/docs/dx-dy.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABgC6daivUMq+S9LoQ7U7QE9DpuiGwkkcALYkAC6IKKigJDjBkGiBUGwQsrJAA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(centering)"></div>
    <DocSnippet
      filename="./gallery/docs/align-center.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5AIYA2lSVOESALtDQNwA6SARSgIArgAcABBXSTgAyZIC2-JIqSrFCVQF9VQkROkAGOQskAvZBEun5axZLqbHAIxd7zVpDYuz7jpI4Lor4HrqqINh0SHBKdByIKKigdDiJkGgcUKIQOjpAA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(diffMode)"></div>
    <DocSnippet
      filename="./gallery/docs/diff-mode.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkjwIbckAIwDaYOPCFwANnAAuATyoALOPkJIAuoJxiJcKbMUq1G7TwC0V-gAILAPhtDBVizyF3HOQSGx8kcHR8cogoqKB8OCGQaHJQAK4QAL5JQA')"
    ></DocSnippet>
    <DocSnippet
      filename="./gallery/docs/array-list.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkj2HPABGcADZwALgE8qACzj5CSbryQUoCAK4AHAAQBDKFD2SdwHjp1JGAbToGKcJFQAMmHVr0LH1dK50B3eXEZKgAOPxkIShlxMIBWNxE9QQgRWhoAXWULHHRsnRwAJnycAGYSgBYSuJKANmsklLSaADo2mjcYcXUAayYaKyQITJKAdhLQ5QBfZQBaeZ5c61iaPXRC0pHFwuXaQXWKraQy3ZpcwrijnArT-HXao-nZxbjTiHXRq9rlHHHFyZ4IGweiQcDs4kQKFQoD0OAhkDQ3Q0ECmUyAA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(hide)"></div>
    <DocSnippet
      filename="./gallery/docs/delete.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUiQAQC0AfA9VVU91YQDYQALhAaNW7Tkm5NeEAcIkpsJJHAC2JQYhSpQJHFshpBUAK4QAvhaA')"
    ></DocSnippet>

    <div v-if="lang === 'ja'" class="description" v-html="md(roughMode)"></div>

    <div v-if="lang === 'ja'" class="description" v-html="md(syntax)"></div>

    <!--

    <DocSnippet
      filename="./gallery/docs/eye-catch.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkADAAQDsbLAugG4AOkhF0oCAK4AHDjgA2cCEgAuMDsBEcOAVRjRyMABbVpEVmdjJ+wpNoBCEgO76otgL62xEmR1eRYDS0OAEFpaVttABF7QxMzVhwAT0UkQigbEXcREQBafJE9aA5cgD4ORwQXAxVWRmlJFRZMPxUJAGsIXPxqY1ooaiSmIRAADg5RkcEcpHzckUrqqBLysOlyWpZqHBwIGBhMpDWVjhiODdYAYQAlHSjDkGxqJDgaFUQUVFBt98g0NskEHc7iAA')"
    ></DocSnippet>
    -->

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import DocSnippet from '@/components/DocSnippet.vue'
import {Route} from 'vue-router'
import marked from 'marked'

const abst = {
  ja: '',
}
abst.ja = `
システムやアルゴリズムの動作図（パラパラ漫画）を、DOT（Graphviz）風のテキスト記述から生成できるツールを作りました。
`

const features = {
  ja: '',
}
features.ja = `
# 特徴

- テキストベースの記述
	- DOT（Graphviz）風の言語で記述。1枚絵ではなく動作図（パラパラ漫画）をテキスト記述から生成。
- SVGへ出力可能
`

const background = {
  ja: '',
}
background.ja = `
# 背景

既存のお絵かきツール・図表生成ツールには下記の使いにくさがありました。

- GUIのお絵かきツール
	- 自由に配置できる反面、要素数が多いと作図・調整が手間
	- 複数の図があるとき、1枚変更すると後続の図も修正しないといけない

- テキストベースの図表生成ツール
	- 要素の位置の指定がしにくい
	- 状態変化を表現しにくい
		- 要素の追加・削除で他要素の位置が変わってしまう
		- 変更点だけを記述できず、記述量が多くなりがち（図全体を枚数分だけ記述しないといけない）

そこで自動で図中の各要素の配置を調整して動作図を作成できるツールを開発しました。
`

const gallery = {
  ja: '',
}
gallery.ja = `
# ギャラリー

動作図をテキスト記述から作成できます。
`

const functions = {
  ja: '',
}
functions.ja = `
# 機能
`

const syntax = {
  ja: '',
}
syntax.ja = `
# 文法

正確な文法は \`Furumai.g4\` ファイルに記載の通りです。
`

const basicShapes = {
  ja: '',
}
basicShapes.ja = `
## 基本図形

基本図形として \`box\` / \`person\` / \`cylinder\` が指定できます。要素間に矢印を配置できます。

`

const multiFrames = {
  ja: '',
}
multiFrames.ja = `
## 動作図（パラパラ漫画）を出力

\`---\` で動作図の各フレームを区切ります。

`

const labelText = {
  ja: '',
}
labelText.ja = `
## ラベル / テキスト
`

const svgAttrs = {
  ja: '',
}
svgAttrs.ja = `
SVGの属性が指定できます。
`

const zoneGroup = {
  ja: '',
}
zoneGroup.ja = `
## Zone / Group

図表の構成要素をまとめる方法として下記のものがあります。

- \`Group\`
	- 横方向にならべてまとめます
- \`Zone\`
	- 縦方向にならべてまとめます

`

const marginPadding = {
  ja: '',
}
marginPadding.ja = `
## Margin / Padding

ウェブページにおける \`margin\` / \`padding\` のような余白を設定できます。
`

const dxDy = {
  ja: '',
}
dxDy.ja = `
## dx / dy

自動配置の結果、矢印が重なってしまうケースがあります。その場合、 \`dx\` / \`dy\` 属性を指定して矢印の配置をずらせます。
`

const centering = {
  ja: '',
}
centering.ja = `
## 均等配置（左詰めしない）

`

const diffMode = {
  ja: '',
}
diffMode.ja = `
## 差分記述モード

下記のようにファイルの先頭に記述することで、差分での記述できます。アルゴリズムの動作説明などの「小さな変化がつみかさなる」ようなものの場合に差分記述モードが役立ちます。

初期状態で非表示にすれば、変更があってから表示されるようにできます。

`

const hide = {
  ja: '',
}

hide.ja = `
## 表示済み要素の非表示

表示済み要素を非表示にするには下記のように \`hide\` もしくは \`delete\` を使用します。

`

const roughMode = {
  ja: '',
}
roughMode.ja = `
## Rough Mode

\`Rough.js\` のチェックボックスにチェックを入れると、Rough.jsが有効になります。
`

@Component({
  components: {DocSnippet},
})
export default class Docs extends Vue {
  public abst = abst
  public features = features
  public background = background
  public gallery = gallery
  public functions = functions
  public syntax = syntax
  public basicShapes = basicShapes
  public multiFrames = multiFrames
  public labelText = labelText
  public svgAttrs = svgAttrs
  public zoneGroup = zoneGroup
  public marginPadding = marginPadding
  public dxDy = dxDy
  public centering = centering
  public diffMode = diffMode
  public hide = hide
  public roughMode = roughMode

  private lang = 'en'

  @Watch('$route')
  public onRouteChanged(route: Route, oldRoute: Route) {
    this.lang = route.params.lang
  }

  public created() {
    const params = this.$route.params as any
    this.lang = params.lang
  }

  public md(text: {[key: string]: string}): string {
    return marked(text[this.lang])
  }

  public urlOf(encoded: string): string {
    return `#/apps/${encoded}`
  }
}
</script>

<style>
.description {
  padding: 1rem;
  margin: 1rem;
}
</style>
