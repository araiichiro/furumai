import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {EdgeOverlay} from '@/grid/EdgeOverlay'
import {Attrs, Decorations} from '@/utils/types'

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
    readonly id: string,
    private tailId: string,
    private op: string,
    private headId: string,
    private attrs: Attrs = {},
  ) {
  }

  public create(env: Env): EdgeOverlay {
    const baseAttrs = env.lookupAttributes('edge')
    const deco = baseAttrs.attrs.update(Decorations.of(this.attrs))
    return new EdgeOverlay(this.id, this.tailId, this.op, this.headId, deco)
  }

  public update(base: EdgeOverlay, env: Env): EdgeOverlay {
    return base.updateAttributes(Decorations.of(this.attrs)) as EdgeOverlay
  }
}
