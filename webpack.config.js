var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  entry: {
    app: ["./example/src/main"],
    vendors: [
      "axios",
      "react",
      "react-cookie",
      "react-dom",
      "uuid",
      "lodash",
    ]
  },
  devtool: 'source-map',
  output: {
    path: __dirname + "/dist/",
    publicPath: '/mtest/',
    filename: "/bundle.js"
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin('vendors', '/vendors.js'),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  resolve: {
    alias: {},
    extensions: ["", ".js"] // allow require without extension
  },
  node: {
    "net": "mock",
    "dns": "mock"
  },
  module: {
    noParse: [],
    loaders: [

      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", query: {plugins: ['transform-runtime'], presets: ['react', 'es2015', 'stage-0']} },
      { test: /\.scss/, loader:'css-loader!sass-loader' },
      { test: /\.css/, loader:'css-loader' }
    ]
  }
};

module.exports = config;
