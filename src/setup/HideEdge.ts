import {BuildingBlock} from '@/setup/BuildingBlock'
import {Edge} from '@/setup/Edge'
import {Env} from '@/setup/Env'
import {hideOverlay} from '@/grid/utils'

export class HideEdge implements BuildingBlock {
  constructor(private tailId: string, private headId: string) {
  }

  public setup(env: Env): undefined {
    // TODO immutable
    const overlay = env.findOverlay(Edge.idOf(this.tailId, this.headId))
    if (overlay) {
      hideOverlay(overlay)
      return undefined
    } else {
      throw new Error(`edge not found: ${this.tailId} -> ${this.headId}`)
    }
  }
}
