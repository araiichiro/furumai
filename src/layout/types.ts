export class Length {
  static zero = Length.create(0)

  static parse(attr: string): Length {
    return new Length(Pixel.parse(attr))
  }

  private static create(px: number): Length {
    return new Length(new Pixel((px)))
  }

  private constructor(private v: Pixel) {
  }

  add(other: Length): Length {
    return Length.create(this.v.px + other.v.px)
  }

  sub(other: Length): Length {
    return Length.create(this.v.px - other.v.px)
  }

  div(n: number): Length {
    return Length.create(Math.floor(this.v.px / n))
  }

  toString(): string {
    return this.v.toString()
  }

  static max(...lengths: Length[]): Length {
    return lengths.reduce((ret, length) => {
      return ret.v.px > length.v.px ? ret : length
    }, Length.zero)
  }
}

export class Point {
  static zero = new Point(Length.zero, Length.zero)
  constructor(
    readonly x: Length,
    readonly y: Length,
  ) {
  }
}

class Pixel {
  static unit = "px"
  static zero = new Pixel(0)
  static parse(attr: string): Pixel {
    return new Pixel(Number(attr.substr(0, attr.length - this.unit.length)))
  }

  constructor(
    readonly px: number
  ) {
  }

  toString(): string {
    return `${this.px}${Pixel.unit}`
  }
}

export class Size {
  static zero: Size = new Size(Length.zero, Length.zero)

  static max(...sizes: Size[]): Size {
    return sizes.reduce((ret, size) => {
      return new Size(Length.max(ret.width, size.width), Length.max(ret.height, size.height))
    }, Size.zero)
  }

  constructor(
    readonly width: Length,
    readonly height: Length,
  ) {
  }

  add(gap: Gap): Size {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Size(
      width.add(right).add(left),
      height.add(top).add(bottom),
    )
  }

  sub(gap: Gap): Size {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Size(
      width.sub(right).sub(left),
      height.sub(top).sub(bottom),
    )
  }

  diff(content: Size): Size {
    return new Size(
      this.width.sub(content.width),
      this.height.sub(content.height),
    )
  }
}

export class Gap {
  static of(attr: string): Gap {
    const vs = attr.split(' ').map(Length.parse)
    switch (vs.length) {
      case 0:
        return Gap.zero
      case 1:
        return Gap.gap1(vs[0])
      case 2:
        return Gap.gap2(vs[0], vs[1])
      case 4:
        return Gap.gap4(vs[0], vs[1], vs[2], vs[3])
      default:
        throw new Error(`invalid attr for Gap: ${attr}`)
    }
  }

  public static zero = Gap.gap1(Length.zero)

  public static gap1(gap: Length): Gap {
    return new Gap(gap, gap, gap, gap)
  }

  public static gap2(tb: Length, rl: Length): Gap {
    return new Gap(tb, rl, tb, rl)
  }

  public static gap4(top: Length, right: Length, bottom: Length, left: Length): Gap {
    return new Gap(top, right, bottom, left)
  }

  constructor(
    readonly top: Length,
    readonly right: Length,
    readonly bottom: Length,
    readonly left: Length,
  ) {
  }

  public toString(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}

export class Area {
  static zero = Area.of(Size.zero, Gap.zero, Gap.zero)

  static of(base: Size, padding: Gap, margin: Gap): Area {
    const {width, height} = base
    return new Area(width, height, padding, margin)
  }

  static parse(attrs: Partial<AreaAttrs>): Partial<Area> {
    const { width, height, padding, margin } = attrs
    return {
      //base: new Size(
        width: width ? Length.parse(width) : Length.zero,
        height: height ? Length.parse(height) : Length.zero,
      //),
      padding: padding ? Gap.of(padding) : undefined,
      margin: margin ? Gap.of(margin) : undefined,
    }
  }

  static withDefaultValue(area: Partial<Area>): Area {
    const { width, height, padding, margin } = area
    return new Area(
      width || Length.zero,
      height || Length.zero,
//      base || Size.zero,
      padding || Gap.zero,
      margin || Gap.zero,
    )
  }

  constructor(
    readonly width: Length,
    readonly height: Length,
    readonly padding: Gap,
    readonly margin: Gap,
  ) {
  }

  get base(): Size {
    return new Size(this.width, this.height)
  }

  diff(content: Size): Size {
    const {width, height} = this.base
    const {top, right, bottom, left} = this.padding
    return new Size(
      width.sub(right).sub(content.width).sub(left),
      height.sub(top).sub(content.height).sub(bottom),
    )
  }

  get totalSize(): Size {
    return this.base.add(this.margin)
  }

  get contentSize(): Size {
    return this.base.sub(this.padding)
  }

}

export interface AreaAttrs {
  width: string
  height: string
  padding: string
  margin: string
}


//new Size(toLength(width) || zero, toLength(height) || zero)
// export class Size {
//   constructor(
//     readonly width: Length,
//     readonly height: Length,
//   ) {
//   }
//
// }


