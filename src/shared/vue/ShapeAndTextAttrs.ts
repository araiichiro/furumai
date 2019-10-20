import {Attrs} from '@/furumai/utils'

export type ShapeAttrs = Attrs
export type TextAttrs = Attrs
export interface ShapeAndTextAttrs {
  shape: ShapeAttrs
  text: TextAttrs
}

export function divideAttrs(attrs: Attrs): ShapeAndTextAttrs {
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
