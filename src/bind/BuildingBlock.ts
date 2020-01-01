import {Env} from '@/bind/Env'
import {GridArea} from '@/grid/GridArea'
import {Overlay} from '@/grid/Overlay'
import {Elem} from '@/layout/engine/Elem'

export interface BuildingBlock {
  id: string
  create(env: Env): GridArea<Elem> | Overlay
  update(base: GridArea<Elem> | Overlay, env: Env): GridArea<Elem> | Overlay
}
