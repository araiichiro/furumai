import {Edge} from "@/elem/Edge";
import {Elem} from "@/style/Style";

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

  isTarget(elem: Elem): boolean {
    return this.id && elem.id && this.id === elem.id || elem.classNames.some((name) => name === this.className)
  }
}
