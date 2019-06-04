import {Attributes} from '@/furumai/Attribute';
import {BuildingBlock} from '@/furumai/setup/BuildingBlock';
import {Env} from '@/furumai/setup/Env';
import {GridCell} from '@/furumai/grid/GridCell';
import {Box} from '@/layout/engine/Box';
import {visible} from '@/furumai/grid/utils';

export class Node implements BuildingBlock {
  constructor(
    public readonly id: string,
    private attrs: Attributes = Attributes.empty,
  ) {}

  setup(env: Env): GridCell | undefined {
    const existing = env.container.find(this.id)
    if (existing) {
      visible(existing)
      existing.updateAttributes(this.attrs)
      return undefined
    } else {
      const baseAttrs = env.lookupAttributes('node')
      const merged = baseAttrs.merge(this.attrs)
      return GridCell.of(this.id, Box.of(merged.box), merged.attrs)
    }
  }

  find(id: string): BuildingBlock | undefined {
    return undefined;
  }
}
