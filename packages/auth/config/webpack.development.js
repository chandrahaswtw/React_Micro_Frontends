const {merge} =  require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./../package.json");

const devConfig = {
    mode : "development",
    output : {
        publicPath: 'http://localhost:7999/'
    },
    devServer: {
        port : 7999,
        historyApiFallback: {
            index: "/index.html"
        }
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

module.exports = merge(commonConfig, devConfig);