import {SecureSvgAttrs} from '@/style/security'

export interface Shape {
  id: string
  type: string
  icon: string
  label: string
  text: string
  svgAttrs: SecureSvgAttrs
}
