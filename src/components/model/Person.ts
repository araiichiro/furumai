import {Length, Point, Territory} from '@/layout/types'
import {TextElem} from '@/components/model/TextElem'
import {SvgElem} from '@/components/model/SvgElem'

export class Person {
  constructor(
    readonly base: SvgElem,
    readonly territory: Territory,
  ) {
  }

  get elem(): SvgElem {
    return {
      ...this.base,
      text: this.text,
      d: this.d,
    }
  }

  get text(): TextElem | undefined {
    if (this.base.text) {
      this.base.text.base = this.textPosition
      return this.base.text
    }
    return undefined
  }

  get textPosition(): Point {
    const {padding} = this.territory.area
    const dx = padding.left
    const dy = padding.top.sub(Length.pixel(32)) // FIXME
    return this.territory.start.move(dx, dy)
  }

  get d(): string {
    const box = this.territory
    const {x, y} = box.start
    const {width, height} = box.area
    return this.person(x.pixel + width.pixel / 4, y.pixel, width.pixel / 2, height.pixel)
  }

  private person(x: number, y: number, width: number, height: number): string {
    const cx = this.territory.cx.pixel
    const xx = x + width
    const yy = y + height
    const cr = height / 5

    const cxr = cx - cr
    const cxl = cx + cr
    const yuu = y - cr / 3
    const yum = y + cr
    const yud = y + 2 * cr + cr / 3 // FIXME
    const xl = x
    const xr = xx
    const y1 = y + cr * 2
    const y2 = y + cr * 3
    const y3 = cr * 4 + y

    return `M ${cxr},${yum}
C ${cxr},${yud}
${cxl},${yud}
${cxl},${yum}
M ${cxr},${yum}
C ${cxr},${yuu}
${cxl},${yuu}
${cxl},${yum}
M${cx},${y1}
L${cx},${y3}
M${xl},${y2}
L${xr},${y2}
M${cx},${y3}
L${xl},${yy}
M${cx},${y3}
L${xr},${yy}`
  }
}
