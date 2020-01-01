import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {hideArea} from '@/grid/visibility'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'

export class HideBlock implements BuildingBlock {
  constructor(readonly id: string) {
  }

  public create(env: Env): GridArea<Elem> {
    throw new Error(`not found: ${this.id}`)
  }

  public update(base: GridArea<Elem>, env: Env): GridArea<Elem> {
    return hideArea(base)
  }
}
