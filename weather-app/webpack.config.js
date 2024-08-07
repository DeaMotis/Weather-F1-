const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
       module: {
           rules: [
               {
                   test: /\.css$/,
                   use: [
                       'style-loader',
                       'css-loader',
                       {
                           loader: 'postcss-loader',
                           options: {
                               postcssOptions: {
                                   plugins: [
                                       require('autoprefixer'), // или другие плагины PostCSS
                                   ],
                               },
                           },
                       },
                   ],
               },
           ],
       },
   };
