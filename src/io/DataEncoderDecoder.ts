export interface DataEncoderDecoder<S, T> {
  formatVersion: string
  decode(encoded: S): T
  encode(decoded: T): S
}
