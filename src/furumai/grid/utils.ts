import {Overlay} from '@/furumai/grid/Overlay'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Attributes} from '@/furumai/grid/Attributes'

export function visible(block: GridArea<Elem> | Overlay): GridArea<Elem> | Overlay {
  return block.updateAttributes(Attributes.of({visibility: 'visible'}))
}

export function hide(block: GridArea<Elem> | Overlay): GridArea<Elem> | Overlay {
  return block.updateAttributes(Attributes.of({visibility: 'hidden'}))
}
