import {Box, Point, Size} from '@/layout/engine/Box';

export interface Elem {
  box: Box
  fit(point: Point, grossSize: Partial<Size>): Elem
}
