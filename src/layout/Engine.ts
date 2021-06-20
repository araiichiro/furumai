import {Length, Point, Boundary} from "@/layout/types";
import {Style} from "@/layout/Style";
import {Box} from "@/layout/Box";

export class Engine {
  constructor(readonly config: Config) {
  }

  fit(children: Box[], style: Style): Boundary {
    if (style["flex-direction"] === "row") {
      return children.reduce((ret, child) => {
        const base = new Point(ret.width, Length.zero)
        const area = child.fit(this, base)
        const {width, height} = area.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
    } else {
      throw new Error("not implemented")
    }
  }

  refit(children: Box[], style: Style, boundary: Boundary) {
    if (style["flex-direction"] === "row") {
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
    } else {
      throw new Error("not implemented")
    }
  }
}

export interface Config {
  orientation: Orientation
}

export type Orientation = "portrait" | "landscape"
