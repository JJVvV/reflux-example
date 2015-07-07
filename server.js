var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 3000;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, '192.168.1.107', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
