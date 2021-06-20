import {SecureSvgAttrs} from '@/style/security'
import {Location} from "@/layout/types";

export interface Shape {
  id: string
  class: string
  location: Location
  visibility: string
  shape: string
  icon: string
  label: string
  text: string
  svgAttrs: SecureSvgAttrs
}
