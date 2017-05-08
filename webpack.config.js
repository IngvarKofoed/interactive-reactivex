var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = {
  entry: "./src/svg-render.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "svg-render.js"
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "dist")
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