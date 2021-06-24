import {Boundary, Territory} from '@/layout/types'
import {Assigns, asString, Styles} from '@/style/Style'
import {SecureSvgAttrs, validateAppearance} from '@/components/model/security'
import {VIcon} from '@/components/model/VIcon'
import {Box} from '@/components/model/Box'
import {Arrow} from '@/components/model/Arrow'
import {Cylinder} from '@/components/model/Cylinder'
import {TextElem} from '@/components/model/TextElem'
import {SvgElem} from '@/components/model/SvgElem'
import {Person} from '@/components/model/Person'
import {Pipe} from '@/components/model/Pipe'

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
  const elem = BasicElem.of(id, className, territory, appearance)
  if (appearance.icon) {
    return VIcon.of(elem)
  } else if (appearance.shape) {
    switch (appearance.shape) {
      case 'arrow':
        return new Arrow(elem, territory).arrow
      case 'edge':
        return new Arrow(elem, territory).edge
      case 'box':
        return Box.of(elem)
      case 'cylinder':
        return new Cylinder(elem, territory).elem
      case 'person':
        return new Person(elem, territory).elem
      case 'pipe':
        return new Pipe(elem, territory).elem
      default:
        throw new Error('not implemented: ' + appearance.shape)
    }
  } else {
    return Box.of(elem)
  }
}

export interface Svg {
  styles: string
  size: Boundary
  elems: SvgElem[]
}

class BasicElem implements SvgElem {
  public static of(
    id: string,
    className: string,
    territory: Territory,
    appearance: Partial<Appearance>,
  ): BasicElem {
    return new BasicElem(
      undefined,
      appearance.icon,
      BasicElem.label(territory, appearance) || BasicElem.idLabel(territory, id),
      BasicElem.attrs(id, className, territory),
      BasicElem.text(territory, appearance),
      appearance.visibility,
    )
  }

  public static attrs(id: string, className: string, territory: Territory): SecureSvgAttrs {
    const {x, y} = territory.start
    const {width, height} = territory.area
    const attrs = {
      id,
      class: className,
      x,
      y,
      width,
      height,
    }
    return SecureSvgAttrs.of(asString(attrs))
  }

  public static label(territory: Territory, appearance: Partial<Appearance>): TextElem | undefined {
    if (appearance.label) {
      return new TextElem(appearance.label, false, territory.start)
    }
    return undefined
  }

  public static idLabel(territory: Territory, id: string): TextElem | undefined {
    return new TextElem(id, false, territory.start)
  }

  public static text(territory: Territory, appearance: Partial<Appearance>): TextElem | undefined {
    const text = appearance.text || appearance.t
    if (text) {
      const {padding} = territory.area
      const textPosition = territory.start.move(padding.left, padding.top)
      return new TextElem(text, false, textPosition)
    }
    return undefined
  }

  constructor(
    readonly d: string | undefined,
    readonly icon: string | undefined,
    readonly label: TextElem | undefined,
    readonly secureAttrs: SecureSvgAttrs,
    readonly text: TextElem | undefined,
    readonly visibility: string | undefined,
  ) {
  }
}
