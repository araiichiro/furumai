import {Overlay} from '@/grid/Overlay'
import {Container} from '@/grid/Container'
import {Box} from '@/layout/engine/Box'
import {Arrow} from '@/layout/engine/Arrow'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Shape} from '@/components/model/Shape'
import {Decorations, num} from '@/utils/types'
import {SecureSvgAttrs} from '@/utils/security'

export class EdgeOverlay implements Overlay {
  constructor(
    readonly id: string,
    private tailId: string,
    private op: string,
    private headId: string,
    private attrs: Decorations,
  ) {
  }

  public updateAttributes(attrs: Decorations): Overlay {
    // TODO immutable
    this.attrs = this.attrs.update(attrs)
    return this
  }

  public vue(base: Container): Shape {
    function findBox(id: string): Box {
      const area = base.find(id) as GridArea<Elem>
      return area.get.box
    }

    const tail = findBox(this.tailId)
    const head = findBox(this.headId)
    const {dx, dy, t, label} = this.attrs.other
    const box = Arrow.singleton.fit(tail, head, num(dx) || 0, num(dy) || 0)

    const svgAttrs = SecureSvgAttrs.of({
      visibility: 'visible',
      ...this.attrs.shape,
    })
    const text = {
      label,
      t,
      textAttrs: SecureSvgAttrs.of(this.attrs.text),
    }
    return {
      type: this.op === '->' ? 'arrow' : 'edge',
      id: this.id,
      box,
      text,
      svgAttrs,
    }
  }
}
