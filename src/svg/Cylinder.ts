import {SvgShape} from '@/svg/SvgShape'
import {SvgText} from '@/svg/SvgText'
import {SvgAttrs} from '@/svg/SvgAttrs'
import {Svg} from '@/svg/Svg'
import {marginRect} from '@/svg/utils'
import {Box} from '@/layout/engine/Box'

export class Cylinder implements SvgShape {
  constructor(
    private id: string,
    private box: Box,
    private text: SvgText,
    private svgAttrs: SvgAttrs,
  ) {
  }

  public toSvgElement(): SVGElement {
    const b = this.box
    const {x, y, width, height} = b
    const g = Svg.of('g', this.svgAttrs)
    const shape = cylinder(b.cx, b.cy, width, height, {id: `_rect_${this.id}`, ...this.svgAttrs})
    const text = this.text.svg(x + b.padding.left, y + b.padding.top, this.svgAttrs)
    g.appendChild(shape)
    g.appendChild(text)
    g.appendChild(marginRect(b))
    return g
  }
}

function cylinder(cx: number, cy: number, width: number, height: number, svgAttrs: SvgAttrs): SVGElement {
  const curve = 8 + (width * 1.2) / 20  // FIXME
  const xl = cx - (width / 2)
  const xr = cx + (width / 2)
  const yum = cy - (height / 2)
  const yuu = yum - curve
  const yud = yum + curve
  const ydm = cy + (height / 2)
  const ydd = ydm + curve

  const path = Svg.of('path', {
    fill: 'none',
    stroke: 'black',
    ...svgAttrs,
  })

  const d = `M ${xr},${yum}
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

  path.setAttribute('d', d)
  return path
}
