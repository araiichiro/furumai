export interface Assigns {[key: string]: string}

export function m<A, B>(fn: (a: A) => B, a: A | undefined): B | undefined {
  if (a) {
    return fn(a)
  }
  return undefined
}

export function deleteField(base: Assigns, deletes: string[]): Assigns {
  const ret = {...base}
  deletes.forEach((key) => delete ret[key])
  return ret
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
    return this.selectors.map((s) => s.toCssSelector())
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
    return new Selector(selector, [])
  }

  public static combined(
    combined: CombinedSelector[],
    basic: BasicSelector,
  ): Selector {
    return new Selector(basic, combined.reverse())
  }

  constructor(
    readonly base: BasicSelector,
    readonly combined: CombinedSelector[],
  ) {
  }

  public isMatch(context: Partial<Context>): boolean {
    if (!this.base.isMatch(context)) {
      return false
    }
    let p = 0
    let parent = context.parent
    while (parent && p < this.combined.length) {
      if (this.combined[p].selector.isMatch(parent)) {
        p++
        parent = parent.parent
      } else {
        if (this.combined[p].combinator instanceof ChildCombinator) {
          return false
        } else if (this.combined[p].combinator instanceof DescendantCombinator) {
          parent = parent.parent
        } else {
          throw new Error('not implemented')
        }
      }
    }
    return p >= this.combined.length
  }

  public toCssSelector(): string {
    const selectors = this.combined.reverse().map((c) => c.toCssSelector())
    selectors.push(this.base.toCssSelector())
    return selectors.join('')
  }
}

export interface BasicSelector {
  isMatch(context: Partial<Context>): boolean
  toCssSelector(): string
}

export class UnivSelector implements BasicSelector {
  public isMatch(context: Partial<Context>): boolean {
    return true
  }

  public toCssSelector(): string {
    return '*'
  }

}

export class IdSelector implements BasicSelector {
  public static of(hash: string): IdSelector {
    return new IdSelector(hash.substr(1, hash.length - 1))
  }

  constructor(readonly id: string) {
  }

  public isMatch(context: Partial<Context>): boolean {
    return context.id === this.id
  }

  public toCssSelector(): string {
    return '#' + this.id
  }
}

export class ClassSelector implements BasicSelector {
  public static of(dot: string): ClassSelector {
    return new ClassSelector(dot.substr(1, dot.length - 1))
  }

  constructor(readonly className: string) {
  }

  public isMatch(context: Partial<Context>): boolean {
    const classNames = context.classNames ? context.classNames : []
    return classNames.reduce((b, className) => {
      return b || this.className === className
    }, false as boolean)
  }

  public toCssSelector(): string {
    return '.' + this.className
  }

}

export class CombinedSelector {
  constructor(
    readonly selector: BasicSelector,
    readonly combinator: Combinator,
  ) {
  }

  toCssSelector(): string {
    return this.selector.toCssSelector() + this.combinator.toCssCombinator()
  }
}

export interface Combinator {
  toCssCombinator(): string
}

export class DescendantCombinator implements Combinator {
  toCssCombinator(): string {
    return ' '
  }
}

export class ChildCombinator implements Combinator{
  toCssCombinator(): string {
    return ' > '
  }
}

export class StyleList {
  public static of(rules: Ruleset[]): StyleList {
    return new StyleList(rules)
  }

  constructor(
    private rules: Ruleset[],
  ) {
  }

  public update(other: StyleList): StyleList {
    this.rules.push(...other.rules)
    return this
  }

  public query(context: Partial<Context>): Assigns {
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
