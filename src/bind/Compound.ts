import {BuildingBlock} from '@/bind/BuildingBlock'
import {Env} from '@/bind/Env'
import {Container} from '@/grid/Container'
import {Landscape} from '@/layout/engine/Landscape'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'
import {Attributes, Dict} from '@/utils/types'

export class Compound implements BuildingBlock {
  constructor(
    public readonly id: string,
    private compoundType: CompoundType,
    private blocks: BuildingBlock[] = [],
    private attrs: Attributes = Attributes.empty,
    private childAttrs?: Dict<Attributes>,
  ) {
  }

  public create(env: Env): Container {
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
    const newEnv = env.newEnv(this.childAttrs || {})
    return this.blocks.reduce((container, block) => {
      const ret = block.create(newEnv)
      return container.append(ret)
    }, initContainer)
  }

  public update(base: Container, env: Env): Container {
    throw new Error('Sorry, not implemented yet') // TODO implement
  }
}

export type CompoundType = 'group' | 'zone'
