import {Area, Point} from "@/layout/types";
import {Assigns, Context, Styles} from "@/style/Style";
import {Box} from "@/layout/Box";
import {Shape} from "@/components/model/Shape";
import {SecureSvgAttrs} from "@/style/security";

export class Elem {
  static of(
    id: string,
    className: string,
    attrs: Assigns = {},
    children: Elem[] = []
  ): Elem {
    const classNames = attrs["class"] ?
      [...attrs["class"].split(" "), className] :
      [className]
    return new Elem(
      id,
      classNames,
      children,
      attrs as Partial<Appearance>,
      attrs as Partial<Layout>,
    )
  }

  private constructor(
    private readonly id: string,
    private readonly classNames: string[],
    private readonly children: Elem[],
    private appearance: Partial<Appearance>,
    private layout: Partial<Layout>,
    readonly context: Context = {},
  ) {
  }

  update(other: Elem) {
    this.appearance = {
      ...this.appearance,
      ...other.appearance,
    }
    this.layout = {
      ...this.layout,
      ...other.layout,
    }
    return this
  }

  setVisibility(visibility: string) {
    this.appearance.visibility = visibility
  }

  visible() {
    this.setVisibility("visible")
  }

  hide() {
    this.setVisibility("hidden")
  }

  toPresentation(styles: Styles): Presentation[] {
    const myStyles = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: this.context,
    })
    const children = this.children.reduce((ret, child) => {
      ret.push(...child.toPresentation(styles))
      return ret
    }, [] as Presentation[])
    const p = Presentation.of(
      this.id,
      this.classNames,
      {
        visibility: "",
        shape: "box",
        icon: "server",
        label: this.id,
        text: "-",
        ...myStyles as Partial<Appearance>,
        ...this.appearance,
      } as Appearance,
    )
    return [p, ...children]
  }

  toLayoutBox(styles: Styles): Box {
    const myStyles = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: this.context,
    })
    return Box.of(
      this.id,
      this.children.map((child) => child.toLayoutBox(styles)),
      {...myStyles, ...this.layout as Assigns},
    )
  }
}

export class Presentation {
  static of(
    id: string,
    classNames: string[],
    appearance: Appearance,
  ): Presentation {
    return new Presentation(id, classNames, appearance)
  }

  constructor(
    readonly id: string,
    private readonly classNames: string[],
    private readonly appearance: Appearance,
  ) {
  }

  shape(point: Point, area: Area): Shape {
    const attrs = {
      ...point,
      ...area,
    }
    return {
      id: this.id,
      "class" : this.classNames.join(" "),
      base: point,
      area,
      svgAttrs: SecureSvgAttrs.of(asString(attrs)),
      ...this.appearance,
    }
  }
}

export function asString(arg: any): {[key: string]: string} {
  return Object.keys(arg).reduce((obj, k) => {
    obj[k] = arg[k].toString()
    return obj
  }, {} as {[key: string]: string})
}

interface Appearance {
  visibility: string
  shape: string
  icon: string
  label: string
  text: string
}

interface Layout {
  width: string
  height: string
}
