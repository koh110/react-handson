const webpack = require('webpack')
const port = 8080

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?/',
      'webpack/hot/only-dev-server',
      __dirname + '/src/index'
    ]
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    modules: ['client', 'node_modules'],
    extensions: ['.js', '.json']
  },
  devServer: {
    contentBase: __dirname + '/src/static',
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 8000,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env', {
                  targets: {
                    browsers: ['last 2 versions', '> 1%']
                  },
                  modules: false,
                  useBuiltIns: true
                }
              ],
              'stage-0',
              'react'
            ],
            'plugins': [
              'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
