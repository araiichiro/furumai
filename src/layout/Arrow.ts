import {Vector2d} from '@/layout/Vector2d'
import {Area, Gap, Length, Location, Point} from "@/layout/types";

export class Arrow {
  public static singleton = new Arrow()

  public static fit(tail: Location, head: Location, dx: number, dy: number): Location {
    function cut(v: Vector2d, box: Location): Vector2d {
      const candidates: Vector2d[] = []
      if (v.dx < 0) {
        const ratio = -(v.x1 - box.cx.pixel + box.width.pixel / 2) / v.dx
        candidates.push(v.multiple(ratio))
      } else if (v.dx > 0) {
        const ratio = (box.cx.pixel - v.x1 + box.width.pixel / 2) / v.dx
        candidates.push(v.multiple(ratio))
      }
      if (v.dy < 0) {
        const ratio = -(v.y1 - box.cy.pixel + box.height.pixel / 2) / v.dy
        candidates.push(v.multiple(ratio))
      } else if (v.dy > 0) {
        const ratio = (box.cy.pixel - v.y1 + box.height.pixel / 2) / v.dy
        candidates.push(v.multiple(ratio))
      }

      if (candidates.length === 1) {
        return candidates[0]
      } else if (candidates.length === 2) {
        const a = candidates[0]
        const b = candidates[1]
        if (a.length < b.length) {
          return a
        } else {
          return b
        }
      } else {
        throw new Error('not implemented: ' + JSON.stringify(candidates) + ', ' + JSON.stringify(v))
      }
    }

    const x1 = tail.cx.pixel + dx
    const y1 = tail.cy.pixel + dy
    const x2 = head.cx.pixel + dx
    const y2 = head.cy.pixel + dy
    const vec = new Vector2d(x1, y1, x2, y2)
    const tailCut = cut(vec, tail)
    const headCut = cut(vec.reverse(), head)

    const x = x1 + tailCut.dx
    const y = y1 + tailCut.dy
    const width = (x2 + headCut.dx) - x
    const height = (y2 + headCut.dy) - y
    // FIXME margin / padding
    const start = new Point(
      Length.pixel(x),
      Length.pixel(y),
    )
    const area = new Area(
      Length.pixel(width),
      Length.pixel(height),
      Gap.zero,
      Gap.zero,
    )
    return new Location("-", start, area)
  }
}
