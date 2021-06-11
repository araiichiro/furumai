import {Group} from "@/components/model/Group";
import {parse} from "@/parse/parser";
import {Box, Edge} from "@/elem/Box";
import {Style} from "@/style/Style";
import {Config, StatementList, Story, toLayoutModel, TopLevelStatementList} from "@/elem/Story";
import {Engine as LayoutEngine, Orientation} from "@/layout/Engine";
import {Area, Size} from "@/layout/types";

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
  const layout = story.layout
  const styles = Style.flatten(defaultStyle.concat(layout.styles))
  layout.boxes.forEach((box) => box.update(styles))

  const root = Box.of("_furumai", [], {})
  root.update(styles)

  const engine = new LayoutEngine(config)
  engine.fit(root.area, layout.boxes)

  overlayEdges(layout.edges, layout.boxes)





  let current = toModel(story.layout, defaultConfig.orientation || "portrait")
  const ret: Group[] = [current]
  for (let update of story.updates) {
    if (story.config.mode === "diff") {
      current = update.applyTo(current)
      ret.push(current)
    } else {
      ret.push(update.model(defaults))
    }
  }
  return ret
}

class Processor {
  constructor(
    readonly config: Config,
    readonly layout: TopLevelStatementList,
    readonly updates: TopLevelStatementList[]
  ) {
  }

  exec() {
    const styles = Style.flatten(this.layout.styles)
    toLayoutModel(this.layout.boxes, styles)

    this.layout.boxes.map((b) => {

    })
    this.layout.edges

    this.layout.hides


  }
}

function buildTree(layout: TopLevelStatementList) {
  layout.styles
}

function toModel(layout: TopLevelStatementList, orientation: Orientation): Group {



  layout.boxes
  layout.edges
  layout.hides
}

function lookup(id: string, className: string, styles: Style[]): Box {

}

function applyStyle() {

}
function overlayEdges(edges: Edge[], boxes: Box[]) {

}
