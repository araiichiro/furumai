import {Group} from "@/components/model/Group";

export interface Svg {
  style: string
  box: Box
  g: Group
}

export interface Box {
  x: number
  y: number
  width: number
  height: number
}
