import {DataEncoderDecoderV1} from '@/codec/codec'

const sampleCode = ``

const sampleCode0 = `group clients {
  c1;
  c2;
};

group kvs {
  node [shape='cylinder'];
  s1;
  s2;
  s3;
  hinted_hand_off[shape='box'];
};
---
c1 -> s1 [
  label='write x=1\\n...',
  'stroke-dasharray'='4'
];
c1 -> s2 [label='write x=1'];
s1[label='x=1'];
s2[label='x=1'];
---
c2[label='x=1'];
c2 -> s2 [label='read x=1'];
`

const codec = new DataEncoderDecoderV1()
export const formatVersion = codec.formatVersion
export const sampleFragment = codec.encode({version: 1, code: sampleCode, rough: false})
