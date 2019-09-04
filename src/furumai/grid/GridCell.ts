import {GridArea} from '@/furumai/grid/GridArea'
import {Cell} from '@/layout/engine/Cell'
import {Box} from '@/layout/engine/Box'
import {Shape} from '@/shared/vue/Shape'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {Attributes, Attrs, num} from '@/furumai/utils'

export class GridCell implements GridArea<Cell> {
  public static of(id: string, box: Box, attrs: Attrs) {
    return new GridCell(id, new Cell(box), attrs)
  }

  private constructor(
    public readonly id: string,
    private cell: Cell,
    private attrs: Attrs,
  ) {
  }

  get get(): Cell {
    return this.cell
  }

  public updateAttributes(attrs: Attributes): GridCell {
    // TODO immutable
    this.attrs = {
      ...this.attrs,
      ...attrs.attrs,
    }
    this.cell = this.cell.withBox(attrs.box)
    return this
  }

  public find(id: string): GridCell | undefined {
    return this.id === id ? this : undefined
  }

  public map(f: (a: Cell) => Cell): GridCell {
    const {dx, dy} = this.attrs
    const cell = f(this.cell)
    const box = cell.box.move(num(dx) || 0, num(dy) || 0)
    return new GridCell(this.id, cell.withBox(box), this.attrs)
  }

  public vue(): Shape {
    const {shape, label, t, ...rest} = this.attrs
    const shapeType = shape || 'box'
    const text = {
      label: label || this.id,
      t,
      dx: 0,
      dy: 0,
    }
    const svgAttrs = {'stroke-width': '2', ...rest}
    return {
      type: shapeType,
      id: this.id,
      box: this.cell.box,
      text,
      svgAttrs: SecureSvgAttrs.of(svgAttrs),
    }
  }
}
