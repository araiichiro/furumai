import {parse} from '@/furumai/parser'
import {Story} from '@/furumai/Story'

export function toSvg(furumaiCode: string, defaults: string): SVGElement[] | SyntaxError {
  const story = parse(furumaiCode)
  if (story instanceof Story) {
    const defaultConfig = parse(defaults) as Story
    const env = defaultConfig.baseEnv()
    return story.play(env)
  } else {
    return story
  }
}
