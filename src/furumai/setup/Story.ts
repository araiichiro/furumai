import {Container} from '@/furumai//grid/Container'
import {Frame} from '@/furumai//setup/Frame'
import {Env} from '@/furumai/setup/Env'
import {Attributes, Attrs, StatementList, toDict} from '@/furumai/utils'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'

export class Story {
  constructor(private ss: StatementList[]) {
  }

  private get mode() {
    const attrs = Attributes.of(this.ss[0].attributes)
    const {config, ...rest} = attrs.attrs
    const conf: Attrs = {}
    const cf = config || ''
    cf.split(',').forEach((line) => {
      const kv = line.split('=')
      conf[kv[0]] = kv[1]
    })
    return {
      mode: '_',
      align: '_',
      ...conf,
      ...rest,
    }
  }

  public play(boot: Frame[]): IterableIterator<Container> {
    const {mode, align} = this.mode // FIXME control flow
    const [init, ...updates] = this.ss.map((s) => Frame.of(s.blocks, s.attributes, s.childAttributes))
    boot.push(init)
    return new ContainerIterableIterator(
      new EnvIterableIterator(boot, updates.values(), mode === 'diff'),
      align === 'center',
    )
  }

  public baseFrames(): Frame[] {
     return this.ss.map((s) => Frame.of(s.blocks, s.attributes, s.childAttributes))
  }
}

class EnvIterableIterator implements IterableIterator<Env> {
  private last: Env | undefined = undefined

  constructor(private boot: Frame[], private frames: IterableIterator<Frame>, private diffMode: boolean) {}

  public next(): IteratorResult<Env> {
    if (this.last) {
      const next = this.frames.next()
      if (next.done) {
        return next
      } else {
        const nextFrame = next.value
        const baseEnv = this.diffMode ? this.last : this.initEnv()
        this.last = nextFrame.setup(baseEnv)
        return {
          done: false,
          value: this.last,
        }
      }
    } else {
      this.last = this.initEnv()
      return {
        done: false,
        value: this.last,
      }
    }
  }

  public [Symbol.iterator](): IterableIterator<Env> {
    return this
  }

  private initEnv(): Env {
    const bootEnv = Env.of(new Container('_init', {}, new Portrait([], Box.zero)), {})
    return this.boot.reduce((env, frame) => {
      return frame.setup(env)
    }, bootEnv)
  }
}

class ContainerIterableIterator implements IterableIterator<Container> {
  constructor(private it: EnvIterableIterator, private centerAlign: boolean) {}

  public next(): IteratorResult<Container> {
    const next = this.it.next()
    if (next.done) {
      return next
    } else {
      const env = next.value
      const fit = env.container.map((a) => a.fit({x: 0, y: 0}))
      const ret = this.centerAlign ? fit.map((a) => a.fit({x: 0, y: 0}, {width: fit.get.box.width})) : fit
      return {
        done: next.done,
        value: ret,
      }
    }
  }

  public [Symbol.iterator](): IterableIterator<Container> {
    return this
  }
}
