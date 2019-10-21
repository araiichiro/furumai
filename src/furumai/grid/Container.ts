import {Landscape} from '@/layout/engine/Landscape'
import {Portrait} from '@/layout/engine/Portrait'
import {Elem} from '@/layout/engine/Elem'
import {GridArea} from '@/furumai/grid/GridArea'
import {Overlay} from '@/furumai/grid/Overlay'
import {GridCell} from '@/furumai/grid/GridCell'
import {Group} from '@/shared/vue/Group'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {Attrs} from '@/furumai/utils'
import {Attributes, divideAttrs} from '@/furumai/grid/Attributes'

export class Container implements GridArea<Landscape | Portrait> {
  constructor(
    public readonly id: string,
    private attrs: Attrs,
    private elem: Landscape | Portrait,
    private overlays: Overlay[] = [],
  ) {
  }

  get get(): Landscape | Portrait {
    return this.elem
  }

  public updateAttributes(attrs: Attributes): Container {
    // TODO immutable
    this.attrs = {
      ...this.attrs,
      ...attrs.attrs,
    }
    this.elem = this.elem.withBox(attrs.box)
    return this
  }

  public find(id: string): GridArea<Elem> | Overlay | undefined {
    if (this.id === id) {
      return this
    } else {
      const ret = [
        ...this.elem.children.map((i) => (i as GridArea<Elem>).find(id)),
        ...this.overlays.map((i) => i.id === id ? i : undefined),
      ].filter((i) => i)
      if (ret.length === 1) {
        return ret[0]
      } else {
        return undefined
      }
    }
  }

  public map(f: (a: Landscape | Portrait) => Landscape | Portrait): Container {
    return new Container(this.id, this.attrs, f(this.elem), this.overlays)
  }

  public append(child: GridArea<Elem> | Overlay): Container {
    if (child instanceof Container || child instanceof GridCell) {
      return new Container(
        this.id,
        this.attrs,
        this.elem.append(child as GridArea<Elem>),
        this.overlays,
      )
    } else {
      return new Container(
        this.id,
        this.attrs,
        this.elem,
        [child as Overlay, ...this.overlays],
      )
    }
  }

  public vue(): Group {
    const box = this.elem.box
    const {t, ...svgAttrs} = this.attrs
    const children = this.elem.children.map((c) => (c as GridArea<Elem>).vue())
    const overlays = this.overlays.map((lay) => lay.vue(this))
    const divided = divideAttrs(svgAttrs)
    const text = {
      label: this.id,
      t,
      textAttrs: SecureSvgAttrs.of(divided.text),
    }
    return {
      type: 'group',
      id: this.id,
      box,
      text,
      svgAttrs: SecureSvgAttrs.of(divided.shape),
      children: children.concat(overlays),
    }
  }
}
