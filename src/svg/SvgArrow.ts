import {SvgAttrs} from '@/svg/SvgAttrs';
import {Vector2d} from '@/layout/engine/Vector2d';
import {Svg} from '@/svg/Svg';
import {SvgShape} from '@/svg/SvgShape';
import {SvgText} from '@/svg/SvgText';
import {Box} from '@/layout/engine/Box';
import {defaults} from '@/svg/defaults';

export class SvgArrow implements SvgShape {
  constructor(
    private box: Box,
    private text: SvgText,
    private tx: number,
    private ty: number,
    private svgAttrs: SvgAttrs
  ) {}

  public toSvgElement(): SVGElement {
    const {x, y, width, height} = this.box
    const x1 = x
    const y1 = y
    const x2 = x + width
    const y2 = y + height

    function rotateBase(deg: number, pump: number) {
      const v1 = new Vector2d(x1, y1, x2, y2).normalize().multiple(pump).rotate(deg).negate();
      return v1.move(x2, y2);
    }

    const deg = defaults.arrow.head.degree
    const pump = defaults.arrow.head.size
    const strokeWidth = defaults.arrow.width
    const va = rotateBase(deg, pump)
    const vb = rotateBase(-deg, pump)

    const path = Svg.of('path', {
      stroke: 'black',
      'stroke-width': `${strokeWidth}`,
      ...this.svgAttrs,
    })
    const d = `M ${x1} ${y1}
L ${x2} ${y2}
M ${va.x2} ${va.y2}
L ${x2} ${y2}
M ${vb.x2} ${vb.y2}
L ${x2} ${y2}`
    path.setAttribute('d', d)

    const textAttrs: SvgAttrs = {}
    for (let k in this.svgAttrs) {
      if (k.startsWith('text.')) {
        const key = k.slice('text.'.length, -1)
        textAttrs[key] = this.svgAttrs[k]
      } else if (k !== 'y') {
        textAttrs[k] = this.svgAttrs[k]
      }
    }
    const g = Svg.of('g', this.svgAttrs)

    let v = new Vector2d(x1, y1, x2, y2).normalize()
    v = v.dy > 0 ? v.rotate(-90) : v.rotate(90)
    v = v.multiple(24)
    const svgText = this.text.svg(this.tx + v.dx, this.ty + v.dy, textAttrs)
    g.appendChild(path)
    g.appendChild(svgText)
    return g
  }
}
