import {Area, Pixel, Point, Size} from "@/layout/types";
import {Assigns, ClassSelector, Context, Elem, IdSelector, Ruleset, Selector, Styles} from "@/style/Style";
import {defaultStyle as defaultLayoutStyle, Item as LayoutItem, Style as LayoutStyle} from "@/layout/Engine";
import {Edge} from "@/elem/Edge";
import {Shape} from "@/components/model/Shape";
import {SecureSvgAttrs} from "@/style/security";

export class Box implements Elem {
  static of(
    id: string,
    className: string | undefined = undefined,
    attrs: Assigns = {},
    children: Box[] = []
  ): Box {
    let classes = attrs["class"].split(" ")
    if (className && className !== "") {
      classes.push(className)
    }
    return new Box(
      id,
      classes,
      children,
      attrs,
    )
  }

  private constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly children: Box[],
    private attrs: Assigns,
    private base: Point = {x: 0, y: 0},
    private size: Size = {width: Pixel.zero, height: Pixel.zero},
    readonly context: Context = {},
  ) {
  }

  get shape(): Shape {
    const {shape, icon, label, text, ...rest} = this.attrs
    rest["class"] = this.classNames.join(" ")
    return {
      id: this.id,
      type: shape,
      icon,
      label,
      text,
      svgAttrs: SecureSvgAttrs.of({
        ...rest,
        ...this.base,
      }),
    }
  }



  update(other: Box) {
    this.attrs = {
      ...this.attrs,
      ...other.attrs,
    }
    this.setVisibility(other.visibility())
    return this
  }

  visibility(): string {
    return this.attrs.visibility ? this.attrs.visibility : "visible"
  }

  setVisibility(visibility: string) {
    this.attrs.visibility = visibility
  }

  visible() {
    this.attrs.visibility = "visible"
  }

  hide() {
    this.attrs.visibility = "hidden"
  }

  toItem(styles: Styles): BoxItem {
    const myStyles = styles.query({
      id: this.id,
      classNames: this.classNames,
      context: this.context,
    })
    const partialArea = Area.withDefaultValue(Area.parse({
      ...myStyles,
      ...this.attrs,
    }))
    const layoutStyle: LayoutStyle = {
      ...defaultLayoutStyle,
      ...myStyles,
      ...this.attrs,
    }
    return new BoxItem(
      this,
      styles,
      partialArea,
      layoutStyle,
    )
  }

  move(point: Point) {
    this.base = point
  }

  get position(): Point {
    return this.base
  }

  expand(size: Size) {
    this.size = size
  }

  toShape() {
    `
    <g id="" class="" svg-attrs>
      <rect></rect>
      <text><tspan></tspan></text>
      <g>
      <rect></rect>
      <rect></rect>
      <rect></rect>
      <g></g>
      </g>
    </g>
    `


  }

}

class BoxItem extends LayoutItem {
  constructor(
    readonly box: Box,
    readonly styles: Styles,
    partialArea: Partial<Area>,
    layoutStyle: LayoutStyle,
    ) {
    super(
      partialArea,
      layoutStyle,
    )
  }

  children(): LayoutItem[] {
    return this.box.children.map((box) => box.toItem(this.styles))
  }

  move(point: Point) {
    this.box.move(point)
  }

  expand(size: Size) {
    this.box.expand(size)
  }
}

interface Appearance {
  shape: string
  icon: string
  label: string
  text: string
}

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
