import {parse} from '@/parse/parser'
import {Elem} from '@/elem/Elem'
import {Config, Layout} from '@/furumai/Story'
import {Engine as LayoutEngine} from '@/layout/Engine'
import {Svg} from '@/components/model/Svg'
import {Point} from '@/layout/types'

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
};

style {
  .root {
    visibility: hidden;
  }
  .node {
    width: 40px;
    height: 40px;
  }
};
`

export function toModels(furumaiCode: string): Svg[] {
  const defaults = parse(defaultString)
  const story = parse(furumaiCode)
  const config = {
    ...defaults.config as Config,
    ...story.config,
  }
  const engine = new LayoutEngine(config)

  const base = story.layout
  const styles = defaults.layout.styles.update(base.styles)
  let layout = new Layout(
    base.root,
    base.edges,
    styles,
  )
  const ret = [createSvg(engine, layout)]

  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
      ret.push(createSvg(engine, layout))
    } else {
      layout = new Layout(
        Elem.of('_root', 'root', {}, update.boxes),
        update.edges,
        parse(defaultString).layout.styles.update(base.styles).update(update.styles),
      )
      ret.push(createSvg(engine, layout))
    }
  }
  return ret
}

function createSvg(engine: LayoutEngine, layout: Layout): Svg {
  const styles = layout.styles
  const root = layout.root.toLayoutBox(styles)
  const size = root.fit(engine, Point.zero)
  root.refit(engine, Point.zero, size.totalSize)
  const territories = root.flatten(Point.zero)
  const ss = layout.root.resolveStyle(styles)
  const shapes = ss.map((s) => {
    const location = territories[s.id]
    return s.shape(location.start, location.area)
  })

  const es = layout.edges.map((edge) => {
    const f = territories[edge.from]
    const t = territories[edge.to]
    return edge.resolveStyle(styles).shape(f, t)
  })
  shapes.push(...es)

  return {
    styles,
    size: root.totalSize,
    elems: shapes,
  }
}
