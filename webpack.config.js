var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/svg-render.ts",
  output: {
    filename: "./dist/svg-render.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './static', from: "**.*", to: "./dist" }
    ])
  ]
}