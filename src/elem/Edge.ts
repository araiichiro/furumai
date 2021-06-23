import {Assigns, Styles} from '@/style/Style'
import {Length, Territory} from '@/layout/types'
import {Arrow} from '@/layout/Arrow'
import {createElem} from '@/components/model/Svg'
import {SvgElem as SvgElem} from '@/components/model/SvgElem'
import {Elem} from '@/elem/Elem'

export class Edge {
  public static of(from: string, op: string, to: string, attrs: Assigns = {}): Edge {
    const classNames = ['edge', this.className(from, op, to)]
    const cls = attrs.class
    if (cls) {
      classNames.push(...attrs.class.split(' '))
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
  }

  public resolveStyle(styles: Styles): Styled {
    const style = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: {},
    })
    return new Styled(
      this.id,
      this.classNames,
      {...style, ...this.appearance},
    )
  }

  public same(other: Edge): boolean {
    return this.from === other.from && this.appearance.shape === other.appearance.shape && this.to === other.to
  }

  public updateAppearance(other: Edge) {
    this.appearance = {
      ...this.appearance,
      ...other.appearance,
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
  ) {
  }

  public shape(tail: Territory, head: Territory): SvgElem {
    const {dx, dy} = this.appearance
    const territory = Arrow.fit(tail, head, Length.parse(dx || '0px').pixel, Length.parse(dy || '0px').pixel)
    return createElem(
      this.id,
      this.classNames.join(' '),
      territory,
      this.appearance,
    )
  }
}
