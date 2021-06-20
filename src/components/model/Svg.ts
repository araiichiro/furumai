import {Shape} from "@/components/model/Shape";
import {Boundary} from "@/layout/types";

export interface Svg {
  style: string
  size: Boundary
  shapes: Shape[]
  edges: Shape[]
}
