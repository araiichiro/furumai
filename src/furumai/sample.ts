import {DataEncoderDecoderV1} from '@/codec/codec'

const sampleCode = `config { mode: snapshot; }
style {
  #kvs.node {
    shape: cylinder;
    padding: 18px 10px;
  }
  .group {
    label: '';
  }
}

group clients {
  c1;
  c2;
}

group kvs {
  s1;
  s2;
  s3;
  hinted_hand_off[shape='box', label='Hinted Hand Off'];
};

---
c1 -> s1 [
  t='write x=1\\n...',
  stroke-dasharray=4
];
c1 -> s2 [t='write x=1'];
s1[t='x=1'];
s2[t='x=1'];

---
c2[t='x=1'];
c2 -> s2 [t='read x=1'];
`

const codec = new DataEncoderDecoderV1()
export const formatVersion = codec.formatVersion
export const sampleFragment = codec.encode({version: 1, code: sampleCode, rough: false})
