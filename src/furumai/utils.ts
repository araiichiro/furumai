export interface Attrs {
  [key: string]: string
}

export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
}
