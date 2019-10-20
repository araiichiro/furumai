import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {Container} from '@/furumai/grid/Container'
import {Landscape} from '@/layout/engine/Landscape'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'
import {Attributes} from '@/furumai/utils'

export class Compound implements BuildingBlock {
  constructor(
    public readonly id: string,
    private compoundType: CompoundType,
    private blocks: BuildingBlock[] = [],
    private attrs: Attributes = Attributes.empty,
    private childAttrs?: { [key: string]: Attributes },
  ) {
  }

  public setup(env: Env): Container {
    const merged = env.lookupAttributes(this.compoundType).merge(this.attrs)
    const attrs = merged.attrs
    const box = merged.box
    const fitterClass = this.compoundType === 'zone' ? Portrait : Landscape
    const fitter = new fitterClass([], Box.of(box))
    const initContainer = new Container(
      this.id,
      attrs,
      fitter,
    )
    return this.blocks.reduce((container, block) => {
      const ret = block.setup(env.newEnv(container, this.childAttrs || {}))
      if (ret) {
        return container.append(ret)
      } else {
        return container
      }
    }, initContainer)
  }
}

export type CompoundType = 'group' | 'zone'
