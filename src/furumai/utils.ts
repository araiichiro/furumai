import {parse} from '@/furumai/parser'
import {Story} from '@/furumai/Story'
import {convertSvg} from '@/rough/rougher'

export function toSvg(furumaiCode: string, rough: boolean): SVGElement[] | SyntaxError {
  const story = parse(furumaiCode)
  if (story instanceof Story) {
    const svgs = story.play()
    if (rough) {
      return svgs.map((s) => convertSvg(s))
    } else {
      return svgs
    }
  } else {
    return story
  }
}
