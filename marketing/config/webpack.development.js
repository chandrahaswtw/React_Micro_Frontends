const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketingRemote",
      filename: "MarketingRemoteEntry.js",
      exposes: {
        "./showMarketing": "./src/bootstrap.js",
      },
      shared : packageJSON.dependencies
    }),
  ],
};

module.exports = merge(common, devConfig);
