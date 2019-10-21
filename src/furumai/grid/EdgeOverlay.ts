import {Overlay} from '@/furumai/grid/Overlay'
import {Container} from '@/furumai/grid/Container'
import {Box} from '@/layout/engine/Box'
import {Arrow} from '@/layout/engine/Arrow'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Shape} from '@/shared/vue/Shape'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {num} from '@/furumai/utils'
import {Decorations} from '@/furumai/grid/Decorations'

export class EdgeOverlay implements Overlay {
  constructor(
    readonly id: string,
    private tailId: string,
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
      type: 'arrow',
      id: this.id,
      box,
      text,
      svgAttrs,
    }
  }
}
