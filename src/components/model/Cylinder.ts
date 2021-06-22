import {SvgElem} from "@/components/model/SvgElem";
import {Territory} from "@/layout/types";

export class Cylinder {
  constructor(
    readonly base: SvgElem,
    readonly territory: Territory,
  ) {
  }

  get elem(): SvgElem {
    return {
      ...this.base,
      d: this.d,
    }
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
