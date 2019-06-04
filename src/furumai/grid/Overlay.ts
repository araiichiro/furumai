import {Attributes} from '@/furumai/Attribute';
import {Container} from '@/furumai/grid/Container';

export interface Overlay {
  id: string
  applyTo(base: Container): Overlay
  svg(): SVGElement
  updateAttributes(attrs: Attributes): Overlay
}
