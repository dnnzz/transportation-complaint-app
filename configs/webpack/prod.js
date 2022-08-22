// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const webpack = require("webpack");


const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  plugins: [new webpack.EnvironmentPlugin({
    NODE_ENV: 'production', // use 'development' unless process.env.NODE_ENV is defined
  })]
});
