import {Overlay} from '@/grid/Overlay'
import {Container} from '@/grid/Container'
import {Box} from '@/layout/engine/Box'
import {Arrow} from '@/layout/engine/Arrow'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Shape} from '@/components/model/Shape'
import {Decorations, num} from '@/utils/types'
import {SecureSvgAttrs} from '@/utils/security'
import {showArea} from '@/grid/visibility'

export class EdgeOverlay implements Overlay {
  constructor(
    readonly id: string,
    private tailId: string,
    private op: string,
    private headId: string,
    private attrs: Decorations,
    private disabled: boolean = false,
  ) {
  }

  public updateAttributes(attrs: Decorations): EdgeOverlay {
    // TODO immutable
    this.attrs = this.attrs.update(attrs)
    return this
  }

  public disable(): EdgeOverlay {
    this.disabled = true
    return this
  }

  public vue(base: Container): Shape {
    if (this.disabled) {
      return {
        type: 'nothing',
        id: this.id,
        box: Box.zero,
        text: {textAttrs: SecureSvgAttrs.of({})},
        svgAttrs: SecureSvgAttrs.of({}),
      }
    } else {
      return this.vueIfNotDisabled(base)
    }
  }

  public vueIfNotDisabled(base: Container): Shape {
    const tail = base.findArea(this.tailId) as GridArea<Elem>
    const head = base.findArea(this.headId) as GridArea<Elem>
    const {dx, dy, t, label} = this.attrs.other
    const box = Arrow.singleton.fit(tail.get.box, head.get.box, num(dx) || 0, num(dy) || 0)

    showArea(tail)
    showArea(head)
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
