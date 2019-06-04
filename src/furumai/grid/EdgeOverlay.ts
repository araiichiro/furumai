import {Attributes, Attrs, num} from '@/furumai/Attribute';
import {Overlay} from '@/furumai/grid/Overlay';
import {Container} from '@/furumai/grid/Container';
import {Box} from '@/layout/engine/Box';
import {Arrow} from '@/layout/engine/Arrow';
import {GridArea} from '@/furumai/grid/GridArea';
import {Elem} from '@/layout/engine/Elem';
import {SvgAttrs} from '@/svg/SvgAttrs';
import {SvgText} from '@/svg/SvgText';
import {SvgArrow} from '@/svg/SvgArrow';

export class EdgeOverlay implements Overlay {
  constructor(
    readonly id: string,
    private tailId: string,
    private headId: string,
    private attrs: Attrs,
    private box: Box,
  ) {}

  updateAttributes(attrs: Attributes): Overlay {
    // TODO immutable
    this.attrs = {
      ...this.attrs,
      ...attrs.attrs,
    }
    this.box = this.box.update(attrs.box)
    return this
  }

  private findBox(base: Container, id: string): Box {
    const area = base.find(id) as GridArea<Elem>
    return area.get.box
  }

  applyTo(base: Container): EdgeOverlay {
    const tail = this.findBox(base, this.tailId)
    const head = this.findBox(base, this.headId)
    const {dx, dy, ...rest} = this.attrs
    const dxNum = num(dx) || 0
    const dyNum = num(dy) || 0
    const box = Arrow.singleton.fit(tail, head, dxNum, dyNum)
    const attrs = {
      // FIXME
      tx: `${dxNum + (tail.cx + head.cx) / 2}`,
      ty: `${dyNum + (tail.cy + head.cy) / 2}`,
      ...rest,
    }
    return new EdgeOverlay(this.id, this.tailId, this.headId, attrs, box)
  }

  svg(): SVGElement {
    const {tx, ty, t, ...rest} = this.attrs
    const svgAttrs: SvgAttrs = {
      visibility: 'visible',
      ...rest,
    }
    const text = new SvgText(undefined, t)
    const txNum = Number(tx)
    const tyNum = Number(ty)
    return new SvgArrow(this.box, text, txNum, tyNum, svgAttrs).toSvgElement()
  }
}
