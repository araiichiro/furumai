import {Overlay} from '@/grid/Overlay'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Attributes, Decorations} from '@/utils/types'

export function visibleArea<A extends GridArea<Elem>>(block: A): A {
  return block.updateAttributes(Attributes.of({visibility: 'visible'})) as A
}

export function visibleOverlay(overlay: Overlay): Overlay {
  return overlay.updateAttributes(Decorations.of({visibility: 'visible'}))
}

export function hideArea(block: GridArea<Elem>): GridArea<Elem> {
  return block.updateAttributes(Attributes.of({visibility: 'hidden'}))
}
