import {Box, Point, Size} from '@/layout/engine/Box';
import {Elem} from '@/layout/engine/Elem';
import Gap from '@/layout/engine/Gap';

export class Cell implements Elem {
  constructor(readonly box: Box) {}

  private gap(oldGrossSize: Size, newGrossSize: Partial<Size>): Gap {
    const {width, height} = {
      ...oldGrossSize,
      ...newGrossSize
    }
    return Gap.gap2(height - oldGrossSize.height, width - oldGrossSize.width)
  }

  fit(point: Point, grossSize: Partial<Size>): Cell {
    const gap = this.gap(this.box.grossArea as Size, grossSize)
    const x = point.x + gap.left
    const y = point.y + gap.right
    return this.withBox(this.box.calcArea({x, y}))
  }

  withBox(box: Partial<Box>): Cell {
    return new Cell(this.box.update(box))
  }
}
