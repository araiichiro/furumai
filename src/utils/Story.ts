import {Config} from '@/utils/Config'
import {Container} from '@/grid/Container'
import {Env} from '@/bind/Env'
import {BuildingBlock} from '@/bind/BuildingBlock'
import {Attributes, Decorations, Dict} from '@/utils/types'
import {Landscape} from '@/layout/engine/Landscape'
import {Box} from '@/layout/engine/Box'
import {Portrait} from '@/layout/engine/Portrait'

export class Story {
  constructor(public readonly frames: Frame[], private config: Config) {}

  public moments(boot: Frame[]): IterableIterator<Container> {
    const [init, ...updates] = this.frames
    boot.push(init)
    return new ContainerIterableIterator(
      new ContextIterableIterator(boot, updates.values(), this.config),
      this.config,
    )
  }
}

class ContextIterableIterator implements IterableIterator<Context> {
  private last: Context | undefined = undefined

  constructor(private boot: Frame[], private frames: IterableIterator<Frame>, private config: Config) {}

  public next(): IteratorResult<Context> {
    if (this.last) {
      const next = this.frames.next()
      if (next.done) {
        return next
      } else {
        const nextFrame = next.value
        const baseContext = this.config.mode === 'diff' ? this.last : this.initContext()
        this.last = nextFrame.setup(baseContext)
        return {
          done: false,
          value: this.last,
        }
      }
    } else {
      this.last = this.initContext()
      return {
        done: false,
        value: this.last,
      }
    }
  }

  public [Symbol.iterator](): IterableIterator<Context> {
    return this
  }

  private initContext(): Context {
    const elem = this.config.direction === 'left to right' ? new Landscape([], Box.zero) : new Portrait([], Box.zero)
    const deco = Decorations.of({fill: 'none', stroke: 'none'})
    const bootContext = {
      env: Env.init,
      container: new Container('_init', deco, elem),
    }
    return this.boot.reduce((context, frame) => {
      return frame.setup(context)
    }, bootContext)
  }
}

class ContainerIterableIterator implements IterableIterator<Container> {
  constructor(private it: ContextIterableIterator, private config: Config) {}

  public next(): IteratorResult<Container> {
    const next = this.it.next()
    if (next.done) {
      return next
    } else {
      const context = next.value
      const fit = context.container.map((a) => a.fit({x: 0, y: 0}))
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

  public setup(base: Context): Context {
    let container = base.container.updateAttributes(this.attrs)
    const env = base.env.newEnv(this.childAttrs)
    for (const block of this.blocks) {
      const existing = container.find(block.id)
      if (existing) {
        block.update(existing, env)
      } else {
        const child = block.create(env)
        container = container.append(child)
      }
    }
    return {
      env,
      container,
    }
  }
}

interface Context {
  env: Env
  container: Container
}
