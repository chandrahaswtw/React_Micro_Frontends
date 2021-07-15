const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJSON = require("./../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const prodConfig = {
    mode : "production",
    output: {
        filename : "[name].[contenthash].js"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketingRemote",
            filename: "MarketingRemoteEntry.js",
            exposes: {
              "./showMarketing": "./src/bootstrap.js",
            },
            shared : packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
