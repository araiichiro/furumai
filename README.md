# Furumai

A tool of behavior visualization, via a DOT (Graphviz) like description:
<a href="https://araiichiro.github.io/furumai/">Furumai - behavior visualization tool</a>

# Gallery

<ClientOnly>
<DocSnippet
  filename="Buffered Writer/Sender"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00B0A5lAgK4AOmrAL2S1gNSgEMARhEqoaAcnk0Avo2YBiJONJxIdGgDM4lWTXX4ADAaviVa1nCRJoAWgj42ImmU4BrCC744jAAFuJQUOLkcgAsNADMANzepH4QchxRyapIyomMjBzcPDQA6hCSAGpwEADudPZcMNAA2qHiPBAAvJ2wyAC6+Uw0OCGcALYQLXB4SF3ykpFI+DAA9KMTEPL8EtKU8+VVNbXyg4x5BUhFvDRaOnoMw7sy8wBy2rq0AII8PPJDzAAMgg2KUoHBSK0Zsh5lxlghtmIpC95MC2GVwZCoKcATRJFwDAZWki9vMAEIEonY-jtTo9OCdfikebMFoQSBIUg0dD9TD0RhsjlcgBMvP5wxYkqUZ2GaIAyhBllDZvMoO4ETtkftUSCaAqldiZRckIVODdJOIcP5lg1hs0oJAoNMVfJ7Y7Ec9tWTLdb8DjzkNGE1oDQXAA+EZjBCTFrM+QAYUoM18-qQG2jtHDNDRYIhrTjAAUuJIk6FUznMSGs-jCa0cBIYDAuo5nFA3B4IDKa1TQxH5YrCE768Emy3XO5PDL+wbe3ifQPY-N9X6ZSBsOIkHBxh9kGhQJb7kRUKkuBBlNgzWwQmgT2egA"
  viewCode="false"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

<ClientOnly>
<DocSnippet
  filename="B-tree like"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEUCCpdNYc8ARnEpwKqGgAs4+QkwC+jZgDokBWsBoAzIZTEsAbAAYAogDEAIgCEA3DTLsA1hDEqkEG-KY1lqxaQgAPLnUtSh1WPRMADgBOAEEAJhoPJQh8AHM1W1IHJ1YAYQBmPIBWKKTGD0Y09gBXAAcaSgBDcmh0OgUafnQrTv543qRZQarahubWqESGTyaezqaBhYLB5iaAFkHhxkYAWn3GboBtUgBeAHJScSgIGHEESnwYU6P0AwBdc8xGpv4ISgu7E453egzmJwuYBekUw0U+oMYTQKEPOUKOcJBYPWKLRb3hIyQ3RouwAfDQ5oMiaTyZtEe1qRsjvhyKd4gY6v4EUgkcSyRsCftdoxJIRyfS+bSkId0Cirjc7g98C9opg8V8fn8AecgaRMYd4rLrrd7o9laqPnruTKzqjofidlbeeSVtKnUjKYkGS7CZ6JYMQNgmkg4ABbJqkRAoVCgJo4COQNDZGoQWTYfB8OoTExwWCkADKYDSaA0TUoMAg2FqaXEiagydkQA"
  viewCode="false"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

# Features

- Text-based description
    - You can write behavior in DOT (Graphviz) style
    - Instead of a single picture, it will generate a motion diagram (a flipbook comic) from a text description
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
  filename="./gallery/docs/basic-shapes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhjgC4JToDaMAFiQA4QC8A5C7MuwLoDcAHSRICEWg2Zt2AIwQAPPkKQxKUcXUYsOOAJ4AbOEkJQlw4WTXoABAFpb10YXTKn4uwD5rqquOUhsEiQ4AFsSckQUVFBLOEg0cigAVwgAX1SgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Icon Shapes

You can specify Font Awesome icon as below.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/icon.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNpx5IC8A5AK4zS0C6A3ADpIBGFVdUCAHN6AGxJQA9I2bsuOPsjrcoJJPhiShcAC4ALet1acU2NXAC2JHYhSpQJHDchodUehAC+noA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Behavior motion diagram (like a flipbook comic)

Separate each frame of the motion diagram with `---`.

### Diff mode (default)

Default is `diff mode`.
The `diff mode` is useful especially for "incremental small changes" such as explaining how an algorithm works.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation-diff.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

If you hide it initial layout, it can be made to appear only after changes have been made.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/array-list.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEa4c8ARnADZwAuAngLwAWc+hSA3ADpI8DmUBAFcADgAIAhlCgS6Y4DzFikBCAG0AtlL5wkDAAyYxIiW118G6Q2IDurGkwYAOa0whw+TGs4CsRyhJkEJQMAOShALrcSEo46NGxAEwJYjgAzCk4ACyZPpkAbGoBQSGhAHQVoUYwNIIA1hBhKkgQkZkA7JlO0QC+0QC0gzxxat6hEuiJaW3DiaNhZJNZM0jp86FxiT4r2ev4k-krg-3DPusQk+07+dE4ncPdPCDYEkhwWjSIKKigEjifkDQtSEEB6PSAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

### Snapshot mode

If each frame is independent, use the `snapshot` mode.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/simple-animation-snapshot.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwVAtgRKlTEgIYAOMAFggC4BuKgF8AOknFsB4gEbSkOeQFoVkqkoB8VOeJVLZ6rYvEhsbJHDps+iFKlBscNyGj5QArhGHCgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Label / Text

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/label-text.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEda1eAVxjRZipDDVRyVOoyEBPI3CSEoQxMzCxZndQgAQkNBFgBrdFReMHQHJRBsWiQ4AFtafkQUVFAVAsg0fihrCABfGqA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## SVG attribute

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/svg-attributes.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gC4C8A5BRAB4UAE6NmzAZnADY9UBDAI4BXAQFsBUOEggBdANwAdJEgBMypCtLMAtAD5m6siubMYFKAgDWEXQHc4+CgAsqAdkynzlm3Z4yEDgCAA60ViJI+OzeFla2uvgCMC5SUAIAnlRKIADMzACcOd4IIQI4cBRZOQAMAHQArMVIZtQ0Asz0TDEtnYwUddx8VADEAgBsnF5Iiiog2AJIcJIUiCiooOWrkGiWIhAAvgdAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Zone / Group

There are the following methods to summarize the diagram elements.

- `group`
	- Lay it side by side
- `zone`
	- It arranges them in vertical direction

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/group-zone.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI00BmcANlwLwDE7dhADcLNgFsIAbRgALAIZUIvAOTLYyVQF0xrGgCNyAdxjR0etgBcECLhZYBfFmUq0zUMHBwQGzfZw8qDSCwpY0AF7IEDQKEX7ibBzcfIIQ7OFsVOQAHgCeDvpsBgo4ANYQSPiFbM76UUgxcQBMjIlsganCGe002Qj5zZmGpRVVQ4l1dSxSNAC0AHyGJh6FNnYMi8sIpubSuiwsRjur80v9+YXHu1Cb57l5E0gXBWcj5ZXVei+tWyUf4z0IGwCiQcAkCisiBQqFApShkDQVigFAgjkcQA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Style

It can be styled just like CSS.
The name of the node, etc. is used as the `id`. You can also set `class` names.

The following IDs and classes are provided by default.

- `#root` : Top level element
- `.group`, `.zone` : groups, zones
- `.node`, `.edge` : nodes, edges
- `.text`, `.label` : texts, labels

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/css.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DES6dNZUCA1hKlYA2AIYAzGgF9GzNhwB0lEQCMIlTmLiVKglmNEBuGmOSkAtPABeAmgGYATAAcAHkelNW7GvNIRnpDS0dVhEhMQN3SQNGRnYAbVIAXgByX38adGTMYyDEkQBHAFcRAFsRKDgkCABdaKQkezrYjjMAPhoGuJkuUh5+MwB3OHxSAAtEgHZMbu4+CDNKSogcEUcUnkKkfCyZ3rmzfBEYUfKoEXJE+hBbGgBOK+6ERxEcOApLkAAGeQBWB48kskRDQ0qQdgC-KR5JptIkWKExNMkLVGCBsCIkHAyqREChUKAXjjIGheoUIJJJEA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Margin / Padding

You can set `margin` / `padding`, like web pages.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/margin-padding.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkAbAAwAOAHs5gAQAXFoIjdBAQj79OVfPga1G6VjwC6AbgA6SJACZKNek2Z6e04c1HiJUgbPmKW6Lt356AHOc079B6nQMjADMrj4o2FRIcNSCiCiooFQ4cZBoglAArhAAvjlAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## dx / dy

There are cases where arrows overlap as a result of automatic placement.
You can shift the arrangement of arrows by specifying the `dx` / `dy` attribute.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/dx-dy.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABg46AunWor1DKvmvS6EB1O0BPPbyMWqIbCSQ4AFsSABdEFFRQEhxwyDRQqDYIWVkgA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Layout like CSS Flexbox

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/justify-content.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEA5gEx2PPMBWAVzJwAZuQC0eJKQjTUNMgEMopANw8aAXw3sAzNya9BwsZOQy5CgA6KcEccoQCk+dYe1IPjNlCdWabOh0NIqqNABGYR4+fgFcwDQ4Ud6+Av5s+gmuWimxbAAswRDJKNiKSHAAtoqkiCiooLa1kGikUAIQmppAA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Direction / Orientation

You can change the layout direction by specifying `flex-direction` in `style` or `orientation` in `config`.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/direction.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIMALgJ4A2EABMADpI00DEUCCpdjzzAZtQAeAWnxwoEHKURJUNdgHcA3DxoBfRhqSMAhkpoAjfThUpsOpHAC2O6cjSgdUuJDSkoAVwhq1QA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/orientation.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwCUcESALgIZOJIC8ANi0vjBwsADhAC+AHSRSkBCOgDcUljiZ10AbRgALERE6jYyALpKkMNVHlbdozjgCe3OP2impIbHzgBbNhzRQFXZINCYoAFdxMSA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Hide displayed elements

To hide the displayed element, use `hide` as follows.

<ClientOnly>
<DocSnippet
  filename="./gallery/docs/hide.furumai"
  url="v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYAEwAtgRKlTEgIYAOMAFggC4C+AHSTDWAbmEAjCWyoBaAHxVpw4XPXCucQlVbylKkUnVzN2iMpkhsrJHFqteiFKlCscTyGl5QArhH5+IA"
></DocSnippet>
</ClientOnly>
<a v-if="false" href="https://araiichiro.github.io/furumai/docs">Image not rendered. [view image]</a>

## Comment

`//` is line comment.

## Rough Mode

You can enable `Rough.js` when checkbox is checked.

# Syntax

<<< ./Furumai.g4

<Footer></Footer>
