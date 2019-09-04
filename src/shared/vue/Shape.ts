import {Box} from '@/layout/engine/Box'
import {TextContent} from 'src/shared/vue/TextContent'
import {SecureSvgAttrs} from 'src/shared/vue/SecureSvgAttrs'

export interface Shape {
  type: string
  id: string
  box: Box
  text: TextContent
  svgAttrs: SecureSvgAttrs
}
