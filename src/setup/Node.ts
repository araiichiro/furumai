import {BuildingBlock} from '@/setup/BuildingBlock'
import {Env} from '@/setup/Env'
import {GridCell} from '@/grid/GridCell'
import {visibleArea} from '@/grid/utils'
import {Attributes} from '@/grid/Attributes'

export class Node implements BuildingBlock {
  constructor(
    public readonly id: string,
    private attrs: Attributes = Attributes.empty,
  ) {
  }

  public setup(env: Env): GridCell | undefined {
    const existing = env.findGridArea(this.id)
    if (existing) {
      visibleArea(existing)
      existing.updateAttributes(this.attrs)
      return undefined
    } else {
      const baseAttrs = env.lookupAttributes('node')
      const merged = baseAttrs.merge(this.attrs)
      return GridCell.of(this.id, merged)
    }
  }
}
