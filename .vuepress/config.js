const path = require('path')

module.exports = {
  base: '/furumai/docs/',
  title: 'Furumai',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Furumai',
      description: 'Furumai: Behavior description tool'
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'Furumai',
      description: 'Furumai: Behavior description tool'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, '../src')
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
  head: [
    ['meta', {name: 'og:image', content: '/furumai/docs/og.png'}]
  ]
}
