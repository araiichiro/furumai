import {Area, Point} from "@/layout/types";
import {Assigns, Context, Styles} from "@/style/Style";
import {defaultStyle as defaultLayoutStyle, Style as LayoutStyle} from "@/layout/Style";
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

    //private attrs: Assigns,
    // private base: Point = {x: 0, y: 0},
    // private size: Size = Size.zero,
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

  toLayoutBox(styles: Styles): Box<Presentation> {
    const myStyles = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: this.context,
    })
    const partialArea = Area.withDefaultValue(Area.parse({
      ...myStyles,
      ...this.layout,
    }))
    const layoutStyle: LayoutStyle = {
      ...defaultLayoutStyle,
      ...myStyles,
    }
    const elem: Presentation = Presentation.of(
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

    return new Box<Presentation>(
      elem,
      this.id,
      this.children.map((child) => child.toLayoutBox(styles)),
      layoutStyle,
      partialArea,
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
    private readonly id: string,
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
      type: this.appearance.shape,
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
