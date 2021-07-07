# Furumai

システムやアルゴリズムの動作図（パラパラ漫画）を、DOT（Graphviz）風のテキスト記述から生成できるツールを作りました:
<a href="https://araiichiro.github.io/furumai/">Furumai - behavior visualization tool</a>

# ギャラリー

<ClientOnly>
<DocSnippet
  filename="./gallery/examples/native-buffer.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00B0A5lAgK4AOmrAL2S1gNSgEMARhEqoaAcnk0Avo2YBiJONJxIdGgDM4lWTXX4ADAaviVa1nCRJoAWgj42ImmU4BrCC744jAAFuJQUOLkcgAsNADMANzepH4QchxRyapIyomMjBzcPDQA6hCSAGpwEADudPZcMNAA2qHiPBAAvJ2wyAC6+Uw0OCGcALYQLXB4SF3ykpFI+DAA9KMTEPL8EtKU8+VVNbXyg4x5BUhFvDRaOnoMw7sy8wBy2rq0AII8PPJDzAAMgg2KUoHBSK0Zsh5lxlghtmIpC95MC2GVwZCoKcATRJFwDAZWki9vMAEIEonY-jtTo9OCdfikebMFoQSBIUg0dD9TD0RhsjlcgBMvP5wxYkqUZ2GaIAyhBllDZvMoO4ETtkftUSCaAqldiZRckIVODdJOIcP5lg1hs0oJAoNMVfJ7Y7Ec9tWTLdb8DjzkNGE1oDQXAA+EZjBCTFrM+QAYUoM18-qQG2jtHDNDRYIhrTjAAUuJIk6FUznMSGs-jCa0cBIYDAuo5nFA3B4IDKa1TQxH5YrCE768Emy3XO5PDL+wbe3ifQPY-N9X6ZSBsOIkHBxh9kGhQJb7kRUKkuBBlMogA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

<ClientOnly>
<DocSnippet
  filename="./gallery/examples/b-tree-like.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEUCCpdNYc8ARnEpwKqGgAs4+QkwC+jZgDokBWsBoAzIZTEsAbAAYAogDEAIgCEA3DTLsA1hDEqkEG-KY1lqxaQgAPLnUtSh1WPRMADgBOAEEAJhoPJQh8AHM1W1IHJ1YAYQBmPIBWKKTGD0Y09gBXAAcaSgBDcmh0OgUafnQrTv543qRZQarahubWqESGTyaezqaBhYLB5iaAFkHhxkYAWn3GboBtUgBeAHJScSgIGHEESnwYU6P0AwBdc8xGpv4ISgu7E453egzmJwuYBekUw0U+oMYTQKEPOUKOcJBYPWKLRb3hIyQ3RouwAfDQ5oMiaTyZtEe1qRsjvhyKd4gY6v4EUgkcSyRsCftdoxJIRyfS+bSkId0Cirjc7g98C9opg8V8fn8AecgaRMYd4rLrrd7o9laqPnruTKzqjofidlbeeSVtKnUjKYkGS7CZ6JYMQNgmkg4ABbJqkRAoVCgJo4COQNDZGoQWSyIA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

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
		- 記述量が多くなりがち（図全体を枚数分だけ記述しないといけない）

そこで自動で図中の各要素の配置を調整して動作図を作成できるツールを開発しました。

# 機能

## 基本図形

基本図形として `box` / `person` / `cylinder` / `pipe` が指定できます。要素間に矢印 (`->` or `--`) を配置できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/basic-shapes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhjgC4JToDaMAFiQA4QC8A5C7MuwLoDcAHSRICEWg2Zt2AIwQAPPkKQxKUcXUYsOOAJ4AbOEkJQlw4WTXoABAFpb10YXTKn4uwD5rqquOUhsEiQ4AFsSckQUVFBLOEg0cigAVwgAX1SgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## アイコン

アイコン名を指定すると、Font Awesomeアイコンを使用できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/icon.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNpx5IC8A5AK4zS0C6A3ADpIBGFVdUCAHN6AGxJQA9I2bsuOPsjrcoJJPhiShcAC4ALet1acU2NXAC2JHYhSpQJHDchodUehAC+noA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>


## 動作図（パラパラ漫画）を出力

`---` で動作図の各フレームを区切ります。

### 差分記述モード(デフォルト)

デフォルトでは差分記述モードです。
アルゴリズムの動作説明などの「小さな変化がつみかさなる」ようなものの場合に差分記述モードが役立ちます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation-diff.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

初期状態で非表示にすれば、変更があってから表示されるようにできます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/array-list.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEa4c8ARnADZwAuAngLwAWc+hSA3ADpI8DmUBAFcADgAIAhlCgS6Y4DzFikBCAG0AtlL5wkDAAyYxIiW118G6Q2IDurGkwYAOa0whw+TGs4CsRyhJkEJQMAOShALrcSEo46NGxAEwJYjgAzCk4ACyZPpkAbGoBQSGhAHQVoUYwNIIA1hBhKkgQkZkA7JlO0QC+0QC0gzxxat6hEuiJaW3DiaNhZJNZM0jp86FxiT4r2ev4k-krg-3DPusQk+07+dE4ncPdPCDYEkhwWjSIKKigEjifkDQtSEEB6PSAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

### スナップショットモード

フレームごとに独立している場合はスナップショットモードを使います。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation-snapshot.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwVAtgRKlTEgIYAOMAFggC4BuKgF8AOknFsB4gEbSkOeQFoVkqkoB8VOeJVLZ6rYvEhsbJHDps+iFKlBscNyGj5QArhGHCgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## ラベル / テキスト

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/label-text.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEda1eAVxjRZipDDVRyVOoyEBPI3CSEoQxMzCxZndQgAQkNBFgBrdFReMHQHJRBsWiQ4AFtafkQUVFAVAsg0fihrCABfGqA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## SVG属性

SVGの属性が指定できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/svg-attributes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gC4C8A5BRAB4UAE6NmzAZnADY9UBDAI4BXAQFsBUOEggBdANwAdJEgBMypCtLMAtAD5m6siubMYFKAgDWEXQHc4+CgAsqAdkynzlm3Z4yEDgCAA60ViJI+OzeFla2uvgCMC5SUAIAnlRKIADMzACcOd4IIQI4cBRZOQAMAHQArMVIZtQ0Asz0TDEtnYwUddx8VADEAgBsnF5Iiiog2AJIcJIUiCiooOWrkGiWIhAAvgdAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## Zone / Group

図表の構成要素をまとめる方法として下記のものがあります。

- `group`
  - 横方向にならべてまとめます
- `zone`
  - 縦方向にならべてまとめます

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/group-zone.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI00BmcANlwLwDE7dhADcLNgFsIAbRgALAIZUIvAOTLYyVQF0xrGgCNyAdxjR0etgBcECLhZYBfFmUq0zUMHBwQGzfZw8qDSCEOyWNABeyBA0CpF+4mwc3HyCwhFsVOQAHgCeDvpsBgo4ANYQSPiFbM760Uix8QBMjElsgWlCou002Qj5zZmGpRVVQ0l1dSxSNAC0AHyGJh6FNnYMi8sIpubSuiwsRjur80v9+YXHu1Cb57l5E0gXBWcj5ZXVei+tWyUf4z0IGwCiQcAkCisiBQqFApShkDQVigFAgjkcQA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>


## スタイル指定

CSSのようにスタイル指定ができます。
ノード等の名前はIDとして使用されます。クラス名も設定できます。

標準で用意されているIDおよびクラスには下記があります。

- `#root` : トップレベル要素
- `.group`, `.zone` : グループ、ゾーン
- `.node`, `.edge` : ノード、エッジ
- `.text`, `.label` : テキスト、ラベル

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/css.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DES6dNZUCA1hKlYA2AIYAzGgF9GzNhwB0lEQCMIlTmLiVKglmNEBuGmOSkAtPABeAmgGYATAAcAHkelNW7GvNIRnpDS0dVhEhMQN3SQNGRnYAbVIAXgByX38adGTMYyDEkQBHAFcRAFsRKDgkCABdaKQkezrYjjMAPhoGuJkuUh5+MwB3OHxSAAtEgHZMbu4+CDNKSogcEUcUnkKkfCyZ3rmzfBEYUfKoEXJE+hBbGgBOK+6ERxEcOApLkAAGeQBWB48kskRDQ0qQdgC-KR5JptIkWKExNMkLVGCBsCIkHAyqREChUKAXjjIGheoUIJJJEA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## Margin / Padding

ウェブページにおける `margin` / `padding` のような余白を設定できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/margin-padding.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkAbAAwAOAHs5gAQAXFoIjdBAQj79OVfPga1G6VjwC6AbgA6SJACZKNek2Z6e04c1HiJUgbPmKW6Lt356AHOc079B6nQMjADMrj4o2FRIcNSCiCiooFQ4cZBoglAArhAAvjlAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## dx / dy

矢印の配置が重なってしまうケースがあります。その場合、 `dx` / `dy` 属性により配置をずらせます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/dx-dy.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABg46AunWor1DKvmvS6EB1O0BPPbyMWqIbCSQ4AFsSABdEFFRQEhxwyDRQqDYIWVkgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## 自動配置

CSSのFlexboxのように `justify-content` により自動で配置できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/justify-content.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEA5gEx2PPMBWAVzJwAZuQC0eJKQjTUNMgEMopANw8aAXw3sAzNya9BwsZOQy5CgA6KcEccoQCk+dYe1IPjNlCdWabOh0NIqqNABGYR4+fgFcwDQ4Ud6+Av5s+gmuWimxbAAswRDJKNiKSHAAtoqkiCiooLa1kGikUAIQmppAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## 方向

`style` における `flex-direction` の指定、 `config` における `orientation` の指定により配置方向を変更できます。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/direction.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEUCCpdjzzAZtQAeAWnxwoEHKURJUNdgHcA3DxoBfRhqSMAhkpoAjfThUpsOpHAC2O6cjSgdUuJDSkoAVwhq1QA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/orientation.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwCUcESALgIZOJIC8ANi0vjBwsADhAC+AHSRSkBCOgDcUljiZ10AbRgALERE6jYyALpKkMNVHlbdozjgCe3OP2impIbHzgBbNhzRQFXZINCYoAFdxMSA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## 表示済み要素の非表示

表示済み要素を非表示にするには下記のように `hide` を使用します。

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/hide.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwAtgRKlTEgIYAOMAFggC4C+AHSTDWAbmEAjCWyoBaAHxVpw4XPXCucQlVbylKkUnVzN2iMpkhsrJHFqteiFKlCscTyGl5QArhH5+IA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## コメント

`//` によりラインコメントとなります。

## Rough Mode

`Rough.js` のチェックボックスにチェックを入れると、Rough.jsが有効になります。

# 文法

<<< ./Furumai.g4

<Footer></Footer>
