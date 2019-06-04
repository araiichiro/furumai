import {Env} from '@/furumai/setup/Env';
import {GridArea} from '@/furumai/grid/GridArea';
import {Overlay} from '@/furumai/grid/Overlay';
import {Elem} from '@/layout/engine/Elem';

export interface BuildingBlock {
  setup(env: Env): GridArea<Elem> | Overlay | undefined
}
