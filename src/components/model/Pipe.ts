import {Length, Point, Territory} from '@/layout/types'
import {SvgElem} from '@/components/model/SvgElem'
import {TextElem} from '@/components/model/TextElem'

export class Pipe {
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
    const dx = padding.left.add(Length.pixel(10)) // FIXME
    const dy = padding.top.sub(Length.pixel(10)) // FIXME
    return this.territory.start.move(dx, dy)
  }

  get d(): string {
    const box = this.territory
    const cx = box.cx.pixel
    const cy = box.cy.pixel
    const {width, height} = box.area.asPixel()

    const curve = 8 + (width * 1.2) / 20  // FIXME
    const xl = cx - (width / 2)
    const xr = cx + (width / 2)
    const yum = cy - (height / 2)
    const ydm = cy + (height / 2)

    return `M ${xl},${yum}
C ${xl + curve},${yum}
  ${xl + curve},${ydm}
  ${xl},${ydm}
M ${xl},${yum}
C ${xl - curve},${yum}
  ${xl - curve},${ydm}
  ${xl},${ydm}
M ${xl},${yum}
L ${xr},${yum}
C ${xr + curve},${yum}
  ${xr + curve},${ydm}
  ${xr},${ydm}
L ${xl},${ydm}`
  }
}
