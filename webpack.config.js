const nodeExternals = require("webpack-node-externals");
const path = require("path");

const loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: "babel",
    query: {
      presets: ["es2015", "react"]
    }
  }
];

const client = {
  entry: "./src/clients.js",
  output: {
    path: path.resolve(__dirname, "/dist/public"),
    filename: "bundle.js"
  },
  module: { loaders }
};

const server = {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "server.js"
  },
  module: { loaders },
  externals: [nodeExternals()]
};

module.exports = [client, server];
