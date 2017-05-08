module.exports = {
  entry: "./src/svg-render.ts",
  output: {
    filename: "./dist/svg-render.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
}