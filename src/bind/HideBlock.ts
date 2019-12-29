import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {hideArea} from '@/grid/visibility'

export class HideBlock implements BuildingBlock {
  constructor(private id: string) {
  }

  public setup(env: Env): undefined {
    const area = env.findGridArea(this.id)
    if (area) {
      hideArea(area)
      return undefined
    } else {
      throw new Error(`not found: ${this.id}`)
    }
  }

  public find(id: string): BuildingBlock | undefined {
    return id === this.id ? this : undefined
  }
}
