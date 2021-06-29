import {Assigns, Styles} from '@/style/Style'
import {Length, Territory} from '@/layout/types'
import {Arrow} from '@/layout/Arrow'
import {createElem} from '@/components/model/Svg'
import {SvgElem as SvgElem} from '@/components/model/SvgElem'
import {Elem} from '@/elem/Elem'
import {TextAttrs} from "@/components/model/Arrow";

export class Edge {
  public static of(from: string, op: string, to: string, attrs: Assigns = {}): Edge {
    const classNames = ['edge', this.className(from, op, to)]
    const cls = attrs.class
    if (cls) {
      classNames.push(...attrs.class.split(' '))
    }

    const textAttrs: Partial<TextAttrs> = {
      dx: attrs['text.dx'],
      dy: attrs['text.dy'],
    }

    return new Edge(
      from,
      to,
      attrs.id || this.idName(from, op, to),
      classNames,
      {
        shape: op === '--' ? 'edge' : 'arrow',
        ...attrs,
      } as Partial<Appearance>,
      textAttrs,
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
    readonly to: string,
    readonly id: string,
    readonly classNames: string[] = [],
    private appearance: Partial<Appearance>,
    private textAttrs: Partial<TextAttrs>,
    private svgAttrs: Assigns,
  ) {
  }

  public visible() {
    this.appearance.visibility = 'visible'
  }

  public hide() {
    this.appearance.visibility = 'hidden'
  }

  public update(elem: Elem) {
    this.appearance = {
      ...this.appearance,
      ...elem._appearance,
    }
    this.svgAttrs = {
      ...this.svgAttrs,
      ...elem._svgAttrs,
    }
  }

  public resolveStyle(styles: Styles): Styled {
    const context = {
      id: this.id,
      classNames: this.classNames,
    }
    const myStyles = styles.query(context)
    const textAttrs = styles.query({
      classNames: ['text'],
      parent: context,
    })
    const svgAttrs = {...myStyles}
    Elem.noSvgAttrs.forEach((attr) => delete svgAttrs[attr])

    return new Styled(
      this.id,
      this.classNames,
      {...myStyles, ...this.appearance},
      {...textAttrs, ...this.textAttrs},
      svgAttrs
    )
  }

  public same(other: Edge): boolean {
    return this.from === other.from && this.appearance.shape === other.appearance.shape && this.to === other.to
  }

  public updateEdge(other: Edge) {
    this.appearance = {
      ...this.appearance,
      ...other.appearance,
    }
    this.svgAttrs = {
      ...this.svgAttrs,
      ...other.svgAttrs,
    }
  }
}

interface Appearance {
  visibility: string
  label: string
  shape: string
  text: string
  t: string
  dx: string
  dy: string
}

class Styled {
  constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly appearance: Partial<Appearance>,
    readonly textAttrs: Partial<TextAttrs>,
    readonly svgAttrs: Assigns,
  ) {
  }

  public shape(tail: Territory, head: Territory, includeStyle: boolean): SvgElem {
    const {dx, dy} = this.appearance
    const territory = Arrow.fit(tail, head, Length.parse(dx || '0px').pixel, Length.parse(dy || '0px').pixel)
    return createElem(
      this.id,
      this.classNames.join(' '),
      territory,
      this.appearance,
      includeStyle ? this.svgAttrs : {},
      {
        text: this.textAttrs,
        hasChildren: false
      }
    )
  }
}
