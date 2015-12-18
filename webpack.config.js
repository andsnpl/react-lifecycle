var path = require('path');

module.exports = {
  entry: [ path.resolve('./js/app.js'),
           'webpack-dev-server/client?http://localhost:8090' ],
  output: {
    path: path.resolve('./js/build'),
    filename: 'app.min.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'stage-1', 'es2015']
        },
        include: path.resolve('js/') } ]
  },
  devtool: 'source-map'
};
