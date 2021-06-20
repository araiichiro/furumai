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

export class Length {
  static zero = Length.create(0)

  static pixel(v: number): Length {
    return new Length(new Pixel(v))
  }

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

  get pixel(): number {
    return this.v.px
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

  add(other: Point): Point {
    return new Point(this.x.add(other.x), this.y.add(other.y))
  }

  addGap(gap: Gap): Point {
    const {top, left} = gap
    return new Point(this.x.add(top), this.y.add(left))
  }
}

export class Boundary {
  static zero: Boundary = new Boundary(Length.zero, Length.zero)

  static max(...bounds: Boundary[]): Boundary {
    return bounds.reduce((ret, size) => {
      return new Boundary(Length.max(ret.width, size.width), Length.max(ret.height, size.height))
    }, Boundary.zero)
  }

  constructor(
    readonly width: Length,
    readonly height: Length,
  ) {
  }

  add(gap: Gap): Boundary {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Boundary(
      width.add(right).add(left),
      height.add(top).add(bottom),
    )
  }

  sub(gap: Gap): Boundary {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Boundary(
      width.sub(right).sub(left),
      height.sub(top).sub(bottom),
    )
  }

  diff(content: Boundary): Boundary {
    return new Boundary(
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
  static zero = Area.of(Boundary.zero, Gap.zero, Gap.zero)

  static of(base: Boundary, padding: Gap, margin: Gap): Area {
    const {width, height} = base
    return new Area(width, height, padding, margin)
  }

  static parse(attrs: Partial<AreaAttrs>): Partial<Area> {
    const { width, height, padding, margin } = attrs
    const ret: Partial<Area> = {
      width: m(Length.parse, width),
      height: m(Length.parse, height),
      padding: m(Gap.of, padding),
      margin: m(Gap.of, margin),
    }
    return deleteUndefined(ret)
  }

  constructor(
    readonly width: Length,
    readonly height: Length,
    readonly padding: Gap,
    readonly margin: Gap,
  ) {
  }

  get base(): Boundary {
    return new Boundary(this.width, this.height)
  }

  diff(content: Boundary): Boundary {
    const {width, height} = this.base
    const {top, right, bottom, left} = this.padding
    return new Boundary(
      width.sub(right).sub(content.width).sub(left),
      height.sub(top).sub(content.height).sub(bottom),
    )
  }

  get totalSize(): Boundary {
    return this.base.add(this.margin)
  }

  get contentSize(): Boundary {
    return this.base.sub(this.padding)
  }

  get cx(): Length {
    return this.width.div(2)
  }

  get cy(): Length {
    return this.height.div(2)
  }

  get center(): Point {
    return new Point(this.cx, this.cy)
  }
}

export interface AreaAttrs {
  width: string
  height: string
  padding: string
  margin: string
}

function m<A, B>(fn: (a: A)=>B, a: A | undefined): B | undefined {
  if (a) {
    return fn(a)
  }
  return undefined
}

function deleteUndefined<T extends any>(t: Partial<T>): Partial<T> {
  return Object.keys(t).reduce((p, k) => {
    if (t[k]) {
      return {...p, [k]: t[k]}
    } else {
      return p
    }
  }, {} as Partial<T>)
}

export class Location {
  constructor(
    readonly id: string,
    readonly point: Point,
    readonly area: Area,
  ) {
  }

  get center(): Point {
    return this.point.add(this.area.center)
  }

  get width(): Length {
    return this.area.width
  }

  get height(): Length {
    return this.area.height
  }

  get cx(): Length {
    return this.center.x
  }

  get cy(): Length {
    return this.center.y
  }
}
