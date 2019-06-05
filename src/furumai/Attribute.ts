import Gap from '@/layout/engine/Gap'
import {Box} from '@/layout/engine/Box'

export type AttributeName = string
export type AttributeValue = string

export interface Attrs {
  [key: string]: string
}

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


export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
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
