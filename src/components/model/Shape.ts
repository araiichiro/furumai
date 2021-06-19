import {SecureSvgAttrs} from '@/style/security'

export interface Shape {
  id: string
  class: string
  visibility: string
  shape: string
  icon: string
  label: string
  text: string
  svgAttrs: SecureSvgAttrs
}
