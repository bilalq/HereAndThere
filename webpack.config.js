/*eslint no-var:0 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread&plugins[]=transform-decorators-legacy&plugins[]=transform-es2015-destructuring'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }],
    sassLoader: {
      includePaths: [path.resolve(__dirname, './styles')]
    }
  }
}
