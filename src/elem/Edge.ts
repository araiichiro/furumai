import {Assigns, Context, Elem, Styles} from "@/style/Style";

export class Edge implements Elem {
  static of(from: string, op: string, to: string, attrs: Assigns = {}): Edge {
    const classNames = ["edge", this.className(from, op, to)]
    const cls = attrs["class"]
    if (cls) {
      classNames.push(...attrs["class"].split(" "))
    }
    return new Edge(
      from,
      op,
      to,
      attrs.id || this.idName(from, op, to),
      classNames,
      attrs as Partial<Appearance>,
    )
  }

  static idName(from: string, op: string, to: string): string {
    return `_furumai_${from}_${this.connectorName(op)}_${to}`
  }

  static className(from: string, op: string, to: string): string {
    return `_furumai_${from}_${this.connectorName(op)}_${to}`
  }

  private static connectorName(op: string): string {
    switch (op) {
      case "->":
        return "to"
      case "--":
        return  "edge"
      default:
        throw new Error("not implemented")
    }
  }

  private constructor(
    readonly from: string,
    readonly op: string,
    readonly to: string,
    readonly id: string,
    readonly classNames: string[] = [],
    readonly appearance: Partial<Appearance>,
    readonly context: Context = {},
  ) {
  }

  visible() {
    this.appearance.visibility = "visible"
  }

  hide() {
    this.appearance.visibility = "hidden"
  }

  setVisibility(visibility: string) {
    this.appearance.visibility = visibility
  }
}

interface Appearance {
  visibility: string
  label: string
  text: string
  dx: string
  dy: string
}
