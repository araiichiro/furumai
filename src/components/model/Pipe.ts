import {Length, Point} from '@/layout/types'
import {SvgElem} from '@/components/model/SvgElem'
import {TextElem} from '@/components/model/TextElem'
import {Shape} from '@/components/model/Svg'

export class Pipe {
  constructor(
    readonly id: string,
    readonly className: string,
    readonly shape: Shape,
  ) {
  }

  get elem(): SvgElem {
    return {
      ...this.shape.elem(this.id, this.className),
      text: this.text,
      d: this.d,
      icon: undefined,
    }
  }

  get text(): TextElem | undefined {
    const text = this.shape.text
    if (text) {
      text.base = this.textPosition
      return text
    }
    return undefined
  }

  get textPosition(): Point {
    const territory = this.shape.territory
    const {padding} = territory.area
    const dx = padding.left.add(Length.pixel(10)) // FIXME
    const dy = padding.top.sub(Length.pixel(6)) // FIXME
    return territory.start.move(dx, dy)
  }

  get d(): string {
    const box = this.shape.territory
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
