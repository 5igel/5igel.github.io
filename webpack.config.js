var path = require("path");
var webpack = require("webpack");
module.exports = {
    cache: true,
    entry: {
        app: "./src/js/main.js"
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
