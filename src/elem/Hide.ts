import {Edge} from '@/elem/Edge'
import {BasicSelector, ClassSelector, IdSelector, Ruleset, Selector, Styles} from '@/style/Style'

export class Hide {
  public static elem(id: string): Hide {
    return new Hide(id, undefined)
  }

  public static edge(from: string, op: string, to: string): Hide {
    return new Hide(undefined, Edge.className(from, op, to))
  }

  constructor(
    private id: string | undefined,
    private className: string | undefined,
  ) {
  }

  public style(): Styles {
    const selectors = []
    if (this.id) {
      selectors.push(Selector.of(new IdSelector(this.id)))
    }
    if (this.className) {
      selectors.push(Selector.of(new ClassSelector(this.className)))
    }
    const rules = [Ruleset.of(
      selectors, {
        visibility: 'hidden',
      },
    )]
    return  Styles.of(rules)
  }
}
