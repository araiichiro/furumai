import {Overlay} from '@/furumai/grid/Overlay'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Attributes} from '@/furumai/Attribute'

export function visible(block: GridArea<Elem> | Overlay): GridArea<Elem> | Overlay {
  return block.updateAttributes(new Attributes({}, {visibility: 'visible'}))
}

export function hide(block: GridArea<Elem> | Overlay): GridArea<Elem> | Overlay {
  return block.updateAttributes(new Attributes({}, {visibility: 'hidden'}))
}
