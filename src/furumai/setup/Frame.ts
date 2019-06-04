import {BuildingBlock} from '@/furumai/setup/BuildingBlock';
import {Attribute, Attributes, Attrs, ElementAttribute, toDict} from '@/furumai/Attribute';
import {Env} from '@/furumai/setup/Env';
import {Container} from '@/furumai/grid/Container';
import Gap from '@/layout/engine/Gap';

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

  constructor(
    private blocks: BuildingBlock[],
    public readonly mode: string,
    public readonly align: string,
    public readonly attrs: Attributes,
    private childAttrs: {[key: string]: Attributes},
  ) {}

  setup(baseContainer: Container): Container {
    const base = baseContainer
      .updateAttributes(this.attrs)
    const env = Env.defaultEnv(base)
    return this.blocks.reduce((container, block) => {
      const child = block.setup(env.newEnv(container, this.childAttrs))
      if (child) {
        return container.append(child)
      } else {
        return container
      }
    }, base)
  }

  fit() {
    if (this.align === 'center') {

    }

  }
}

export type CompoundType = 'group' | 'zone'
