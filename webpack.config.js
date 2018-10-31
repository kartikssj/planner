const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
  target: "node",
  entry: {
    server: './src/server/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  node: {
    __dirname: true,
  },
  optimization: {
    minimize: false
  },
}, {
  target: "web",
  entry: {
    client: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/public'),
      to: path.resolve(__dirname, 'dist/public')
    }])
  ]
}];
