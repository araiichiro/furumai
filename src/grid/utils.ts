import {Overlay} from '@/grid/Overlay'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Attributes} from '@/grid/Attributes'
import {Decorations} from '@/grid/Decorations'

export function visibleArea(block: GridArea<Elem>): GridArea<Elem> {
  return block.updateAttributes(Attributes.of({visibility: 'visible'}))
}

export function visibleOverlay(overlay: Overlay): Overlay {
  return overlay.updateAttributes(Decorations.of({visibility: 'visible'}))
}

export function hideArea(block: GridArea<Elem>): GridArea<Elem> {
  return block.updateAttributes(Attributes.of({visibility: 'hidden'}))
}

export function hideOverlay(overlay: Overlay): Overlay {
  return overlay.updateAttributes(Decorations.of({visibility: 'hidden'}))
}
