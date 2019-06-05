import {Wrap} from '@/layout/engine/Wrap'
import {Elem} from '@/layout/engine/Elem'
import {Attributes} from '@/furumai/Attribute'
import {Overlay} from '@/furumai/grid/Overlay'

export interface GridArea<A extends Elem> extends Wrap<A> {
  id: string
  get: A

  updateAttributes(attrs: Attributes): GridArea<A>

  find(id: string): GridArea<Elem> | Overlay | undefined

  map(f: (a: A) => A): GridArea<A>

  svg(): SVGElement
}
