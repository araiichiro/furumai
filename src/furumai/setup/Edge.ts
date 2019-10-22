import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {EdgeOverlay} from '@/furumai/grid/EdgeOverlay'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {visibleArea} from '@/furumai/grid/utils'
import {Attrs} from '@/furumai/utils'
import {Decorations} from '@/furumai/grid/Decorations'

export class Edge implements BuildingBlock {
  public static of(
    tailId: string,
    op: string,
    headId: string,
    attrs: Attrs = {},
  ) {
    return new Edge(this.idOf(tailId, headId), tailId, op, headId, attrs)
  }

  public static idOf(tailId: string, headId: string): string {
    return `_edge_${tailId}_to_${headId}`
  }

  private constructor(
    private id: string,
    private tailId: string,
    private op: string,
    private headId: string,
    private attrs: Attrs = {},
  ) {
  }

  public setup(env: Env): EdgeOverlay {
    const tail = env.findGridArea(this.tailId)
    const head = env.findGridArea(this.headId)
    visibleArea(tail as GridArea<Elem>)
    visibleArea(head as GridArea<Elem>)

    const existing = env.findOverlay(this.id)
    if (existing) {
      return existing.updateAttributes(Decorations.of(this.attrs)) as EdgeOverlay
    } else {
      const baseAttrs = env.lookupAttributes('edge')
      const deco = baseAttrs.attrs.update(Decorations.of(this.attrs))
      return new EdgeOverlay(this.id, this.tailId, this.op, this.headId, deco)
    }
  }
}
