import {Area, Location, Point} from "@/layout/types";
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
    const appearance: Partial<Appearance> = {
      text: attrs["t"],
      ...attrs,
    }
    const classNames = attrs["class"] ?
      [...attrs["class"].split(" "), className] :
      [className]
    return new Elem(
      id,
      classNames,
      children,
      appearance,
      attrs as Partial<Layout>,
    )
  }

  private constructor(
    readonly id: string,
    private readonly classNames: string[],
    private readonly children: Elem[],
    private appearance: Partial<Appearance>,
    private layout: Partial<Layout>,
    private readonly context: Context = {},
  ) {
  }

  find(id: string): Elem | undefined {
    if (this.id === id) {
      return this
    }
    return this.children.find((elem) => elem.find(id))
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

  resolveStyle(styles: Styles): Styled[] {
    const myStyles = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: this.context,
    })
    const children = this.children.reduce((ret, child) => {
      ret.push(...child.resolveStyle(styles))
      return ret
    }, [] as Styled[])
    const p = Styled.of(
      this.id,
      this.classNames,
      {
        visibility: "",
        shape: "box",
        icon: "",
        label: this.id,
        text: "-",
        ...myStyles as Partial<Appearance>,
        ...this.appearance,
      },
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

  get _appearance(): Partial<Appearance> {
    return this.appearance
  }
}

export class Styled {
  static of(
    id: string,
    classNames: string[],
    appearance: Appearance,
  ): Styled {
    return new Styled(id, classNames, appearance)
  }

  private constructor(
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
      location: new Location(this.id, point, area),
      svgAttrs: SecureSvgAttrs.of(asString(attrs)),
      ...this.appearance,
    }
  }
}

export function asString(arg: any): {[key: string]: string} {
  return Object.keys(arg).reduce((obj, k) => {
    obj[k] = arg[k].toString()
    return obj
  }, {} as Assigns)
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
