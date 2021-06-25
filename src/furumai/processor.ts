import {parse} from '@/parse/parser'
import {Elem} from '@/elem/Elem'
import {Config, Layout} from '@/furumai/Story'
import {Engine as LayoutEngine} from '@/layout/Engine'
import {Svg, Group} from '@/components/model/Svg'
import {Point} from '@/layout/types'

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
};

style {
  * {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
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
  }
  .zone {
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
    width: 60px;
    height: 60px;
    padding: 10px;
    margin: 10px;
    fill: none;
  // all: initial;
  }
  .text {
  //all: unset;
  all: initial;
  //stroke: black;

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
        Elem.of('_root', 'root', {}, update.elems),
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
  const styled = layout.root.styled(styles, layout.root.contextMap)
  const rootBox = styled.layoutBox()
  const size = rootBox.fit(engine, Point.zero)
  rootBox.refit(engine, Point.zero, size.totalSize)
  const territories = rootBox.flatten(Point.zero)
  const root = styled.shape(territories)

  const es = layout.edges.map((edge) => {
    const f = territories[edge.from]
    const t = territories[edge.to]
    const elem = edge.resolveStyle(styles).shape(f, t)
    return {
      elem,
      children: [],
    }
  })
  root.children.push(...es)

  return {
    styles: styles.toCss(), // + f(root),
    size: rootBox.totalSize,
    root,
  }
}

function f(g: Group): string {
  const {id, x, y, width, height } = g.elem.secureAttrs.svgAttrs as {[key: string]: string}
  const base = `#${id} {
    x: ${x};
    y: ${y};
    width: ${width};
    height: ${height};
  }
  `
  const ss = g.children.map((child) => f(child))
  return base + ss.join('\n')
}
