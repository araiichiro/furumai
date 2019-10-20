import {Overlay} from '@/furumai/grid/Overlay'
import {Container} from '@/furumai/grid/Container'
import {Box} from '@/layout/engine/Box'
import {Arrow} from '@/layout/engine/Arrow'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Shape} from '@/shared/vue/Shape'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {Attrs, num} from '@/furumai/utils'
import {Attributes} from '@/furumai/grid/Attributes'

export class EdgeOverlay implements Overlay {
  constructor(
    readonly id: string,
    private tailId: string,
    private headId: string,
    private attrs: Attrs,
  ) {
  }

  public updateAttributes(attrs: Attributes): Overlay {
    // TODO immutable
    this.attrs = {
      ...this.attrs,
      ...attrs.attrs,
    }
    return this
  }

  public vue(base: Container): Shape {
    function findBox(id: string): Box {
      const area = base.find(id) as GridArea<Elem>
      return area.get.box
    }

    const tail = findBox(this.tailId)
    const head = findBox(this.headId)
    const {dx, dy} = this.attrs
    const box = Arrow.singleton.fit(tail, head, num(dx) || 0, num(dy) || 0)
    const {t, label, ...rest} = this.attrs
    const svgAttrs = SecureSvgAttrs.of({
      visibility: 'visible',
      ...rest,
    })
    const text = {
      label,
      t,
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
