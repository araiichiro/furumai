export interface Assigns {[key: string]: string}

export function m<A, B>(fn: (a: A) => B, a: A | undefined): B | undefined {
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
  public static of(selectors: Selector[], declarations: Assigns) {
    return new Ruleset(selectors, declarations)
  }

  constructor(
    readonly selectors: Selector[],
    readonly declarations: Assigns,
  ) {
  }

  public selectorList(): string[] {
    return this.selectors.map((s) => s.toCss())
  }

  public toCss(): string {
    const ar = []
    for (const key of Object.keys(this.declarations)) {
      ar.push(key + ': ' + this.declarations[key])
    }
    const selectors = this.selectorList().join(', ')
    const s = ar.join(';\n  ')
    return `${selectors} {\n  ${s}\n}`
  }
}

export class Selector {
  public static of(
    selector: BasicSelector,
  ): Selector {
    return new Selector(selector, Qualifier.of([]))
  }

  public static combined(selectorList: BasicSelector[]): Selector {
    const [head, ...parents] = selectorList.reverse()
    return new Selector(head, Qualifier.of(parents))
  }

  constructor(
    readonly base: BasicSelector,
    readonly qualifier: Qualifier,
  ) {
  }

  public isMatch(context: Context): boolean {
    return this.base.isMatch(context) && this.qualifier.isMatch(context.parent)
  }

  public toCss() {
    return this.qualifier.parents.reverse().map((s) => s.toCss()) + this.base.toCss()
  }
}

export class Qualifier {
  public static of(qualifiers: BasicSelector[]): Qualifier {
    return new Qualifier(qualifiers)
  }

  private constructor(
    readonly parents: BasicSelector[]) {
  }

  public isMatch(parent?: Context): boolean {
    let p = 0
    while (parent && p < this.parents.length) {
      if (this.parents[p].isMatch(parent)) {
        p++
        parent = parent.parent
      } else {
        parent = parent.parent
      }
    }
    return p >= this.parents.length
  }
}

export interface BasicSelector {
  isMatch(context: Context): boolean
  toCss(): string
}

export class UnivSelector implements BasicSelector {
  public isMatch(context: Context): boolean {
    return true
  }

  public toCss(): string {
    return '*'
  }

}

export class IdSelector implements BasicSelector {
  public static of(hash: string): IdSelector {
    return new IdSelector(hash.substr(1, hash.length - 1))
  }

  constructor(readonly id: string) {
  }

  public isMatch(context: Context): boolean {
    return context.id === this.id
  }

  public toCss(): string {
    return '#' + this.id
  }
}

export class ClassSelector implements BasicSelector {
  public static of(dot: string): ClassSelector {
    return new ClassSelector(dot.substr(1, dot.length - 1))
  }

  constructor(readonly className: string) {
  }

  public isMatch(context: Context): boolean {
    return context.classNames.reduce((b, className) => {
      return b || this.className === className
    }, false as boolean)
  }

  public toCss(): string {
    return '.' + this.className
  }

}

export class Styles {
  public static of(rules: Ruleset[]): Styles {
    return new Styles(rules)
  }

  constructor(
    private rules: Ruleset[],
  ) {
  }

  public update(other: Styles): Styles {
    this.rules.push(...other.rules)
    return this
  }

  public query(context: Context): Assigns {
    const filtered = this.rules.filter((r) => r.selectors.some((s) => s.isMatch(context)))
    return filtered.reduce((ret, rule) => {
      return {
        ...ret,
        ...rule.declarations,
      }
    }, {} as Assigns)
  }

  public toCss(): string {
    return this.rules.map((rule) => rule.toCss()).join('\n')
  }

}

export interface Context {
  id: string
  classNames: string[]
  parent?: Context
}

export class Contexts {
  public static of(contexts: Context[]): Contexts {
    const cs = contexts.reduce((ret, context) => {
      ret[context.id] = context
      return ret
    }, {} as {[key: string]: Context})
    return new Contexts(cs)
  }

  constructor(readonly map: {[key: string]: Context}) {
  }
}

