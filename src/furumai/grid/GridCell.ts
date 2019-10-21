import {GridArea} from '@/furumai/grid/GridArea'
import {Cell} from '@/layout/engine/Cell'
import {Box} from '@/layout/engine/Box'
import {Shape} from '@/shared/vue/Shape'
import {SecureSvgAttrs} from '@/shared/vue/SecureSvgAttrs'
import {Attrs, num} from '@/furumai/utils'
import {Attributes, divideAttrs} from '@/furumai/grid/Attributes'

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
    const {dx, dy, ...rest} = this.attrs
    const cell = f(this.cell)
    const box = cell.box.move(num(dx) || 0, num(dy) || 0)
    return new GridCell(this.id, cell.withBox(box), rest)
  }

  public vue(): Shape {
    const {shape, label, t, ...rest} = this.attrs
    const divided = divideAttrs(rest)
    const text = {
      label: label || this.id,
      t,
      textAttrs: SecureSvgAttrs.of(divided.text),
    }
    return {
      type: shape || 'box',
      id: this.id,
      box: this.cell.box,
      text,
      svgAttrs: SecureSvgAttrs.of(divided.shape),
    }
  }
}
