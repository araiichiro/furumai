import {parse} from '@/parse/parser'
import {Config, Layout, Story} from '@/furumai/Story'
import {Engine as LayoutEngine} from '@/layout/Engine'
import {Group, Svg} from '@/components/model/Svg'
import {Point} from '@/layout/types'
import {SvgElem} from '@/components/model/SvgElem'

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
  structure: nest;
  // structure: flat;
};

style {
  .root {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    stroke: none;
    padding: 16px;
    fill: none;
  }
  .group, .zone {
    align-items: flex-start;
    justify-content: space-around;

    fill: none;
    padding: 18px;
    margin: 24px;
    stroke: none;
  }
  .group {
    flex-direction: row;
  }
  .zone {
    flex-direction: column;
  }
  .edge {
    stroke: black;
    label: "";
  }
  .node {
    stroke: black;
    width: 100px;
    height: 60px;
    padding: 14px 8px;
    margin: 20px;
    fill: none;
  }
  .icon {
    stroke: none;
    fill: black;
  }
  .text, .label {
    visibility: inherit;
    font-size: 9pt;
  }
  .text {
    dy: 5px;
  }
  .label {
    dy: -14px;
  }
};
`

export function toModels(furumaiCode: string): Svg[] {
  const story = parseStory(furumaiCode)
  const config = story.config as Config
  let layout = story.layout
  const engine = new LayoutEngine(config)
  const ret = [createSvg(engine, layout, config)]

  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
      ret.push(createSvg(engine, layout, config))
    } else {
      layout = parseStory(furumaiCode).layout.update(update)
      ret.push(createSvg(engine, layout, config))
    }
  }
  return ret
}

function parseStory(furumaiCode: string): Story {
  const defaults = parse(defaultString)
  return parse(furumaiCode).withDefault(defaults.config as Config, defaults.layout.styles)
}

function createSvg(engine: LayoutEngine, layout: Layout, config: Config): Svg {
  const styles = layout.styles
  const styled = layout.root.resolveStyle(styles, layout.root.contextMap)
  const rootBox = styled.layoutBox()
  const size = rootBox.fit(engine, Point.zero)
  rootBox.refit(engine, Point.zero, size.totalSize)
  const territories = rootBox.flatten(Point.zero)
  const includeStyle = !config.css
  const root = styled.shape(territories, includeStyle)

  const es = layout.edges.map((edge) => {
    const f = territories[edge.from]
    const t = territories[edge.to]
    const elem = edge.resolveStyle(styles).arrow(f, edge.op, t, includeStyle)
    return {
      elem,
      children: [],
    }
  })
  root.children.push(...es)
  if (config.structure === 'nest') {
    return {
      styles: includeStyle ? '' : styles.toCss(),
      size: rootBox.totalSize,
      root,
    }
  } else if (config.structure === 'flat') {
    const elems = flatten(root.children)
    return {
      styles: includeStyle ? '' : styles.toCss(),
      size: rootBox.totalSize,
      root: {
        elem: root.elem,
        children: elems.map((elem) => new SingleGroup(elem)),
      },
    }
  } else {
    throw new Error('not supported')
  }
}

function flatten(gs: Group[]): SvgElem[] {
  return gs.reduce((ret, g) => {
    ret.push(g.elem)
    if (g.children.length > 0) {
      ret.push(...flatten(g.children))
    }
    return ret
  }, [] as SvgElem[])
}

export class SingleGroup implements Group {
  public children: Group[] = []
  constructor(
    readonly elem: SvgElem,
  ) {
  }
}
