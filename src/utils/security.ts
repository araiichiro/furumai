export class SecureSvgAttrs {
  public static of(svgAttrs: { [key: string]: any }): SecureSvgAttrs {
    Object.keys(svgAttrs).forEach((k) => {
      const v = svgAttrs[k]
      // check attribute for security reason
      if (!isValid(k, v)) {
        throw new Error(`Sorry, the attribute is not used for security reason: ${k} => ${v}`)
      }
    })
    return new SecureSvgAttrs(svgAttrs)
  }

  private constructor(
    readonly svgAttrs: { [key: string]: any },
  ) {}
}

export function parseIconShape(shape: string): string[] {
  return shape.split(':')
}

export function validatedShape(shape: string): string {
  const type = shape || 'box'
  if (type.startsWith('icon:')) {
    const sp = parseIconShape(type)
    if (sp.length === 2 && sp[0] === 'icon' && /^[0-9a-zA-Z\-\/]*$/.test(sp[1])) {
      return type
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${type}`)
    }
  } else {
    if (type === 'box' || type === 'person' || type === 'cylinder' || type === 'pipe') {
      return type
    } else {
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${type}`)
    }
  }
}

function isColor(text: string) {
  const color3 = /^#[0-9a-fA-F]{3}$/
  const color6 = /^#[0-9a-fA-F]{6}$/
  return color3.test(text) || color6.test(text)
}

const availableSvgAttributes = new Set([
  'cx',
  'cy',
  'd',
  'dx',
  'dy',
  'fill',
  'font-family',
  'font-size',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'fx',
  'fy',
  'height',
  'id',
  'lengthAdjust',
  'markerHeight',
  'markerUnits',
  'markerWidth',
  'method',
  'orient',
  'overline-position',
  'overline-thickness',
  'pathLength',
  'rx',
  'ry',
  'slope',
  'spreadMethod',
  'textLength',
  'underline-position',
  'underline-thickness',
  'viewBox',
  'width',
  'x',
  'y',
  'alignment-baseline',
  'baseline-shift',
  'color',
  'display',
  'dominant-baseline',
  'enable-background',
  'fill-opacity',
  'fill-rule',
  'flood-color',
  'flood-opacity',
  'font-size-adjust',
  'kerning',
  'letter-spacing',
  'lighting-color',
  'opacity',
  'overflow',
  'pointer-events',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'stroke',
  'text-anchor',
  'text-decoration',
  'visibility',
  'word-spacing',
  'writing-mode',
  'margin',
  'padding',
])

function isValid(attrName: string, attrValue: string) {
  function checkName(name: string) {
    return availableSvgAttributes.has(attrName)
  }

  function checkValue(v: string) {
    return /^[0-9a-zA-Z\s\-_.,%]*$/.test(v) || isColor(v) || !isNaN(Number(v))
  }

  return checkName(attrName) && checkValue(attrValue)
}
