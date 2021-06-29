import {Boundary, Territory} from '@/layout/types'
import {Assigns, asString} from '@/style/Style'
import {SecureSvgAttrs} from '@/components/model/security'
import {VIcon} from '@/components/model/VIcon'
import {Box} from '@/components/model/Box'
import {Arrow, ArrowOptions} from '@/components/model/Arrow'
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

export interface ElemOptions extends ArrowOptions {
  hasChildren: boolean
}

export function createElem(
  id: string,
  className: string,
  territory: Territory,
  appearance: Partial<Appearance>,
  svgAttrs: Assigns,
  options: Partial<ElemOptions>,
): SvgElem {
  const elem = BasicElem.of(id, className, territory, appearance, svgAttrs)
  if (appearance.icon) {
    return VIcon.of(elem)
  } else if (appearance.shape) {
    switch (appearance.shape) {
      case 'arrow':
        return new Arrow(elem, territory, options).arrow
      case 'edge':
        return new Arrow(elem, territory, options).edge
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
    if (!options.hasChildren) {
      elem.secureAttrs.svgAttrs.class += ' box'
    }
    return Box.of(elem)
  }
}

export interface Group {
  elem: SvgElem
  children: Group[]
}

export class SingleGroup implements Group {
  children: Group[] = []
  constructor(
    readonly elem: SvgElem
  ) {
  }
}

export interface Svg {
  styles: string
  size: Boundary
  root: Group
}

class BasicElem implements SvgElem {
  public static of(
    id: string,
    className: string,
    territory: Territory,
    appearance: Partial<Appearance>,
    svgAttrs: Assigns,
  ): BasicElem {
    return new BasicElem(
      id,
      className,
      undefined,
      appearance.icon,
      BasicElem.label(territory, appearance, id),
      BasicElem.attrs(territory, svgAttrs),
      BasicElem.text(territory, appearance),
      appearance.visibility,
    )
  }

  public static attrs(territory: Territory, svgAttrs: Assigns): SecureSvgAttrs {
    const {x, y} = territory.start
    const {width, height} = territory.area
    const attrs = {
      ...svgAttrs,
      x,
      y,
      width,
      height,
    }
    return SecureSvgAttrs.of(asString(attrs))
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

  private static label(territory: Territory, appearance: Partial<Appearance>, id: string): TextElem | undefined {
    if (appearance.label) {
      return new TextElem(appearance.label, false, territory.start)
    } else if (appearance.label === '') {
      return  undefined
    } else {
      return new TextElem(id, false, territory.start)
    }
  }

  constructor(
    readonly id: string,
    readonly className: string,
    readonly d: string | undefined,
    readonly icon: string | undefined,
    readonly label: TextElem | undefined,
    readonly secureAttrs: SecureSvgAttrs,
    readonly text: TextElem | undefined,
    readonly visibility: string | undefined,
  ) {
  }
}
