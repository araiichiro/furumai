import {Container} from '@/grid/Container'
import {Env} from '@/bind/Env'
import {Config} from '@/Config'
import {BuildingBlock} from '@/bind/BuildingBlock'
import {Attributes} from '@/grid/Attributes'
import {Dict} from '@/utils'

export class Story {
  constructor(public readonly frames: Frame[], private config: Config) {}

  public play(boot: Frame[]): IterableIterator<Container> {
    const [init, ...updates] = this.frames
    boot.push(init)
    return new ContainerIterableIterator(
      new EnvIterableIterator(boot, updates.values(), this.config),
      this.config,
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
  constructor(private it: EnvIterableIterator, private config: Config) {}

  public next(): IteratorResult<Container> {
    const next = this.it.next()
    if (next.done) {
      return next
    } else {
      const env = next.value
      const fit = env.container.map((a) => a.fit({x: 0, y: 0}))
      if (this.config.align === 'center') {
        const size = this.config.direction === 'left to right'
          ? {height: fit.get.box.height}
          : {width: fit.get.box.width}
        return {
          done: next.done,
          value: fit.map((a) => a.fit({x: 0, y: 0}, size)),
        }
      } else {
        return {
          done: next.done,
          value: fit,
        }
      }
    }
  }

  public [Symbol.iterator](): IterableIterator<Container> {
    return this
  }
}

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
