const path = require('path')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'atguigu-utils.js',
    // filename: 'atguigu-utils.min.js',
    libraryTarget: 'umd',
    library: 'aUtils'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // 页面引入的全局变量
    }
  }
}
