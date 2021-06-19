import {Shape} from '@/components/model/Shape'

export interface Group {
  shape: Shape
  children: Array<Group>
}
