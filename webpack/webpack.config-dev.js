const path = require("path")
const webpack = require("webpack")

const PATHS = require("../src/js/paths.js");

const config = {
  entry: [PATHS.devServer + "/src/index.js"],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    host: "localhost",
    port: 2000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: PATHS.build,
    before: require(PATHS.js + '/routes')
  },
  output: {
    path: PATHS.build,
    filename: "main.js",
    library: "reactJsonView",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        include: [PATHS.js, PATHS.devServer]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}

module.exports = config
