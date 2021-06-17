import {Area, Gap, Point, Size} from "@/layout/types";
import {Style} from "@/layout/Style";
import {Engine} from "@/layout/Engine";

export class Box<T> {
  constructor(
    readonly id: string,
    private base: Point, // relative position
    readonly requested: Partial<Area>,
    readonly children: Box<T>[],
    readonly style: Style,
    readonly content: T,
    private fitArea: Area | undefined = undefined
  ) {
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
    const {base, padding, margin} = {
      padding: Gap.zero,
      margin: Gap.zero,
      ...this.requested,
    }
    this.fitArea = new Area(
      base || content.add(padding),
      padding,
      margin,
    )
    return this.fitArea
  }

  refit(engine: Engine, point: Point, size: Size) {
    const {base, padding, margin} = {
      padding: Gap.zero,
      margin: Gap.zero,
      ...this.requested,
    }
    this.fitArea = new Area(
      base || size.sub(margin),
      padding,
      margin,
    )
    engine.refit(this.children, this.style, this.fitArea.contentSize)

    const {width, height} = size.diff(this.fitArea.base)
    this.base = {
      x: point.x.add(width.div(2)),
      y: point.y.add(height.div(2)),
    }
  }
}
