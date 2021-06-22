import {Boundary, Territory} from "@/layout/types";
import {Assigns, asString, Styles} from "@/style/Style";
import {SecureSvgAttrs, validateAppearance} from "@/components/model/security";
import {VIcon} from "@/components/model/VIcon";
import {Box} from "@/components/model/Box";
import {Arrow} from "@/components/model/Arrow";
import {Cylinder} from "@/components/model/Cylinder";
import {TextElem} from "@/components/model/TextElem";
import {SvgElem} from "@/components/model/SvgElem";
import {Person} from "@/components/model/Person";
import {Pipe} from "@/components/model/Pipe";

export interface Appearance {
  visibility: string
  shape: string
  icon: string
  label: string
  text: string
  t: string
}

export function createElem(
  id: string,
  className: string,
  territory: Territory,
  appearance: Partial<Appearance>,
): SvgElem {
  const elem = new BasicElem(id, className, territory, appearance)
  if (elem.icon) {
    return VIcon.of(elem)
  } else if (elem.appearance.shape) {
    switch (elem.appearance.shape) {
      case "arrow":
        return new Arrow(elem, territory).arrow
      case "edge":
        return new Arrow(elem, territory).edge
      case "box":
        return Box.of(elem)
      case "cylinder":
        return new Cylinder(elem, territory).elem
      case "person":
        return new Person(elem, territory).elem
      case "pipe":
        return new Pipe(elem, territory).elem
      default:
        throw new Error("not implemented: " + elem.appearance.shape)
    }
  } else {
    return Box.of(elem)
  }
}

export interface Svg {
  styles: Styles
  size: Boundary
  elems: SvgElem[]
}

class BasicElem implements SvgElem {
  constructor(
    readonly id: string,
    readonly className: string,
    readonly territory: Territory,
    readonly appearance: Partial<Appearance>,
  ) {
    validateAppearance(appearance as Assigns)
  }

  get secureAttrs(): SecureSvgAttrs {
    const {x, y} = this.territory.start
    const {width, height} = this.territory.area
    const attrs = {
      id: this.id,
      class: this.className,
      x,
      y,
      width,
      height,
    }
    return SecureSvgAttrs.of(asString(attrs))
  }

  get visibility(): string | undefined {
    return this.appearance.visibility
  }
  get d(): undefined {
    return undefined
  }

  get icon(): string | undefined {
    return this.appearance.icon
  }

  get label(): TextElem | undefined {
    if (this.appearance.label) {
      return new TextElem(this.appearance.label, false, this.territory.start)
    }
    return undefined
  }

  get text(): TextElem | undefined {
    const text = this.appearance.text || this.appearance.t
    if (text) {
      const {padding} = this.territory.area
      const textPosition = this.territory.start.move(padding.left, padding.top)
      return new TextElem(text, false, textPosition)
    }
  }
}
