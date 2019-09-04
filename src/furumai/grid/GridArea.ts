import {Wrap} from '@/layout/engine/Wrap'
import {Elem} from '@/layout/engine/Elem'
import {Overlay} from '@/furumai/grid/Overlay'
import {Group} from '@/shared/vue/Group'
import {Shape} from '@/shared/vue/Shape'
import {Attributes} from '@/furumai/utils'

export interface GridArea<A extends Elem> extends Wrap<A> {
  id: string
  get: A

  updateAttributes(attrs: Attributes): GridArea<A>

  find(id: string): GridArea<Elem> | Overlay | undefined

  map(f: (a: A) => A): GridArea<A>

  vue(): Group | Shape
}
