import {Styles} from "@/style/Style";
import {Elem} from "@/elem/Elem";
import {Edge} from "@/elem/Edge";
import {Orientation} from "@/layout/Engine";
import {Hide} from "@/elem/Hide";

export interface Config {
  mode: "snapshot" | "diff"
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
    readonly root: Elem,
    readonly edges: Edge[],
    readonly styles: Styles,
  ) {
  }

  update(update: Update): Layout {
    update.boxes.forEach((box) => {
      const target = this.root.find(box.id) || this.edges.find((edge) => edge.id === box.id)
      if (target) {
        target.visible()
        target.update(box)
      } else {
        throw new Error("not found: " + box.id)
      }
    })
    update.edges.forEach((update) => {
      const target = this.edges.find((edge) => edge.same(update))
      if (target) {
        target.visible()
        target.updateAppearance(update)
      } else {
        this.edges.push(update)
      }
    })
    update.hides.forEach((hide) => {
      this.styles.update(hide.style())
    })
    this.styles.update(update.styles)
    return this
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
