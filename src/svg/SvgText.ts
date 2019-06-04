import jsSHA from 'jssha';
import {SvgAttrs} from '@/svg/SvgAttrs';
import {Svg} from '@/svg/Svg';

export class SvgText {
  constructor(
    readonly label?: string,
    readonly content?: string,
  ) {}

  update(other?: SvgText): SvgText {
    if (other) {
      return new SvgText(other.label || this.label, other.content || this.content)
    } else {
      return this
    }
  }

  svg(x: number, y: number, svgAttrs: SvgAttrs): SVGElement {
    const label = this.label, content = this.content
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
      const attrs: {[key: string]: string} = {}
      for (let a in svgAttrs) {
        if (a.startsWith('text.')) {
          attrs[a.slice('text.'.length)] = svgAttrs[a]
        } else {
          // textAttrs[a] = attrs[a]
        }
      }
      const textAttrs: SvgAttrs = {
        'fill': 'black',
        'stroke-width': '2',
        ...attrs,
      }
      const textElem = Svg.of('text', {
        id: 'text_' + (svgAttrs.id || this.hash(v)),
        x: x.toString(), y: y.toString(),
        ...textAttrs
      })
      v.split('\\n').forEach((t) => {
          const tspan = Svg.of('tspan', {
            x: x.toString(), dy: '1em',
            ...textAttrs
          })
          tspan.appendChild(document.createTextNode(t))
          textElem.appendChild(tspan)

        })
      return textElem
    } else {
      return Svg.of('text')
    }
  }

  hash(text: string): string {
    const hasher = new jsSHA('SHA-1', 'TEXT')
    hasher.update(text)
    //return hasher.getHash('TEXT')
    return hasher.getHash('HEX')
  }
}
