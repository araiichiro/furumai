import {SvgElem} from '@/components/model/SvgElem'
import {Shape} from '@/components/model/Svg'

export class Cylinder {
    constructor(
        readonly id: string,
        readonly className: string,
        readonly shape: Shape,
    ) {
  }

  get elem(): SvgElem {
    return {
      ...this.shape.elem(this.id, this.className),
      d: this.d,
      icon: undefined,
    }
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
    const yuu = yum - curve
    const yud = yum + curve
    const ydm = cy + (height / 2)
    const ydd = ydm + curve

    return `M ${xr},${yum}
C ${xr},${yud}
  ${xl},${yud}
  ${xl},${yum}
M ${xr},${yum}
C ${xr},${yuu}
  ${xl},${yuu}
  ${xl},${yum}
M ${xr},${yum}
L ${xr},${ydm}
C ${xr},${ydd}
  ${xl},${ydd}
  ${xl},${ydm}
L ${xl},${yum}`
  }
}
