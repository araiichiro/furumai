import {Container} from '@/furumai//grid/Container'
import {Frame} from '@/furumai//setup/Frame'
import {Env} from '@/furumai/setup/Env'
import {Config} from '@/furumai/setup/Config'

export class Story {
  constructor(public readonly frames: Frame[], private config: Config) {}

  public play(boot: Frame[]): IterableIterator<Container> {
    const {mode, align} = this.config
    const [init, ...updates] = this.frames
    boot.push(init)
    return new ContainerIterableIterator(
      new EnvIterableIterator(boot, updates.values(), this.config),
      align === 'center',
    )
  }
}

class EnvIterableIterator implements IterableIterator<Env> {
  private last: Env | undefined = undefined

  constructor(private boot: Frame[], private frames: IterableIterator<Frame>, private config: Config) {}

  public next(): IteratorResult<Env> {
    if (this.last) {
      const next = this.frames.next()
      if (next.done) {
        return next
      } else {
        const nextFrame = next.value
        const baseEnv = this.config.mode === 'diff' ? this.last : this.initEnv()
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
    const bootEnv = Env.init(this.config.direction === 'left to right' ? 'landscape' : 'portrait')
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
