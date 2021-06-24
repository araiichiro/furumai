import {Styles} from '@/style/Style'
import {Elem} from '@/elem/Elem'
import {Edge} from '@/elem/Edge'
import {Orientation} from '@/layout/Engine'
import {Hide} from '@/elem/Hide'

export interface Config {
  mode: 'snapshot' | 'diff'
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

  public update(update: Update): Layout {
    update.elems.forEach((elem) => {
      const target = this.root.find(elem.id) || this.edges.find((edge) => edge.id === elem.id)
      if (target) {
        target.visible()
        target.update(elem)
      } else {
        throw new Error('not found: ' + elem.id)
      }
    })
    update.edges.forEach((up) => {
      const target = this.edges.find((edge) => edge.same(up))
      if (target) {
        target.visible()
        target.updateAppearance(up)
      } else {
        this.edges.push(up)
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
    readonly elems: Elem[],
    readonly edges: Edge[],
    readonly hides: Hide[],
    readonly styles: Styles,
  ) {
  }
}
