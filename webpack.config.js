const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "@articles": path.resolve(__dirname, "articles"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@history": path.resolve(__dirname, "src/history"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@style": path.resolve(__dirname, "src/style")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          },
          "img-loader"
        ]
      },
      {
        test: /\.ya?ml$/,
        use: ["json-loader", "yaml-loader"]
      }
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? "source-map" : false,
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  }
}
