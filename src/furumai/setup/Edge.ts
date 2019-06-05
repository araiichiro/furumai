import {Attributes} from '@/furumai/Attribute'
import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {Overlay} from '@/furumai/grid/Overlay'
import {EdgeOverlay} from '@/furumai/grid/EdgeOverlay'
import {Box} from '@/layout/engine/Box'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {visible} from '@/furumai/grid/utils'

export class Edge implements BuildingBlock {
  public static of(
    tailId: string,
    op: string,
    headId: string,
    attrs: Attributes = Attributes.empty,
  ) {
    return new Edge(this.idOf(tailId, headId), tailId, headId, attrs)
  }

  public static idOf(tailId: string, headId: string): string {
    return `_edge_${tailId}_to_${headId}`
  }

  public static find(id: string): BuildingBlock | undefined {
    return undefined
  }

  private constructor(
    private id: string,
    private tailId: string,
    private headId: string,
    private attrs: Attributes = Attributes.empty,
  ) {
  }

  public setup(env: Env): Overlay | undefined {
    const tail = env.container.find(this.tailId)
    const head = env.container.find(this.headId)
    visible(tail as GridArea<Elem>)
    visible(head as GridArea<Elem>)

    const existing = env.container.find(this.id) as Overlay | undefined
    if (existing) {
      return existing.updateAttributes(this.attrs)
    } else {
      const box = Box.of(this.attrs.box)
      return new EdgeOverlay(this.id, this.tailId, this.headId, this.attrs.attrs, box)
    }
  }
}
