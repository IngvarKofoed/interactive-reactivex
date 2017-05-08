var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: 'EntryPoint'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "dist"),
    stats: { colors: true }
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.    
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './static', from: "**.*", to: "./" }
    ])
  ]
}