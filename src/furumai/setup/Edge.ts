import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {EdgeOverlay} from '@/furumai/grid/EdgeOverlay'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {visible} from '@/furumai/grid/utils'
import {Attributes} from '@/furumai/utils'

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

  private constructor(
    private id: string,
    private tailId: string,
    private headId: string,
    private attrs: Attributes = Attributes.empty,
  ) {
  }

  public setup(env: Env): EdgeOverlay {
    const tail = env.findGridArea(this.tailId)
    const head = env.findGridArea(this.headId)
    visible(tail as GridArea<Elem>)
    visible(head as GridArea<Elem>)

    const existing = env.findOverlay(this.id)
    if (existing) {
      return existing.updateAttributes(this.attrs) as EdgeOverlay
    } else {
      const baseAttrs = env.lookupAttributes('edge')
      const merged = baseAttrs.merge(this.attrs)
      return new EdgeOverlay(this.id, this.tailId, this.headId, merged.attrs)
    }
  }
}
