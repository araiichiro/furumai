import {Area, Gap, Point, Size} from "@/layout/types";
import {Style} from "@/layout/Style";
import {Engine} from "@/layout/Engine";

export class Box<T> {
  constructor(
    readonly content: T,
    readonly id: string,
    readonly children: Box<T>[],
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

  get totalSize(): Size {
    return this.area.totalSize
  }

  fit(engine: Engine): Area {
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

  refit(engine: Engine, point: Point, size: Size) {
    const {width, height, padding, margin} = {
      padding: Gap.zero,
      margin: Gap.zero,
      ...this.requested,
    }
    const contentSize = size.sub(margin)
    this.fitArea = new Area(
      width || contentSize.width,
      height || contentSize.height,
      padding,
      margin,
    )
    engine.refit(this.children, this.style, this.fitArea.contentSize)

    const diff = size.diff(this.fitArea.base)
    this.base = new Point(
      point.x.add(diff.width.div(2)),
      point.y.add(diff.height.div(2)),
    )
  }

  flatten(parent: Point): Array<FlatBox<T>> {
    const point = parent.add(this.point)
    const children = this.children.reduce((flat, child) => {
      flat.push(...child.flatten(point.addGap(this.area.padding)))
      return flat
    }, [] as Array<FlatBox<T>>)
    return [
      {
        point: point,
        area: this.area,
        content: this.content,
      },
      ...children,
    ]
  }
}

export interface FlatBox<T> {
  point: Point
  area: Area
  content: T
}
