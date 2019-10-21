import {Attrs} from '@/furumai/utils'

export class Decorations {
  public static empty = new Decorations({})

  constructor(private attrs: Attrs) {}

  public get shape(): Attrs {
    const {shape, label, t, dx, dy, ...rest} = this.attrs
    return divideAttrs(rest).shape
  }

  public get text(): Attrs {
    const {shape, label, t, dx, dy, ...rest} = this.attrs
    return divideAttrs(rest).text
  }

  public get other(): Attrs {
    const {shape, label, t, dx, dy} = this.attrs
    return {shape, label, t, dx, dy}
  }

  public update(attrs: Attrs): Decorations {
    const a = {
      ...this.attrs,
      ...attrs,
    }
    return new Decorations(a)
  }
}

function divideAttrs(attrs: Attrs): {shape: Attrs, text: Attrs} {
  const shapeAttrs = filter(attrs, (k, _) => !k.startsWith('text.'))
  const textAttrs: Attrs = {}
  Object.keys(attrs).forEach((k) => {
    if (k.startsWith('text.')) {
      const key = k.slice('text.'.length)
      textAttrs[key] = attrs[k]
    } else if (!(['y', 'dx', 'dy'].indexOf(k) > -1)) {
      textAttrs[k] = attrs[k]
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
