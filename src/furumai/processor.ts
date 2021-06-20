import {parse} from "@/parse/parser";
import {Elem, Presentation} from "@/elem/Elem";
import {Config} from "@/elem/Story";
import {Engine as LayoutEngine} from "@/layout/Engine";
import {Box, FlatBox} from "@/layout/Box";
import {Edge} from "@/elem/Edge";
import {Styles} from "@/style/Style";
import {Svg} from "@/components/model/Svg";
import {Length, Point, Size} from "@/layout/types";

export const defaultConfig: Config = {
  mode: "diff",
  orientation: "portrait",
}

export const defaultStyleString = `
@style {
  * {
    display: inline-flex;
    justify-content: space-between;
    align-self: center;
    flex-direction: row;

    font-size: 24;
  }

  .group, .zone {
    stroke: gray;
    stroke-dasharray: 10 8;
    fill: gray;
  }

  .group {
    flex-direction: row;
  }

  .zone {
    flex-direction: column;
  }

  .node {
    width: 160px;
    height: 160px;
    fill: none;
    stroke: black;
    stroke-width: 2;
  }

  .edge {
    stroke: black;
    stroke-width: 2;
  }

  text {
    fill: gray;
  }

  .text {
    stroke: gray;
    stroke-width: 1;
  }

  .label {
    stroke: black;
  }
};
`


export function toModels(furumaiCode: string): Svg[] {
  const story = parse(furumaiCode)
  const config = {
    ...defaultConfig,
    ...story.config,
  }
  const engine = new LayoutEngine(config)
  const styles = parse(defaultStyleString).layout.styles.update(story.layout.styles)
  const rootStyle = {
    visibility: "hidden",
    text: "",
  }
  const rootElem = Elem.of("_root", "root", rootStyle, story.layout.boxes)
  const root = rootElem.toLayoutBox(styles)
  const size = root.fit(engine, Point.zero)
  root.refit(engine, Point.zero, size.totalSize)
  const flatten = root.flatten(Point.zero)
  const edges = story.layout.edges

  const dic = flatten.reduce((ret, box) => {
    return {
      [box.id]: box,
      ...ret,
    }
  }, {} as {[key: string]: Location})

  const ps = rootElem.toPresentation(styles)
  const shapes = ps.map((p) => {
    const box = dic[p.id]
    return p.shape(box.point, box.area)
  })

  const es = edges.map((edge) => {
    const f = dic[edge.from]
    const t = dic[edge.to]
    const style = styles.query({
      id: edge.id,
      classNames: edge.classNames,
      context: {},
    })
    const attrs = {...style, ...edge.appearance}
    const {dx, dy} = attrs
    const location = Arrow.fit(f, t, Length.parse(dx || "0px").pixel, Length.parse(dy || "0px").pixel)
    const op = edge.op === "--" ? "edge" : "arrow";
    return {
      id: edge.id,
      "class" : edge.classNames.join(" "),
      base: location.point,
      area: location.area,
      visibility: "",
      shape: op,
      icon: "",
      label: "",
      text: "",
      svgAttrs: SecureSvgAttrs.of({}),
      ...edge.appearance,
    } as Shape
  })
  shapes.push(...es)

  const svg = {
    style: styles.toCss(),
    size: root.totalSize,
    shapes,
  }

  console.log(svg.shapes)

  return [svg]

  // for (let update of story.updates) {
  //   if (config.mode === "diff") {
  //     const styles = current.styles.update(update.styles)
  //     const root = Area.withDefaultValue(Box.of("_furumai", undefined, {}).toItem(styles).area)
  //
  //     update.boxes.forEach((updateBox) => {
  //       const target = findBox(current.boxes, updateBox.id)
  //       if (target) {
  //         target.update(updateBox)
  //       } else {
  //         throw new Error(`not found: ${updateBox.id}`)
  //       }
  //     })
  //     const items = current.boxes.map((box) => box.toItem(styles))
  //     engine.fit(root, items)
  //     const boxes = items.map((item) => item.box)
  //
  //     update.edges.forEach((updateEdge) => {
  //       const target = findEdge(current.edges, updateEdge.id)
  //       if (target) {
  //         target.setVisibility(updateEdge.visibility())
  //         if (updateEdge.visibility() === "hidden") {
  //           return
  //         }
  //
  //         const head = findBox(boxes, target.from)
  //         if (head) {
  //           head.visible()
  //         } else {
  //           throw new Error(`not found ${target.from}`)
  //         }
  //         const tail = findBox(boxes, target.to)
  //         if (tail) {
  //           tail.visible()
  //         } else {
  //           throw new Error(`not found ${target.to}`)
  //         }
  //       }
  //     })
  //
  //     hideBoxes(boxes, update.hides)
  //     hideEdges(current.edges, update.hides)
  //     current = {
  //       boxes,
  //       edges,
  //       styles,
  //     }
  //     svgs.push(svg(current))
  //   } else {
  //     const styles = defaultStyle.update(update.styles)
  //     const root = Area.withDefaultValue(Box.of("_furumai", undefined, {}).toItem(styles).area)
  //     const items = update.boxes.map((box) => box.toItem(styles))
  //     engine.fit(root, items)
  //     const boxes = items.map((item) => item.box)
  //     current = {
  //       boxes,
  //       edges,
  //       styles,
  //     }
  //     svgs.push(svg(current))
  //   }
  // }
  // return svgs
}

export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
}

// function hideBoxes(boxes: Box[], hides: Hide[]) {
//   boxes.map((box) => {
//     hides.map((hide) => {
//       if (hide.isTarget(box)) {
//         box.hide()
//       }
//     })
//     hideBoxes(box.children, hides)
//   })
// }
//
// function hideEdges(edges: Edge[], hides: Hide[]) {
//   edges.map((edge) => {
//     hides.map((hide) => {
//       if (hide.isTarget(edge)) {
//         edge.hide()
//       }
//     })
//   })
// }

// function findBox(boxes: Elem[], id: string): Elem | undefined {
//   for (let box of boxes) {
//     if (box.id === id) {
//       return box
//     }
//     const candidate = findBox(box.children, id)
//     if (candidate) {
//       return candidate
//     }
//   }
//   return undefined
// }
//
// function findEdge(edges: Edge[], id: string): Edge | undefined {
//   for (let edge of edges) {
//     if (edge.id === id) {
//       return edge
//     }
//   }
//   return undefined
// }

// function overlayEdges(edges: Edge[], boxes: Box[]): Edge[] {
//   return edges.map((edge) => {
//     edge.id
//   })
// }

// function vueIfNotDisabled(boxes: Box[], edge: Edge): Shape {
//   const tail = findBox(boxes, edge.from)
//   if (tail) {
//
//   } else {
//     throw new Error(`not found ${edge.from}`)
//   }
//   const head = findBox(boxes, edge.to)
//   if (head) {
//
//   } else {
//     throw new Error(`not found ${edge.to}`)
//   }
//
//   const {text, dx, dy} = edge.appearance
//   const box = Arrow.singleton.fit(tail, head, num(dx) || 0, num(dy) || 0)
//
//   // const svgAttrs = SecureSvgAttrs.of({
//   //   //visibility: 'visible',
//   //   //...this.attrs.shape,
//   // })
//   // const text = {
//   //   label,
//   //   t,
//   //   textAttrs: SecureSvgAttrs.of(this.attrs.text),
//   // }
//   return {
//     type: edge.op === '->' ? 'arrow' : 'edge',
//     id: edge.id || "",
//     box,
//     label: "",
//     text: text || "",
//     svgAttrs: SecureSvgAttrs.of(edge.attrs),
//   }
// }
//
//
//
