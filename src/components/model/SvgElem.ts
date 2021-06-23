import {TextElem} from '@/components/model/TextElem'
import {SecureSvgAttrs} from '@/components/model/security'

export interface SvgElem {
  secureAttrs: SecureSvgAttrs
  visibility: string | undefined
  d: string | undefined
  icon: string | undefined
  label: TextElem | undefined
  text: TextElem | undefined
}
