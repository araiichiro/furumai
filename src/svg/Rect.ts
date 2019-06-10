import {SvgAttrs} from '@/svg/SvgAttrs'
import {Svg} from '@/svg/Svg'
import {SvgText} from '@/svg/SvgText'
import {SvgShape} from '@/svg/SvgShape'
import {filter, marginRect} from '@/svg/utils'
import {Box} from '@/layout/engine/Box'

export class Rect implements SvgShape {
  constructor(
    private id: string,
    private box: Box,
    private text: SvgText,
    private svgAttrs: SvgAttrs,
  ) {
  }

  public toSvgElement(): SVGElement {
    const a = this.box
    const {x, y, width, height, margin, padding} = a
    const svgAttrs = filter(this.svgAttrs, (k, v) => !k.startsWith('text.'))
    const g = Svg.of('g', svgAttrs)

    const rect = Svg.of('rect', {
      id: `_rect_${this.id}`,
      fill: 'none',
      stroke: 'black',
      x, y, width, height, margin, padding,
      ...svgAttrs,
    })
    const text = this.text.svg(x + padding.left, y + padding.top, this.svgAttrs)
    g.appendChild(rect)
    g.appendChild(text)
    g.appendChild(marginRect(a))
    return g
  }
}
