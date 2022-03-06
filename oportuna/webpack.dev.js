const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    },{ 
      test: /\.(png|jpg|gif)$/,
      use: [{
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                outputPath: 'public/',
                useRelativePaths: true
            }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'sass-loader',
        }]
      }], 
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 8081
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('url')
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    })
  ]
})
