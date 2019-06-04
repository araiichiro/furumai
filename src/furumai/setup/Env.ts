import {Attributes} from '@/furumai/Attribute';
import {Container} from '@/furumai/grid/Container';
import Gap from '@/layout/engine/Gap';

export class Env {
  public static defaultEnv(base: Container) {
    return new Env(base, defaults)
  }

  private constructor(
    readonly container: Container,
    private attrs: {[key: string]: Attributes},
    private baseEnv?: Env,
  ) {}

  newEnv(container: Container, attrs: {[key: string]: Attributes}): Env {
    return new Env(container, attrs, this)
  }

  lookupAttributes(className: string): Attributes {
    const p = this.baseEnv ? this.baseEnv.lookupAttributes(className) : Attributes.empty
    return this.attrs[className] ? p.merge(this.attrs[className]) : p
  }
}

const defaults: {[key: string]: Attributes} = {
  group: Attributes.fromBox({
    margin: Gap.gap2(100.0, 20.0),
    padding: Gap.gap2(20.0, 16.0),
  }),
  zone: Attributes.fromBox({
    margin: Gap.gap2(20.0, 150.0),
    padding: Gap.gap2(20.0, 16.0),
  }),
  node: Attributes.fromBox({
    width: 215,
    height: 150,
    margin: Gap.gap2(24.0, 20.0),
    padding: Gap.gap2(24.0, 16.0),
  }),
}
