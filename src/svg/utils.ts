import {Svg} from '@/svg/Svg'
import {Box} from '@/layout/engine/Box'
import {SvgAttrs} from '@/svg/SvgAttrs'

export function marginRect(box: Box): SVGElement {
  const {x, y, width, height, margin} = box
  return Svg.of('rect', {
    fill: 'none',
    stroke: 'none',
    visibility: 'hidden',
    x: x - margin.left,
    y: y - margin.top,
    width: margin.left + width + margin.right,
    height: margin.top + height + margin.bottom,
  })
}

export function filter(svgAttrs: SvgAttrs, f: (k: string, v: string) => boolean): SvgAttrs {
  return Object.keys(svgAttrs).reduce((obj, k) => {
    const value = svgAttrs[k]
    if (f(k, value)) {
      obj[k] = value
    }
    return obj
  }, {} as SvgAttrs)
}
