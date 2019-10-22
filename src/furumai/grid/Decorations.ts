import {Attrs} from '@/furumai/utils'

export class Decorations {
  public static empty = Decorations.of({})

  public static of(attrs: Attrs): Decorations {
    const {shape, label, t, dx, dy, ...rest} = attrs
    const divided = divideAttrs(rest)
    const other: Attrs = {shape, label, t, dx, dy}
    Object.keys(other).forEach((k) => {
      if (other[k] === undefined) {
        delete other[k]
      }
    })
    return new Decorations(divided.shape, divided.text, other)
  }

  private constructor(readonly shape: Attrs, readonly text: Attrs, readonly other: Attrs) {}

  public update(attrs: Decorations): Decorations {
    return new Decorations(
      {
        ...this.shape,
        ...attrs.shape,
      }, {
        ...this.text,
        ...attrs.text,
      }, {
        ...this.other,
        ...attrs.other,
      },
    )
  }
}

function divideAttrs(attrs: Attrs): {shape: Attrs, text: Attrs} {
  const shapeAttrs = filter(attrs, (k, _) => !k.startsWith('text.'))
  const textAttrs: Attrs = {}
  Object.keys(attrs).forEach((k) => {
    if (!k.startsWith('text.') && !(['y', 'dx', 'dy'].indexOf(k) > -1)) {
      textAttrs[k] = attrs[k]
    }
  })
  Object.keys(attrs).forEach((k) => {
    if (k.startsWith('text.')) {
      const key = k.slice('text.'.length)
      textAttrs[key] = attrs[k]
    }
  })

  return {
    shape: shapeAttrs,
    text: textAttrs,
  }
}

function filter(svgAttrs: Attrs, f: (k: string, v: string) => boolean): Attrs {
  return Object.keys(svgAttrs).reduce((obj, k) => {
    const value = svgAttrs[k]
    if (f(k, value)) {
      obj[k] = value
    }
    return obj
  }, {} as Attrs)
}
