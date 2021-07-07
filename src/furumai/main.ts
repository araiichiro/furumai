import {parse} from '@/parse/parser'
import {Config, Layout, Story} from '@/elem/Story'
import {Engine as LayoutEngine} from '@/layout/Engine'
import {Group, Svg} from '@/components/model/Svg'
import {Point} from '@/layout/types'
import {SvgElem} from '@/components/model/SvgElem'

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
};

style {
  #root {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    stroke: none;
    padding: 16px;
    fill: none;
  }
  .group, .zone {
    align-items: center;
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
    padding: 18px 7px;
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

export function toSvgModels(furumaiCode: string): Svg[] {
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
  engine.fitRoot(rootBox)

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
  return {
    styles: includeStyle ? '' : styles.toCss(),
    size: rootBox.totalSize,
    root,
  }
}

export class SingleGroup implements Group {
  public children: Group[] = []

  constructor(
    readonly elem: SvgElem,
  ) {
  }
}
