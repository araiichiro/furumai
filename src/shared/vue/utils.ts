import {parse} from '@/furumai/parser'
import {Story} from '@/furumai/setup/Story'
import {Group} from '@/shared/vue/Group'

export function vue(furumaiCode: string, defaults: string): Group[] | SyntaxError {
  const story = parse(furumaiCode)
  if (story instanceof Story) {
    const defaultConfig = parse(defaults) as Story
    const baseFrames = defaultConfig.baseFrames()
    const ret: Group[] = []
    for (const c of story.play(baseFrames)) {
      ret.push(c.vue())
    }
    return ret
  } else {
    return story
  }
}