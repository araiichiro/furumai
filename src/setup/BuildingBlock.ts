import {Env} from '@/setup/Env'
import {GridArea} from '@/grid/GridArea'
import {Overlay} from '@/grid/Overlay'
import {Elem} from '@/layout/engine/Elem'

export interface BuildingBlock {
  setup(env: Env): GridArea<Elem> | Overlay | undefined
}
