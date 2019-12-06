import {Container} from '@/grid/Container'
import {GridArea} from '@/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Overlay} from '@/grid/Overlay'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'
import {Attributes} from '@/grid/Attributes'
import {Dict} from '@/utils'
import {Decorations} from '@/grid/Decorations'
import {Landscape} from '@/layout/engine/Landscape'

export class Env {
  public static init(container: 'portrait' | 'landscape'): Env {
    const deco = Decorations.of({fill: 'none', stroke: 'none'})
    const elem = container === 'landscape' ? new Landscape([], Box.zero) : new Portrait([], Box.zero)
    return new Env(new Container('_init', deco, elem), {})
  }

  private constructor(
    readonly container: Container,
    private attrs: Dict<Attributes>,
    private baseEnv?: Env,
  ) {
  }

  public newEnv(container: Container, attrs: Dict<Attributes>): Env {
    return new Env(container, attrs, this)
  }

  public update(container: Container): Env {
    return new Env(container, this.attrs, this.baseEnv)
  }

  public lookupAttributes(className: string): Attributes {
    const p = this.baseEnv ? this.baseEnv.lookupAttributes(className) : Attributes.empty
    return this.attrs[className] ? p.merge(this.attrs[className]) : p
  }

  public findGridArea<A extends Elem>(id: string): GridArea<A> | undefined {
    return this.container.find(id) as GridArea<A> | undefined
  }

  public findOverlay(id: string): Overlay | undefined {
    return this.container.find(id) as Overlay | undefined
  }
}
