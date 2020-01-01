import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {GridCell} from '@/grid/GridCell'
import {visibleArea} from '@/grid/visibility'
import {Attributes} from '@/utils/types'

export class Node implements BuildingBlock {
  constructor(
    readonly id: string,
    private attrs: Attributes = Attributes.empty,
  ) {
  }

  public create(env: Env): GridCell {
    const baseAttrs = env.lookupAttributes('node')
    const merged = baseAttrs.merge(this.attrs)
    return GridCell.of(this.id, merged)
  }

  public update(base: GridCell, env: Env): GridCell {
    return visibleArea(base).updateAttributes(this.attrs)
  }
}
