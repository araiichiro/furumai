import {BuildingBlock} from '@/bind/BuildingBlock'
import {Edge} from '@/bind/Edge'
import {Env} from '@/bind/Env'
import {EdgeOverlay} from '@/grid/EdgeOverlay'

export class HideEdge implements BuildingBlock {
  public readonly id: string

  constructor(private tailId: string, private headId: string) {
    this.id = Edge.idOf(tailId, headId)
  }

  public create(env: Env): EdgeOverlay {
    throw new Error(`edge not found: ${this.tailId} -> ${this.headId}`)
  }

  public update(base: EdgeOverlay, env: Env): EdgeOverlay {
    return base.disable()
  }
}
