import {TextContent} from '@/components/model/TextContent'
import {SecureSvgAttrs} from '@/style/security'

export interface Shape {
  id: string
  // box: Box
  type: string
  icon: string
  label: string
  text: string
  svgAttrs: SecureSvgAttrs
}
