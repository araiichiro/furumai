import {Assigns, deleteUndefined, StyleList} from '@/style/Style'
import {Length, Territory} from '@/layout/types'
import {Arrow} from '@/layout/Arrow'
import {Appearance, createArrow, Shape, SvgStyle} from '@/components/model/Svg'
import {TextAttrs} from '@/components/model/Arrow'
import {SvgElem as SvgElem} from '@/components/model/SvgElem'
import {Elem, ElemStyle} from '@/elem/Elem'

export class Edge {
  public static of(from: string, op: string, to: string, attrs: Assigns = {}): Edge {
    const classNames = ['edge', this.className(from, op, to)]
    const cls = attrs.class
    if (cls) {
      classNames.push(...attrs.class.split(' '))
    }

    return new Edge(
      from,
      op,
      to,
      attrs.id || this.idName(from, op, to),
      classNames,
      attrs,
    )
  }

  public static idName(from: string, op: string, to: string): string {
    return `_furumai_${from}_${this.connectorName(op)}_${to}`
  }

  public static className(from: string, op: string, to: string): string {
    return `_furumai_${from}_${this.connectorName(op)}_${to}`
  }

  private static connectorName(op: string): string {
    switch (op) {
      case '->':
        return 'to'
      case '--':
        return  'edge'
      default:
        throw new Error('not implemented')
    }
  }

  private constructor(
    readonly from: string,
    readonly op: string,
    readonly to: string,
    readonly id: string,
    readonly classNames: string[] = [],
    private attrs: Assigns,
  ) {
  }

  public visible() {
    this.attrs.visibility = 'visible'
  }

  public hide() {
    this.attrs.visibility = 'hidden'
  }

  public update(elem: Elem) {
    this.attrs = {
      ...this.attrs,
      ...elem._attrs,
    }
  }

  public resolveStyle(styles: StyleList): Styled {
    const context = {
      id: this.id,
      classNames: this.classNames,
    }
    const myAttrs = styles.query(context)
    const labelAttrs = styles.query({
      classNames: ['label'],
      parent: context,
    })
    const textAttrs = styles.query({
      classNames: ['text'],
      parent: context,
    })
    const style = ElemStyle.of(
      labelAttrs,
      textAttrs,
      {...myAttrs, ...this.attrs},
    )
    return Styled.of(
      this.id,
      this.classNames,
      style,
    )
  }

  public same(other: Edge): boolean {
    return this.from === other.from && this.op === other.op && this.to === other.to
  }

  public updateEdge(other: Edge) {
    this.attrs = {
      ...this.attrs,
      ...other.attrs,
    }
  }
}

class Styled {
  public static of(
    id: string,
    classNames: string[],
    style: ElemStyle,
  ) {
    const textAttrs: TextAttrs = {
      dx: style.textAttrs.dx || style.shapeAttrs['text.dx'],
      dy: style.textAttrs.dy || style.shapeAttrs['text.dy'],
    }
    const arrowStyle: Partial<ArrowStyle> = {
      dx: style.shapeAttrs.dx,
      dy: style.shapeAttrs.dy,
    }
    return new Styled(
      id,
      classNames,
      deleteUndefined(arrowStyle),
      style.shapeAttrs as Partial<Appearance>,
      style.toSvgStyle(),
      deleteUndefined(textAttrs),
    )
  }

  constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly arrowStyle: Partial<ArrowStyle>,
    readonly appearance: Partial<Appearance>,
    readonly svgStyle: SvgStyle,
    readonly textAttrs: Partial<TextAttrs>,
  ) {
  }
  public arrow(tail: Territory, op: string, head: Territory, includeStyle: boolean): SvgElem {
    const {dx, dy} = this.arrowStyle
    const territory = Arrow.fit(tail, head, Length.parse(dx || '0px').pixel, Length.parse(dy || '0px').pixel)
    const shape = new Shape(
      territory,
      {
        shape: op === '--' ? 'edge' : 'arrow',
        ...this.appearance,
      },
      includeStyle ? this.svgStyle : ElemStyle.empty.toSvgStyle(),
    )
    return createArrow(
      this.id,
      this.classNames.join(' '),
      shape,
      this.textAttrs,
    )
  }
}

interface ArrowStyle {
  dx: string
  dy: string
}
