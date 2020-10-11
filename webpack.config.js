var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'main.js'
  },
  module : {
    rules : [
      { test : /\.(js)$/, use:'babel-loader' },
      { test : /\.css$/, use:['style-loader', 'css-loader']},
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader' }
    ]
  },
  mode:'development',
  plugins : [
    new HtmlWebpackPlugin ({
      template : 'index.html'
    })
  ]
}
