import {Container} from '@/grid/Container'
import {Shape} from '@/components/model/Shape'
import {Decorations} from '@/grid/Decorations'

export interface Overlay {
  id: string

  updateAttributes(attrs: Decorations): Overlay

  vue(base: Container): Shape
}
