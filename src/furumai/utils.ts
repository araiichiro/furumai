export interface Dict<T> {
  [key: string]: T
}

export type Attrs = Dict<string>

export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
}
