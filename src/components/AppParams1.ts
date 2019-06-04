export default interface AppParams {
  code: string
  editor?: {
    viewer?: boolean
    focus?: boolean
  }
  animation?: {
    active?: boolean
    speed?: number
  }
}
