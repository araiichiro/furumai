import {Area, Size} from "@/layout/types";
import {Assigns, ClassSelector, IdSelector, Ruleset, Selector, Style, Styles} from "@/style/Style";
import {Item as LayoutItem, defaultStyle as defaultLayoutStyle, Style as LayoutStyle} from "@/layout/Engine";
import {Edge} from "@/elem/Edge";

export class Box extends LayoutItem {
  static of(id: string, className: string | undefined = undefined, attrs: Assigns = {}, children: Box[] = []): Box {
    let classes = attrs["class"].split(" ")
    if (className && className !== "") {
      classes.push(className)
    }
    return new Box(
      id,
      classes,
      Area.parse(attrs),
      attrs as Partial<Appearance>,
      {...defaultLayoutStyle, ...attrs as Partial<LayoutStyle>},
      children,
    )
  }

  private constructor(
    readonly id: string,
    readonly classNames: string[],

    // Note: Style may be applied later by update() call.
    // Partial<> is used to distinguish the value explicitly given or undefined.
    readonly baseArea: Partial<Area>,
    public appearance: Partial<Appearance>,

    style: LayoutStyle,
    readonly children: Box[],
  ) {
    super(
      {x: 0, y: 0},
      Area.withDefaultValue(baseArea),
      style,
      children,
    )
  }

  update(styles: Styles): Box {
    const myStyles = styles.query({
      classNames: this.classNames,
      id: this.id,
      context: {},
    })
    this.appearance = {
      ...myStyles,
      ...this.appearance
    }
    this.area = Area.withDefaultValue({
      ...this.baseArea,
      ...Area.parse(myStyles),
    })
    this.style = {
      ...this.style,
      ...myStyles as Partial<LayoutStyle>,
    }
    this.children.forEach((child) => {
      child.update(styles)
    })
    return this
  }
}

interface Appearance {
  label: string
  text: string
  icon: string
  shape: string
  visibility: string
}

// export class Group {
//   static of(id: string, children: Box[], attrs: {[key: string]: string}): Group {
//     const classNames = attrs['class'].split(' ')
//     return new Group(
//       id,
//       classNames,
//       attrs as Partial<Size>,
//       attrs as Partial<Appearance>,
//       children,
//     )
//   }
//
//   constructor(
//     readonly id: string,
//     readonly classNames: string[],
//     readonly size: Partial<Size>,
//     readonly appearance: Partial<Appearance>,
//     readonly children: Box[] = [],
//   ) {
//   }
//
//
// }
//
// export class Node {
//   static of(id: string, attrs: {[key: string]: string}): Node {
//     const classNames = attrs['class'].split(' ')
//     return new Node(
//       id,
//       classNames,
//       attrs as Partial<Size>,
//       attrs as Partial<Appearance>,
//     )
//   }
//
//   constructor(
//     readonly id: string,
//     readonly classNames: string[],
//     readonly size: Partial<Size>,
//     readonly appearance: Partial<Appearance>,
//   ) {
//   }
// }



export class Hide {
  static elem(id: string): Hide {
    return new Hide(id, [])
  }

  static edge(from: string, op: string, to: string): Hide {
    return new Hide(undefined, [Edge.className(from, op, to)])
  }

  constructor(
    private id: string | undefined,
    private classNames: string[]
  ) {
  }

  style(): Style {
    const ruleset = []
    if (this.id) {
      const r = new Ruleset(new Selector(IdSelector(this.id)), {visibility: "hidden"})
      ruleset.push(r)
    }
    this.classNames.map((c) => {
      const r = new Ruleset(new Selector(ClassSelector(c)), {visibility: "hidden"})
      ruleset.push(r)
    })
    return new Style(ruleset)
  }
}
