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
    'center'
    | 'stretch'
    | 'flex-start'
    // | 'flex-end'
  'justify-content':
    'start'
    | 'space-around'
    // | "space-between"
    // | "center"
}

export class Engine {
  constructor(readonly config: Config) {
  }

  public fitRoot(root: Box) {
    const size = root.fit(this)
    root.refit(this, size.totalSize)
  }

  public fit(children: Box[], style: LayoutStyle): Boundary {
    if (children.length === 0) {
      return Boundary.zero
    }
    const direction = this.direction(style)
    if (direction === 'row') {
      return children.reduce((ret, child) => {
        const area = child.fit(this)
        const {width, height} = area.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
    } else if (direction === 'column') {
      return children.reduce((ret, child) => {
        const area = child.fit(this)
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
    if (style['justify-content'] === 'space-around') {
      const direction = this.direction(style)
      if (direction === 'row') {
        const content = children.reduce((ret, child) => {
          const {width, height} = child.totalSize
          return new Boundary(
            ret.width.add(width),
            Length.max(ret.height, height),
          )
        }, Boundary.zero)
        const gap = boundary.diff(content).div(children.length)
        children.reduce((left, child) => {
          const point = new Point(left, Length.zero)
          const size = new Boundary(
            child.totalSize.add(gap).width,
            boundary.height,
          )
          const fitArea = child.refit(this, size)
          const territory = this.move(fitArea, point, size, style)
          child.populate(territory)

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
        const gap = boundary.diff(content).div(children.length)
        children.reduce((top, child) => {
          const point = new Point(Length.zero, top)
          const size = new Boundary(
            boundary.width,
            child.totalSize.add(gap).height,
          )
          const fitArea = child.refit(this, size)
          const territory = this.move(fitArea, point, size, style)
          child.populate(territory)

          return top.add(size.height)
        }, Length.zero)
      } else {
        throw new Error('not implemented')
      }
    } else if (style['justify-content'] === 'start') {
      const direction = this.direction(style)
      if (direction === 'row') {
        children.reduce((left, child) => {
          const point = new Point(left, Length.zero)
          const size = new Boundary(
            child.totalSize.width,
            boundary.height,
          )
          const fitArea = child.refit(this, size)
          const territory = this.move(fitArea, point, size, style)
          child.populate(territory)

          return left.add(size.width)
        }, Length.zero)
      } else if (direction === 'column') {
        children.reduce((top, child) => {
          const point = new Point(Length.zero, top)
          const size = new Boundary(
            boundary.width,
            child.totalSize.height,
          )
          const fitArea = child.refit(this, size)
          const territory = this.move(fitArea, point, size, style)
          child.populate(territory)

          return top.add(size.height)
        }, Length.zero)
      } else {
        throw new Error('not implemented')
      }
    } else if (style['justify-content'] !== 'space-around') {
      throw new Error('not implemented')
    }
  }

  move(fitArea: Area, point: Point, boundary: Boundary, style: LayoutStyle): Territory {
    let {top, left} = fitArea.margin
    let {padding, margin} = fitArea
    const gap = boundary.diff(fitArea.base)

    const direction = this.direction(style)
    if (direction === 'column') {
      switch (style["align-items"]) {
        case 'flex-start':
          return new Territory(
            new Point(point.x.add(left), point.y.add(gap.top)),
            fitArea,
          )
        case 'stretch':
          return new Territory(
            new Point(point.x.add(left), point.y.add(top)),
            Area.of(boundary.sub(gap), padding, margin)
          )
        case 'center':
          return new Territory(
            new Point(point.x.add(gap.left), point.y.add(gap.top)),
            fitArea
          )
        default:
          throw new Error('not implemented')
      }
    } else if (direction === 'row') {
      switch (style["align-items"]) {
        case 'flex-start':
          return new Territory(
            new Point(point.x.add(gap.left), point.y.add(top)),
            fitArea
          )
        case 'stretch':
          return new Territory(
            new Point(point.x.add(left), point.y.add(top)),
            Area.of(boundary.sub(gap), padding, margin)
          )
        case 'center':
          return new Territory(
            new Point(point.x.add(left), point.y.add(gap.top)),
            fitArea
          )
        default:
          throw new Error('not implemented')
      }
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
  private base: Point = Point.zero // relative position

  private constructor(
    readonly id: string,
    readonly children: Box[],
    private readonly style: LayoutStyle,
    private readonly requested: Partial<Area>,
  ) {
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

  public fit(engine: Engine): Area {
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

  public refit(engine: Engine, boundary: Boundary): Area {
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
    return this.fitArea
  }

  populate(territory: Territory) {
    this.base = territory.start
    this.fitArea = territory.area
  }

  public flatten(parent: Point): TerritoryMap {
    const point = parent.add(this.base)
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
