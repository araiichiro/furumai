import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {hide} from '@/furumai/grid/utils'

export class HideBlock implements BuildingBlock {
  constructor(private id: string) {
  }

  public setup(env: Env): undefined {
    hide(env.container.find(this.id) as GridArea<Elem>)
    return undefined
  }

  public find(id: string): BuildingBlock | undefined {
    return id === this.id ? this : undefined
  }
}
