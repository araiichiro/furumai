export default class Gap {
  public static zero = Gap.gap1(0)

  public static gap1(gap: number): Gap {
    return new Gap(gap, gap, gap, gap)
  }

  public static gap2(tb: number, rl: number): Gap {
    return new Gap(tb, rl, tb, rl)
  }

  public static gap4(top: number, right: number, bottom: number, left: number): Gap {
    return new Gap(top, right, bottom, left)
  }

  constructor(
    readonly top: number,
    readonly right: number,
    readonly bottom: number,
    readonly left: number,
  ) {
  }

  public toString(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}
