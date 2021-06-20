import {parse} from "@/parse/parser";
import {Elem} from "@/elem/Elem";
import {Config, Layout} from "@/elem/Story";
import {Engine as LayoutEngine} from "@/layout/Engine";
import {Svg} from "@/components/model/Svg";
import {Location, Point} from "@/layout/types";

export const defaultString = `config {
  mode: snapshot;
  // mode: diff;
  orientation: portrait;
  // orientation: landscape;
};

style {
  .root {
    visibility: hidden;
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

  for (let update of story.updates) {
    if (config.mode === "diff") {
      layout = layout.update(update)
      ret.push(createSvg(engine, layout))
    } else {
      const defaults = parse(defaultString)
      layout = new Layout(
        Elem.of("_root", "root", {}, update.boxes),
        update.edges,
        defaults.layout.styles.update(base.styles).update(update.styles),
      )
      ret.push(createSvg(engine, layout))
    }
  }
  return ret
}

type Locations = {[key: string]: Location}

function createSvg(engine: LayoutEngine, layout: Layout): Svg {
  const styles = layout.styles
  const root = layout.root.toLayoutBox(styles)
  const size = root.fit(engine, Point.zero)
  root.refit(engine, Point.zero, size.totalSize)
  const flatten = root.flatten(Point.zero)
  const locations = flatten.reduce((ret, location) => {
    return {
      [location.id]: location,
      ...ret,
    }
  }, {} as Locations)

  const ss = layout.root.resolveStyle(styles)
  const shapes = ss.map((s) => {
    const location = locations[s.id]
    return s.shape(location.start, location.area)
  })

  const es = layout.edges.map((edge) => {
    const f = locations[edge.from]
    const t = locations[edge.to]
    return edge.resolveStyle(styles).shape(f, t)
  })
  shapes.push(...es)

  return {
    style: styles.toCss(),
    size: root.totalSize,
    shapes,
  }
}
