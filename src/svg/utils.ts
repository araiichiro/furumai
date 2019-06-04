import {Svg} from '@/svg/Svg';
import {Box} from '@/layout/engine/Box';

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
