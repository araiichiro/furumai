import {GridArea} from '@/grid/GridArea'
import {Cell} from '@/layout/engine/Cell'
import {Box} from '@/layout/engine/Box'
import {Shape} from '@/components/model/Shape'
import {SecureSvgAttrs, validatedShape} from '@/utils/security'
import {Attributes, Decorations, num} from '@/utils/types'

export class GridCell implements GridArea<Cell> {
  public static of(id: string, attrs: Attributes) {
    return new GridCell(id, new Cell(Box.of(attrs.box)), attrs.attrs)
  }

  private constructor(
    public readonly id: string,
    private cell: Cell,
    private attrs: Decorations,
  ) {
  }

  get get(): Cell {
    return this.cell
  }

  public updateAttributes(attrs: Attributes): GridCell {
    // TODO immutable
    this.attrs = this.attrs.update(attrs.attrs)
    this.cell = this.cell.withBox(attrs.box)
    return this
  }

  public map(f: (a: Cell) => Cell): GridCell {
    const cell = f(this.cell)
    return new GridCell(this.id, cell, this.attrs)
  }

  public vue(): Shape {
    const {shape, label, t, dx, dy} = this.attrs.other
    const text = {
      label: label === '' ? '' : (label || this.id),
      t,
      textAttrs: SecureSvgAttrs.of(this.attrs.text),
    }
    return {
      type: validatedShape(shape),
      id: this.id,
      box: this.cell.box.move(num(dx) || 0, num(dy) || 0),
      text,
      svgAttrs: SecureSvgAttrs.of(this.attrs.shape),
    }
  }
}
