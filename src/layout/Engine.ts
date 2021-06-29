import {Area, AreaAttrs, Boundary, Gap, Length, Point, Territory, TerritoryMap} from '@/layout/types'

export interface Config {
  orientation: Orientation
}

export type Orientation = 'portrait' | 'landscape'

export interface LayoutStyle {
  'flex-direction':
    'row'
    | 'column'
  'align-items':
    'flex-start'
  // | "flex-end"
  // | "center"

  'justify-content':
    'start'
    | 'space-around'
  // | "space-between"
  // | "center"
}

export class Engine {
  constructor(readonly config: Config) {
  }

  public fit(children: Box[], style: LayoutStyle): Boundary {
    if (style['justify-content'] !== 'space-around' && style['justify-content'] !== 'start') {
      throw new Error('justify-content not supported: ' + style['justify-content'])
    }
    if (children.length === 0) {
      return Boundary.zero
    }
    const direction = this.direction(style)
    if (direction === 'row') {
      return children.reduce((ret, child) => {
        const base = new Point(ret.width, Length.zero)
        const area = child.fit(this, base)
        const {width, height} = area.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
    } else if (direction === 'column') {
      return children.reduce((ret, child) => {
        const base = new Point(Length.zero, ret.height)
        const area = child.fit(this, base)
        const {width, height} = area.totalSize
        return new Boundary(
          Length.max(ret.width, width),
          ret.height.add(height),
        )
      }, Boundary.zero)
    } else {
      throw new Error('direction not supported: ' + direction)
    }
  }

  public refit(children: Box[], style: LayoutStyle, boundary: Boundary) {
    if (children.length === 0) {
      return
    }
    if (style['justify-content'] === 'start') {
      return
    } else if (style['justify-content'] !== 'space-around') {
      throw new Error('not implemented')
    }
    const direction = this.direction(style)
    if (direction === 'row') {
      const content = children.reduce((ret, child) => {
        const {width, height} = child.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
      const gap = boundary.diff(content).width.div(2 * children.length)
      children.reduce((left, child) => {
        const size = new Boundary(
          gap.add(child.totalSize.width).add(gap),
          boundary.height,
        )
        child.refit(this, new Point(left, Length.zero), size)
        return left.add(size.width)
      }, Length.zero)
    } else if (direction === 'column') {
      const content = children.reduce((ret, child) => {
        const {width, height} = child.totalSize
        return new Boundary(
          Length.max(ret.width, width),
          ret.height.add(height),
        )
      }, Boundary.zero)
      const gap = boundary.diff(content).height.div(2 * children.length)
      children.reduce((top, child) => {
        const size = new Boundary(
          boundary.width,
          gap.add(child.totalSize.height).add(gap),
        )
        child.refit(this, new Point(Length.zero, top), size)
        return top.add(size.height)
      }, Length.zero)
    } else {
      throw new Error('not implemented')
    }
  }

  private direction(style: LayoutStyle): 'row' | 'column' {
    switch (this.config.orientation) {
      case 'portrait':
        return style['flex-direction']
      case 'landscape':
        if (style['flex-direction'] === 'row') {
          return 'column'
        } else if (style['flex-direction'] === 'column') {
          return 'row'
        } else {
          throw new Error('not implemented')
        }
      default:
        throw new Error('not implemented')
    }
  }
}

export class Box {
  public static of(
    id: string,
    children: Box[],
    layoutStyle: Partial<LayoutStyle>,
    area: Partial<AreaAttrs>,
  ): Box {
    return new Box(
      id,
      children,
      layoutStyle as LayoutStyle,
      Area.parse(area),
    )
  }

  private fitArea?: Area

  private constructor(
    readonly id: string,
    readonly children: Box[],
    private readonly style: LayoutStyle,
    private readonly requested: Partial<Area>,
    private base: Point = Point.zero, // relative position
  ) {
  }
  get point(): Point {
    return this.base
  }

  get area(): Area {
    if (this.fitArea) {
      return this.fitArea
    } else {
      throw new Error('internal error: unexpected call')
    }
  }

  get totalSize(): Boundary {
    return this.area.totalSize
  }

  public fit(engine: Engine, base: Point): Area {
    this.base = base
    const content = engine.fit(this.children, this.style)
    const {width, height, padding, margin} = {
      padding: Gap.zero,
      margin: Gap.zero,
      ...this.requested,
    }
    const contentSize = content.add(padding)
    this.fitArea = new Area(
      width || contentSize.width,
      height || contentSize.height,
      padding,
      margin,
    )
    return this.fitArea
  }

  public refit(engine: Engine, point: Point, boundary: Boundary) {
    const {width, height, padding, margin} = {
      padding: Gap.zero,
      margin: Gap.zero,
      ...this.requested,
    }
    const contentSize = boundary.sub(margin)
    this.fitArea = new Area(
      width || contentSize.width,
      height || contentSize.height,
      padding,
      margin,
    )
    engine.refit(this.children, this.style, this.fitArea.contentSize)

    const diff = boundary.diff(this.fitArea.base)
    this.base = new Point(
      point.x.add(diff.width.div(2)),
      point.y.add(diff.height.div(2)),
    )
  }

  public flatten(parent: Point): TerritoryMap {
    const point = parent.add(this.point)
    const children = this.children.reduce((flat, child) => {
      return {
        ...flat,
        ...child.flatten(point.addGap(this.area.padding)),
      }
    }, {} as TerritoryMap)
    return {
      [this.id]: new Territory(
        point,
        this.area,
      ),
      ...children,
    }
  }
}
