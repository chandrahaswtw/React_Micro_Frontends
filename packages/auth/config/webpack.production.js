const {merge} =  require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./../package.json");

const prodConfig = {
    mode : "development",
    output: {
        filename : "[name].[contenthash].js",
        publicPath: "/auth/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name : "authREMOTE",
            filename: "AuthRemoteEntry.js",
            exposes: {
                "./showAuth" : "./src/bootstrap.js"
            }
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);