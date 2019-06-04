export class Svg {
  public static of(tag: string, svgAttrs: {[key: string]: any} = {}) {
    const elem = document.createElementNS('http://www.w3.org/2000/svg', tag)
    for (const k in svgAttrs) {
      elem.setAttribute(k, svgAttrs[k].toString())
    }
    return elem
  }
}
