# Furumai

システムやアルゴリズムの動作図（パラパラ漫画）を、DOT（Graphviz）風のテキスト記述から生成できるツールを作りました:
<a href="https://araiichiro.github.io/furumai/">Furumai - behavior visualization tool</a>

# ギャラリー

<ClientOnly>
<DocSnippet
  filename="B-tree like"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymmYCGANpUlThCQAXaDQDcAHSRg48AEZweQgJ60AFnHyEk4qUkYBtcly60AxADYADAFEAYgBEAQjUwACGEKgIA1kxpmAIIAzE4ArI6ubiIAHkIAdJ7efuYWdgAcAJyBAExRsQnGpgFpWbk0ALqSSBD4FBAGSb7+ZgDCwa0R6ZXVUhTeAK4ADm5cHMrQ6G7AUm5ucujVc3I51QC+vUj9CMOj49A507NuHIvHHKvnwUsnACzrmwC0z1ILBkK0QmpQEDBqCFx8DAqAZ0FYKlExnIIMVvAghD0pKd3rQwCD0phMhCqkjgiiaGiDFjEUgOLd8YSwdjNgs3I8AHwnM5IWkMu7VU50xlkgz4VQ0HLdHGk4Jcu5SKTPR5SQhcCAiJlisk09D4r4-P4AoEgzKYKmQjjQ2EIeEklZq76-f6AnV68Ek5EfAno6kS0lTNkcPF82iCs0e7nXV6HT1Blkh7m3EDYDhIOB0DhCRAoVCgDg4JOQNBeAYQNbYQYUNTZqC5tZAA"
  viewCode="false"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

<ClientOnly>
<DocSnippet
  filename="Key Value Store"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5AIYA2lSVOESALtDQNwA6SARSgIArgAcABDibsOMScAGTpdANoM6AIwgNaMuHMl0aAXX5IVOLRu279szpK1mLVnLZ16aBozhqYkjAAFnTiELThsMiuAgC+FkIiEkHQkFCKypJI6ppetAByBBCSAIIBQaHh+gCeTEiEULGW2TZ59jRFhJIAQhUhYRE+dXAN3OZZSB7t3l0lAML9VUM4I2NNEy3BwZ4dABKjXPiSe3QNCKSkS4O0WggAHs0JAgLWkgC0AHytahy0AO5QOBcQIAMVKAEkADIAUQAIgBCJH9DgiADWEHe+DoAygUDoNVoAA5JAAWZogbBnOAAWzoHEQKFQoDoOAZkDQqNEEDi2GSFGCnKg3LiQA"
  viewCode="false"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

# 特徴

- テキストベースの記述
	- DOT（Graphviz）風の言語で記述。1枚絵ではなく動作図（パラパラ漫画）をテキスト記述から生成。
- SVGへ出力可能

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

# 機能

## 基本図形

基本図形として `box` / `person` / `cylinder` が指定できます。要素間に矢印を配置できます。

<ClientOnly>
<DocSnippet
  filename="Basic Shapes"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIADgIb75xIDmAvAOQBMADAwNwA6S3ZOALgijoA2jAAWZEhEbTYyBgF0uSJAQiiJUmQwBGCAB5KVMQVDI0NYydMY4AngBtqhKMe68BQ9AAIAtAB8PmqE6CohGv5BpkIWGiog2GRIcAC2ZPyIKKigfJmQaPxQAK4QAL5lQA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## 動作図（パラパラ漫画）を出力

`---` で動作図の各フレームを区切ります。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## ラベル / テキスト

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/label-text.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEdYAVanBi9bvAIL4AtnCRPZipDDVRaAObkVHSMQgCeRu6EUIYmZhYs1g4OANIAagDKhoIsFADWEOHoqLxgtEYAruQyXkog2LRIcC60-IgoqKAq7ZBo-FDVAL5DQA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## SVG属性

SVGの属性が指定できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/svg-attributes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkA7AAwAEATBywF0A3AB0kYpOnJiuXGABcoCANYRWAYg4BOAGYtMMuYpUQAtABtGEHNQAOTESCUBXJPkeGdcc+Y0AOACMcFk9keVN4AC81RzYeDyRZeQgAD3kAOgUlVQ0dADZqFlFErmS09K8fBxB1fOoE4TEJHmKJdC5TAD4uJB5pEqyTUwB3OHx5AAtWdH4DAeNVCysbexYXN31DQcX8ahgJ2ihqAE9q9DzeABYE2QRbahw4eVPHDnSAVgbikGxqJDgaPJEChUKAHkDIGhFM4IABfWFAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## Zone / Group

図表の構成要素をまとめる方法として下記のものがあります。

- `Group`
	- 横方向にならべてまとめます
- `Zone`
	- 縦方向にならべてまとめます

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/group-zone.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI01IEQDaAtgIZQScJAF4mIAOwAGcQF0A3CzY9uMABZ8qEEQHItsZDoVKaAI3IB3GNHSLWNAC4IEAG1ssAvnbKVa1qGBwOBAMzPYAXsgQNHzhoSZsVOQAHgCe7vZspnw4ANYQSPjoJl4mkUjRsQBMjAk0SQhpVXZsWTn5hVUldqVILCo0ALQAfGaW-hlOrgwjYwhWNnYs5vMTQ6MNaRkrC1AzGympzSyb6etm7QVFdqc1s9l5V8co2HxIcPwOiCiooDlfkDQDigFAgHg8QA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## Margin / Padding

ウェブページにおける `margin` / `padding` のような余白を設定できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/margin-padding.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkATAAwAE637XAzH2YBdANwAdJElaUa9Jsx5Ku6diIlJJtKAgCuAB060ewSZ04AvZBEsmz5ztToNGq9hoed9VfPga1XPg8HJAIIWWcmNzF7cyp0UU4AIwT7AF9gqyQbC1ZOUyRPJ3lXYPNvX39S2M4qRKTgjPssnP58muKXVMKHCr8kAO7PKn5GjTTJEGwqJDhqABdEFFRQKhxFyDR5qF0INLSgA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## dx / dy

自動配置の結果、矢印が重なってしまうケースがあります。その場合、 `dx` / `dy` 属性を指定して矢印の配置をずらせます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/dx-dy.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABgC6daivUMq+S9LoQ7U7QE9DpuiGwkkcALYkAC6IKKigJDjBkGiBUGwQsrJAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## 均等配置（左詰めしない）

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/align-center.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5AIYA2lSVOESALtDQNwA6SARSgIArgAcABBXSTgAyZIC2-JIqSrFCVQF9VQkROkAGOQskAvZBEun5axZLqbHAIxd7zVpDYuz7jpI4Lor4HrqqINh0SHBKdByIKKigdDiJkGgcUKIQOjpAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## 差分記述モード

下記のようにファイルの先頭に記述することで、差分での記述できます。アルゴリズムの動作説明などの「小さな変化がつみかさなる」ようなものの場合に差分記述モードが役立ちます。

初期状態で非表示にすれば、変更があってから表示されるようにできます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/diff-mode.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkjwIbckAIwDaYOPCFwANnAAuATyoALOPkJIAuoJxiJcKbMUq1G7TwC0V-gAILAPhtDBVizyF3HOQSGx8kcHR8cogoqKB8OCGQaHJQAK4QAL5JQA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>
<ClientOnly>
<DocSnippet
  filename="./gallery/docs/array-list.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkj2HPABGcADZwALgE8qACzj5CSbryQUoCAK4AHAAQBDKFD2SdwHjp1JGAbToGKcJFQAMmHVr0LH1dK50B3eXEZKgAOPxkIShlxMIBWNxE9QQgRWhoAXWULHHRsnRwAJnycAGYSgBYSuJKANmsklLSaADo2mjcYcXUAayYaKyQITJKAdhLQ5QBfZQBaeZ5c61iaPXRC0pHFwuXaQXWKraQy3ZpcwrijnArT-HXao-nZxbjTiHXRq9rlHHHFyZ4IGweiQcDs4kQKFQoD0OAhkDQ3Q0ECmUyAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## 表示済み要素の非表示

表示済み要素を非表示にするには下記のように `hide` もしくは `delete` を使用します。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/delete.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUiQAQC0AfA9VVU91YQDYQALhAaNW7Tkm5NeEAcIkpsJJHAC2JQYhSpQJHFshpBUAK4QAvhaA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Sorry, not working. See here.</a>

## Rough Mode

`Rough.js` のチェックボックスにチェックを入れると、Rough.jsが有効になります。

# 文法

<<< ./Furumai.g4

<Footer></Footer>
