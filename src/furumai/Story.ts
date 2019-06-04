import {Svg} from '@/svg/Svg';
import {Container} from '@/furumai/grid/Container';
import {StatementList} from '@/furumai/StatementList';
import {Frame} from '@/furumai/setup/Frame';
import {Portrait} from '@/layout/engine/Portrait';
import {Box} from '@/layout/engine/Box';
import {Attributes, Attrs} from '@/furumai/Attribute';

export class Story {
  constructor(private ss: StatementList[]) {}

  toSvg(layout: Container, refit: boolean): SVGElement {
    let fit = layout.map((a) => a.fit({x: 0, y: 0}))
    if (refit) {
      fit = fit.map((a) => a.fit({x: 0, y: 0}, {width: fit.get.box.width}))
    }
    const picture = fit.svg()
    const svg = Svg.of('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: fit.get.box.width.toString(),
      height: fit.get.box.height.toString(),
    })
    svg.appendChild(picture)
    return svg
  }

  private get mode() {
    const attrs = Attributes.of(this.ss[0].attributes)
    const {config, ...rest} = attrs.attrs
    const conf: Attrs = {}
    const cf = config || ''
    cf.split(',').forEach((line) => {
      const kv = line.split('=')
      conf[kv[0]] = kv[1]
    })
    return {
      mode: '_',
      align: '_',
      ...conf,
      ...rest
    }
  }

  public play(): SVGElement[] {
    const ret: SVGElement[] = []
    const base: Container = new Container('_init', {}, new Portrait([], Box.zero))
    let first = true // FIXME control flow
    const {mode, align} = this.mode // FIXME control flow
    this.ss.reduce((container, s) => {
      const frame = Frame.of(s.blocks, s.attributes, s.childAttributes)
      const layout = frame.setup(container)

      const fit = layout.map((a) => a.fit({x: 0, y: 0}))
      const refit = align === 'center' ? fit.map((a) => a.fit({x: 0, y: 0}, {width: fit.get.box.width})) : fit
      const picture = refit.svg()
      const svg = Svg.of('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: `0 0 ${refit.get.box.width} ${refit.get.box.height}`,
        width: (refit.get.box.width / 2).toString(),
        height: (refit.get.box.height / 2).toString(),
        'font-size': '24',
        // width: (refit.get.box.width).toString(),
        // height: (refit.get.box.height).toString(),
      })
      svg.appendChild(picture)
      ret.push(svg)

      if (mode === 'diff' || first) {
        first = false
        return layout
      } else {
        return container
      }
    }, base)

    const [firstSvg, ...rest] = ret
    return rest.length > 0 ? rest : [firstSvg]
  }
}
