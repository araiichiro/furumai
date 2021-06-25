import {Area, AreaAttrs, Point, Territory, TerritoryMap} from '@/layout/types'
import {Assigns, Context, Styles, ContextMap} from '@/style/Style'
import {Appearance, createElem, Group} from '@/components/model/Svg'
import {SvgElem} from '@/components/model/SvgElem'
import {Box, LayoutStyle} from '@/layout/Engine'

export class Elem {

  get _appearance(): Partial<Appearance> {
    return this.appearance
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
    const appearance: Partial<Appearance> = {
      text: attrs.t,
      ...attrs,
    }
    const classNames = attrs.class ?
      [...attrs.class.split(' '), className] :
      [className]
    return new Elem(
      id,
      classNames,
      children,
      appearance,
      attrs as Partial<Layout>,
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
    return new Styled(
        this.id,
        this.classNames,
        {
          ...myStyles as Partial<Appearance>,
          ...this.appearance,
        },
        layoutStyle,
        area,
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

  public shape(territoryMap: TerritoryMap): Group {
    const classNames = [...this.classNames]
    const shape = this.appearance.shape
    if (shape) {
      classNames.push(shape)
    }
    const territory = territoryMap[this.id]
    const elem = createElem(
      this.id,
      classNames.join(' '),
      territory,
      this.appearance,
      this.children.length > 0,
    )
    const children = this.children.map((child) => child.shape(territoryMap))
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
