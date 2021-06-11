import {Assigns, Styles} from "@/style/Style";

export class Edge {
  static of(from: string, op: string, to: string, className: string = "", attrs: Assigns = {}): Edge {
    let classes = attrs["class"].split(" ")
    if (className !== "") {
      classes.push(className)
    }
    return new Edge(
      from,
      op,
      to,
      attrs.id,
      classes,
      attrs as Partial<Appearance>,
    )
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
    readonly id: string | undefined,
    readonly classNames: string[],
    public appearance: Partial<Appearance>,
  ) {
  }

  update(styles: Styles) {
    const myStyles = styles.query("path", this.classNames, this.id)
    this.appearance = {
      ...myStyles,
      ...this.appearance
    }
  }

}

interface Appearance {
  id: string
  text: string
  visibility: string
}
