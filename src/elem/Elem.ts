import {Area, Point, Territory} from "@/layout/types";
import {Assigns, Styles} from "@/style/Style";
import {Box} from "@/layout/Box";
import {Appearance, createElem} from "@/components/model/Svg";
import {SvgElem} from "@/components/model/SvgElem";

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
      context: {},
    })
    const children = this.children.reduce((ret, child) => {
      ret.push(...child.resolveStyle(styles))
      return ret
    }, [] as Styled[])
    const p = Styled.of(
      this.id,
      this.classNames,
      {
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
      context: {},
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
    appearance: Partial<Appearance>,
  ): Styled {
    return new Styled(id, classNames, appearance)
  }

  private constructor(
    readonly id: string,
    private readonly classNames: string[],
    private readonly appearance: Partial<Appearance>,
  ) {
  }

  shape(point: Point, area: Area): SvgElem {
    const shape = this.appearance.shape || "box"
    const classNames = [...this.classNames]
    classNames.push(shape)
    return createElem(
      this.id,
      classNames.join(" "),
      new Territory(point, area),
      this.appearance,
    )
  }
}

interface Layout {
  width: string
  height: string
}
