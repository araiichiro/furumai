import {Group} from "@/components/model/Group";
import {parse} from "@/parse/parser";
import {Box} from "@/elem/Box";
import {Config } from "@/elem/Story";
import {Engine as LayoutEngine} from "@/layout/Engine";
import {EdgeOverlay} from "@/elem/Overlay";

export const defaultConfig: Config = {
  mode: "diff",
  orientation: "portrait",
}

export const defaultStyleString = `
@style {
  * {
    display: inline-flex;
    justify-content: space-between;
    align-self: center;

    font-size: 24;
  }

  .group, .zone {
    stroke: gray;
    stroke-dasharray: 10 8;
    fill: gray;
  }

  .group {
    flex-direction: column;
  }

  .zone {
    flex-direction: row;
  }

  .node {
    width: 160px;
    height: 160px;
    fill: none;
    stroke: black;
    stroke-width: 2;
  }

  .edge {
    stroke: black;
    stroke-width: 2;
  }

  text {
    fill: gray;
  }

  .text {
    stroke: gray;
    stroke-width: 1;
  }

  .label {
    stroke: black;
  }
};
`

const defaultStyle = parse(defaultStyleString).layout.styles

export function toModels(furumaiCode: string): Group[] {
  const story = parse(furumaiCode)
  const config = {
    ...defaultConfig,
    ...story.config,
  }
  const engine = new LayoutEngine(config)
  const styles = defaultStyle.update(story.layout.styles)
  const root = Box.of("_furumai", undefined, {}).update(styles).area
  const boxes = story.layout.boxes.map((box) => box.update(styles))
  engine.fit(root, boxes)
  const edges = overlayEdges(story.layout.edges, boxes)
  const current = {
    boxes,
    edges,
    styles,
  }




  const ret: Group[] = [current]
  for (let update of story.updates) {
    if (config.mode === "diff") {



      current = update.applyTo(current)
      ret.push(current)
    } else {
      ret.push(update.model(defaults))
    }
  }
  return ret
}

function overlayEdges(edges: Edge[], boxes: Box[]): EdgeOverlay {

}
