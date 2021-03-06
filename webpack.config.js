const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "./dist/public"),
    filename: "bundle.js"
  },
  target: "web",
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
