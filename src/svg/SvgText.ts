import jsSHA from 'jssha'
import {SvgAttrs} from '@/svg/SvgAttrs'
import {Svg} from '@/svg/Svg'

export class SvgText {
  private static hash(text: string): string {
    const jsSha = new jsSHA('SHA-1', 'TEXT')
    jsSha.update(text)
    return jsSha.getHash('HEX')
  }

  constructor(
    readonly label?: string,
    readonly content?: string,
  ) {
  }

  public svg(x: number, y: number, svgAttrs: SvgAttrs): SVGElement {
    const label = this.label
    const content = this.content

    function txt() {
      if (label) {
        return content ? label + '\\n' + content : label
      } else {
        return content || ''
      }
    }

    return this.text(x, y, txt(), svgAttrs)
  }

  private text(x: number, y: number, v: string, svgAttrs: SvgAttrs): SVGElement {
    if (v) {
      const textAttrs: SvgAttrs = {
        fill: 'black',
        'stroke-width': '2',
      }
      for (const a in svgAttrs) {
        if (a.startsWith('text.')) {
          textAttrs[a.slice('text.'.length)] = svgAttrs[a]
        } else {
          // textAttrs[a] = attrs[a]
        }
      }
      const textElem = Svg.of('text', {
        id: 'text_' + (svgAttrs.id || SvgText.hash(v)),
        x: x.toString(), y: y.toString(),
        ...textAttrs,
      })
      v.split('\\n').forEach((t) => {
        const tspan = Svg.of('tspan', {
          x: x.toString(), dy: '1em',
          ...textAttrs,
        })
        tspan.appendChild(document.createTextNode(t))
        textElem.appendChild(tspan)

      })
      return textElem
    } else {
      return Svg.of('text')
    }
  }
}
