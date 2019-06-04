import {BuildingBlock} from '@/furumai/setup/BuildingBlock';
import {Edge} from '@/furumai/setup/Edge';
import {Env} from '@/furumai/setup/Env';
import {hide} from '@/furumai/grid/utils';
import {Overlay} from '@/furumai/grid/Overlay';

export class HideEdge implements BuildingBlock {
  constructor(private tailId: string, private headId: string) {}

  setup(env: Env): undefined {
    // TODO immutable
    hide(env.container.find(Edge.idOf(this.tailId, this.headId)) as Overlay)
    return undefined
  }

  find(id: string): BuildingBlock | undefined {
    return undefined;
  }
}
