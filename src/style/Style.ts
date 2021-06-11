export type Assigns = {[key: string]: string}

export class Style {
  static flatten(styles: Style[]): Styles {
    const rules = styles.reduce((rules, style) => {
      rules.push(...style.rules)
      return rules
    }, [] as Ruleset[])
    return Styles.of(rules)
  }

  constructor(
    readonly rules: Ruleset[],
  ) {
  }
}


export class Ruleset {
  constructor(
    readonly selector: Selector,
    readonly declarations: Assigns,
  ) {
  }

  toCss(): string {



    return `
    ${this.selector.key} {


    }
    `
  }
}

function toCss(assigns: Assigns): string {
  for (const k in assigns) {


  }



}



export class Selector {
  constructor(readonly key: string) {
  }
}

export function UnivSelector(): Selector {
  return new Selector("*")
}

export function TypeSelector(typeName: string): Selector {
  return new Selector(typeName)
}

export function ClassSelector(className: string): Selector {
  return new Selector("." + className)
}

export function IdSelector(id: string): Selector {
  return new Selector("#" + id)
}

export class Styles {
  static of(rules: Ruleset[]): Styles {
    const ruleset = rules.reduce((ret, rule) => {
      ret[rule.selector.key] =  rule.declarations
      return ret
    }, {} as {[key: string]: Assigns})
    return new Styles(ruleset)
  }

  constructor(
    readonly ruleset: {[key: string]: Assigns}
  ) {
  }

  query(typeName: string, classNames: string[], id: string | undefined): Assigns {
    const classAttrs = classNames.reduce((ret, className) => {
      return {
        ...ret,
        ...this.get("." + className)
      }
    }, {} as Assigns)
    return {
      ...this.get("*"),
      ...this.get(typeName),
      ...classAttrs,
      ...id ? this.get("#" + id) : {},
    }
  }

  private get(key: string): Assigns {
    return this.ruleset[key] || {}
  }
}

// <path id= class="edge edge_from_to" .. />
// export class EdgeSelector {
//   constructor(readonly from: string, readonly to: string) {}
// }
