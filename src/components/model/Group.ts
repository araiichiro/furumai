import {Shape} from '@/components/model/Shape'

export interface Group extends Shape {
  children: Array<Shape | Group>
}
