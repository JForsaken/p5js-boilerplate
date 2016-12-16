const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      `${__dirname}/src/sketch`,
    ],
    vendor: [
      `${__dirname}/assets/p5.dom.js`,
      `${__dirname}/assets/p5.sound.js`,
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.ProvidePlugin({
      p5: 'p5',
    }),
    new CopyWebpackPlugin([
      { from: `${__dirname}/index.html` },
    ]),
  ],
  debug: true,
  devtool: 'source-map',
  module: {
    noParse: [
      /node_modules\/p5\/lib\/p5.js/,
    ],
    loaders: [
      {
        loader: 'babel-loader',
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
        // Options to configure babel with
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
};
