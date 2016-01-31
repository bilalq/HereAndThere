/*eslint no-var: 0, prefer-arrow-callback: 0*/
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/tsp|places|atob*': {
      target: 'http://localhost:3000',
      secure: false
    }
  }
}).listen(3001, 'localhost', function (err, result) {
  console.log(result)
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3001')
})
