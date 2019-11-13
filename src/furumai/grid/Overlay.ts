import {Container} from '@/furumai/grid/Container'
import {Shape} from '@/components/model/Shape'
import {Decorations} from '@/furumai/grid/Decorations'

export interface Overlay {
  id: string

  updateAttributes(attrs: Decorations): Overlay

  vue(base: Container): Shape
}
