import {Attribute, ElementAttribute} from '@/furumai/Attribute'
import {BuildingBlock} from '@/furumai/setup/BuildingBlock'

export interface StatementList {
  readonly blocks: BuildingBlock[]
  readonly attributes: Attribute[]
  readonly childAttributes: ElementAttribute[]
}
