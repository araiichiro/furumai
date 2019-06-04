import Gap from '@/layout/engine/Gap';

export interface Point {
  x: number
  y: number
}

export interface Size {
  width: number
  height: number
}

export interface Area extends Point, Size {}

export interface Gaps {
  margin: Gap
  padding: Gap
}

export class Box implements Point, Size, Gaps {
  public static zero = Box.of({})

  public static of(box: Partial<Box>): Box {
    const {x, y, width, height, margin, padding} = {
      x: 0, y: 0, width: 0, height: 0, margin: Gap.zero, padding: Gap.zero,
      ...box,
    }
    return new Box(x, y, width, height, margin, padding)
  }

  constructor(
    readonly x: number,
    readonly y: number,
    readonly width: number,
    readonly height: number,
    readonly margin: Gap,
    readonly padding: Gap,
  ) {

  }

  public move(dx: number, dy: number): Box {
    throw new Error('not impl')
  }

  inflate(contentGrossArea: Area): Box {
    const {x, y, width, height} = contentGrossArea
    const {left, right, top, bottom} = this.padding
    return new Box(
      x - left,
      y - top,
      left + width + right,
      top + height + bottom,
      this.margin,
      this.padding,
    )
  }

  get grossArea(): Area {
    const {x, y, width, height} = this
    const {left, right, top, bottom} = this.margin
    return {
      x: x - left,
      y: y - top,
      width: left + width + right,
      height: top + height + bottom,
    }
  }

  get area(): Area {
    return this
  }

  get contentArea(): Area {
    const {x, y, width, height, padding} = this
    return {
      x: x + padding.left,
      y: y + padding.top,
      width: width - (padding.left + padding.right),
      height: height - (padding.top + padding.bottom),
    }
  }

  calcGrossArea(point: Point, size: Partial<Size>): Point & Partial<Size> {
    const {x, y} = point
    const {width, height} = size
    const {left, right, top, bottom} = this.margin
    const w = width ? {width: width + (left + right)} : {}
    const h = height ? {height: height + (top + bottom)} : {}
    return {
      x: x - left,
      y: y - top,
      ...w,
      ...h,
    }
  }

  calcArea(point: Point, grossSize: Partial<Size> = {}): Point & Partial<Size> {
    const {x, y} = point
    const {width, height} = grossSize
    const {left, right, top, bottom} = this.margin
    const w = width ? {width: width - (left + right)} : {}
    const h = height ? {height: height - (top + bottom)} : {}
    return {
      x: x + left,
      y: y + top,
      ...w,
      ...h,
    }
  }

  calcContentArea(point: Point, grossSize: Partial<Size> = {}): Point & Partial<Size> {
    const {x, y, width, height} = this.calcArea(point, grossSize)
    const {left, right, top, bottom}  = this.padding
    const w = width ? {width: width - (left + right)} : {}
    const h = height ? {height: height - (top + bottom)} : {}
    return {
      x: x + left,
      y: y + top,
      ...w,
      ...h,
    }
  }

  get cx() {
    const r = this
    return r.x + (r.width / 2)
  }

  get cy() {
    const r = this
    return r.y + (r.height / 2)
  }

  update(box: Partial<Box>): Box {
    return Box.of({...this, ...box})
  }
}
