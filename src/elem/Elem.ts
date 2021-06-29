import {AreaAttrs, TerritoryMap} from '@/layout/types'
import {Assigns, Context, ContextMap, Styles} from '@/style/Style'
import {Appearance, createElem, Group} from '@/components/model/Svg'
import {Box, LayoutStyle} from '@/layout/Engine'

export class Elem {
  static noSvgAttrs = [
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
  ]

  get _appearance(): Partial<Appearance> {
    return this.appearance
  }

  get _svgAttrs(): Assigns {
    return this.svgAttrs
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
      attrs as Partial<Appearance>,
      attrs as Partial<Layout>,
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
    private appearance: Partial<Appearance>,
    private layout: Partial<Layout>,
    private svgAttrs: Assigns,
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
    this.appearance = {
      ...this.appearance,
      ...other.appearance,
    }
    this.layout = {
      ...this.layout,
      ...other.layout,
    }
    this.svgAttrs = {
      ...this.svgAttrs,
      ...other.svgAttrs,
    }
    return this
  }

  public setVisibility(visibility: string) {
    this.appearance.visibility = visibility
  }

  public visible() {
    this.setVisibility('visible')
  }

  public hide() {
    this.setVisibility('hidden')
  }

  public styled(styles: Styles, contextMap: ContextMap): Styled {
    const myStyles = styles.query(contextMap.map[this.id])
    const appearance: Partial<Appearance> = {
      ...myStyles,
      ...this.appearance,
    }
    const layoutStyle: Partial<LayoutStyle> = {
      ...myStyles,
    }
    const area: Partial<AreaAttrs> = {
      ...myStyles,
      ...this.layout,
    }
    const children = this.children.reduce((ret, child) => {
      ret.push(child.styled(styles, contextMap))
      return ret
    }, [] as Styled[])

    const svgAttrs = {...myStyles, ...this.svgAttrs}
    Elem.noSvgAttrs.forEach((attr) => delete svgAttrs[attr])

    return new Styled(
      this.id,
      this.classNames,
      appearance,
      layoutStyle,
      area,
      svgAttrs,
      children,
    )
  }
}

export class Styled {
  constructor(
    readonly id: string,
    readonly classNames: string[],
    readonly appearance: Partial<Appearance>,
    readonly layoutStyle: Partial<LayoutStyle>,
    readonly area: Partial<AreaAttrs>,
    readonly svgAttrs: Assigns,
    readonly children: Styled[],
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
    const territory = territoryMap[this.id]
    const elem = createElem(
      this.id,
      this.classNames.join(' '),
      territory,
      this.appearance,
      includeStyle ? this.svgAttrs : {},
      {
        hasChildren: this.children.length > 0,
      },
    )
    const children = this.children.map((child) => child.shape(territoryMap, includeStyle))
    return {
      elem,
      children,
    }
  }
}

interface Layout {
  width: string
  height: string
}
