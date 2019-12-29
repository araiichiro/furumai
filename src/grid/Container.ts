import {Landscape} from '@/layout/engine/Landscape'
import {Portrait} from '@/layout/engine/Portrait'
import {Elem} from '@/layout/engine/Elem'
import {GridArea} from '@/grid/GridArea'
import {Overlay} from '@/grid/Overlay'
import {GridCell} from '@/grid/GridCell'
import {Group} from '@/components/model/Group'
import {Attributes, Decorations} from '@/utils/types'
import {SecureSvgAttrs} from '@/utils/security'

export class Container implements GridArea<Landscape | Portrait> {
  constructor(
    public readonly id: string,
    private attrs: Decorations,
    private elem: Landscape | Portrait,
    private overlays: Overlay[] = [],
  ) {
  }

  get get(): Landscape | Portrait {
    return this.elem
  }

  public updateAttributes(attrs: Attributes): Container {
    // TODO immutable
    this.attrs = this.attrs.update(attrs.attrs)
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
    const children = this.elem.children.map((c) => (c as GridArea<Elem>).vue())
    const overlays = this.overlays.map((lay) => lay.vue(this))
    const text = {
      label: this.attrs.other.label,
      t: this.attrs.other.t,
      textAttrs: SecureSvgAttrs.of(this.attrs.text),
    }
    return {
      type: 'group',
      id: this.id,
      box,
      text,
      svgAttrs: SecureSvgAttrs.of(this.attrs.shape),
      children: children.concat(overlays),
    }
  }
}
