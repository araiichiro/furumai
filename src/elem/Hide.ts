import {Edge} from "@/elem/Edge";
import {BasicSelector, Ruleset, Selector, Styles} from "@/style/Style";

export class Hide {
  static elem(id: string): Hide {
    return new Hide(id, undefined)
  }

  static edge(from: string, op: string, to: string): Hide {
    return new Hide(undefined, Edge.className(from, op, to))
  }

  constructor(
    private id: string | undefined,
    private className: string | undefined
  ) {
  }

  style(): Styles {
    const selectors = []
    if (this.id) {
      selectors.push(Selector.of(new BasicSelector("#" + this.id)))
    }
    if (this.className) {
      selectors.push(Selector.of(new BasicSelector("." + this.className)))
    }
    const rules = [Ruleset.of(
      selectors, {
        "visibility": "hidden",
      }
    )]
    return  Styles.of(rules)
  }
}
