const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
        contentManager: "./src/js/content-manager.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "The Pythagorean Pizzaria",
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    output: {
        filename: "[name].main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        runtimeChunk: "single"
    },
};