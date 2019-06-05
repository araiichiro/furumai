import {Wrap} from '@/layout/engine/Wrap'
import {Elem} from '@/layout/engine/Elem'
import Gap from '@/layout/engine/Gap'
import {Area, Box, Point, Size} from '@/layout/engine/Box'

export class Portrait implements Elem {
  constructor(
    readonly children: Array<Wrap<Elem>>,
    readonly box: Box,
  ) {
  }

  public fit(point: Point, grossSize: Partial<Size> = {}): Portrait {
    const old = this.box.contentArea
    const childrenArea = this.box.calcContentArea(point, grossSize)
    const {x, y, width, height} = childrenArea
    let yy = y

    const gap = height ? Gap.gap2((height - old.height) / (2 * this.children.length), 0) : Gap.zero
    const w = width ? {width} : {}
    const h = height ? {height: old.height / this.children.length} : {}
    const childNodes: Array<Wrap<Elem>> = []
    for (const c of this.children) {
      yy += gap.top
      const moved = c.map((elem) => elem.fit({x, y: yy}, {...w, ...h}))
      childNodes.push(moved)
      yy += moved.get.box.grossArea.height
      yy += gap.bottom
    }

    const maxWidth = Math.max(...childNodes.map((c) => c.get.box.grossArea.width))
    const childContentArea: Area = {x, y, width: maxWidth, height: yy - y}
    return new Portrait(childNodes, this.box.inflate(childContentArea))
  }

  public withBox(box: Partial<Box>): Portrait {
    return new Portrait(this.children, this.box.update(box))
  }

  public append(child: Wrap<Elem>): Portrait {
    return new Portrait([...this.children, child], this.box)
  }
}
