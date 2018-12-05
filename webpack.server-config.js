const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "server.js"
  },
  externals: [nodeExternals()],
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  }
};
