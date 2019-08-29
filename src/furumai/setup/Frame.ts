import {BuildingBlock} from '@/furumai/setup/BuildingBlock'
import {Attribute, Attributes, Attrs, ElementAttribute, toDict} from '@/furumai/Attribute'
import {Env} from '@/furumai/setup/Env'
import {Container} from '@/furumai/grid/Container'
import Gap from '@/layout/engine/Gap'

export class Frame {
  public static of(
    blocks: BuildingBlock[],
    attributes: Attribute[],
    childAttributes: ElementAttribute[],
  ): Frame {
    const attrs = Attributes.of(attributes)
    const box = {
      margin: Gap.zero,
      padding: Gap.zero,
      ...attrs.box,
    }
    const {config, ...rest} = attrs.attrs
    const conf: Attrs = {}
    const cf = config || ''
    cf.split(',').forEach((line) => {
      const kv = line.split('=')
      conf[kv[0]] = kv[1]
    })
    const {mode, align} = {
      mode: '_',
      align: '_',
      ...conf,
    }
    return new Frame(
      blocks,
      mode,
      align,
      new Attributes(box, rest),
      toDict(childAttributes),
    )
  }

  private constructor(
    private blocks: BuildingBlock[],
    private mode: string,
    private align: string,
    private attrs: Attributes,
    private childAttrs: { [key: string]: Attributes },
  ) {
  }

  public setup(env: Env): Container {
    const base = env.container
      .updateAttributes(this.attrs)
    return this.blocks.reduce((container, block) => {
      const child = block.setup(env.newEnv(container, this.childAttrs))
      if (child) {
        return container.append(child)
      } else {
        return container
      }
    }, base)
  }
}
