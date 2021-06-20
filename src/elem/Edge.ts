import {Assigns, Styles} from "@/style/Style";
import {Elem} from "@/elem/Elem";
import {Shape} from "@/components/model/Shape";
import {SecureSvgAttrs} from "@/style/security";
import {Length, Location} from "@/layout/types";
import {Arrow} from "@/layout/Arrow";

export class Edge {
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
    private appearance: Partial<Appearance>,
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

  update(elem: Elem) {
    this.appearance = {
      ...this.appearance,
      ...elem._appearance,
    }
  }

  resolveStyle(styles: Styles): Styled {
    const style = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: {},
    })
    return new Styled(
      this.id,
      this.classNames,
      this.op,
      {...style, ...this.appearance}
    )
  }

  same(other: Edge): boolean {
    return this.from === other.from && this.op === other.op && this.to === other.to
  }

  updateAppearance(other: Edge) {
    this.appearance = {
      ...this.appearance,
      ...other.appearance,
    }
  }
}

interface Appearance {
  visibility: string
  label: string
  text: string
  dx: string
  dy: string
}

class Styled {
  constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly op: string,
    readonly appearance: Partial<Appearance>,
  ) {
  }

  shape(tail: Location, head: Location): Shape {
    const {dx, dy} = this.appearance
    const location = Arrow.fit(tail, head, Length.parse(dx || "0px").pixel, Length.parse(dy || "0px").pixel)
    return {
      id: this.id,
      "class" : this.classNames.join(" "),
      location,
      visibility: "",
      shape: this.op === "--" ? "edge" : "arrow",
      icon: "",
      label: "",
      text: "",
      svgAttrs: SecureSvgAttrs.of({}),
      ...this.appearance,
    }
  }
}
