import {SvgAttrs} from '@/svg/SvgAttrs'
import {Svg} from '@/svg/Svg'
import {SvgText} from '@/svg/SvgText'
import {SvgShape} from '@/svg/SvgShape'
import {filter, marginRect} from '@/svg/utils'
import {Box} from '@/layout/engine/Box'

export class Person implements SvgShape {
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
    const svgAttrs = filter(this.svgAttrs, (k, v) => !k.startsWith('text.'))
    const shape = person(x + width / 4, y, width / 2, height, svgAttrs)
    const y0 = y - 32  // FIXME
    const textAttrs = {
      'text.text-anchor': 'middle',
      ...this.svgAttrs,
    }
    const text = this.text.svg(x + width / 2, y0, textAttrs)

    const g = Svg.of('g', svgAttrs)
    g.appendChild(shape)
    g.appendChild(text)
    g.appendChild(marginRect(b))
    return g
  }
}

function person(x: number, y: number, width: number, height: number, svgAttrs: SvgAttrs): SVGElement {
  const cx = x + width / 2
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

  const path = Svg.of('path', {
    fill: 'none',
    stroke: 'black',
    ...svgAttrs,
  })

  const d = `M ${cxr},${yum}
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

  path.setAttribute('d', d)
  return path
}
