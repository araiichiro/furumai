import {Container} from '@/furumai/grid/Container'
import {Shape} from '@/shared/vue/Shape'
import {Attrs} from '@/furumai/utils'

export interface Overlay {
  id: string

  updateAttributes(attrs: Attrs): Overlay

  vue(base: Container): Shape
}
