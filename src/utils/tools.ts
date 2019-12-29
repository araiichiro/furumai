import {DataEncoderDecoderV1} from './types'

const fs = require('fs')
const codec = new DataEncoderDecoderV1()

function generateSnippet(dir: string, files: string[]) {
  files.forEach((filename: any) => {
    fs.readFile(`${dir}/${filename}`, 'utf8', (err: any, text: any) => {
      if (err) {
        throw err
      }
      const params1 = {
        code: text,
        animation: {
          active: true,
        },
      }
      const params = {
        version: 1,
        ...params1,
      }
      const iframe = `<DocSnippet
  filename="${dir}/${filename}"
  url="${codec.formatVersion}/${codec.encode(params)}"
></DocSnippet>
`
      console.log(iframe)
    })
  })
}

function generate(dir: string) {
  fs.readdir(dir, (err: any, files: any[]) => {
    if (err) {
      throw err
    } else {
      generateSnippet(dir, files.sort())
    }
  })
}

generate('./gallery/docs')
generate('./gallery/examples')
