import {Assigns, Styles} from "@/style/Style";
import {Elem} from "@/elem/Elem";
import {Edge} from "@/elem/Edge";
import {Orientation} from "@/layout/Engine";
import {Hide} from "@/elem/Hide";

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
    readonly boxes: Elem[],
    readonly edges: Edge[],
    readonly styles: Styles,
  ) {
  }
}

export class Update {
  constructor(
    readonly boxes: Elem[],
    readonly edges: Edge[],
    readonly hides: Hide[],
    readonly styles: Styles,
  ) {
  }
}

export interface Compound {
  boxes: Elem[]
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
