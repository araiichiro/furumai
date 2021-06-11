import LZString from 'lz-string'

export interface Codec<S, T> {
  formatVersion: string

  decode(encoded: S): T

  encode(decoded: T): S
}

export class DataEncoderDecoderV1 implements Codec<string, Data> {
  public readonly formatVersion = 'v1'

  public decode(encoded: string): Data {
    const jsonString = LZString.decompressFromEncodedURIComponent(encoded)
    return JSON.parse(jsonString) as Data
  }

  public encode(decoded: Data): string {
    const d = JSON.stringify(decoded)
    return LZString.compressToEncodedURIComponent(d)
  }
}

export type Data = any
