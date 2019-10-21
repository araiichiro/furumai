import {Overlay} from '@/furumai/grid/Overlay'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Attributes} from '@/furumai/grid/Attributes'

export function visibleArea(block: GridArea<Elem>): GridArea<Elem> {
  return block.updateAttributes(Attributes.of({visibility: 'visible'}))
}

export function visibleOverlay(overlay: Overlay): Overlay {
  return overlay.updateAttributes({visibility: 'visible'})
}

export function hideArea(block: GridArea<Elem>): GridArea<Elem> {
  return block.updateAttributes(Attributes.of({visibility: 'hidden'}))
}

export function hideOverlay(overlay: Overlay): Overlay {
  return overlay.updateAttributes({visibility: 'hidden'})
}
