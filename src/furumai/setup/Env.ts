import {Container} from '@/furumai/grid/Container'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Overlay} from '@/furumai/grid/Overlay'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'
import {ElementAttributes} from '@/furumai/setup/ElementAttributes'
import {Attributes} from '@/furumai/grid/Attributes'

export class Env {
  public static init(): Env {
    return new Env(new Container('_init', {}, new Portrait([], Box.zero)), {})
  }

  private constructor(
    readonly container: Container,
    private attrs: ElementAttributes,
    private baseEnv?: Env,
  ) {
  }

  public newEnv(container: Container, attrs: ElementAttributes): Env {
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
