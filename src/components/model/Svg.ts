import {Boundary, Territory} from '@/layout/types'
import {SecureSvgAttrs} from '@/components/model/security'
import {VIcon} from '@/components/model/VIcon'
import {Box} from '@/components/model/Box'
import {Arrow, TextAttrs} from '@/components/model/Arrow'
import {Cylinder} from '@/components/model/Cylinder'
import {TextElem} from '@/components/model/TextElem'
import {SvgElem} from '@/components/model/SvgElem'
import {Person} from '@/components/model/Person'
import {Pipe} from '@/components/model/Pipe'
import {asString} from '@/style/Style'

export interface Svg {
  styles: string
  size: Boundary
  root: Group
}

export interface Group {
  elem: SvgElem
  children: Group[]
}

export class Shape {
  constructor(
    readonly territory: Territory,
    readonly appearance: Partial<Appearance>,
    readonly style: SvgStyle,
  ) {
  }
  public label(defaultLabel: string): TextElem | undefined {
    const appearance = this.appearance
    const territory = this.territory
    const attrs = this.style.labelAttrs
    if (appearance.label) {
      return new TextElem(appearance.label, false, territory.start, attrs)
    } else if (appearance.label === '') {
      return  undefined
    } else {
      return new TextElem(defaultLabel, false, territory.start, attrs)
    }
  }

  get text(): TextElem | undefined {
    const territory = this.territory
    const {padding} = territory.area
    const textPosition = territory.start.move(padding.left, padding.top)
    const text = this.appearance.text || this.appearance.t
    if (text) {
      return new TextElem(text, false, textPosition, this.style.textAttrs)
    } else {
      return undefined
    }
  }

  get attrs(): SecureSvgAttrs {
    const {x, y} = this.territory.start
    const {width, height} = this.territory.area
    const attrs = {
      ...this.style.shapeAttrs.svgAttrs,
      x,
      y,
      width,
      height,
    }
    return SecureSvgAttrs.of(asString(attrs))
  }

  public elem(id: string, className: string): SvgElem {
    return {
      className,
      d: undefined,
      icon: this.appearance.icon,
      id,
      label: this.label(id),
      secureAttrs: this.attrs,
      text: this.text,
      visibility: this.appearance.visibility,
    }
  }
}

export interface SvgStyle {
  labelAttrs: SecureSvgAttrs
  textAttrs: SecureSvgAttrs
  shapeAttrs: SecureSvgAttrs
}

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
  shape: Shape,
): SvgElem {
  if (shape.appearance.icon) {
    const elem = shape.elem(id, className)
    return VIcon.of(elem)
  } else if (shape.appearance.shape) {
    switch (shape.appearance.shape) {
      case 'box':
        const elem = shape.elem(id, className)
        return Box.of(elem)
      case 'cylinder':
        return new Cylinder(id, className, shape).elem
      case 'person':
        return new Person(id, className, shape).elem
      case 'pipe':
        return new Pipe(id, className, shape).elem
      default:
        throw new Error('not implemented: ' + shape.appearance.shape)
    }
  } else {
    const elem = shape.elem(id, className)
    return Box.of(elem)
  }
}

export function createArrow(
  id: string,
  className: string,
  shape: Shape,
  textAttrs: Partial<TextAttrs>,
): SvgElem {
  switch (shape.appearance.shape) {
    case 'arrow':
      return new Arrow(id, className, shape, textAttrs).arrow
    case 'edge':
      return new Arrow(id, className, shape, textAttrs).edge
    default:
      throw new Error('not implemented: ' + shape.appearance.shape)
  }
}

