import {Overlay} from '@/furumai/grid/Overlay'
import {Container} from '@/furumai/grid/Container'
import {Box} from '@/layout/engine/Box'
import {Arrow} from '@/layout/engine/Arrow'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Shape} from '@/shared/vue/Shape'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {Attributes, Attrs, num} from '@/furumai/utils'

export class EdgeOverlay implements Overlay {
  private static findBox(base: Container, id: string): Box {
    const area = base.find(id) as GridArea<Elem>
    return area.get.box
  }

  constructor(
    readonly id: string,
    private tailId: string,
    private headId: string,
    private attrs: Attrs,
    private box: Box,
  ) {
  }

  public updateAttributes(attrs: Attributes): Overlay {
    // TODO immutable
    this.attrs = {
      ...this.attrs,
      ...attrs.attrs,
    }
    this.box = this.box.update(attrs.box)
    return this
  }

  public applyTo(base: Container): EdgeOverlay {
    const tail = EdgeOverlay.findBox(base, this.tailId)
    const head = EdgeOverlay.findBox(base, this.headId)
    const {dx, dy} = this.attrs
    const box = Arrow.singleton.fit(tail, head, num(dx) || 0, num(dy) || 0)
    return new EdgeOverlay(this.id, this.tailId, this.headId, this.attrs, box)
  }

  public vue(): Shape {
    const {dx, dy, t, label, ...rest} = this.attrs
    const svgAttrs = {
      visibility: 'visible',
      ...rest,
    }
    const text = {
      label,
      t,
      dx: num(dx) || 0,
      dy: num(dy) || 0,
    }
    return {
      type: 'arrow',
      id: this.id,
      box: this.box,
      text,
      svgAttrs: SecureSvgAttrs.of(svgAttrs),
    }
  }
}
