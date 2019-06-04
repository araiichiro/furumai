import LZString from 'lz-string'
import {Data} from './Data'
import {DataEncoderDecoder} from './DataEncoderDecoder';

export class DataEncoderDecoderV1 implements DataEncoderDecoder<string, Data> {
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
