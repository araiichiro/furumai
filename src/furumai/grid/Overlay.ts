import {Container} from '@/furumai/grid/Container'
import {Shape} from '@/shared/vue/Shape'
import {Attributes} from '@/furumai/utils'

export interface Overlay {
  id: string

  applyTo(base: Container): Overlay

  updateAttributes(attrs: Attributes): Overlay

  vue(): Shape
}
