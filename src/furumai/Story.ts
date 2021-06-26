import {Styles} from '@/style/Style'
import {Elem} from '@/elem/Elem'
import {Edge} from '@/elem/Edge'
import {Orientation} from '@/layout/Engine'
import {Hide} from '@/elem/Hide'

export interface Config {
  mode: 'snapshot' | 'diff'
  orientation: Orientation
  structure: 'flat' | 'nest'
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
        up.visible()
        this.edges.push(up)
      }
    })
    update.hides.forEach((hide) => {
      const {id, edge} = hide
      if (id) {
        const target = this.root.find(id) || this.edges.find((edge) => edge.id === id)
        if (target) {
          target.hide()
        } else {
          throw new Error('not found: ' + id)
        }
      } else if (edge) {
        const target = this.edges.find((ed) => ed.same(edge))
        if (target) {
          target.hide()
        } else {
          throw new Error('not found: ' + edge)
        }
      } else {
        throw new Error('unsupported')
      }
    })
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
