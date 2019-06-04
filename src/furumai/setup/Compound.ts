import {BuildingBlock} from '@/furumai/setup/BuildingBlock';
import {Attributes} from '@/furumai/Attribute';
import {Env} from '@/furumai/setup/Env';
import {Container} from '@/furumai/grid/Container';
import {Landscape} from '@/layout/engine/Landscape';
import {Portrait} from '@/layout/engine/Portrait';
import {Box} from '@/layout/engine/Box';

export class Compound implements BuildingBlock {
  constructor(
    public readonly id: string,
    private compoundType: CompoundType,
    private blocks: BuildingBlock[] = [],
    public attrs: Attributes = Attributes.empty,
    private childAttrs?: {[key: string]: Attributes},
  ) {}

  setup(env: Env): Container {
    const attrs = env.lookupAttributes(this.compoundType).merge(this.attrs)
    const fitterClass = this.compoundType === 'zone' ? Portrait : Landscape
    const fitter = new fitterClass([], Box.of(env.lookupAttributes(this.compoundType).box))
    return this.blocks.reduce((container, block) => {
      const ret = block.setup(env.newEnv(container, this.childAttrs || {}))
      if (ret) {
        return container.append(ret)
      } else {
        return container
      }
    }, new Container(
      this.id,
      attrs.attrs,
      fitter,
    ))
  }
}

export type CompoundType = 'group' | 'zone'
