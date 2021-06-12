import {Assigns, Context, Elem} from "@/style/Style";

export class Edge implements Elem {
  static of(from: string, op: string, to: string, attrs: Assigns = {}): Edge {
    let classNames = attrs["class"].split(" ")
    classNames.push("edge", this.className(from, op, to))
    return new Edge(
      from,
      op,
      to,
      attrs.id || this.idName(from, op, to),
      classNames,
      attrs,
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

  constructor(
    readonly from: string,
    readonly op: string,
    readonly to: string,
    readonly id: string,
    readonly classNames: string[] = [],
    readonly attrs: Assigns = {},
    readonly context: Context = {},
  ) {
  }

  visibility(): string {
    return this.attrs.visibility
  }

  visible() {
    this.attrs.visibility = "visible"
  }

  hide() {
    this.attrs.visibility = "hidden"
  }

  setVisibility(visibility: string) {
    this.attrs.visibility = visibility
  }
}

interface Appearance {
  label: string
  text: string
  dx: string
  dy: string
}
