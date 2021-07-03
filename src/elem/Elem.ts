import {AreaAttrs, TerritoryMap} from '@/layout/types'
import {Assigns, Context, deleteField, StyleList} from '@/style/Style'
import {Appearance, createElem, Group, Shape, SvgStyle} from '@/components/model/Svg'
import {Box, LayoutStyle} from '@/layout/Engine'
import {SecureSvgAttrs} from '@/components/model/security'

export class Elem {
  get _attrs(): Assigns {
    return this.attrs
  }

  get contextMap(): ContextMap {
    const m = Elem.retrieve(this)
    return new ContextMap(m)
  }

  public static of(
    id: string,
    className: string,
    attrs: Assigns = {},
    children: Elem[] = [],
  ): Elem {
    const classNames = attrs.class ?
      [...attrs.class.split(' '), className] :
      [className]
    return new Elem(
      id,
      classNames,
      children,
      // style as Partial<Appearance>,
      // style as Partial<Layout>,
      attrs,
    )
  }

  private static retrieve(elem: Elem, parent?: Context): {[key: string]: Context} {
    const context = {
      id:       elem.id,
      classNames: elem.classNames,
      parent,
    }
    return elem.children.reduce((ret, child) => {
      return {
        ...ret,
        ...Elem.retrieve(child, context),
      }
    }, {[elem.id]: context} as {[key: string]: Context})
  }

  private constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly children: Elem[],
    // private appearance: Partial<Appearance>,
    // private layout: Partial<Layout>,
    private attrs: Assigns,
  ) {
  }

  public find(id: string): Elem | undefined {
    if (this.id === id) {
      return this
    }
    return this.children.reduce((ret, elem) => {
      return ret || elem.find(id)
    }, undefined as Elem | undefined)
  }

  public update(other: Elem) {
    this.attrs = {
      ...this.attrs,
      ...other.attrs,
    }
    return this
  }

  public setVisibility(visibility: string) {
    this.attrs.visibility = visibility
  }

  public visible() {
    this.setVisibility('visible')
  }

  public hide() {
    this.setVisibility('hidden')
  }

  public resolveStyle(styles: StyleList, contextMap: ContextMap): StyleResolved {
    const context = contextMap.map[this.id]
    const myStyles = styles.query(context)
    const labelAttrs = styles.query({
      classNames: ['label'],
      parent: context,
    })
    const textAttrs = styles.query({
      classNames: ['text'],
      parent: context,
    })
    const shapeAttrs = {...myStyles, ...this.attrs}
    const elemStyle = ElemStyle.of(
      labelAttrs,
      textAttrs,
      shapeAttrs,
    )

    const children = this.children.reduce((ret, child) => {
      ret.push(child.resolveStyle(styles, contextMap))
      return ret
    }, [] as StyleResolved[])

    return StyleResolved.of(
      this.id,
      this.classNames,
      elemStyle,
      children,
    )
  }
}

class StyleResolved {
  public static of(
    id: string,
    classNames: string[],
    style: ElemStyle,
    children: StyleResolved[],
  ) {
    return new StyleResolved(
      id,
      classNames,
      style.shapeAttrs as Partial<Appearance>,
      style.shapeAttrs as Partial<LayoutStyle>,
      style.shapeAttrs as Partial<AreaAttrs>,
      style.toSvgStyle(),
      children,
    )
  }

  constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly appearance: Partial<Appearance>,
    readonly layoutStyle: Partial<LayoutStyle>,
    readonly area: Partial<AreaAttrs>,
    readonly svgStyle: SvgStyle,
    readonly children: StyleResolved[],
  ) {
  }

  public layoutBox(): Box {
    return Box.of(
      this.id,
      this.children.map((child) => child.layoutBox()),
      this.layoutStyle,
      this.area,
    )
  }

  public shape(territoryMap: TerritoryMap, includeStyle: boolean): Group {
    const shape = new Shape(
      territoryMap[this.id],
      this.appearance,
      includeStyle ? this.svgStyle : ElemStyle.empty.toSvgStyle(),
    )
    const elem = createElem(
      this.id,
      this.classNames.join(' '),
      shape,
    )
    const children = this.children.map((child) => child.shape(territoryMap, includeStyle))
    return {
      elem,
      children,
    }
  }
}

class ContextMap {
  constructor(readonly map: {[key: string]: Context}) {
  }

  public add(context: Context) {
    this.map[context.id] = context
  }
}

export class ElemStyle {
  public static empty: ElemStyle = ElemStyle.of({}, {}, {})

  public static of(
     labelAttrs: Assigns,
     textAttrs: Assigns,
     elemAttrs: Assigns,
  ): ElemStyle {
    return new ElemStyle(
      labelAttrs,
      textAttrs,
      elemAttrs,
    )
  }

  private static toSecure(attrs: Assigns): SecureSvgAttrs {
    const noSvgAttrs = [
      'flex-direction',
      'align-items',
      'justify-content',
      'padding',
      'margin',
      'shape',
      'icon',
      'label',
      'text',
      't',
      'text.dx',
      'text.dy',
    ]
    return SecureSvgAttrs.of(deleteField(attrs, noSvgAttrs))
  }

  constructor(
    readonly labelAttrs: Assigns,
    readonly textAttrs: Assigns,
    readonly shapeAttrs: Assigns,
  ) {
  }

  public toSvgStyle(): SvgStyle {
    return {
      labelAttrs: ElemStyle.toSecure(this.labelAttrs),
      textAttrs: ElemStyle.toSecure(this.textAttrs),
      shapeAttrs: ElemStyle.toSecure(this.shapeAttrs),
    }
  }

}
