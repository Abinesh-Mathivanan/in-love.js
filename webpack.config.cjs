const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'in-love.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'in-love.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production',
};
