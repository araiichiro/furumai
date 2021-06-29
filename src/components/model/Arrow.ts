import {Vector2d} from '@/layout/Vector2d'
import {SvgElem} from '@/components/model/SvgElem'
import {Length, Point, Territory} from '@/layout/types'
import {TextElem} from '@/components/model/TextElem'
import {m} from "@/style/Style";

export class Arrow {

  get arrow(): SvgElem {
    return {
      ...this.base,
      d: this.arrowPath(),
      text: this.text,
    }
  }

  get edge(): SvgElem {
    return {
      ...this.base,
      d: this.line(),
      text: this.text,
    }
  }

  get text(): TextElem | undefined {
    if (this.base.text) {
      const {x, y} = this.textPosition
      this.base.text.base = new Point(Length.pixel(x), Length.pixel(y))
      this.base.text.centering(true)
      return this.base.text
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
    const loc = this.territory

    const {dx, dy} = this.dxdy()
    return {
      x: loc.cx.pixel + v.dx / 4 - u.dx / 4 + dx,
      y: loc.cy.pixel + v.dy / 4 - u.dy / 4 + dy,
    }
  }

  private get xy(): {x1: number, y1: number, x2: number, y2: number} {
    const start = this.territory.start
    const end = this.territory.end
    return {x1: start.x.pixel, y1: start.y.pixel, x2: end.x.pixel, y2: end.y.pixel}
  }

  private defaults = {
    arrow: {
      head: {
        size: 16,
        degree: 27,
      },
    },
  }
  constructor(
    readonly base: SvgElem,
    readonly territory: Territory,
    readonly options: Partial<ArrowOptions>,
  ) {
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

  private dxdy(): {dx: number, dy: number} {
    const parsed = m((opt) => {
      return {
        dx: m(Length.parse, opt.dx) || Length.zero,
        dy: m(Length.parse, opt.dy) || Length.zero,
      }
    }, this.options.text)
    if (parsed) {
      return {dx: parsed.dx.pixel, dy: parsed.dy.pixel}
    }
    return {dx: 0, dy: 0}
  }

}

export interface ArrowOptions {
  text: Partial<TextAttrs>
}

export interface TextAttrs {
  dx: string
  dy: string
}
