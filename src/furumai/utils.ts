import {parse} from '@/furumai/parser'
import {Story} from '@/furumai/Story'
import {convertSvg} from '@/rough/rougher'

export function toSvg(furumaiCode: string, rough: boolean, defaults: string): SVGElement[] | SyntaxError {
  const story = parse(furumaiCode)
  if (story instanceof Story) {
    const defaultConfig = parse(defaults) as Story
    const env = defaultConfig.baseEnv()
    const svgs = story.play(env)
    if (rough) {
      return svgs.map((s) => convertSvg(s))
    } else {
      return svgs
    }
  } else {
    return story
  }
}
