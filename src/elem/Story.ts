import {Assigns, Style, Styles} from "@/style/Style";
import {Box, Hide, HideEdge, HideElem} from "@/elem/Box";
import {Orientation} from "@/layout/Engine";
import {Edge} from "@/elem/Edge";

export interface Config {
  mode: "snapshot" | "diff"
  //align?: 'center'
  //direction?: 'top to bottom '| 'left to right'
  orientation: Orientation
}

export class Story {
  constructor(
    readonly config: Partial<Config>,
    readonly layout: Layout,
    readonly updates: Update[]) {
  }
}

export class Layout {
  constructor(
    readonly boxes: Box[],
    readonly edges: Edge[],
    readonly hides: Hide[],
    readonly styles: Styles,
  ) {
  }
}

export class Update {
  constructor(
    readonly boxes: Box[],
    readonly edges: Edge[],
    readonly hides: Hide[],
    readonly styles: Styles,
  ) {
  }
}

export interface Compound {
  boxes: Box[]
  assigns: Assigns
}

// export function toLayoutModel(boxes: Box[], styles: Styles): Box[] {
//   boxes.map((box) => {
//     const style = styles.query("", box.classNames, box.id)
//     const children = toLayoutModel(box.children, styles)
//
//
//   })
//
//   return []
// }
