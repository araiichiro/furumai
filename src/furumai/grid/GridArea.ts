import {Wrap} from '@/layout/engine/Wrap'
import {Elem} from '@/layout/engine/Elem'
import {Overlay} from '@/furumai/grid/Overlay'
import {Group} from '@/components/model/Group'
import {Shape} from '@/components/model/Shape'
import {Attributes} from '@/furumai/grid/Attributes'

export interface GridArea<A extends Elem> extends Wrap<A> {
  id: string
  get: A

  updateAttributes(attrs: Attributes): GridArea<A>

  find(id: string): GridArea<Elem> | Overlay | undefined

  map(f: (a: A) => A): GridArea<A>

  vue(): Group | Shape
}
