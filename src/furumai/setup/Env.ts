import {Attributes} from '@/furumai/Attribute'
import {Container} from '@/furumai/grid/Container'
import {GridArea} from '@/furumai/grid/GridArea'
import {Elem} from '@/layout/engine/Elem'
import {Overlay} from '@/furumai/grid/Overlay'

export class Env {
  public static of(container: Container, attrs: { [key: string]: Attributes }): Env {
    return new Env(container, attrs)
  }

  private constructor(
    readonly container: Container,
    private attrs: { [key: string]: Attributes },
    private baseEnv?: Env,
  ) {
  }

  public newEnv(container: Container, attrs: { [key: string]: Attributes }): Env {
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
