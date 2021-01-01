const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

console.log('using proper configuration file', __dirname)
const baseDir = path.resolve(__dirname, '../src')

module.exports = {
   entry: path.join(baseDir, 'index.tsx'),
   plugins: [
      new webpack.ProgressPlugin(),
      new HTMLWebpackPlugin({
         template: path.join(baseDir, 'index.html')
      })
   ],

   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            include: [baseDir],
            exclude: [/node_modules/]
         },
         {
            test: /.(scss|css)$/,

            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ]
         }
      ]
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: [baseDir, 'node_modules']
   }
}
