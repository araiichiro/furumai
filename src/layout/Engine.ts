import {Assigns} from "@/style/Style";
import {Area, Point, Size} from "@/layout/types";
import {Style} from "@/layout/Packer";
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

  fit(container: Area, items: Item[]) {
    items.map((item) => {

    })
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
  public base: Point = {x: 0, y:0}

  protected constructor(
    readonly area: Partial<Area>,
    readonly style: Style,
  ) {
  }

  abstract children(): Item[]

  fit(packers: Packers) {
    //const packer = packers.get(this.style)

    // const contents = packer.estimate(this.children, this.style)
    // contents.fit(this.container())
    //packer.pack(this, this.children)

    const container: Container = {
      base: this.base,
      area: Area.withDefaultValue(this.area()),
    }

    packers.pack(container, this.style, this.children())

  }

}

export function overlay(items: Item[], config: Config, parent: Container) {

}
