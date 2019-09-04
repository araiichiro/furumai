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

  public play(base: Env): IterableIterator<Container> {
    const {mode, align} = this.mode // FIXME control flow
    const frames = this.ss.map((s) => Frame.of(s.blocks, s.attributes, s.childAttributes))
    return new ContainerIterableIterator(
      new EnvIterableIterator(frames.values(), base, mode === 'diff'),
      align === 'center',
    )
  }

  public baseEnv(): Env {
    const base: Container = new Container(
      '_init', Attributes.of(this.ss[0].attributes).attrs, new Portrait([], Box.zero))
    return Env.of(base, toDict(this.ss[0].childAttributes))
  }
}

class EnvIterableIterator implements IterableIterator<Env> {
  private first = true // FIXME control flow

  constructor(private frames: IterableIterator<Frame>, private env: Env, private diffMode: boolean) {}

  public next(): IteratorResult<Env> {
    const next = this.frames.next()
    if (next.done) {
      return next
    } else {
      const frame = next.value
      const newEnv = frame.setup(this.env)
      if (this.diffMode || this.first) {
        this.first = false
        this.env = newEnv
      }
      return {
        done: next.done,
        value: newEnv,
      }
    }
  }

  public [Symbol.iterator](): IterableIterator<Env> {
    return this
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
