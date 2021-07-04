import {deleteUndefined, m} from '@/style/Style'

class Pixel {
  public static unit = 'px'
  public static zero = new Pixel(0)
  public static parse(attr: string): Pixel {
    return new Pixel(Number(attr.substr(0, attr.length - this.unit.length)))
  }

  constructor(
    readonly px: number,
  ) {
  }

  public toString(): string {
    return `${this.px}${Pixel.unit}`
  }
}

export class Length {

  get pixel(): number {
    return this.v.px
  }
  public static zero = Length.create(0)

  public static pixel(v: number): Length {
    return new Length(new Pixel(v))
  }

  public static parse(attr: string): Length {
    if (attr.endsWith('px')) {
      return new Length(Pixel.parse(attr))
    }
    return Length.pixel(Number(attr))
  }

  public static isAuto(attr: string): boolean {
    return attr === 'auto'
  }

  public static max(...lengths: Length[]): Length {
    return lengths.reduce((ret, length) => {
      return ret.v.px > length.v.px ? ret : length
    }, Length.zero)
  }

  private static create(px: number): Length {
    return new Length(new Pixel((px)))
  }

  private constructor(private v: Pixel) {
  }

  public add(other: Length): Length {
    return Length.create(this.v.px + other.v.px)
  }

  public sub(other: Length): Length {
    return Length.create(this.v.px - other.v.px)
  }

  public div(n: number): Length {
    return Length.create(Math.floor(this.v.px / n))
  }

  public toString(): string {
    return this.v.toString()
  }
}

export class Point {
  public static zero = new Point(Length.zero, Length.zero)
  constructor(
    readonly x: Length,
    readonly y: Length,
  ) {
  }

  public add(other: Point): Point {
    return new Point(this.x.add(other.x), this.y.add(other.y))
  }

  public addGap(gap: Gap): Point {
    const {top, left} = gap
    return new Point(this.x.add(top), this.y.add(left))
  }

  public move(dx: Length, dy: Length): Point {
    return new Point(this.x.add(dx), this.y.add(dy))
  }
}

export class Boundary {
  public static zero: Boundary = new Boundary(Length.zero, Length.zero)

  public static max(...bounds: Boundary[]): Boundary {
    return bounds.reduce((ret, size) => {
      return new Boundary(Length.max(ret.width, size.width), Length.max(ret.height, size.height))
    }, Boundary.zero)
  }

  constructor(
    readonly width: Length,
    readonly height: Length,
  ) {
  }

  public add(gap: Gap): Boundary {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Boundary(
      width.add(right).add(left),
      height.add(top).add(bottom),
    )
  }

  public sub(gap: Gap): Boundary {
    const {top, right, bottom, left} = gap
    const {width, height} = this
    return new Boundary(
      width.sub(right).sub(left),
      height.sub(top).sub(bottom),
    )
  }

  public diff(content: Boundary): Gap {
    return Gap.gap2(
      this.height.sub(content.height).div(2),
      this.width.sub(content.width).div(2),
    )
  }
}

export class Gap {

  public static zero = Gap.gap1(Length.zero)
  public static of(attr: string): Gap {
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
  public static zero = Area.of(Boundary.zero, Gap.zero, Gap.zero)

  public static of(base: Boundary, padding: Gap, margin: Gap): Area {
    const {width, height} = base
    return new Area(width, height, padding, margin)
  }

  public static parse(attrs: Partial<AreaAttrs>): Partial<Area> {
    const { width, height, padding, margin } = attrs
    const ret: Partial<Area> = {
      width: m(Length.isAuto, width) ? undefined : m(Length.parse, width),
      height: m(Length.isAuto, height) ? undefined : m(Length.parse, height),
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

  public diff(content: Boundary): Boundary {
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

  public asPixel(): {width: number, height: number} {
    return {
      width: this.width.pixel,
      height: this.height.pixel,
    }
  }
}

export interface AreaAttrs {
  width: string
  height: string
  padding: string
  margin: string
}

export interface TerritoryMap {[key: string]: Territory}

export class Territory {
  constructor(
    readonly start: Point,
    readonly area: Area,
  ) {
  }

  get end(): Point {
    const {x, y} = this.start
    const {width, height} = this.area.base
    return new Point(x.add(width), y.add(height))
  }

  private get center(): Point {
    return this.start.add(this.area.center)
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
