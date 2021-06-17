import {Length, Size} from "@/layout/types";
import {Style} from "@/layout/Style";
import {Box} from "@/layout/Box";

export class Engine {
  constructor(readonly config: Config) {
  }

  fit<T>(children: Box<T>[], style: Style): Size {
    if (style["flex-direction"] === "row") {
      return children.reduce((ret, child) => {
        const area = child.fit(this)
        const {width, height} = area.totalSize
        return new Size(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Size.zero)
    } else {
      throw new Error("not implemented")
    }
  }

  refit<T>(children: Box<T>[], style: Style, boundary: Size) {
    if (style["flex-direction"] === "row") {
      const content = children.reduce((ret, child) => {
        const {width, height} = child.totalSize
        return new Size(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Size.zero)
      const gap = boundary.diff(content).width.div(2 * children.length)
      children.reduce((left, child) => {
        const point = {x: left, y: Length.zero}
        const size = new Size(
          gap.add(child.totalSize.width).add(gap),
          boundary.height,
        )
        child.refit(this, point, size)
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
