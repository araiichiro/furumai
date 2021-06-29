import {parse} from '@/parse/parser'
import {Config, Layout, Story} from '@/furumai/Story'
import {Engine as LayoutEngine} from '@/layout/Engine'
import {Group, SingleGroup, Svg} from '@/components/model/Svg'
import {Point} from '@/layout/types'
import {SvgElem} from "@/components/model/SvgElem";

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
  structure: nest;
  // structure: flat;
};

style {
  .root, .root * {
    align-items: flex-start;
    justify-content: space-around;
  }
  .root {
    flex-direction: column;
  }

.root * {
//all: initial;
}
  .root {
  //all: initial;
//    visibility: hidden;
    padding: 10px;
    fill: none;
  }
  .group, .zone {
    fill: none;
    padding: 10px;
    margin: 10px;
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
  .box, .cylinder, .person, .pipe {
    stroke: black;
  //all: initial;
    //all: unset;

    //fill: none;
  }
  .node {
    width: 100px;
    height: 60px;
    padding: 16px 8px;
    margin: 16px;
    fill: none;
  // all: initial;
  }
  .text {
  //all: unset;
  all: initial;
  visibility: inherit;
  font-size: 9pt;
  //stroke: black;
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
      const story = parseStory(furumaiCode)
      layout =story.layout.update(update)
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
  const styled = layout.root.styled(styles, layout.root.contextMap)
  const rootBox = styled.layoutBox()
  const size = rootBox.fit(engine, Point.zero)
  rootBox.refit(engine, Point.zero, size.totalSize)
  const territories = rootBox.flatten(Point.zero)
  const includeStyle = !config.styleTag
  const root = styled.shape(territories, includeStyle)

  const es = layout.edges.map((edge) => {
    const f = territories[edge.from]
    const t = territories[edge.to]
    const elem = edge.resolveStyle(styles).shape(f, t, includeStyle)
    return {
      elem,
      children: [],
    }
  })
  root.children.push(...es)
  if (config.structure === 'nest') {
    return {
      styles: styles.toCss(),
      size: rootBox.totalSize,
      root,
    }
  } else if (config.structure === 'flat') {
    const elems = flatten(root.children)
    return {
      styles: styles.toCss(),
      size: rootBox.totalSize,
      root: {
        elem: root.elem,
        children: elems.map((elem) => new SingleGroup(elem))
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
