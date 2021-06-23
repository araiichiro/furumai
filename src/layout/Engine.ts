import {Length, Point, Boundary} from '@/layout/types'
import {Style} from '@/layout/Style'
import {Box} from '@/layout/Box'

export class Engine {
  constructor(readonly config: Config) {
  }

  public fit(children: Box[], style: Style): Boundary {
    if (style['justify-content'] !== 'space-around') {
      throw new Error('not implemented')
    }
    const direction = this.direction(style)
    if (direction === 'row') {
      return children.reduce((ret, child) => {
        const base = new Point(ret.width, Length.zero)
        const area = child.fit(this, base)
        const {width, height} = area.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
    } else if (direction === 'column') {
      return children.reduce((ret, child) => {
        const base = new Point(Length.zero, ret.height)
        const area = child.fit(this, base)
        const {width, height} = area.totalSize
        return new Boundary(
          Length.max(ret.width, width),
          ret.height.add(height),
        )
      }, Boundary.zero)
    } else {
      throw new Error('not implemented')
    }
  }

  public refit(children: Box[], style: Style, boundary: Boundary) {
    if (style['justify-content'] === 'start') {
      return
    } else if (style['justify-content'] !== 'space-around') {
      throw new Error('not implemented')
    }
    const direction = this.direction(style)
    if (direction === 'row') {
      const content = children.reduce((ret, child) => {
        const {width, height} = child.totalSize
        return new Boundary(
          ret.width.add(width),
          Length.max(ret.height, height),
        )
      }, Boundary.zero)
      const gap = boundary.diff(content).width.div(2 * children.length)
      children.reduce((left, child) => {
        const size = new Boundary(
          gap.add(child.totalSize.width).add(gap),
          boundary.height,
        )
        child.refit(this, new Point(left, Length.zero), size)
        return left.add(size.width)
      }, Length.zero)
    } else if (direction === 'column') {
      const content = children.reduce((ret, child) => {
        const {width, height} = child.totalSize
        return new Boundary(
          Length.max(ret.width, width),
          ret.height.add(height),
        )
      }, Boundary.zero)
      const gap = boundary.diff(content).height.div(2 * children.length)
      children.reduce((top, child) => {
        const size = new Boundary(
          boundary.width,
          gap.add(child.totalSize.height).add(gap),
        )
        child.refit(this, new Point(Length.zero, top), size)
        return top.add(size.height)
      }, Length.zero)
    } else {
      throw new Error('not implemented')
    }
  }

  private direction(style: Style): 'row' | 'column' {
    switch (this.config.orientation) {
      case 'portrait':
        return style['flex-direction']
      case 'landscape':
        if (style['flex-direction'] === 'row') {
          return 'column'
        } else if (style['flex-direction'] === 'column') {
          return 'row'
        } else {
          throw new Error('not implemented')
        }
      default:
        throw new Error('not implemented')
    }
  }
}

export interface Config {
  orientation: Orientation
}

export type Orientation = 'portrait' | 'landscape'
