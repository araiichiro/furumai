export interface Dict<T> {
  [key: string]: T
}

export type Attrs = Dict<string>

export function num(v?: any): number | undefined {
  return v ? Number(v) : undefined
}

export function asString(arg: any): {[key: string]: string} {
  return Object.keys(arg).reduce((obj, k) => {
    obj[k] = arg[k].toString()
    return obj
  }, {} as {[key: string]: string})
}
