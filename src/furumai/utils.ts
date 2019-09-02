import Gap from '@/layout/engine/Gap'
import {Box} from '@/layout/engine/Box'
import {BuildingBlock} from '@/furumai/setup/BuildingBlock'

export type AttributeName = string
export type AttributeValue = string

export class Attribute {
  constructor(readonly key: AttributeName, readonly value: AttributeValue) {
  }
}

export class Attributes {
  public static empty = Attributes.of([])

  public static of(attrs: Attribute[]): Attributes {
    const dic = attrs.reduce((map, obj) => {
      map[obj.key] = obj.value
      return map
    }, {} as { [key: string]: string })
    const {id, x, y, width, height, margin, padding, ...rest} = dic
    const box: any = {
      id,
      x: num(x), y: num(y),
      width: num(width), height: num(height),
      margin: Gap.parse(margin), padding: Gap.parse(padding),
    }

    Object.keys(box).forEach((k) => {
      if (box[k] === undefined) {
        delete box[k]
      }
    })

    return new Attributes(box, rest)
  }

  public static fromBox(box: Partial<Box>): Attributes {
    return new Attributes(box, {})
  }

  constructor(readonly box: Partial<Box>, readonly attrs: Attrs) {
  }

  public merge(attrs: Attributes): Attributes {
    return new Attributes(
      {
        ...this.box,
        ...attrs.box,
      }, {
        ...this.attrs,
        ...attrs.attrs,
      },
    )
  }
}

export class ElementAttribute {
  constructor(
    readonly elementName: string,
    readonly attributes: Attribute[],
  ) {
  }
}

export function toDict(attrs: ElementAttribute[]): { [key: string]: Attributes } {
  return attrs.reduce((map, obj) => {
    map[obj.elementName] = Attributes.of(obj.attributes)
    return map
  }, {} as { [key: string]: Attributes })
}

export interface StatementList {
  readonly blocks: BuildingBlock[]
  readonly attributes: Attribute[]
  readonly childAttributes: ElementAttribute[]
}

export type ShapeAttrs = Attrs
export type TextAttrs = Attrs
export type ShapeAndTextAttrs = { shape: ShapeAttrs, text: TextAttrs}

export function divideAttrs(attrs: Attrs): ShapeAndTextAttrs {
  const shapeAttrs = filter(attrs, (k, _) => !k.startsWith('text.'))
  const textAttrs: Attrs = {}
  Object.keys(attrs).forEach((k) => {
    if (k.startsWith('text.')) {
      const key = k.slice('text.'.length, -1)
      textAttrs[key] = attrs[k]
    } else if (k !== 'y') {
      textAttrs[k] = attrs[k]
    }
  })

  return {
    shape: shapeAttrs,
    text: textAttrs
  }
}

export type Attrs = {[key: string]: string}

export function filter(svgAttrs: Attrs, f: (k: string, v: string) => boolean): Attrs {
  return Object.keys(svgAttrs).reduce((obj, k) => {
    const value = svgAttrs[k]
    if (f(k, value)) {
      obj[k] = value
    }
    return obj
  }, {} as Attrs)
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
