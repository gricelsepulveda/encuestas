const { resolve } = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  entry: {
    main: resolve('./src/index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: { 
          module: 'es6'
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: { 
            minimize: !isDevelopment 
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
                parser: "postcss-scss",
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|ttf|woff2|woff|eot)$/,
        loader: "file-loader",
        options: {
          name: "[hash].[name].[ext]",
          outputPath: "assets/"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

module.exports = config