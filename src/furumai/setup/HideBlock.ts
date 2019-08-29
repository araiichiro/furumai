import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {hide} from '@/furumai/grid/utils'

export class HideBlock implements BuildingBlock {
  constructor(private id: string) {
  }

  public setup(env: Env): undefined {
    const area = env.findGridArea(this.id)
    if (area) {
      hide(area)
      return undefined
    } else {
      throw new Error(`not found: ${this.id}`)
    }
  }

  public find(id: string): BuildingBlock | undefined {
    return id === this.id ? this : undefined
  }
}
