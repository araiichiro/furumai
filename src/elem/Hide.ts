import {Edge} from '@/elem/Edge'
import {BasicSelector, ClassSelector, IdSelector, Ruleset, Selector, Styles} from '@/style/Style'

export class Hide {
  public static elem(id: string): Hide {
    return new Hide(id, undefined)
  }

  public static edge(from: string, op: string, to: string): Hide {
    return new Hide(undefined, Edge.of(from, op, to))
  }

  constructor(
    readonly id: string | undefined,
    readonly edge: Edge | undefined,
  ) {
  }
}
