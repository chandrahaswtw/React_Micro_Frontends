const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./../package.json");

const domainName = process.env.DOMAIN_NAME;

const prodConfig = {
    mode: "production",
    output: {
        filename : '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins : [
        new ModuleFederationPlugin({
            name : "container",
            remotes : {
                MarketingHost: `marketingRemote@${domainName}/marketing/latest/MarketingRemoteEntry.js`,
                AuthHost: "authREMOTE${domainName}/auth/latest/AuthRemoteEntry.js",
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);