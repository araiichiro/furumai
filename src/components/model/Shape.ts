import {TextContent} from '@/components/model/TextContent'
import {SecureSvgAttrs} from '@/style/security'

export interface Shape {
  type: string
  id: string
  box: Box
  text: TextContent
  svgAttrs: SecureSvgAttrs
}

export interface Box {
  x: number
  y: number
  width: number
  height: number
}
