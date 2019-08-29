import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Edge} from '@/furumai/setup/Edge'
import {Env} from '@/furumai/setup/Env'
import {hide} from '@/furumai/grid/utils'

export class HideEdge implements BuildingBlock {
  constructor(private tailId: string, private headId: string) {
  }

  public setup(env: Env): undefined {
    // TODO immutable
    const overlay = env.findOverlay(Edge.idOf(this.tailId, this.headId))
    if (overlay) {
      hide(overlay)
      return undefined
    } else {
      throw new Error(`edge not found: ${this.tailId} -> ${this.headId}`)
    }
  }

  public find(id: string): BuildingBlock | undefined {
    return undefined
  }
}
