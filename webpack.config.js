var Webpack = require('webpack');
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
      "simplecomponents"
    ]
  },
  devtool: "eval",
  output: {
    path: __dirname + "/dist/",
    filename: "/bundle.[hash].js"
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

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {plugins: ['transform-runtime'], presets: ['react', 'es2015', 'stage-0']} },
    ]
  }
};

module.exports = config;
