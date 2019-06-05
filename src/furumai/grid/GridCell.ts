import {SvgText} from '@/svg/SvgText'
import {Rect} from '@/svg/Rect'
import {Cylinder} from '@/svg/Cylinder'
import {Person} from '@/svg/Person'
import {Attributes, Attrs} from '@/furumai/Attribute'
import {GridArea} from '@/furumai/grid/GridArea'
import {Cell} from '@/layout/engine/Cell'
import {Box} from '@/layout/engine/Box'

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
    return new GridCell(this.id, f(this.cell), this.attrs)
  }

  public svg(): SVGElement {
    const {shape, label, t, ...rest} = this.attrs
    const shapeType = shape || 'box'
    const text = new SvgText(label || this.id, t)
    const svgAttrs = {'stroke-width': '2', ...rest}
    switch (shapeType) {
      case 'box':
        return new Rect(this.id, this.cell.box, text, svgAttrs).toSvgElement()
      case 'cylinder':
        return new Cylinder(this.id, this.cell.box, text, svgAttrs).toSvgElement()
      case 'person':
        return new Person(this.id, this.cell.box, text, svgAttrs).toSvgElement()
      default:
        throw new Error('not implemented: ' + shapeType)
    }
  }
}
