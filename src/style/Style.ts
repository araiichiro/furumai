export type Assigns = {[key: string]: string}

export class Ruleset {
  constructor(
    readonly selector: Selector,
    readonly declarations: Assigns,
  ) {
  }

  toCss(): string {
    let s = ""
    for (const key of Object.keys(this.declarations)) {
      s += key + ": " + this.declarations[key] + ";\n"
    }
    return `
    ${this.selector.base.key} {
    ${s}
    }
    `
  }
}

export class Selector {
  static of(
    selector: BasicSelector,
    parents: BasicSelector[] = [],
  ) {
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
}

export class Filter {
  static of(v: boolean): Filter {
    return new Filter(v)
  }

  private constructor(
    private v: boolean,
  ) {
  }

  filter(_: Context): boolean {
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

export function ClassSelector(className: string): BasicSelector {
  return new BasicSelector("." + className)
}

export function IdSelector(id: string): BasicSelector {
  return new BasicSelector("#" + id)
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

  query(elem: Elem): Assigns {
    const classAttrs = elem.classNames.reduce((ret, className) => {
      return {
        ...ret,
        ...this.get(ClassSelector(className).key, elem.context)
      }
    }, {} as Assigns)
    return {
      ...this.get(UnivSelector().key, elem.context),
      ...classAttrs,
      ...elem.id ? this.get(IdSelector(elem.id).key, elem.context) : {},
    }
  }

  private get(key: string, context: Context): Assigns {
    const filtered = this.rules.filter((r) => r.selector.base.key === key && r.selector.filter.filter(context))
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

export interface Elem {
  id?: string
  classNames: string[]
  context: Context
}

export interface Context {
}


// <path id= class="edge edge_from_to" .. />
// export class EdgeSelector {
//   constructor(readonly from: string, readonly to: string) {}
// }
