import {SecureSvgAttrs} from '@/style/security'
import {Area, Point} from "@/layout/types";

export interface Shape {
  id: string
  class: string
  base: Point
  area: Area
  visibility: string
  shape: string
  icon: string
  label: string
  text: string
  svgAttrs: SecureSvgAttrs
}
