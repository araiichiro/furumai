import {Container} from '@/furumai/grid/Container'
import {Shape} from '@/shared/vue/Shape'
import {Attributes} from '@/furumai/utils'

export interface Overlay {
  id: string

  updateAttributes(attrs: Attributes): Overlay

  vue(base: Container): Shape
}
