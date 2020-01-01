import {Attributes, Dict} from '@/utils/types'

export class Env {
  public static init = new Env( {})

  private constructor(
    private attrs: Dict<Attributes>,
    private baseEnv?: Env,
  ) {
  }

  public newEnv(attrs: Dict<Attributes>): Env {
    return new Env(attrs, this)
  }

  public lookupAttributes(className: string): Attributes {
    const p = this.baseEnv ? this.baseEnv.lookupAttributes(className) : Attributes.empty
    return this.attrs[className] ? p.merge(this.attrs[className]) : p
  }
}
