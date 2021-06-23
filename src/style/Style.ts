export type Assigns = {[key: string]: string}

export function m<A, B>(fn: (a: A)=>B, a: A | undefined): B | undefined {
  if (a) {
    return fn(a)
  }
  return undefined
}

export function deleteUndefined<T extends any>(t: Partial<T>): Partial<T> {
  return Object.keys(t).reduce((p, k) => {
    if (t[k]) {
      return {...p, [k]: t[k]}
    } else {
      return p
    }
  }, {} as Partial<T>)
}

export function asString(arg: any): Assigns {
  return Object.keys(arg).reduce((obj, k) => {
    obj[k] = arg[k].toString()
    return obj
  }, {} as Assigns)
}

export class Ruleset {
  static of(selectors: Selector[], declarations: Assigns) {
    return new Ruleset(selectors, declarations)
  }

  constructor(
    readonly selectors: Selector[],
    readonly declarations: Assigns,
  ) {
  }

  keys(): string[] {
    return this.selectors.map((s) => s.base.key)
  }

  toCss(): string {
    const ar = []
    for (const key of Object.keys(this.declarations)) {
      ar.push(key + ": " + this.declarations[key])
    }
    const selectors = this.keys().join(", ")
    const s = ar.join(";\n  ")
    return `${selectors} {\n  ${s}\n}`
  }

  isMatch(selector: BasicSelector, context: {}): boolean {
    return this.selectors.some((s) => s.isMatch(selector, context))
  }
}

export class Selector {
  static of(
    selector: BasicSelector,
    parents: BasicSelector[] = [],
  ): Selector {
    // TODO implement combined selector
    // note: this means combined selector is not implemented
    const filter = parents.length === 0 ? Filter.of(true) : Filter.of(false)
    return new Selector(selector, filter)
  }

  constructor(
    readonly base: BasicSelector,
    readonly filter: Filter,
  ) {
  }

  isMatch(selector: BasicSelector, context: {}) {
    return this.base.key === selector.key && this.filter.filter(context)
  }
}

export class Filter {
  static of(v: boolean): Filter {
    return new Filter(v)
  }

  private constructor(
    private v: boolean,
  ) {
  }

  filter(_: {}): boolean {
    return this.v
  }
}


export class BasicSelector {
  constructor(readonly key: string) {
  }
}

export function UnivSelector(): BasicSelector {
  return new BasicSelector("*")
}

export function CombinedSelector(selectors: BasicSelector[]): Selector {
  const [head, ...parents] = selectors.reverse()
  return Selector.of(head, parents)
}

export class Styles {
  static of(rules: Ruleset[]): Styles {
    return new Styles(rules)
  }

  constructor(
    private rules: Ruleset[],
  ) {
  }

  update(other: Styles): Styles {
    this.rules.push(...other.rules)
    return this
  }

  query(elem: Condition): Assigns {
    const classAttrs = elem.classNames.reduce((ret, className) => {
      return {
        ...ret,
        ...this.get(new BasicSelector("." + className), elem.context)
      }
    }, {} as Assigns)
    return {
      ...this.get(UnivSelector(), elem.context),
      ...classAttrs,
      ...elem.id ? this.get(new BasicSelector("#" + elem.id), elem.context) : {},
    }
  }

  private get(selector: BasicSelector, context: {}): Assigns {
    const filtered = this.rules.filter((r) => r.isMatch(selector, context))
    return  filtered.reduce((ret, rule) => {
      return {
        ...ret,
        ...rule.declarations,
      }
    }, {} as Assigns)
  }

  toCss(): string {
    return this.rules.map((rule) => rule.toCss()).join("\n")
  }

}

export interface Condition {
  id?: string
  classNames: string[]
  context: {}
}
