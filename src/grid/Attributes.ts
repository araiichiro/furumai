import {Box} from '@/layout/engine/Box'
import Gap from '@/layout/engine/Gap'
import {Attrs, num} from '@/utils'
import {Decorations} from '@/grid/Decorations'

export class Attributes {
  public static empty = Attributes.of({})

  public static of(dic: Attrs): Attributes {
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
