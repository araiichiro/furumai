import {Area, Boundary, Gap, Location, Point} from "@/layout/types";
import {defaultStyle, Style} from "@/layout/Style";
import {Engine} from "@/layout/Engine";
import {Assigns} from "@/style/Style";

export class Box {
  static of(
    id: string,
    children: Box[],
    assigns: Assigns,
  ): Box {
    const layoutStyle: Style = {...defaultStyle, ...assigns}
    return new Box(
      id,
      children,
      layoutStyle,
      Area.parse(assigns),
    )
  }

  private constructor(
    readonly id: string,
    readonly children: Box[],
    private readonly style: Style,
    private readonly requested: Partial<Area>,
    private base: Point = Point.zero, // relative position
    private fitArea: Area | undefined = undefined
  ) {
  }
  get point(): Point {
    return this.base
  }

  get area(): Area {
    if (this.fitArea) {
      return this.fitArea
    } else {
      throw new Error("internal error: unexpected call")
    }
  }

  get totalSize(): Boundary {
    return this.area.totalSize
  }

  fit(engine: Engine, base: Point): Area {
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

  refit(engine: Engine, point: Point, boundary: Boundary) {
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

  flatten(parent: Point): Array<Location> {
    const point = parent.add(this.point)
    const children = this.children.reduce((flat, child) => {
      flat.push(...child.flatten(point.addGap(this.area.padding)))
      return flat
    }, [] as Array<Location>)
    return [
      new Location(
        this.id,
        point,
        this.area,
      ),
      ...children,
    ]
  }
}
