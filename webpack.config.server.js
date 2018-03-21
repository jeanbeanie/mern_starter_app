const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './server/index',
  ],
  target: 'node',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('server'),
      },
    }),
  ],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'app.js',
  },
};
