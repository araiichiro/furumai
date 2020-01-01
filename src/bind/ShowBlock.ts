import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {showArea} from '@/grid/visibility'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'

export class ShowBlock implements BuildingBlock {
  constructor(readonly id: string) {
  }

  public create(env: Env): GridArea<Elem> {
    throw new Error(`not found: ${this.id}`)
  }

  public update(base: GridArea<Elem>, env: Env): GridArea<Elem> {
    return showArea(base)
  }
}
