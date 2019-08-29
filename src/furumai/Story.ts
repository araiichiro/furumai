import {Svg} from '@/svg/Svg'
import {Container} from '@/furumai/grid/Container'
import {StatementList} from '@/furumai/StatementList'
import {Frame} from '@/furumai/setup/Frame'
import {Portrait} from '@/layout/engine/Portrait'
import {Box} from '@/layout/engine/Box'
import {Attributes, Attrs, toDict} from '@/furumai/Attribute'
import {Env} from '@/furumai/setup/Env'

export class Story {
  constructor(private ss: StatementList[]) {
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
      ...rest,
    }
  }

  public play(env: Env): SVGElement[] {
    const ret: SVGElement[] = []

    let first = true // FIXME control flow
    const {mode, align} = this.mode // FIXME control flow
    this.ss.reduce((container, s) => {
      const frame = Frame.of(s.blocks, s.attributes, s.childAttributes)
      const layout = frame.setup(env.update(container))

      const fit = layout.map((a) => a.fit({x: 0, y: 0}))
      const refit = align === 'center' ? fit.map((a) => a.fit({x: 0, y: 0}, {width: fit.get.box.width})) : fit
      const picture = refit.svg()
      const svg = Svg.of('svg', {
        viewBox: `0 0 ${refit.get.box.width} ${refit.get.box.height}`,
        width: (refit.get.box.width / 2).toString(),
        height: (refit.get.box.height / 2).toString(),
      })
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      svg.appendChild(picture)
      ret.push(svg)

      if (mode === 'diff' || first) {
        first = false
        return layout
      } else {
        return container
      }
    }, env.container)
    return ret
  }

  public baseEnv(): Env {
    const base: Container = new Container('_init', {}, new Portrait([], Box.zero))
    return this.ss.map((s) => Env.of(base, toDict(s.childAttributes)))[0]
  }
}
