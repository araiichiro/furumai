import {Vector2d} from '@/layout/Vector2d'
import {SvgElem} from '@/components/model/SvgElem'
import {Length, Point} from '@/layout/types'
import {TextElem} from '@/components/model/TextElem'
import {m} from '@/style/Style'
import {Shape} from '@/components/model/Svg'

export class Arrow {
  private defaults = {
    arrow: {
      head: {
        size: 16,
        degree: 27,
      },
    },
  }

  constructor(
    readonly id: string,
    readonly className: string,
    readonly shape: Shape,
    readonly textAttrs: Partial<TextAttrs>,
  ) {
  }

  get arrow(): SvgElem {
    return {
      ...this.shape.elem(this.id, this.className),
      d: this.arrowPath(),
      text: this.text,
    }
  }

  get edge(): SvgElem {
    return {
      ...this.shape.elem(this.id, this.className),
      d: this.line(),
      text: this.text,
    }
  }

  get text(): TextElem | undefined {
    const text = this.shape.text
    if (text) {
      const {x, y} = this.textPosition
      text.base = new Point(Length.pixel(x), Length.pixel(y))
      text.centering(true)
      return text
    }
    return undefined
  }

  private get textPosition(): {x: number, y: number} {
    const {x1, y1, x2, y2} = this.xy
    const vec = new Vector2d(x1, y1, x2, y2)

    let v = vec.normalize()
    v = v.dy === 0 ? v.rotate(90 * Math.sign(v.dx)) : v.dy > 0 ? v.rotate(-90) : v.rotate(90)
    v = v.multiple(24)

    const cos = vec.dx / vec.length
    const u = Math.abs(cos) > 0.98 ? vec.multiple(cos).multiple(0.35) : vec.multiple(0.1)
    const loc = this.shape.territory

    const parsed = {
      dx: m(Length.parse, this.textAttrs.dx) || Length.zero,
      dy: m(Length.parse, this.textAttrs.dy) || Length.zero,
    }

    return {
      x: loc.cx.pixel + v.dx / 2 - u.dx / 4 + parsed.dx.pixel,
      y: loc.cy.pixel + v.dy / 2 - u.dy / 4 + parsed.dy.pixel,
    }
  }

  private get xy(): {x1: number, y1: number, x2: number, y2: number} {
    const territory = this.shape.territory
    const start = territory.start
    const end = territory.end
    return {x1: start.x.pixel, y1: start.y.pixel, x2: end.x.pixel, y2: end.y.pixel}
  }

  private line(): string {
    const {x1, y1, x2, y2} = this.xy
    return `M${x1} ${y1} L${x2} ${y2}`
  }

  private arrowPath(): string {
    const {x1, y1, x2, y2} = this.xy
    function rotateBase(deg: number, pump: number) {
      const v1 = new Vector2d(x1, y1, x2, y2).normalize().multiple(pump).rotate(deg).negate()
      return v1.move(x2, y2)
    }

    const degree = this.defaults.arrow.head.degree
    const pumpUp = this.defaults.arrow.head.size
    const va = rotateBase(degree, pumpUp)
    const vb = rotateBase(-degree, pumpUp)

    return `M ${x1} ${y1}
L ${x2} ${y2}
M ${va.x2} ${va.y2}
L ${x2} ${y2}
M ${vb.x2} ${vb.y2}
L ${x2} ${y2}`
  }
}

export interface TextAttrs {
  dx: string
  dy: string
}
