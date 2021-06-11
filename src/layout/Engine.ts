import {Assigns} from "@/style/Style";
import {Area, Gap, Point, Size} from "@/layout/types";
//
// export interface Item {
//   point: Point
//   size: Size
//   padding: Padding
//   margin: Margin
//   children: Item[]
//   style: Style
// }

export class Engine {
  constructor(readonly config: Config) {
  }

  fit(area: Area, items: Item[]) {

  }
}


  /*

    fit(base: Point, container: Container) {
      function extend(s: Size, t: Size): Size {
        return {
          width: Math.max(s.width, t.width),
          height: Math.max(s.height, t.height)
        }
      }

      const contentSize = this.children.reduce((size, child) => {
        size = extend(size, child.size)

        return size
      }, {width: 0, height: 0} as Size)


      const {width, height} = this.size
      width - contentSize.width





      if (this.size.width === 0 || this.size.height === 0) {
        this.size = contentSize
      }


    }

    private resolveSize() {

    }
   */



export abstract class Item {
  protected constructor(
    public base: Point,
    public area: Area,
    public style: Style,
    readonly children: Item[],
  ) {
  }

  fit(packers: Packers) {
    //const packer = packers.get(this.style)

    // const contents = packer.estimate(this.children, this.style)
    // contents.fit(this.container())
    //packer.pack(this, this.children)

    const container = {
      base: this.base,
      area: this.area,
    }

    packers.pack(container, this.style, this.children)

  }

}

export interface Container {
  base: Point
  area: Area
}


export function overlay(items: Item[], config: Config, parent: Container) {

}


// class Layout {
//   constructor(
//     readonly packer: Packer,
//     readonly contents: Contents,
//   ) {
//   }
//
//   fit(parent: Container) {
//     this.packer.pack(parent, this.contents)
//   }
// }

interface Contents {
  size: Size
  items: Item[]
}

interface Packer {
  estimate(items: Item[], parent: Style): Contents
  //pack(parent: Container, contents: Contents): void
  pack(parent: Container, items: Item[]): void
}

class RowPacker implements Packer {
  constructor(readonly style: Style) {
  }
  estimate(items: Item[], config: Config, parent: Style): Contents {
    return undefined;
  }

  pack(parent: Container, contents: Contents): void {
  }
}

class ColumnPacker implements Packer {
  constructor(readonly style: Style) {
  }

  estimate(items: Item[]): Contents {
    return undefined;
  }

  pack(parent: Container, contents: Contents): void {
  }
}

class Packers {
  constructor(readonly config: Config) {
  }

  private create(style: Style): Packer {
    const orientation = this.config.orientation
    switch ([style["flex-direction"], orientation]) {
      case ["column", "portrait"]:
        return new ColumnPacker(style)
      case ["row", "portrait"]:
        return new RowPacker(style)
      case ["column", "landscape"]:
        return new RowPacker(style)
      case ["row", "landscape"]:
        return new ColumnPacker(style)
      default:
        throw new Error(`allocator not found for ${config}, ${style}`)
    }
  }
  pack(container: Container, style: Style, items: Item[]) {
    const packer = this.create(container.style)
    packer.pack(container, items)


  }
}


function packer(config: Config, style: Style): Packer {
}

export interface Config {
  orientation: Orientation
}

export type Orientation = "portrait" | "landscape"

export interface Style {
  "flex-direction":
    "row"
    | "column"
  "align-items":
    "flex-start"
  // | "flex-end"
  // | "center"

  "justify-content":
    "space-between"
  // | "space-around"
  // | "center"
}

export const defaultStyle: Style = {
  "flex-direction": "row",
  "align-items": "flex-start",
  "justify-content": "space-between",
}

//
// export class Group implements Container, Item {
//   constructor(
//     readonly size: Size,
//     readonly items: Array<Group | Node>,
//     readonly block: boolean = true,
//   ) {
//   }
//
//   fit(): Size {
//     function expand(base: Size, child: Size): Size {
//       return {
//         width: base.width > child.width ? base.width : child.width,
//         height: base.height > child.height ? base.height : child.height,
//       }
//     }
//     return this.items.reduce((size, item) => {
//       return expand(size, item.fit())
//     }, {width: 0, height: 0} as Size)
//   }
//
//   arrange() {
//
//   }
// }
//
// export class Node implements Item {
//   constructor(
//     readonly size: Size,
//     readonly block: boolean = false,
//   ) {
//   }
//
//   fit(): Size {
//     return this.size
//   }
// }

// interface Style {
//   display:
//     'block'
//     | 'flex'
//     | 'block-flex'
//     | 'inline'
//     | 'inline-flex'
//   justifyContent:
//     'space-between'
//     | 'space-around'
//     | 'center'
//   alignSelf:
//     'flex-start'
//     | 'flex-end'
//     | 'center'
//   flexDirection:
//     'row'
//     | 'column'
// }
//

