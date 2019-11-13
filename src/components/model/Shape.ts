import {Box} from '@/layout/engine/Box'
import {TextContent} from '@/components/model/TextContent'
import {SecureSvgAttrs} from '@/components/model/SecureSvgAttrs'

export interface Shape {
  type: string
  id: string
  box: Box
  text: TextContent
  svgAttrs: SecureSvgAttrs
}