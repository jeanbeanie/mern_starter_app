const webpack = require('webpack');

module.exports = options => {
  return {
    entry: './src/browser.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js',
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        {
          test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader : 'file-loader'
        },
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },

        {
          test: /\.(css)$/,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles SASS to CSS
          }]
        },
      ],
    },



    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Util: 'exports-loader?Util!bootstrap/js/dist/util',
        Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      })
    ]
  };
};
