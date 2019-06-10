import {Landscape} from '@/layout/engine/Landscape'
import {Portrait} from '@/layout/engine/Portrait'
import {Attributes, Attrs} from '@/furumai/Attribute'
import {Elem} from '@/layout/engine/Elem'
import {Svg} from '@/svg/Svg'
import {GridArea} from '@/furumai/grid/GridArea'
import {Overlay} from '@/furumai/grid/Overlay'
import {GridCell} from '@/furumai/grid/GridCell'

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

  public svg(): SVGElement {
    const box = this.elem.box
    const {t, ...svgAttrs} = this.attrs // TODO use t
    const g = Svg.of('g', svgAttrs)
    const rect = Svg.of('rect', {
      id: `_gross_${this.id}`,
      fill: 'none', stroke: 'none', visibility: 'hidden',
      ...box,
    })
    g.appendChild(rect)
    this.elem.children.map((c) => {
      const elem = (c as GridArea<Elem>).svg()
      g.appendChild(elem)
    })
    const overlaySvgs = this.overlays.map((lay) => lay.applyTo(this).svg())
    overlaySvgs.forEach((c) => g.appendChild(c))
    return g
  }
}
