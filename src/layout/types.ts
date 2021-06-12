import {Assigns} from "@/style/Style";

export interface Point {
  x: number
  y: number
}

export interface Size {
  width: Length,
  height: Length,
}


export interface Container {
  base: Point
  area: Area
}

export class Area {
  static parse(attrs: Assigns): Partial<Area> {
    const zero = Pixel.zero
    const { width, height, padding, margin } = attrs
    return {
      base: {
        width: width ? toLength(width) : zero,
        height: height ? toLength(height) : zero,
      },
      padding: padding ? Gap.of(padding) : undefined,
      margin: margin ? Gap.of(margin) : undefined,
    }
  }

  static withDefaultValue(area: Partial<Area>): Area {
    const zero = Pixel.zero
    const { base, padding, margin } = area
    return new Area(
      base || { width: zero, height: zero },
      padding || Gap.zero,
      margin || Gap.zero,
    )
  }

  constructor(
    public base: Size,
    readonly padding: Gap,
    readonly margin: Gap,
  ) {
  }
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


function toLength(length: string): Length {
  if (length.endsWith(Pixel.unit)) {
    return Pixel.parse(length)
  } else {
    return new Pixel(Number(length))
  }
}

export interface Length {
  asPixel(): Pixel
}

export class Pixel implements Length {
  static unit = "px"
  static zero = new Pixel(0)
  static parse(attr: string): Pixel {
    return new Pixel(Number(attr.substr(0, attr.length - this.unit.length)))
  }

  constructor(
    readonly px: number
  ) {
  }

  asPixel(): Pixel {
    return this;
  }
}

export class Gap {
  static of(attr: string): Gap {
    const vs = attr.split(' ').map(toLength)
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

  public static zero = Gap.gap1(Pixel.zero)

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

