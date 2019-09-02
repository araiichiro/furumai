import {Shape} from 'src/shared/vue/Shape'

export interface Group extends Shape {
  children: Array<Shape | Group>
}
