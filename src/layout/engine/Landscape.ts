import {Wrap} from '@/layout/engine/Wrap'
import {Elem} from '@/layout/engine/Elem'
import Gap from '@/layout/engine/Gap'
import {Box, Point, Size} from '@/layout/engine/Box'

export class Landscape implements Elem {
  constructor(
    readonly children: Array<Wrap<Elem>>,
    readonly box: Box,
  ) {
  }

  public fit(point: Point, grossSize: Partial<Size> = {}): Landscape {
    const old = this.box.contentArea
    const childrenArea = this.box.calcContentArea(point, grossSize)
    const {x, y, width, height} = childrenArea
    let xx = x

    const gap = width ? Gap.gap2(0, (width - old.width) / (2 * this.children.length)) : Gap.zero
    const w = width ? {width: old.width / this.children.length} : {}
    const h = height ? {height} : {}
    const childNodes: Array<Wrap<Elem>> = []
    for (const c of this.children) {
      xx += gap.left
      const moved = c.map((elem) => elem.fit({x: xx, y}, {...w, ...h}))
      childNodes.push(moved)
      xx += moved.get.box.grossArea.width
      xx += gap.right
    }

    const maxHeight = Math.max(...childNodes.map((c) => c.get.box.grossArea.height))
    const childContentArea = {x, y, width: xx - x, height: maxHeight}
    return new Landscape(childNodes, this.box.inflate(childContentArea))
  }

  public withBox(box: Partial<Box>): Landscape {
    return new Landscape(this.children, this.box.update(box))
  }

  public append(child: Wrap<Elem>): Landscape {
    return new Landscape([...this.children, child], this.box)
  }
}
