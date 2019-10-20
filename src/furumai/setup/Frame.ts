import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Env} from '@/furumai/setup/Env'
import {Attributes} from '@/furumai/utils'

export class Frame {
  constructor(
    private blocks: BuildingBlock[],
    private attrs: Attributes,
    private childAttrs: { [key: string]: Attributes },
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
