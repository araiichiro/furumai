# Furumai

A tool of behavior visualization, via a DOT (Graphviz) like description:
<a href="https://araiichiro.github.io/furumai/">Furumai - behavior visualization tool</a>

# Gallery

<ClientOnly>
<DocSnippet
  filename="Buffered Writer/Sender"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYDaAOkgAT0CGANpUgLw4RIAu0dALoBuOnSQEIVFkwBGEFhwDkSkXQpQEAVwAOVALZMoFOJwBsABjVJ1m3fQDqEWQDU4EAO71gdRlpjQVDAAFkw6EBzhsMjWjDjBmvpSIWERSnB4SKiyUExI+DAA9PGJEEqY9DLyikpOru4eqqJIAL7Ntto69EhMvHCQ3r6VcgrKAHK9-RD0AII6OkrNjDC8mgDWERpMAJ5L9OQsNQDE+BakZ0yLQxKEBkYmnACsVu0M9AAyCBQOUHD8UEFQuFlBlkKgtPkEOVhtVlJ8KI5fv8mmI3rItKRSIEhowqqMlAAhDFYqCoco4+gpYE4bZsfLQTAU3jKRhUCCQPj0dCCRlDNkc3j0ABMPJoQwAdJKlENrEN4QBlHiEAFUtKgrJQCD4KEVPE1eH0RX0qAo1qvDSdeiyJg4Db5QZvAJQSAqoFqzKoJ0u6F65QEm12-Cmtqo-zQegAWgAfPQSggklRmUoAMJsW2muNJSMx+E-P6BZkABS0sjYIWsuaR4ejVuJgRW6wgEfwTBSUFy22U6As9AAHKb0ZjqzmvkblUFVggNs3W6F2zsuz3+xXR0rh1aA0rExwxyIQNg8nBDH1kGhQDa+pA0KstBAWtg7BRgteoLeWkA"
  viewCode="false"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

<ClientOnly>
<DocSnippet
  filename="B-tree like"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymmYCGANpUlThCQAXaDQDcAHSRg48AEZweQgJ60AFnHyEk4qUkYBtcly60AxADYADAFEAYgBEAQjUwACGEKgIA1kxpmAIIAzE4ArI6ubiIAHkIAdJ7efuYWdgAcAJyBAExRsQnGpgFpWbk0ALqSSBD4FBAGSb7+ZgDCwa0R6ZXVUhTeAK4ADm5cHMrQ6G7AUm5ucujVc3I51QC+vUj9CMOj49A507NuHIvHHKvnwUsnACzrmwC0z1ILBkK0QmpQEDBqCFx8DAqAZ0FYKlExnIIMVvAghD0pKd3rQwCD0phMhCqkjgiiaGiDFjEUgOLd8YSwdjNgs3I8AHwnM5IWkMu7VU50xlkgz4VQ0HLdHGk4Jcu5SKTPR5SQhcCAiJlisk09D4r4-P4AoEgzKYKmQjjQ2EIeEklZq76-f6AnV68Ek5EfAno6kS0lTNkcPF82iCs0e7nXV6HT1Blkh7m3EDYDhIOB0DhCRAoVCgDg4JOQNBeAYQNbYQYUNTZqC5tZAA"
  viewCode="false"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

# Features

- Text-based description
    - You can write behavior in DOT (Graphviz) style. Instead of a single picture, it will generate a motion diagram (a flipbook comic) from a text description.
- Output to SVG
    - You can also adjust the appearance by specifying the SVG attribute.

# Background

The existing drawing tools had the following difficulties.

- GUI drawing tool
    - You can arrange elements in any position, but it is hard to adjust if there are a number of elements
    - When there are many figures, you must also modify the related figures

- Text-based drawing tool
    - It is difficult to specify the position of the elements
        - The position is tend to be changed after another element is added/deleted
    - There is no diff mode for describing changes, so the amount of description tends to be large
        - It is necessary to describe the whole statements for the number of figures

Therefore, I developed a tool that can automatically create an action diagram by adjusting each element.

# Functions

## Basic Shapes

You can specify `box` / `person` / `cylinder` / `Pipe` as the basic shape.
Arrows (`->` or `--`) can be placed between elements.

<ClientOnly>
<DocSnippet
  filename="Basic Shapes"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIADgIb75xIDmAvAOQBMADAwNwA6S3ZOALgijoA2jAAWZEhEbTYyBgF0uSJAQiiJUmQwBGCAB5KVMQVDI0NYydMY4AngBtqhKMe68BQ9AAIAtH4+aoToKsEa-gB8PqZCFhoqINhkSHAAtmT8iCiooHxZkGj8UACuEAC+5UA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Icon Shapes

You can specify `icon:` with Font Awesome icon as below.

<ClientOnly>
<DocSnippet
  filename="Icon Shapes"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABCTcADpI00CGA2jABZtUQBeAORw8SVBRjQhAXQDczVgCMuvfsNHJUUCCQoAbNlAD0k6fMU0cqvoJFjUSqGyT4YxknAAu3CktkKSAC+zCDY5BQk3GgAZmz6Utj4cDBUhgCeAGJwsF4AymAksfFSQUA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Behavior motion diagram (like a flipbook comic)

Separate each frame of the motion diagram with `---`.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Label / Text

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/label-text.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEdYAVanBi9bvAIL4AtnCRPZipDDVRaAObkVHSMQgCeRu6EUIYmZhYs1g4OANIAagDKhoIsFADWEOHoqLxgtEYAruQyXkog2LRIcC60-IgoqKAq7ZBo-FDVAL5DQA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## SVG attribute

Attributes of SVG can be specified.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/svg-attributes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkA7AAwAEATBywF0A3AB0kYpOnJiuXGABcoCANYRWAYg4BOAGYtMMuYpUQAtABtGEHNQAOTESCUBXJPkeGdcc+Y0AOACMcFk9keVN4AC81RzYeDyRZeQgAD3kAOgUlVQ0dADZqFlFErmS09K8fBxB1fOoE4TEJHmKJdC5TAD4uJB5pEqyTUwB3OHx5AAtWdH4DAeNVCysbexYXN31DQcX8ahgJ2ihqAE9q9DzeABYE2QRbahw4eVPHDnSAVgbikGxqJDgaPJEChUKAHkDIGhFM4IABfWFAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Zone / Group

There are the following methods to summarize the diagram elements.

- `Group`
	- Lay it side by side
- `Zone`
	- It arranges them in vertical direction

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/group-zone.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI01IEQDaAtgIZQScJAF4mIAOwAGcQF0A3CzY9uMABZ8qEEQHItsZDoVKaAI3IB3GNHSLWNAC4IEAG1ssAvnbKVa1qGBwOBAMzPYAXsgQNHzhoSZsVOQAHgCe7vZspnw4ANYQSPjoJl4mkUjRsQBMjAk0SQhpVXZsWTn5hVUldqVILCo0ALQAfGaW-hlOrgwjYwhWNnYs5vMTQ6MNaRkrC1AzGympzSyb6etm7QVFdqc1s9l5V8co2HxIcPwOiCiooDlfkDQDigFAgHg8QA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Margin / Padding

You can set `margin` / `padding`, like web pages.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/margin-padding.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkATAAwAE637XAzH2YBdANwAdJElaUa9Jsx5Ku6diIlJJtKAgCuAB060ewSZ04AvZBEsmz5ztToNGq9hoed9VfPga1XPg8HJAIIWWcmNzF7cyp0UU4AIwT7AF9gqyQbC1ZOUyRPJ3lXYPNvX39S2M4qRKTgjPssnP58muKXVMKHCr8kAO7PKn5GjTTJEGwqJDhqABdEFFRQKhxFyDR5qF0INLSgA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## dx / dy

There are cases where arrows overlap as a result of automatic placement.
You can shift the arrangement of arrows by specifying the `dx` / `dy` attribute.
You can also shift the arrangement of basic shape (`node`) by specifying the `dx` / `dy` attribute.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/dx-dy.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABgC6daivUMq+S9LoQ7U7QE9DpuiGwkkcALYkAC6IKKigJDjBkGiBUGwQsrJAA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Centering (no left-justified)

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/align-center.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYDaAhgDaVIC8OESALtALoDcAOkgEUoCAK4AHAAQV0k4AMmSAtvySKkqxQlUBfVUJETpABjkLJAL2QRLp+WsWSamxwCMXe81aQ2Ls+46SOC6K+B66qiDYNEhwSjTsiCiooDQ4iZBo7FCiEDo6QA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Diff mode (Difference description mode)

By writing it at the top of the file as shown below, it can be described by difference.
Difference description mode is useful for cases such as "description of algorithm operation" such as "small change makes a thing".

If you hide it in the initial state, you can make it display after change.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/diff-mode.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYDaAtgRALz5ymkC6A3ADpI8CG3JACMqYOPCFwANnAAuATwYALOPkJJOPHKPFxJMhctXrNSALQX+AAjMA+K0MEWzPITfs5BIbHyRwafLKIKKigfDhBkGiyUACuEAC+CUA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>
<ClientOnly>
<DocSnippet
  filename="./gallery/docs/array-list.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYDaAtgRALz5ymkC6A3ADpI9hzwARnAA2cAC4BPBgAs4+Qkm68kFKAgCuABwAEAQyhQ9kncB46dSerQMU4SBgAZMOrXoX2KDdM50B3eXEZBgAOXxkIShlxUIBWFxE9QQgRBgByNM5zHRx0ZQscACZ8nIBmEpwAFgrYioA2KkTk1LSAOna0lxhxdQBrRjSrJAhMioB2CpDlAF9lAFoFnlyqGLS9dELS0aXClfTBDcrtpBxSvbTcwtjjqvP8Dbrjhbml2POIDbGbuuUcCaWpjwQNg9Eg4DQ9OJEChUKA9DgoZA0D0NBBptMgA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Direction

Changing the direction of layout to left to right (default: `top to bottom`).

<ClientOnly>
<DocSnippet
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYDa+cUEOALokgLwDkANhKYwASMEfKJQAWjdgF0A3AB0k8pAQjoqMUQEMADhA4AjBAA92mARzxJGES31HQIUuUg1MEUVeu272O2MhN8nBp6EJwcACqicDB80XwAgvgAtnBICY7yMIJQGhQqapo65gCenKmEUAFBIWHskXFxANIAagDKAYwcVADWEMXoqHxgGpwAriqSGSjYGkhwSRrMyGigLsyQaIxQ4wC+O0A"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs/ja">Image not rendered. [view image]</a>

## Hide displayed elements

To hide the displayed element, use `hide` or `delete` as follows.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/delete.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUiQAQC0AfA9VVU91YQDYQALhAaNW7Tkm5NeEAcIkpsJJHAC2JQYhSpQJHFshpBUAK4QAvhaA"
  viewCode="true"></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Rough Mode

You can enable `Rough.js` when checkbox is checked.

# Syntax

<<< ./Furumai.g4

<Footer></Footer>
