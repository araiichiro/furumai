import {BuildingBlock} from '@/setup/BuildingBlock'
import {Env} from '@/setup/Env'
import {Attributes} from '@/grid/Attributes'
import {Dict} from '@/utils'

export class Frame {
  constructor(
    private blocks: BuildingBlock[],
    private attrs: Attributes,
    private childAttrs: Dict<Attributes>,
  ) {
  }

  public setup(baseEnv: Env): Env {
    const base = baseEnv.container.updateAttributes(this.attrs)
    return this.blocks.reduce((env, block) => {
      const child = block.setup(env)
      if (child) {
        return env.update(env.container.append(child))
      } else {
        return env
      }
    }, baseEnv.newEnv(base, this.childAttrs))
  }
}
