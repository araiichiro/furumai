import LZString from 'lz-string'
import {Box} from '@/layout/engine/Box'
import Gap from '@/layout/engine/Gap'

export interface DataEncoderDecoder<S, T> {
  formatVersion: string

  decode(encoded: S): T

  encode(decoded: T): S
}

export class DataEncoderDecoderV1 implements DataEncoderDecoder<string, Data> {
  public readonly formatVersion = 'v1'

  public decode(encoded: string): Data {
    const jsonString = LZString.decompressFromEncodedURIComponent(encoded)
    return JSON.parse(jsonString) as Data
  }

  public encode(decoded: Data): string {
    const d = JSON.stringify(decoded)
    return LZString.compressToEncodedURIComponent(d)
  }
}

export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
}

export function asString(arg: any): {[key: string]: string} {
  return Object.keys(arg).reduce((obj, k) => {
    obj[k] = arg[k].toString()
    return obj
  }, {} as {[key: string]: string})
}

export type Data = any

export interface Dict<T> {
  [key: string]: T
}

export type Attrs = Dict<string>

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

function parse(gapString: string): Gap | undefined {
  if (gapString) {
    const g = gapString.split(' ').map((s) => Number(s))
    if (g.length === 4) {
      return Gap.gap4(g[0], g[1], g[2], g[3])
    } else if (g.length === 2) {
      return Gap.gap2(g[0], g[1])
    } else if (g.length === 1) {
      return Gap.gap1(g[0])
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}

export class Attributes {
  public static empty = Attributes.of({})

  public static of(dic: Attrs): Attributes {
    const {id, x, y, width, height, margin, padding, ...rest} = dic
    const box: any = {
      id,
      x: num(x), y: num(y),
      width: num(width), height: num(height),
      margin: parse(margin), padding: parse(padding),
    }

    Object.keys(box).forEach((k) => {
      if (box[k] === undefined) {
        delete box[k]
      }
    })

    return new Attributes(box, Decorations.of(rest))
  }

  private constructor(readonly box: Partial<Box>, readonly attrs: Decorations) {
  }

  public merge(attrs: Attributes): Attributes {
    return new Attributes(
      {
        ...this.box,
        ...attrs.box,
      },
      this.attrs.update(attrs.attrs),
    )
  }
}
