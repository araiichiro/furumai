export interface Wrap<T> {
  get: T
  map(f: (t: T) => T): Wrap<T>
}
