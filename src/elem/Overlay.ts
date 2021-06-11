
class EdgeOverlay {
  constructor(
    readonly from: string,
    readonly op: string,
    readonly to: string,
    readonly visibility: string,
    readonly text: string,
    readonly dx: string,
    readonly dy: string,
  ) {
  }

  static of(from: string, op: string, to: string, attrs: {[key: string]: string}): EdgeOverlay {
    const {visibility, text, dx, dy} = attrs
    return new EdgeOverlay(
      from,
      op,
      to,
      visibility,
      text,
      dx,
      dy,
    )
  }
}
