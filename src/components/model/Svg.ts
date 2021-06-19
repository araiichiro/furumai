import {Shape} from "@/components/model/Shape";
import {Size} from "@/layout/types";

export interface Svg {
  style: string
  size: Size
  shapes: Shape[]
  edges: Shape[]
}
