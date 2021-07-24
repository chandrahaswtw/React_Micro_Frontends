const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: 'http://localhost:8001/'
},
  devServer: {
    port: 8001,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        MarketingHost:
          "marketingRemote@http://localhost:8000/MarketingRemoteEntry.js",
        AuthHost: "authREMOTE@http://localhost:7999/AuthRemoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(common, devConfig);
