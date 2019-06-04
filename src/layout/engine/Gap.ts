export default class Gap {
  public static zero = Gap.gap1(0)

  public static parse(gapString: string): Gap | undefined {
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
  ) {}

  public toString(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}
